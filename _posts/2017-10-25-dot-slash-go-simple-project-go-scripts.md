---
title: 'dot-slash-go: Simple Project ./go Scripts'
excerpt: I make it a point to include ./go scripts in every project I work on. A ./go script will significantly increase new developer productivity. Any open source project looking to lower their barrier of entry should adopt one.
date: '2017-10-25'
---

I 💛 ./go scripts.

If you aren’t familiar with them, give Pete Hodgson’s overview posts ([1](https://www.thoughtworks.com/insights/blog/praise-go-script-part-i), [2](https://www.thoughtworks.com/insights/blog/praise-go-script-part-ii)) a read.

I make it a point to include ./go scripts in every project I work on. A ./go script will significantly increase new developer productivity. Any open source project looking to lower their barrier of entry should adopt one.

Since I value them so much, I created [`dot-slash-go`](https://github.com/bromanko/dot-slash-go), an extendible, friendly framework for project ./go scripts. It enables you to create a better developer experience with less effort.

### Inspiration

./go scripts tend toward a general implementation. They define a set of commands as functions. Passing no arguments displays help output enumerating the commands and their usage. This boilerplate is tedious to create for every new repository.

The ./go script user experience is important. Working with multiple teams I’ve encountered a variety of usability. Some teams do an excellent job outputting helpful command usage information. Others stop at surfacing the command and leave you guessing at what they do or what arguments are supported.

I created [`dot-slash-go`](https://github.com/bromanko/dot-slash-go) to eliminate the boilerplate and encourage improved usability. Creating and documenting commands is so simple you’ve got no excuse to skip it!

---

### Installation

Installation is a breeze. Navigate to your project root and run the following command:

<script src="https://gist.github.com/bromanko/abeffe7fd48dec0f903859890beba066.js"></script>

A guided process will ask you a series of questions to create a `./go` shell script and a `.go` folder to store metadata and commands.

![Installing dot-slash-go](/assets/img/posts/2017-10-25-dot-slash-go-simple-project-go-scripts/installing-dot-slash-go.png)
_Installing dot-slash-go_

Re-running the install script is safe. It will update `./go` to the latest version and will not delete any of your customizations.

### Creating Commands

Creating new commands is also simple. Just use the included command command.

![Creating Commands](/assets/img/posts/2017-10-25-dot-slash-go-simple-project-go-scripts/creating-commands.png)
_Creating a dot-slash-go command_

The new build command, contextual help and usage information can be modified by editing `build`, `build.help` and `build.usage`. 🎉

---

Give [`dot-slash-go`](https://github.com/bromanko/dot-slash-go) a shot. Let me know what you think, open an issue, or improve it via a pull-request. Enjoy!
