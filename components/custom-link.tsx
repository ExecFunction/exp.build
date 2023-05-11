import { default as NextLink } from "next/link";

const Link = ({
  children,
  href = "",
  ...restProps
}: React.ComponentPropsWithoutRef<"a">) => {
  const isRouterLink = href.startsWith("/");
  const isExternalLink = href.startsWith("https");
  const Link = isRouterLink ? NextLink : "a";

  return (
    <Link
      href={href}
      {...(isExternalLink
        ? { rel: "noopener noreferrer", target: "_blank" }
        : {})}
      {...restProps}>
      {children}
    </Link>
  );
};

export default Link;
