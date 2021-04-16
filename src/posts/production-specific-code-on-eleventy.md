---
tags: post
layout: layouts/page.11ty.js
title: Production-Specific Code on Eleventy
date: 2021-04-15
---

In setting up a blog, it's generally good to have some sort of analytics, even if it's personal writing. I expect my traffic to be in the single digits in any given week, but it's nice to know what pages do end up showing up highly on search engines, so I could potentially clean them up. In addition, if I ever end up getting linked somewhere on social media, I'll know where to look to get all the free editing I could imagine! However, in doing so, I want to make sure that I don't worry about loading that script while I'm working in development. This is a great situation to use shortcodes in Eleventy.

<!-- excerpt -->

## Why GoatCounter?

So I ended up settling on [GoatCounter](https://www.goatcounter.com/) for the following reasons:

- Privacy Aware, hence why you don't see a GDPR notice here.
- Open Source
- Lightweight
- Simple hosted solution, which is a nice way to be able to support development in open source.

As with most web analytics, tracking is simply a script tag in the HTML. However, if I'm running it locally under a custom domain, I don't want any statistics counting. I could always do things on the server end and exclude my IPs, checking location.host, etc, but it would be even nicer to only print that script tag while I'm building for production.

## Writing the Shortcode

[11ty Shortcodes](https://www.11ty.dev/docs/shortcodes/) are a great, flexible way to embed content within a template. Since I use 11ty.js templating, I could very well just write a simple function and put it in my template file, but doing it this way futureproofs me in case I'd like to switch templates. Doing this also gives a central location for these functions to exist, rather than having to dig down into my templates to find them.

Within my .eleventy.js file, I've added the following:

```
module.exports = (config) => {
  config.addShortcode("goatCounter", () => {
    return process.env.ENVIRONMENT === "production"
      ? '<script data-goatcounter="YOUR_URL_HERE" async src="GC_SCRIPT_HERE"></script>'
      : "";
  });
}
```

The key to this is that process.env.ENVIRONMENT check; doing that will look for the current environment. I happen to use ternaries because I like ternaries in this case, but you could very well use an if with a second return to catch the else as well. Then, to make sure my environmental variable exists, I set my environment variables in my package.json scripts, such as the following:

```
"scripts": {
    "dev": "ENVIRONMENT=development snowpack dev",
    "build": "ENVIRONMENT=production snowpack build"
  },
```

_The build script for this site looks slightly different than above since I'm still dealing with a Snowpack 3.1.x issue on build, but it applies all the same. I also am realizing as I'm typing this that I'm not working in node for this, so the variable isn't the most accurately named. Future me will deal with that._

I use [Snowpack](https://www.snowpack.dev/) to build this site, but even if you're using eleventy without build tools, you can do the same thing with `ENVIRONMENT=production eleventy` or `ENVIRONMENT=development eleventy --serve`.

When I deploy to [Netlify](https://www.netlify.com/), it just looks for my build script in `package.json`. This means I can reliably expect it to evaluate the production check to true when my build script is run, and when I'm working on dev locally, I'll never see the script.

## Other Uses

This technique is also great if you want to put in custom code to help you visually identify when you're working in development versus production. Some ways you can do that are:

- Setting a custom stylesheet that change the background of the website to an obnoxious color.
- Changing the favicon.
- Put an alert div at the top of the screen reminding you this is dev.

I've done all of these things at different times in my career, and they're a nice little sanity check for when I think I'm looking at production and I happen to be looking at development. Perhaps I shouldn't have 60 Firefox tabs open at once, but old habits die hard.
