exports.data = {
  layout: "layouts/base.11ty.js",
  pagination: {
    data: "collections.post",
    size: 5,
    reverse: true,
    alias: "posts",
  },
};

exports.render = function (data) {
  console.log(data.pagination.items);
  return `<ul>
    ${data.pagination.items
      .map((post) => {
        return `<li> ${post.data.title} </li>`;
      })
      .join("\n")}
  </ul>`;
};
