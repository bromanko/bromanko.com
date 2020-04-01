---
layout: post
title: Rediscovering .NET
excerpt: With the recent release of Visual Studio for Mac and Jetbrains Rider I’ve gotten the itch to explore the current state of the .NET ecosystem. Microsoft has made some bold strides in cross-platform compatibility and I was curious about the development experience.
feature-gradient: vanusa
---

With the recent release of Visual Studio for Mac and Jetbrains Rider I’ve gotten the itch to explore the current state of the .NET ecosystem. Microsoft has made some bold strides in cross-platform compatibility and I was curious about the development experience.

I was a .NET developer from the betas of Framework v1 to .NET 4. At that point I transitioned to MacOS (at the time OSX) and a variety of non-Microsoft languages and platforms. The switch broadened my horizons while simultaneously making me really appreciate Microsoft’s efforts.

After nearly 10 years away from .NET I decided to create a small project and take some notes of my experience. I’m sure this post will be out of date rapidly.

---

### Initial Decisions

* I selected C# as my language since I’ve got the most experience with it. F# was calling but it was a distraction best saved for a later adventure.
* As a strongly-typed, compiled language a capable IDE is imperative. Jetbrains won my heart with Resharper so I opted to use Rider rather than Visual Studio for Mac or VS Code.
* Local development would be done via Docker containers. I’ve stopped installing development frameworks directly on my local machine. Instead I prefer Docker Compose and shell scripts for automating my local development experience. I take comfort in the ability to quickly get developing whenever I switch machines.

### Solution Files

This seems to be a transition time with .NET Core. When I last worked with .NET you managed your code with Solution files (`.sln`) and Project files (`.csproj`). When I created a new project in Rider it produced both a `project.json` file and `.sln/xproj` files. The .NET Core documentation all revolves around `global.json` and `project.json`. So, I deleted the `.sln` and `.xproj` files. This made Rider very unhappy.

It turns out that Rider requires the `.sln` and `.xproj` files. It’s confusing to have two sets of files that appear to have the same purpose. Upon further research, I learned that [`project.json` is being phased out completely](https://blogs.msdn.microsoft.com/webdev/2016/05/11/notes-from-the-asp-net-community-standup-may-10-2016/). So the world is shifting back to MSBuild and `csproj` files. That’s fairly disheartening as I remember a lot of pain with merge conflicts and GUID wrangling in Project files. I hope the improvements they are making reduce the old pains.

Until Rider adds [support for csproj files](https://youtrack.jetbrains.com/issue/RIDER-3777) I’m stuck with both.

### Unit Testing

XUnit appears to be the preferred unit testing framework. That’s great since it’s what I was last using. 
The `dotnet test` command works well enough. You can use glob patterns to run tests across multiple projects 
or assemblies: `dotnet test test/**`

Rider’s test runner also works well. It’s capable of both executing and debugging single tests or full suites. 
I can’t find a way to do file system watching and have it re-execute tests on save. Which brings me to the next point…

### File System Watching

The .NET Tools include a `watch` command to listen for file system changes and re-run your tests or re-build your app. 
Unfortunately, the command is limited to a single project at a time. If you break your solution up into multiple 
projects you can’t issue a single command to watch for changes in all of the tests or source files.

I asked about this in the [.NET Tools repo](https://github.com/aspnet/DotNetTools/issues/247). The recommendation was 
to use MSBuild rather than `dotnet test`. That’s good advice considering the switch back to MSBuild. However, 
ider’s lack of support means that I can’t yet take advantage.

### Package Management

NuGet was in its infancy when I left the .NET world. My how things have changed. It now has a robust ecosystem of packages. It’s especially great to see Microsoft publishing their assemblies via NuGet.

I was thrown off by the package installation process. My expectation was that packages would default to a project-local 
install rather than globally in `$HOME`. I attempted to force packages to install locally but the best I could do 
was one local packages folder per project. This duplicates a lot of packages and is hard to manage with Docker volumes. 
There are several open issues related to this. I scrapped this approach and am installing globally. I can’t help but 
wonder if this will cause pain in the future.

I was also thrown off by `dotnet restore` vs using NuGet manually. I probably shouldn’t have installed the NuGet 
binary on my machine. I’ve removed it and only use the `dotnet` CLI.

I’m surprised that there is no command line to add the latest version of a package to your project. 
Something equivalent to `npm install --save` or `yarn add`. My process involves finding the package on 
nuget.org and then hand-editing `project.json`. Awkward.

### Linting

It looks like the current state of things is to use [StyleCop Analyzers](https://github.com/DotNetAnalyzers/StyleCopAnalyzers/blob/master/documentation/DotNetCli.md).
However the wiki page doesn’t leave me particularly excited. 
Coala has [CSharpLintBear](https://github.com/coala/coala-bears/blob/master/bears/c_languages/CSharpLintBear.py) 
which uses mcs. I could try out Coala (but Python 3…) or running mcs myself. 
More work than I’m willing to invest right now.

### Docker

Getting everything running in Docker was very easy. I was pleasantly surprised. I could even easily mount packages in a volume container like I would do with NodeJS modules.

**docker-compose.yaml**

```
version: "2"
services:
  dev:
    build:
      dockerfile: Dockerfile.dev
      context: .
    volumes:
      - .:/app
      - packages:/root/.nuget/packages
    environment:
      - ASPNETCORE_URLS=http://+:5000
    ports:
      - 5000:5000

volumes:
  packages:
```

**Dockerfile.dev**

```dockerfile
FROM microsoft/dotnet:1.1.0-sdk-projectjson

WORKDIR /app

ADD docker/dev-entrypoint.sh /usr/bin/entrypoint

ENTRYPOINT ["/usr/bin/entrypoint"]
CMD ["bash"]
```

**dev-entrypoint.sh**

```bash
#!/bin/bash

set -e

cd /app

dotnet restore

exec "$@"
```

### Frameworks

I was interested in both [Akka.Net](https://github.com/akkadotnet/akka.net) and [Orleans](https://github.com/dotnet/orleans). 
Neither of them support .NET Core yet. 😔 Akka.Net has a branch for .NET Core, though. That’s a promising sign. 
Both projects also have Github issues listing the TODO items necessary for support. I’ve signed up for notifications on each of them.

### Current Conclusion

I am optimistic about the future of .NET Core and non-Windows .NET development. These are definitely the very early days. There are some big changes looming that will cause quite a bit of churn to projects. I expect that things will feel more settled in 6–12 months.

Compared to frameworks in use with Ruby, Python and Node.js I find .NET’s patterns and practices to be more mature and consistent. Every non-functional concern I reviewed (ex. logging, monitoring, authorization) was well-considered and robust.

Overall 👍🏾
