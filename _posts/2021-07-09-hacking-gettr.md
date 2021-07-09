---
layout: post
category: statements
title: It took me 34 minutes to reverse engineer Trumps' social medias internal API.
tags: hacking, spam, hackerone, trump, gettr, gettr-trump, trump-social-media, bug-bounty
email: true
show_more: true
image: /assets/photos/gettr.jpeg
---

So, long story short, it only took me 34 minutes to not only reverse engineer Gettrs' API, but also abuse it and get rate-limited.

It wasnt that hard, what surprised me more though is the lack of a ratelimit. I created ~1000 posts in 1 minute and 30 seconds.

BUT, guess what? It wasn't even an API ratelimit, it was a CloudFlare ratelimit.

You can see the ~1000 posts in the gif below (the gif eventually ends, it took me 22 seconds to scroll through all of them).

![gettr spam gif](/assets/photos/gettr.gif)
