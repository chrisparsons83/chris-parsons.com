---
tags: post
layout: layouts/base.11ty.js
title: Five Things I Wish I Knew When I Started Using Drupal
date: 2010-01-24 08:45:23
---

I noticed the other day that my account on Drupal.org is coming up to its three year anniversary, which means I've probably been working with Drupal for four years now. So I took a look back at some of the old Drupal sites I had put together, and like most developers, almost cringed at what I had done to some of those sites. So, with nearly four years under my belt, these are five things I wish I had been doing in 2005, when I started.

## Everything Goes in the Sites Folder.... Everything

Those /modules and /themes folder in the root directory are so tempting. They're clear as day, and it makes perfect sense to just put the modules and themes in those folders. That's what they're there for, right? Wait, you're telling me that instead of using those perfectly good folders, I'm supposed to make a /themes and a /modules folder inside /sites/all, or /sites/default, or /sites/example.com?

However, when you have to do a site backup, it's way easier to zip up the sites folder, and just grab a new version of Drupal, than it is to zip the entire site. In addition, when you put modules and themes within /sites/default or /sites/example.com, you're now able to limit the module to just those sites.

## Use a Base Theme, and Subtheme it

As with people using Reset CSS stylesheets for static HTML websites to standardize their development, using a base theme or a theme engine and subthemimg from there is a great way to streamline development of Drupal themes. In addition to having the standardization between browsers already built in, many have additional features, such as wireframing abilities, reseting the theme registry automatically in order to solve a lot of the caching problems that occur when trying to develop themes, as well as customizing the appearance of breadcrumbs.

I typically use the [Zen theme](http://drupal.org/project/zen) to do 95% of my theme development. The only time the theme does not work well is when you have two sidebars on the same side of the content (think Smashing Magazine). Otherwise, it makes development way simpler, and since I use it every time, my theming times are getting faster and faster. If Zen isn't made for you, then perhaps look at the [Blueprint theme](https://drupal.org/project/blueprint), or possibly the [960 Theme](https://drupal.org/project/ninesixty).

## Create a Custom Module for Each Site

As you start to get comfortable in Drupal, you'll start to want to tweak little form elements, or perhaps change how a function works. Don't be tempted to hack core, you're only going to cause yourself headaches if you do it. The proper way is to use the hooks system, and override the function.

One of the tricks I've learned after watching and learning from others is that it can be extremely useful to make a site-specific module to dump all of these random FormAPI and other hooks that a site needs, but no other site will ever need. I typically have one module called exampledotcom, with it being the name of the site instead, which contains all of these functions. I drop this in /sites/example.com/modules/custom and now not only do I have complete control of if I want the changes on or off, it's contained within the site module, so backups and upgrading are still a cinch.

## Choose Your Contrib Modules Carefully

With [4970 modules](https://drupal.org/project/usage) currently listed on Drupal.org, knowing which ones to use can be a chore. You typically have two things to worry about when selecting a module. First, you have to make sure that you're choosing the best module for what you need to do, as there's likely multiple versions of the module feature you need. Then, you also have to make sure that it's a living module – you don't want to get a module that won't be maintained in six months, leaving you stuck in your current system.

Luckily, this is where having an awesome community helps out tremendously. If you're not sure which module to use between a couple seemingly valid choices, ask! The [Drupal.org Forum](https://www.drupal.org/forum) has a large amount of users, with a wide range of skill sets and experience levels, and is a great place to go to ask "Should I use X or Y" type questions. In addition, there are other great help sites, such as Stack Overflow or even Twitter that are great sources for assistance. When in doubt, if you're having problems deciding on two modules, check the last commit date on each module; chances are the more recent last commit is the one to select.

## Learn Just Enough Command Line to Use Drush

One of the major complains with Drupal is upgrading is a pain in the neck (and I need to write an article about how people are being drama queens about it). Drush is absolutely the answer - not just for upgrading, but simply maintaining your drupal site.

Yes, it's command line. Yes, it's not going to kill you. If you've chosen Drupal, you've already pretty much decided on power and flexibility over ease-of-use, and Drush is not complicated. In fact, upgrading is as simple as typing in "drush up". There are dozens of commands, and there are [cheat sheets](https://drupal.org/node/477684) if you're starting, but if your host provides you with shell access, then this is a no brainer, and if your host does not provide you shell access, I would start looking around for shared hosting that offers limited shell access, as that's all you should need.
