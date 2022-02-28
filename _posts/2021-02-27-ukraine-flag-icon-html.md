---
layout: post
category: tutorials
title: Creating a Ukrainian flag icon for your website to show support.
tags: ukraine
archived: true
email: true
show_more: true
image: /assets/photos/ukraine.png
---

This isnt going to be as much as a tutorial but more of just a "here is the code" type post, the code which is only CSS and HTML is very simple to understand.

```html
<button class="button" onclick="window.location='https://ukraine.ua/news/stand-with-ukraine/'"></button>
```

```css
.button {
    background: #005bbb;
    color: white;
    font-weight: bolder;
    padding: 15px;
    border: none;
    width: 100px;
    border-bottom: 30px #ffd500 solid;
    position: fixed;
    left: 15px;
    bottom: 15px;
    font-family: 'Roboto', sans-serif;
}
```

Here is what it looks like on a site:
![ukraine flag example on a site](/assets/photos/ukraine.png)
