import siteConfig from "@/lib/siteConfig";
import { allBlogPosts } from "contentlayer/generated";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = allBlogPosts.map((post) => ({
    url: `${siteConfig.url}/${post.url}`,
    lastModified: post.date,
  }));

  const routes = ["", "/blog", "/uses", "/projects"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  return [...routes, ...blogs];
}
