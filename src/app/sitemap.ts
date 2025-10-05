// import { getBlogPosts } from "app/lib/utils";

export const baseUrl = "https://davidshaguy.com";

export default async function sitemap() {
  // const blogs = getBlogPosts().map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.metadata.publishedAt,
  // }));

  // const routes = ["", "/blog", "/portfolio"].map((route) => ({
  const routes = ["", "/portfolio"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  //  return [...routes, ...blogs];
  return [...routes];
}
