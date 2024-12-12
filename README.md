# rimbamorani.dev

This is Aya Aurora R's portfolio website with template adaptation from Hyde, a theme built on top of [Poole](https://github.com/poole/poole).

## Contents

- [Setup](#setup)
- [Options](#options)
  - [Sidebar menu](#sidebar-menu)
  - [Sticky sidebar content](#sticky-sidebar-content)
- [License](#license)


## Setup

### Prerequisite
- Ruby version 2.7.7
- Bundle version 2.0.2

### Dev Setup

To run locally, execute
```
bundle install
```

And to run the server, execute
```
bundle exec jekyll serve
```

## Options

Hyde includes some customizable options, typically applied via classes on the `<body>` element.


### Sidebar menu

Create a list of nav links in the sidebar by assigning each Jekyll page the correct layout in the page's [front-matter](http://jekyllrb.com/docs/frontmatter/).

```
---
layout: page
title: About
---
```

**Why require a specific layout?** Jekyll will return *all* pages, including the `atom.xml`, and with an alphabetical sort order. To ensure the first link is *Home*, we exclude the `index.html` page from this list by specifying the `page` layout.


### Sticky sidebar content

By default Hyde ships with a sidebar that affixes it's content to the bottom of the sidebar. You can optionally disable this by removing the `.sidebar-sticky` class from the sidebar's `.container`. Sidebar content will then normally flow from top to bottom.

```html
<!-- Default sidebar -->
<div class="sidebar">
  <div class="container sidebar-sticky">
    ...
  </div>
</div>

<!-- Modified sidebar -->
<div class="sidebar">
  <div class="container">
    ...
  </div>
</div>
```

## License

Open sourced under the [MIT license](LICENSE.md).

<3
