exports.data = {
  title: 'Chris Parsons | Javascript Developer in Seattle, Washington',
};

exports.render = function (data) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/styles/main.css">
    <title>${data.title}</title>
  </head>
  <body class="text-white">
    <div class="container mx-auto grid grid-cols-4 gap-4">
      <header class="col-span-4">
        <img src="/images/chris-parsons.svg">
      </header>
      <main class="col-span-4 md:col-span-3">
        ${data.content}
      </main>
      <aside class="md:col-span-1">Sidebar</aside>
      <footer class="col-span-4">Footer</footer>
    </div>
  </body>
</html>`;
};
