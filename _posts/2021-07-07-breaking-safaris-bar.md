---
layout: post
category: tutorials
title: Breaking Safari 15s Status Bar
tags: safari, breaking, safari-15, bug, flashing
email: true
show_more: true
image: /assets/photos/safari15.jpeg
---

***NOTE:** This is being run in Safari 15 Beta, and macOS Monterey Beta, this bug (or feature) might be changed or fixed when you're reading this.*

### The Bug

With Safari 15 and macOS Monterey, you can change the color of the status bar using the `theme-color` META tag. The change of this META tag is not limited, therefore, we can change this however many times we want to. This could be very bad for the end user that might be on an older mac.

### How it Works

Safari now lets you change the background color of the status bar. It only works if you're color is dark enough though. This is for accessibility reading. By putting this in the `<head>` tag, it will change the color of the status bar to green:

```html
<meta name="theme-color" content="#059669">
```

### Bug Execution

We can change this in an unlimited manner by using this JavaScript code:

```javascript
setInterval(function() {
	document.head.children.namedItem('theme-color').content = '#059669'
	setTimeout(function() {
		document.head.children.namedItem('theme-color').content = '#DC2626'
	}, 3)
}, 6)
```

This will flash the color from green to red, to green, to red. This can be seen in the gif below:

![safari flashing bar](/assets/photos/safari-bar-flashing.gif)

### The Problem

This could be a problem because a user might have an older computer that cant support the rendering of these images. Hopefully by the time Safari 15 and macOS Monterey are releases, this will be fixed.
