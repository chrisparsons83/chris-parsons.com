exports.data = {
  layout: "layouts/base.11ty.js",
};

exports.render = function (data) {
  return `<h1>${data.title}</h1>${data.content}`;
};
