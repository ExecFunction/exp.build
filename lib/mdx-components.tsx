import type { MDXComponents } from "mdx/types";
import MarkdownImage from "@/components/markdown-image";
import Link from "@/components/custom-link";

const mdxComponents: MDXComponents = {
  // @ts-ignore https://github.com/DefinitelyTyped/DefinitelyTyped/pull/65003
  img: MarkdownImage,
  a: Link,
};

export default mdxComponents;
