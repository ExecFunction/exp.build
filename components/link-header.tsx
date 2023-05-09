import clsx from "clsx";
import { HTMLAttributes } from "react";
import { Link as LinkIcon } from "iconoir-react";

type LinkHeaderProps = HTMLAttributes<HTMLElement> & {
  as?: Extract<
    keyof JSX.IntrinsicElements,
    "p" | "div" | "h1" | "h2" | "h3" | "h4" | "h5"
  >;
};

const LinkHeader = ({
  children,
  className,
  as: Heading = "div",
  id,
  ...restProps
}: LinkHeaderProps) => {
  return (
    <Heading
      id={id}
      className={clsx("group link-header", className)}
      {...restProps}>
      <a className="anchor-link" href={`#${id}`}>
        {children}
      </a>
      <LinkIcon className="invisible group-hover:visible text-[0.5em] rotate-[125deg]" />
    </Heading>
  );
};

export default LinkHeader;
