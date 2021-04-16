exports.data = {
  layout: "layouts/base.11ty.js",
  pagination: {
    data: "collections.post",
    size: 3,
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
          <p class="post-date">
            Posted on ${this.postDate(post.data.page.date)}
          </p>
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
    <nav aria-label="Pagination Navigation" class="text-center">
      ${
        data.pagination.href.previous
          ? `<a href="${data.pagination.href.previous}" class="text-custom-yellow" aria-label="Go to Previous Page">Previous</a>`
          : `Previous`
      } | ${
    data.pagination.href.next
      ? `<a href="${data.pagination.href.next}" class="text-custom-yellow" aria-label="Go to Next Page">Next</a>`
      : `Next`
  }
    </nav>
  </div>`;
};
