import { baseUrl } from "app/sitemap";
import { getBlogPosts } from "app/lib/utils";

export async function GET() {
  const allBlogs = await getBlogPosts();

  const itemsXml = allBlogs
    .sort((a: any, b: any) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .map(
      (post: any) =>
        `<item>
          <title>${post.metadata.title}</title>
          <link>${baseUrl}/blog/${post.slug}</link>
          <description>${post.metadata.summary}</description>
          <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
        </item>`,
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Tor David Portfolio</title>
        <link>${baseUrl}</link>
        <description>Tor David Portfolio Blog</description>
        ${itemsXml}
      </channel>
    </rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
// test comment
// another test comment
// final test comment
