import clsx from "clsx";
import { allBlogPosts } from "contentlayer/generated";
import { Calendar } from "iconoir-react";
import { ArrowLeft } from "@/lib/icons";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProseLayout from "@/components/prose-layout";
import MDXContent from "@/components/mdx-content";
import { formatDate, generateCommonMeta } from "@/lib/utils";
import Link from "next/link";

export const generateStaticParams = () => {
  return allBlogPosts.map((post) => {
    return {
      slug: post.sourceFileNameWithoutExt,
    };
  });
};

export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  const post = allBlogPosts.find(
    (post) => post.sourceFileNameWithoutExt === params.slug
  );

  if (!post) notFound();

  const { title, description, ogImage } = post;

  return {
    ...generateCommonMeta({ title, description, ogImage }),
  };
};

const Page = ({ params }: { params: { slug: string } }) => {
  const post = allBlogPosts.find(
    (post) => post.sourceFileNameWithoutExt === params.slug
  );
  if (!post) notFound();

  return (
    <div className="px-6 py-10">
      <div className="bg-circles"></div>
      <header>
        <Link href="/blog" className="inline-block">
          <button className="flex gap-2 md:hidden">
            <ArrowLeft />
            <span>back</span>
          </button>
        </Link>
      </header>
      <div className="blog-content grid place-content-center">
        <div className="my-12 space-y-4 max-w-[65ch]">
          <h1 className="text-fluid-4">{post.title}</h1>
          <div className="flex gap-2 items-center text-fluid--1 text-grey-500 dark:text-grey-300">
            <Calendar />
            <p className="text-inherit">{formatDate(post.date)}</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className={clsx(
                  "pill text-black dark:text-grey-50 text-fluid--1 bg-gradient-to-r",
                  "from-blue-100 to-red-100 dark:from-violet-600 dark:to-red-600 ",
                  { "bg-fixed": post.tags.length > 2 }
                )}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <ProseLayout>
          <MDXContent code={post.body.code} />
        </ProseLayout>
      </div>
    </div>
  );
};

export default Page;
