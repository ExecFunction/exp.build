import { default as NextLink } from "next/link";

const MarkdownLink = ({
  children,
  href = "",
  ...restProps
}: React.ComponentPropsWithoutRef<"a">) => {
  const isRouterLink = href.startsWith("/");
  const isAnchorLink = href.startsWith("#");
  const Link = isRouterLink ? NextLink : "a";

  return (
    <Link
      href={href}
      {...(!isAnchorLink
        ? { rel: "noopener noreferrer", target: "_blank" }
        : {})}
      {...restProps}>
      {children}
    </Link>
  );
};

export default MarkdownLink;
