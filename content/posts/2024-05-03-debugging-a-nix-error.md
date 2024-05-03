---
title: Debugging a Nix Error
date: 2024-05-03
excerpt: Today I debugged a perplexing Nix issue.
---
I'm hunting for _my_ perfect web application language (sure to be a future post). So I've been exploring OCaml. I prefer Nix for configuring development environments. It keeps things self-contained and increases the chances that I won't have painful setup issues when I revisit projects months or years later. 

I created a `flake.nix` that configured OCaml and used [ocaml-overlay](https://github.com/nix-ocaml/nix-overlays) to add [Dream](https://aantron.github.io/dream/) to my development environment:

```nix
{
  description = "Expiments in ocaml";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
    ocaml-overlay = {
      url = "github:nix-ocaml/nix-overlays";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = inputs@{ self, nixpkgs, flake-parts, ocaml-overlay, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [ "aarch64-darwin" "x86_64-linux" "aarch64-linux" ];

      perSystem = { pkgs, system, inputs', ... }: {
        _module.args.pkgs = import inputs.nixpkgs {
          inherit system;
          config.allowUnfree = true;
          overlays = [
            ocaml-overlay.overlays.default
          ];
        };

        packages = { };
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            ocaml
            ocamlPackages.dune_3
            ocamlPackages.findlib
            ocamlPackages.ocamlformat
            ocamlPackages.ocaml-lsp
            ocamlPackages.utop

            ocamlPackages.dream
            ocamlPackages.dream-html
          ];
        };
      };
    };
}
```

This got me up and running until I wanted to use the [live reload](https://aantron.github.io/dream/#val-livereload) functionality described in the published documentation. Unfortunately, this feature is only present on [main](https://github.com/aantron/dream) not the [1.0.0.0-alpha5](https://github.com/aantron/dream/releases/tag/1.0.0-alpha5) release present in OPAM and ocaml-overlay. 

I created an overlay to update `dream` to use the code on`main`.

```nix
self: super: {
  ocamlPackages = super.ocamlPackages // rec {
    dream-pure = super.ocamlPackages.dream-pure.overrideAttrs (old: {
      version = "1.0.0-78c79e3328414768fa2ede0623d741f63ea5c4f1";
      src = super.fetchFromGitHub {
        owner = "aantron";
        repo = "dream";
        rev = "78c79e3328414768fa2ede0623d741f63ea5c4f1";
        hash = "sha256-mx0DAzu8L0jVCMrCvefVLPZX3E+C8SUv9wjcqZcG29Q=";
        fetchSubmodules = true;
        leaveDotGit = false;
        deepClone = false;
      };
    });

    dream = super.ocamlPackages.dream.overrideAttrs (old: {
      inherit (dream-pure) src version;

      propagatedBuildInputs = with self.ocamlPackages;
        old.propagatedBuildInputs ++ [ markup lambdasoup ];

      prePatch = "";
    });
}
```

This was a tad more complicated than expected. The `dream` derivation gets its source from the `dream-pure` derivation. So I updated that and changed the reference in `dream` accordingly. So far so good.

Next I wanted to try out [Dream_html](https://github.com/yawaramin/dream-html). However, upon adding this to `flake.nix` ocaml failed to compile indicating that there were two versions of `dream` present. 

```sh
❯ nix develop
warning: Git tree '/Users/bromanko/Code/ocaml' is dirty
error: builder for '/nix/store/48x8ixc5gkxv1jwp67phbyrmg8zfqr5i-nix-shell-env.drv' failed with exit code 1;
       last 3 log lines:
       > Conflicting ocaml packages detected
       > findlib: [WARNING] Package dream has multiple definitions in /nix/store/34v2r793d12zpi5xbx76qwh887c1yh8q-ocaml5.1.1-dream-1.0.0-alpha5/lib/ocaml/5.1.1/site-lib/dream/META, /nix/store/ybmsg15f5r0lbcijnw9m031zzyaad78l-ocaml5.1.1-dream-1.0.0-alpha5/lib/ocaml/5.1.1/site-lib/dream/META
       > Set dontDetectOcamlConflicts to true to disable this check.
       For full logs, run 'nix log /nix/store/48x8ixc5gkxv1jwp67phbyrmg8zfqr5i-nix-shell-env.drv'.
```

Looking at the [dream-html derivation](https://github.com/nix-ocaml/nix-overlays/blob/a4f4eb5f0974307b39be2316596779db1a98ef0e/ocaml/dream-html/default.nix#L14) in `emacs-overlay` I could see that I'd need to override it to add the reference to my updated version of `dream`. 

```nix
    # Prior overlay code elided...

    dream-html = super.ocamlPackages.dream-html.overrideAttrs
      (old: { propogatedBuildInputs = [ dream ]; });
```

And... it didn't work. I got the same error that there were two conflicting `dream` packages. Where was that other, original version, coming from? And how could I debug this since the configuration is all in a `devShell`?

Today I learned that you can build a devShell with `nix build`:

```bash
❯ nix build -L .#devShells.aarch64-darwin.default`
```

I added some debug logging to the overlays to try and sort out where the dependency was coming from:

```nix
    dream-html = super.ocamlPackages.dream-html.overrideAttrs (old: {
      prePatch = ''
        echo "####################### building dream-html..."
        ocamlfind query dream
        echo "My dream path ${dream}"
        echo "Original dream path ${super.ocamlPackages.dream}"
      '';
      propogatedBuildInputs = [ dream ];
    });
```

The `dream-html` overlay is still referencing the original version of `dream` rather than using my overlay. 

```bash
❯ nix build -L .#devShells.aarch64-darwin.default
warning: Git tree '/Users/bromanko/Code/ocaml' is dirty
ocaml5.1.1-dream-html> Running phase: unpackPhase
ocaml5.1.1-dream-html> unpacking source archive /nix/store/d4x42dv5g9l4nfgkhix53nwjzxqadpdk-source
ocaml5.1.1-dream-html> source root is source
ocaml5.1.1-dream-html> Running phase: patchPhase
ocaml5.1.1-dream-html> ####################### building dream-html...
ocaml5.1.1-dream-html> /nix/store/ybmsg15f5r0lbcijnw9m031zzyaad78l-ocaml5.1.1-dream-1.0.0-alpha5/lib/ocaml/5.1.1/site-lib/dream
ocaml5.1.1-dream-html> My dream path /nix/store/dxi13p10n42xy6rwxhcpmb7d89c8cy8s-ocaml5.1.1-dream-1.0.0-alpha5
ocaml5.1.1-dream-html> Original dream path /nix/store/ybmsg15f5r0lbcijnw9m031zzyaad78l-ocaml5.1.1-dream-1.0.0-alpha5
ocaml5.1.1-dream-html> Running phase: updateAutotoolsGnuConfigScriptsPhase
ocaml5.1.1-dream-html> Running phase: configurePhase
ocaml5.1.1-dream-html> no configure script, doing nothing
ocaml5.1.1-dream-html> Running phase: buildPhase
ocaml5.1.1-dream-html> Running phase: installPhase
ocaml5.1.1-dream-html> Running phase: fixupPhase
ocaml5.1.1-dream-html> checking for references to /private/tmp/nix-build-ocaml5.1.1-dream-html-1.1.0.drv-0/ in /nix/store/g5ng1if7nkgf5fgk8nja575mpzgvsdqn-ocaml5.1.1-dream-html-1.1.0...
ocaml5.1.1-dream-html> patching script interpreter paths in /nix/store/g5ng1if7nkgf5fgk8nja575mpzgvsdqn-ocaml5.1.1-dream-html-1.1.0
ocaml5.1.1-dream-html> stripping (with command strip and flags -S) in  /nix/store/g5ng1if7nkgf5fgk8nja575mpzgvsdqn-ocaml5.1.1-dream-html-1.1.0/lib
nix-shell> Running phase: buildPhase

```

Oh my.

Do you see it?

😮‍💨

I can't spell propagated...