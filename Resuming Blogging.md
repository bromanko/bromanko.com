---
title: Resuming Blogging
date: 2024-03-25
draft: "True"
---
Hello (again) world!

I’ve really neglected this site. It’s been four years since I last posted anything. I got the urge to write today and…wow…what a painful experience. The prior version of this site was a custom Next.js app. I attempted to run it with `npm run dev` and got a string of errors. Something must have changed with later Node.js versions making this v9 era version of Next.js no longer compatible. Updating 4 years worth of breaking changes is not how I was going to spend an afternoon.

Hard reset. Start from scratch. Simplify. 

I want to write in Markdown using Obsidian. I want to author on my phone or computer. I want automatic publishing. 

Here’s what I cobbled together. 

I created a new Obsidian vault and moved in all my post Markdown files. I configured iCloud sync to maintain continuity between computers and phone. Authoring requirements achieved. 

I initialized a [git repo]() in the same folder and setup the [Obsidian git plugin]() to push changes. Pull isn’t necessary since iCloud sync will handle it. 

<screenshot of iOS and macOS>

Last step is publishing. I opted for Hugo. It’s boring tech. Created a [GitHub Actions workflow] to build and deploy the site on every commit. ☀️