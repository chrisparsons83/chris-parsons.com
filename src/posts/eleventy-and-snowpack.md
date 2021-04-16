---
tags: post
layout: layouts/post.11ty.js
title: Eleventy and Snowpack
date: 2021-04-14
---

I'm pretty certain that anyone that rebuilds their personal site using a Jamstack setup of some sort is contractually obligated to spend the next half dozen posts they write describing their setup. I don't expect to be much different. In my defense... well, I have none. Admittedly, a lot of these posts, as a lot of my writing, tends to be more to help cement concepts personally, as one would do with documentation at a job. If someone else happens to learn something besides me, then all the better! In addition, personal sites are wonderful as they give us the ability to play around with new technology without having to shoehorn it into an existing project, and avoiding having weigh the pros and cons of potential technical debt we could accrue if the new technology ends up not being a long lasting project. I've wanted to try out the new frontend build tools that have been coming out, and I settled with using Snowpack.

<!-- excerpt -->

## Why Snowpack?

At my current full-time employment, our frontend build tools could be described as "mature" if you were being kind, or "dated" if you were feeling sassy. So looking through DDG results on what the 2021 state of frontend build tools and bundlers were ended leading me to this shortlist of projects:

- [Webpack](https://webpack.js.org/)
- [Snowpack](https://www.snowpack.dev/)
- [Parcel](https://parceljs.org/)

Obviously, this isn't the entire list of frontend build systems out there right now, but I am more likely to want to pick an option and start building rather than trying to analyze 50 different systems to find something perfect. In particular, Jamstack setups should be built to be nimble and flexible. I'm writing in Markdown. If something turns out not to work, I don't feel like I'm ever going to be locked into a build system with what I'm using.

Between those three options, Webpack is probably the most useful from a maturity perspective. I would venture to guess out of those three, Webpack is going to be building and bundling way more of the web than the other two combined. But new, personal project? Let me pick the fun, new kid on the block. And while Parcel looks outstanding, Snowpack and ESM-based import/exporting? That's the kind of shiny fun toy I would love to try out for kicks.

## Why Eleventy?

At this point of my life, I'm very content using Typescript and Javascript to do what I need to do. I used to write my blog with Jekyll, but I seemed to fight with the automation setup (though I'm certain that's a personal problem and not any major issue with Jekyll), and Ruby is not something I enjoy living in.

In addition, _new is always better_ when it comes to personal projects. Eleventy was a great way to dip my toe into a new SSG, and again, the more I can live in Javascript and Markdown, the more comfortable I'm going to be. I utilize Github Actions heavily where I can, and I felt incredibly comfortable working with a javascript SSG along with Github Actions for testing and deploying.

## Setting everything up

Note: [this site's repo](https://github.com/chrisparsons83/chris-parsons.com) is public and hosted on Github, so feel free to dig into the code anytime.

One of the things I use in judging how much I want to use a project is how well structured their documentation is. Snowpack's documentation is streamlined, and while there are starter packs out there to get you going, the documentation gave me confidence that I didn't need to use those, and I could just work straight from their docs. This faith wasn't misplaced - I had `snowpack dev` running in minutes, and everything worked fairly simply.

I definitely spent some time tweaking and figuring out the best way to get the files organized in a logical way. I eventually settled on this:

```
module.exports = {
  mount: {
    _site: "/",
    "src/styles": "/styles",
    "src/images": "/images",
  },
}
```

It'll probably change, but it's stable now, and easy to develop without getting in the way. The fewer things I have in the way of me writing, the more likely I am going to actually write. If you've seen the gap in time between this post and the last post... we'll see how this goes, but it's promising.

Eleventy gave me a bit more trouble, but I realized that keeping that system as simple as possible and doing the heavy lifting with Snowpack felt better. Since Snowpack was doing the work with PostCSS and TailwindCSS (the latter of which definitely deserves a post because goodness that has completely changed my view on how to work with CSS), keeping it simple with Eleventy made things work nicely.

## One gotcha I ran into

At the time of me writing this, there is a [snowpack bug](https://github.com/snowpackjs/snowpack/issues/3095) that creates a race condition for running the eleventy build along with building the rest of the site. I solved it in the meantime by updating my build script to just run `eleventy && snowpack build`, but at some point, it'd be nice to not have to worry about that.

## Final thoughts

I should have done this a long time ago.

I'm definitely going to do some more writing on TailwindCSS, as that's something that's allowed me to develop this rapidly.

I'm definitely going to be using Snowpack on pretty much all of my projects going forward. It's too simple and powerful and fast to not do so.

I don't have much of a reason to use SSGs outside of this site, but Eleventy is wonderful for what it is. I tend to gravitate more to NextJS to build frontends these days, but I can definitely see the use case for Eleventy.
