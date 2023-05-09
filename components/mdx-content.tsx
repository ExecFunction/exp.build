import mdxComponents from "@/lib/mdx-components";
import { useMDXComponent } from "next-contentlayer/hooks";

type MDXContentProps = {
  code: string;
};

const MDXContent = ({ code }: MDXContentProps) => {
  const Content = useMDXComponent(code);
  return <Content components={mdxComponents} />;
};

export default MDXContent;
