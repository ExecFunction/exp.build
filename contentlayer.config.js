import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

/** @type {import('contentlayer/source-files').DocumentType} */
export const BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  contentType: "mdx",
  filePathPattern: "blog/**/*.mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date when the post was published",
      required: true,
    },
    description: {
      type: "string",
      description: "Short description of the post",
      required: true,
    },
    tags: {
      type: "list",
      description: "Post tags",
      of: { type: "string" },
      required: true,
    },
    // TODO: Add image field once it lands in `contentlayer`
    ogImage: {
      type: "string",
      description: "Open Graph image",
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath,
    },
    sourceFileNameWithoutExt: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(".mdx", ""),
    },
  },
}));

/** @type {import('contentlayer/source-files').DocumentType} */
const Page = defineDocumentType(() => ({
  name: "Page",
  contentType: "mdx",
  filePathPattern: "page/**/*.mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the page",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the page.",
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [BlogPost, Page],
  contentDirExclude: ["static"],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        /** @type {import('rehype-autolink-headings').Options} */
        ({
          behavior: "wrap",
          // excluding h1 because it's the page title and handled separately
          test: ["h2", "h3", "h4", "h5", "h6"],
          properties: {
            className: ["anchor-link"],
          },
        }),
      ],
    ],
  },
});
