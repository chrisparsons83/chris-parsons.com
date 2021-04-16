exports.data = {
  title: "",
};

const title = (title) => {
  if (title === "") return "";
  return `${title} -`;
};

const statTracking = () => {
  return process.env.NODE_ENV === "production"
    ? '<script data-goatcounter="https://chris-parsons.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>'
    : "";
};

exports.render = function (data) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Chris Parsons | Javascript Web Developer in Seattle, Washington">

    ${statTracking()}
    
    <title>${title(
      data.title
    )} Chris Parsons | Javascript Web Developer in Seattle, Washington</title>

    <link rel="stylesheet" type="text/css" href="/styles/main.css" media="screen">

    <link rel="icon" href="/favicon.ico">
    <link rel="icon" href="/icon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="manifest" href="/manifest.webmanifest">
  </head>
  <body class="bg-fixed text-gray-300 m-4 md:m-8">
    <div class="container mx-auto grid grid-cols-4 gap-8 md:gap-8">
      <header class="col-span-4 justify-between space-y-2 flex flex-col md:flex-row mb-8">
        <div id="logo" class="w-2/3 max-w-xs md:flex-initial">
          <a href="/">
            <img src="/images/chris-parsons.svg" width="557" height="63" alt="Logo for Chris Parsons">
          </a>
        </div>
        <nav role="navigation" class="min-h-32 space-x-2 md:flex-initial md:self-center md:space-x-6 md:text-xl">
          <a href="/">Posts</a>
          <a href="/resume">Résumé</a>
          <a href="/jeopardy">Jeopardy!</a>
        </nav>
      </header>
      <main class="col-span-4 md:col-span-3 prose">
        ${data.content}
      </main>
      <aside class="col-span-4 md:col-span-1 prose prose-sm">
        <h2>About Me</h2>
        <p>I'm a web developer located in the Seattle area, focusing on Typescript and Javascript. When not in front of a keyboard, you'll find me flashcarding for trivia or throwing rocks at houses out of the Granite Curling Club in Seattle.</p>
        <p class="flex flex-row space-x-2">
          <a class="flex-none" href="https://github.com/chrisparsons83">
            <svg class="social-media-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub Profile for Chris Parsons</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
          <!--
          <a class="flex-none" href="https://www.linkedin.com/in/chris-parsons-329a8ab/">
            <svg class="social-media-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn Profile for Chris Parsons</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          -->
        </p>
      </aside>
      <footer class="col-span-4 text-center text-sm mb-8">Copyright &copy; Chris Parsons.</footer>
    </div>
  </body>
</html>`;
};
