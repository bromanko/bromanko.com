# bromanko.com

What you see at [https://bromanko.com](https://bromanko.com)

## Usage

1. Clone this repository
2. Run `./go dev`

## Requirements

* Docker

### Post excerpt

The [excerpt](https://jekyllrb.com/docs/posts/#post-excerpts) are the first lines of an article that is display on the blog page. The length of the excerpt has a default of around `250` characters and can be manually set in the post using:
```yml
---
layout: post
title: Sample Page
excerpt_separator: <!--more-->
---

some text in the excerpt
<!--more-->
... rest of the text not shown in the excerpt ...
```

The html is stripped out of the excerpt so it only display text.

## Layout
Please refer to the [Jekyll docs for writing posts](https://jekyllrb.com/docs/posts/). Non-standard features are documented below.

### Layout: Post

This are the basic features you can use with the  `post` layout.

```yml
---
layout: post
title: Hello World                                # Title of the page
feature-img: "assets/img/sample.png"              # Add a feature-image to the post
thumbnail: "assets/img/thumbnail/sample-th.png"   # Add a thumbnail image on blog view
tags: [sample, markdown, html]
---
```

With `thumbnail`, you can add a smaller image than the `feature-img`. If you don't want/have a thumbnail you can still use the same image as the feature one.

### Layout: Page

The page layout have a bit more features explained here.

```yml
---
layout: page
title: "About" 
subtitle: "This is a subtitle"   
feature-img: "assets/img/sample.png" 
permalink: /about.html               # Set a permalink your your page
hide: true                           # Prevent the page title to appear in the navbar
tags: [sample, markdown, html]
---
```

The hide only hides your page from the navigation bar, it is however still generated and can be access through its link. Use the `_draft` folder to keep files from being generated on your site.

### Layout: Bootstrap

This is the page layout modified to have bootstrap activated to format your content accordingly with the theme.

```yml
--- 
layout: bootstrap
---
```

### Layout: Default

This layout includes the head, navigation bar and footer around your content.

## Feature pages

All feature pages besides the "home" one are stored in the `page` folder, they will appear in the navigation bar unless you set `Hide: true` in the front matter. 

Here are the documentation for the other feature pages that can be added through `_config.yml`.

### Home

This page is the used as the home page of the template (in the `index.html`). It displays the list of article in `_posts`.
You can use this layout in another page (adding a title to it will make it appear in the navigation bar).

### Portfolio

Portfolio is a feature bootstrapped page that will take all the markdown/html files in the `_portfolio` folder to create a 3-columns image portfolio matrix.

To use the portfolio, simply create a `portfolio.md` with this information inside:
```yml
--- 
layout: bootstrap 
title : Portfolio 
---

{% include portfolio.html %}
```

### Gallery

You can create a gallery using [Masonry JS](https://masonry.desandro.com/) which will placing the pictures in optimal position based on available vertical space. You need to specify the `gallery_path` which will be used to find the pictures to render. It will take all of the picture under that directory. Then use the `include` to add it in your page. 

```
---
layout: page
title: Gallery
gallery: "assets/img/pexels"
---

{% include gallery.html gallery_path=page.gallery %}
```


### Search

The search feature is based on [Simple-Jekyll-search](https://github.com/christian-fei/Simple-Jekyll-Search) there is a `search.json` file that will create a list of all of the site posts, pages and portfolios. 

Then there's a `search.js` displaying the formated results entered in the `search.html` page. 


The search page can be enable/disable in the navigation bar through the `_config.yml` via:
```yml
special_page:
    search: 
      icon: "search"
      enabled: true
```

### Tags

Tags should be placed between `[]` in your post metadata. Seperate each tag with a comma. Tags are recommended for posts and portfolio items.

For example:

```yml
---
layout: post
title: Markdown and HTML
tags: [sample, markdown, html]
---
```

> Tags are case sensitive `Tag_nAme` ≠ `tag_name`

All the tags will be listed in `tags.html` with a link toward the pages or posts.
The tags page can be enable/disable in the navigation bar through the `_config.yml` via:

```yml
special_page:
    tags: 
      icon: "tags"
      enabled: true
```

## Template as a Gem

You can use Type-on-strap as a [gem](https://rubygems.org/gems/type-on-strap). Checkout an example in the [gem-demo branch](https://github.com/Sylhare/Type-on-Strap/tree/gem-demo).
To make the feature pages available in from the gem I created them as layouts that can be invoked in the pages folder.

So if you're using the template as a theme, Make sure you have:
  - A `index.html` file
  - The right `_config.yml` with the theme setting such as `theme: type-on-strap` uncommented
  - The feature page included. (ex: as it is already in `pages`)
  - Some content ready in `_posts` and `_portfolio` to be displayed

Now you can use any theme gem with github pages : [29/11/2017 Github Pages Broadcast](https://github.com/blog/2464-use-any-theme-with-github-pages)

## License

[The MIT License (MIT)](https://raw.githubusercontent.com/Sylhare/Type-on-Strap/master/LICENSE)
