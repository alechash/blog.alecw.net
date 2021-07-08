---
layout: post
category: tutorials
title: How To Run Your Own YouTube in Ten Minutes
tags: command-line, nodejs, express, video, media, nodetube, newtube, youtube, tutorial
archived: true
email: true
show_more: true
image: /assets/photos/shareme.png
---

By this time, I am sure you have heard of NodeTube. The, in my opinion, the best YouTube alternative. In this tutorial I am going to show you guys how you can set up a NodeTube instance in less than 10 minutes! As you can see in the image, NodeTube is easy to customize with dark mode, media views, and so much more!

I am working on a Mac so I am going to include some instructions that will make it easier for a Mac because I know them for MacOS but not for Windows/Linux. Although, it should still be easy to follow!

---

The link to the GitHub repository is here: [mayeaux/nodetube](https://github.com/mayeaux/nodetube)

---

# Installing Software

You’ll want to have some software installed first!

You’ll want [Node.js 8.0+](https://nodejs.org/en/download/) installed. You can find all the downloads on that link for Linux, Windows, and MacOS.

Once that is installed you can install [MongoDB Community Edition](https://www.mongodb.com/download-center/compass) when installing that, make sure to install the Community Edition. Or you can brew install it on a Mac:
```shell
brew tap mongodb/brew

# then
brew install mongodb-community@4.2
```

You’ll also want [Redis](https://redis.io/download), you can download it there.

Lastly, you’ll want [ffmpeg](https://www.ffmpeg.org/download.html) you can download it there!

---

# Running Software

To run the software you’ll need to run these command:

to start Redis all you need to do is: `redis-server`

to start MongoDB all you need is this:
```shell
mongod

# or if you are on a mac
brew services start mongodb-community@4.2
```

To setup ffmpeg, you need to follow some instructions depending on your OS. Iv’e included some link for [Windows](https://video.stackexchange.com/questions/20495/how-do-i-set-up-and-use-ffmpeg-in-windows), [MacOS](http://ericholsinger.com/install-ffmpeg-on-a-mac), and [Linux](https://www.tecmint.com/install-ffmpeg-in-linux/)

---

# Running Nodetube

First we want to clone the repository onto your computer

`git clone https://github.com/mayeaux/nodetube`

cd into nodetube: `cd nodetube`

install node modules: `npm install`

and fire it up: `npm start`

There, you have an instance running. But, lets customize it a little bit more!

---

# Customizing Nodetube

As you can probably tell by all the different instances of NodeTube including [NewTube](http://newtube.app/), [NullVideo](http://nullvideo.com/), and [Vid8](https://vid8.poal.co/). There is a lot of customization that can be done!

### Meta

All the needed Meta information is in .env.setting and .env.private. For example, the name, Stripe information (yes there is plus, which means you can make money off this!), and max rating (sfw, nsfw, sensitive).

### CSS

Most of the CSS is stored in public/css/main.css. But there is also a lot of inline CSS in the code itself.

### Dark Mode

Adding dark/light mode is very easy. All you have to do is insert that code into views/partials/header.pug under the styling!
```css
/* Dark mode: */
body, footer {
    background-color: #1a1a1c !important;
    color: darkgray !important;
}

/* Light mode: */
body, footer {
    background-color: #fff !important;
    color: black !important;
}
```

To turn dark mode on, just comment out the light mode code and vise versa!

![nodetube](/assets/photos/nodetubeCompare.png)

---

# More Styling

There is so much more styling you can do! Not just what I showed you! I do have a branch on NodeTube’s repo for front end styling. It is full of new styling that isn’t in the master branch, so if you want some tips or ideas on what you can do just check out that branch here: [mayeaux/nodetube#tree=front-end](https://github.com/mayeaux/nodetube/tree/front-end)

Thanks for reading this article! If you feel this was written well then please feel free to clap! It helps me and you got to read this article for free (most likely)!
