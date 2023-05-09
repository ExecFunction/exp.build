import type { MDXComponents } from "mdx/types";
import MarkdownImage from "@/components/markdown-image";
import MarkdownLink from "@/components/markdown-link";

const mdxComponents: MDXComponents = {
  // @ts-ignore https://github.com/DefinitelyTyped/DefinitelyTyped/pull/65003
  img: MarkdownImage,
  a: MarkdownLink,
};

export default mdxComponents;
