exports.data = {
  title: 'Chris Parsons | Javascript Developer in Seattle, Washington',
};

exports.render = function (data) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Chris Parsons | Javascript Developer in Seattle, Washington">
    <link rel="stylesheet" type="text/css" href="/styles/main.css" media="screen">
    <title>${data.title}</title>
  </head>
  <body class="text-white m-4 md:m-8">
    <div class="container mx-auto grid grid-cols-4 gap-4 md:gap-8">
      <header class="col-span-4 flex-row justify-between">
        <div class="flex flex-row justify-between">
          <div id="logo" class="w-2/3 max-w-xs">
            <img src="/images/chris-parsons.svg" width="557" height="63" alt="Logo for Chris Parsons">
          </div>

          <div id="hamburgerMenu" class="md:hidden">
            <svg class="stroke-current w-6 h-6" viewBox="0 0 10 8" width="32">
              <path d="M1 1h8M1 4h 8M1 7h8" stroke-width="1" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
        <nav role="navigation" class="hidden md:flex md:flex-row">
          <div>
            <a>Posts</a>
          </div>
          <div>
            <a>Resume</a>
          </div>
          <div>
            <a>Jeopardy</a>
          </div>
        </nav>
      </header>
      <main class="col-span-4 md:col-span-3">
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
