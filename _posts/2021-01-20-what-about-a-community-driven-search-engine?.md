---
layout: post
category: ideas
title: What About a Community Driven Search Engine?
tags: cryptocurrency, web-development, search, open-source
email: true
---

As we all know, open-source and community-driven projects are starting to gain traction around the internet. The decentralized idea of the internet is also starting to happen and crypto prices are at an all time high. So why doesn’t a decentralized or community driven search engine exist yet?

# The Idea

The idea is a search engine who’s results were come up with by the community. Blockchain is the idea of multiple computers coming together as one decentralized computer and solving math problems together to earn digital coin.

So, what if instead of solving math problems, they were crawling the web. And there was a central server where this information went to and was used in web search.

How would a crawler get paid? Well, just like blockchain, through cryptocurrency. For example, SearchCoin.

# Building It

You would need to build these items for this to work Software to run on peoples computers

* A centralized server to accept data and send out coins
* A web interface for people to search on
* Ad network to generate revenue on the web interface
* A new coin to distribute to contributors

# Web Server

First, you’d need a server. This server should just be a simple web server like a Nodejs web server that is connected to a database. This web server will also need a couple APIs that the crawling software will communicate with.

Ideally you would have a database of URLs to be crawled. Either user-submitted or find by crawlers that the crawler could not get to. Crawling Software

You could really do this with Electron. This software should communicate with the web server and receive URLs to crawl. It would then crawl these URLs and get information like description, title, and other meta stuff. It would then send this to the web server which would put it in a database. The server would verify this information and if verified, give the crawler some coin.

The web server would then check this URL as crawled and would only re-crawl it again if prompted by a crawler or a user of the web interface.

# Web Interface

This could just be as simple as an HTML input field that went to /search?q={query}. It would then show results. But, you could also have an input box to request a site to be crawled. It would then queue this site.

# Search Coin

This would just be a crypto coin or token that would be sent to people for crawling sites.

# Final Thoughts

As you can probably tell, this idea is not completely fleshed out. Especially in the corners of the actual coin and how the server would verify this information.

# Why It Doesn’t Exist Now

There are many reasons, including the fact that there are already a lot of search engines that people could choose from. Another reason is expenses. Or lack of community support.

There are many reasons, including the fact that there are already a lot of search engines that people could choose from. Another reason is expenses. Or lack of community support.