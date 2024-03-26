---
title: Resuming Blogging
date: 2024-03-25
draft: "true"
---

Hello (again) world!

I’ve sorely neglected this site. It’s been four years since last post. I got the urge to write today and…wow…what pain. 

The prior version of this site was a bespoke Next.js app forked from somewhere forgotten. I attempted to run it with `npm i && npm run dev`. Wall of inscrutable errors. Something must have changed with Node.js in the last four years. Next.js v9 must not be compatible. This is not how I’m spending the afternoon. 

Hard reset. Start from scratch. Simplify. 

I want to write in Markdown using Obsidian. I want to author on my phone or computer. I want automatic publishing. 

Here’s what I cobbled together. 

I created a new Obsidian vault and moved in all my post Markdown files. I configured iCloud sync to maintain continuity between computers and phone. Authoring requirements achieved. 

I initialized a [git repo](https://github.com/bromanko/bromanko.com) in the same folder and setup the [Obsidian git plugin](https://github.com/denolehov/obsidian-git) to push changes. Pull isn’t necessary. iCloud sync will handle it. 

![[Screenshot 2024-03-25 at 6.56.04 PM.png]]

Last step was publishing. I opted for Hugo. It’s boring tech. I created a [GitHub Actions workflow](https://github.com/bromanko/bromanko.com/blob/main/.github/workflows/deploy.yaml) to build and deploy the site on every commit. 

Edit files in Obsidian, wait for the Git plugin to push, site deploys. ☀️

![[Pasted image 20240325185226.png]]

I like it. 