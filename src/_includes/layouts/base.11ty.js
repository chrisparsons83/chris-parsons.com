exports.data = {
  title: "",
};

const title = (title) => {
  if (title === "") return null;
  return `${title} -`;
};

exports.render = function (data) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Chris Parsons | Javascript Web Developer in Seattle, Washington">
    
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
    <div class="container mx-auto grid grid-cols-4 gap-8 md:gap-16">
      <header class="col-span-4 justify-between space-y-2 flex flex-col md:flex-row">
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
      <main class="col-span-4 md:col-span-3 prose prose-yellow">
        ${data.content}
      </main>
      <aside class="col-span-4 md:col-span-1">
        <h1>
          Sidebar
        </h1>
        <p>Social media icons</p>
      </aside>
      <footer class="col-span-4">Footer</footer>
    </div>
  </body>
</html>`;
};
