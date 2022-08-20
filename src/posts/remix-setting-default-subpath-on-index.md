---
tags: post
layout: layouts/post.11ty.js
title: Setting Default Path Parameters in Remix
date: 2022-08-19
---

So I've been using a lot of [Remix](https://remix.run/) the past year on my personal projects, and it is by far the most productive I've ever been for actually getting projects done. I've gone plenty of years without finishing a single side project (as we all have) but in the past year, I think I'm actually going to get two separate ones across the line. I love that it seems like little problems in Remix are often just little problems and not "little problems", including my dive into optional URL path parameters tonight.

<!-- excerpt -->

# The problem I was running into

I am managing a multi-year data repository. Most people care about the current year, but looking at past years is also important. So let's say I have a yearly TPS report that I'd expect with the following structure:

```
/reports/tps
/reports/tps/2022
/reports/tps/2021
/reports/tps/2020
..and so on
```

Now, I'd love to link to /reports/tps and have the person load up the 2022 reports without having a redirect to /reports/tps/2022. This is mainly a style choice, to be honest, the redirect works fine in most cases, but why worry about a redirect?

## My usual methods of solving this

Generally, I do a lot of workflows in Remix where I had 2-3 route files working together. In the following example, it would be something like this:

- `/reports/tps.tsx`, which is basically a template, and very often has little more than an `<Outlet />`. This resolves to all of /reports/tps\* routes on my web app.
- `/reports/tps/$year.tsx`, which gives me basically the parameter `params['year']`, and then I can query my report.
- `/reports/tps/index.tsx`, which lets me render the default in that situation.

(feel free to replace tsx with jsx if you like to live dangerously)

I could do this, but then my code is in two places. Sure, fine, two places isn't the end of the world, but we can do better.

My next thought was "well, maybe we don't need that pesky index file, and I can just look at the `$year` parameter, and if it's empty, just assign the current year. This does work for `/reports/tps/index/` but fails when I just have `/ports/tps`; it does not run that $year.tsx loader.

# The actual solution: a single splat!

There's this concept of [splats](https://remix.run/docs/en/v1/guides/routing#splats) in routing, which basically will match any value in the URL for the rest of the URL. They're great for 404 pages, but turns out, they work well for this too. Basically, it doesn't just match a segment of the path between slashes, it actually just grabs the entire thing. Splats are made by creating a `$.tsx` file.

So, we actually can do all of this in one file: `reports/tps/$.tsx`. In that file, I can do the following:

```
export const loader = async ({ params }: LoaderArgs) => {
  const year = params["*"] === "" ? CURRENT_YEAR : params["*"];

  // All the other code I need to do now that I have a year to work with

  return json<LoaderData>({magicalMysticalReport});
};
```

And then I can do whatever I need to do for my report. I use [dynamic segments](https://remix.run/docs/en/v1/guides/routing#dynamic-segments) heavily to duplicate layout/logic between create and update pages, but this is a neat trick to have in my bag for more things.
