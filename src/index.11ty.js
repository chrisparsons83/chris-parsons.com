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
  return `<div class="space-y-16">
    ${data.pagination.items
      .map((post) => {
        return `
        <article>
          <h1>
            <a href="${post.url}">${post.data.title}</a>
          </h1>
          <section>
            ${post.data.page.excerpt}
          </section>
          <p class="mt-4">
            <a href="${post.url}" class="continue-reading">Continue Reading</a>
          </p>
        </article>
      `;
      })
      .join("\n")}
  </div>`;
};
