import { Metadata } from "next";
import { allBlogPosts } from "contentlayer/generated";
import { formatDate, generateCommonMeta } from "@/lib/utils";
import Card from "@/components/card";

export const metadata: Metadata = {
  ...generateCommonMeta({
    title: "Blog",
    description:
      "All my thoughts and writings about front-end web development and programming.",
    ogImage: "/og?title=Blog",
  }),
};

const Blog = () => {
  const sortedByTime = allBlogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return (
    <section className="px-6 py-10">
      <h1 className="mb-10 text-fluid-4 font-bold">Blog</h1>
      <div className="space-y-6">
        {sortedByTime.map((post) => (
          <Card
            key={post.title}
            title={post.title}
            subtitle={formatDate(post.date)}
            href={post.url}
            tags={post.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;
