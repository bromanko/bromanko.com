---
title: "Agentic Coding Ep. 1: System Overview"
date: 2026-02-18
draft: false
series: Agentic Coding
---

This is the first in a series of posts where I walk through my agentic coding setup. In this episode I give a high-level overview of my stack — the tools, how they fit together, and why I've landed on this particular combination.

{{< youtube I88mEkbISF4 >}}

## Links

- [My Nix configuration](https://github.com/bromanko/nix-config/tree/main) — Nix configuration for the Lima VM and my other hosts
- [Lima](https://lima-vm.io/) — Dev VM creation
- [Secret proxy](https://github.com/bromanko/nix-config/tree/main/configs/secret-proxy) — The secret proxy I use to inject secrets into the VM
- [Sprites](https://sprites.dev/) — A hosted sandbox option
- [Jujutsu](https://www.jj-vcs.dev/latest/) — Alternative VCS compatible with Git
- [Pi](https://pi.dev/) — A wonderful agentic coding harness

<!--more-->

## Transcript

### Why This Series

A couple of people at work asked how I'm doing my own agentic development. I find that there isn't a ton of information out there — what exists is scattered, and I haven't really seen anyone describe an end-to-end setup. That's what I'm trying to do here.

I don't actually watch a ton of video content myself, so it's a little ironic that I'm producing a video series. But it felt like video would be the easiest way to convey a workflow that's really hard to describe in text.

The series is going to cover my setup, the tools I use, and some techniques that I've found helpful. I'm sure pretty much all of this will be out of date in three months, so we'll see how durable any of it is. Today's video is focused on a high-level overview; later videos will get into specific components.

I do want to clarify that a lot of what I'm showing has worked for me on solo projects that I'm building in my spare time — experimenting or scratching personal itches for software I'd like to see exist. I apply some of this to my work, but obviously the scale of Dropbox is significantly different from a solo or small team environment. If the series proves useful and I'm able to share, I'll talk about how I've been applying this at work. But some of these practices aren't going to be directly applicable to a larger environment.

### A Note on Security

Agentic security is incredibly immature right now. Everyone has been racing toward getting value out of models and hasn't focused as much on how we secure these environments. Prompt injection mitigations aren't really solved. There are a ton of sandboxing solutions developing — some baked into tools like the Claude CLI harness — but many are also immature and easy to circumvent.

What I'm showing here fits a threat model that I'm comfortable with. Your risk tolerance may be higher or lower than mine. There is no one-size-fits-all solution. I'll include links to some of the techniques and tools I'm using. If you want to discuss any of this, feel free to reach out — agentic security is something I'm particularly interested in.

### Development Environment

My primary dev machine is an M2 MacBook Air. I've been using it for several years now. I do all of my development on this machine inside of a virtual machine. I'm using a piece of software called Lima, which provides Linux-based virtual machines running on ARM Macs. On a MacBook Air or MacBook Pro I get near-native performance, so I don't do any of my development directly on the macOS host.

Lima provides a way to define a declarative configuration for the VM. I'm running NixOS as the operating system inside the VM because I really like configuration as code and the declarative nature of it. I can treat my entire VM environment as disposable — if I run into issues or feel something's been compromised, I just erase it and spin up a new one from scratch. It only takes a few minutes to provision.

You can find my config on GitHub in my nix-config repo. There's a `lima-dev.yaml` file — the YAML configuration for the Lima VM that provisions NixOS, installs Determinate Nix, and references the Flake configuration for the machine. This repo actually has all of my Nix configurations for all of my machines: my MacBook, a Mac Mini I use for server hosting, everything. Whenever I make changes I run a single command on the machine to reapply my configuration and push it up to GitHub.

### Why a VM Over Alternatives

What I really like about running in a VM is the isolation it gives me. I did consider other options — containers, hosted sandbox environments like Sprites from Fly. Sprites is something I was particularly interested in.

The reason I settled on a VM is honestly just ergonomics. Sprites is really clever, but if I close my laptop and reopen it, I have to worry about reconnecting and reattaching to running processes. These environments spin down to zero to save cost, which is great, but that means there's a cold start problem when you reconnect. The little bits of latency and disruptions throughout the day started to get annoying. With a dev VM there's no disconnection or reconnection. Everything feels basically native speed and I don't suffer any performance consequences on the host either. A dev VM is a very simple, ergonomic solution.

### Security Setup

In terms of VM security, I handle things somewhat uniquely. First, I don't mount any host volumes into the VM — I keep complete file system isolation between the two. With agentic software development I don't find myself needing to manually edit source code anymore, so I just don't bother with host mounts.

I do port forwarding so the VM's ports are accessible from the host. If I'm running a development server inside the VM I can test it from my host machine, pull it up in a browser, and poke around.

I also maintain SSH agent forwarding so that from the VM I can access my SSH agent on the host machine. This is maybe a somewhat unique setup: I don't persist any of my SSH keys on disk. They're all stored inside 1Password. So when I perform an operation that requires SSH — say a `git fetch` against an SSH-backed origin — it pops up and asks for my 1Password credentials. While 1Password is unlocked these operations work, but as soon as it locks, I have to authenticate again. Typically when my laptop is open I use Touch ID.

### The Secret Proxy

Another thing I do with the dev VM is prevent any secrets from being included in the environment. Oftentimes you'll have an application configured with keys for third-party services. One of the projects I'm working on right now connects to Gemini and needs an API key for inference. If you look at the environment variable for the Gemini key, you'll see just a placeholder sentinel value.

What I do is run a proxy server on my macOS host. It intercepts and man-in-the-middles all the TLS traffic, looking for a specific set of headers and keys. While the request is in transit, it replaces the sentinel value with the actual secret stored in 1Password. The proxy only performs this replacement when the request is being sent to specific hosts, which prevents mirroring attacks.

I used to run a more hardened network proxy for the dev VM that only allowed specific domains. I found this created a lot of overhead and paper cuts — I'd try an operation with a package manager, a request would timeout because the proxy was blocking it, I'd allow-list it. This cycle wasn't particularly useful. Instead I've focused on reducing or eliminating sensitive data inside the VM so that leakage is less of a risk, and I removed the overhead of maintaining proxy allow-lists.

Because I'm running in this sandboxed environment, I run all of my agent operations without manual confirmation. The coding harness I use these days is Pi, and one of its main propositions is that it does not ask for confirmation before performing actions. This is similar to running Claude in YOLO mode or Codex in dangerously-skip-permissions mode — it's just Pi's default. Because of that, I want to make sure the environment is as safe as possible. It's entirely possible that the agent will `cat` the contents of an RC file, accidentally slurp up secrets, and return them as part of an inference call. Running in a clean environment means I don't have to worry about that.

### Day-to-Day Workflow

My day-to-day operation happens entirely inside the VM. I use tmux as my primary interface. I maintain one tmux session per project — for example, `nix-config` for my system configuration, `llm-agents` for a repository where I centralize agent skills and extensions, and then whatever other projects I'm currently working on.

Within each project I maintain a minimum of three windows:

1. **A terminal** — I use fish as my shell. I was spending a lot of time configuring zsh to give me the features that fish has out of the box, so I switched.

2. **A VCS TUI** — I use Jujutsu as my VCS. It's a relatively new tool that is Git-compatible, so anything I do in Jujutsu I can equivalently do in Git. I still push to GitHub as my remote. I prefer Jujutsu's ergonomics — the way it handles merges, its approach to workspaces instead of worktrees. I keep `jj-ui` (a TUI for Jujutsu) open so I can keep an eye on what the agent is doing: see commits it's making, preview diffs, check what's in the working set. I'll often have the agent working in one window, switch over to the TUI, and if I see something I don't like, hop back to give it steering.

3. **An agent harness** — In this case, Pi. I'll do a deep dive on Pi in a future session.

I really like tmux because it gives me durability. I've accidentally closed my terminal on many occasions and tmux lets me survive that, reconnect, and carry on. I can also connect from other machines — sometimes I'll check in on code from my phone.

I've also built some little niceties. You may notice in the tmux tab bar there are status icons. I built an extension so that when the agent is working the icons change — a thinking indicator when it's reasoning, a dollar sign when it's executing a shell command, a check mark when it completes, and a question mark if it needs input from me. It gives me a sense of what's going on across all my sessions at a glance.

### What's Next

In future videos I'm going to get into specific techniques and components in detail. I'll do a deep dive on the secrets proxy configuration and setup, my Pi configuration and how I handle skills and extensions, the workflow orchestration tool I've been developing for long-running operations, and anything else people request. I hope this was useful — please give me feedback. It's the first time I've done anything like this.
