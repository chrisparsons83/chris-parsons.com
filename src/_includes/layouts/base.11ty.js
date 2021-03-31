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
  <body>
      ${data.content}
  </body>
</html>`;
};
