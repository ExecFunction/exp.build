import clsx from "clsx";
import { OpenNewWindow } from "iconoir-react";
import { default as NextLink } from "next/link";

type CardProps = {
  title: string;
  subtitle: string;
  tags: Array<string>;
  href: string;
};

const Card = ({ title, subtitle, tags, href }: CardProps) => {
  const isRouterLink = href.startsWith('/')
  const Link = isRouterLink ? NextLink : "a";

  return (
    <>
      <article
        className={clsx(
          "group border-2 border-solid border-grey-300 dark:border-grey-800 rounded-lg",
          "hover:!border-transparent bg-gradient-primary bg-fixed overflow-hidden duration-150"
        )}>
        <Link
          href={href}
          className={clsx(
            "flex flex-col h-full w-full relative text-black bg-white p-4 lg:p-6",
            "dark:text-white dark:bg-black transition-theme"
          )}>
          {!isRouterLink && (
            <div
              className={clsx(
                "absolute text-sm right-4 lg:right-6 text-grey-200 dark:text-grey-500",
                "group-hover:text-grey-500 group-hover:dark:text-grey-300",
                "transition-theme"
              )}>
              <OpenNewWindow />
            </div>
          )}
          <p className="mb-2 lg:mb-3 font-medium">{title}</p>
          <p
            className={clsx(
              "text-fluid--1 text-grey-500 dark:text-grey-300 mb-4 lg:mb-6",
              "group-hover:text-grey-900 group-hover:dark:text-grey-100 transition-theme"
            )}>
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <div
                className={clsx("bg-gradient-primary bg-fixed rounded-full")}>
                <p
                  className={clsx(
                    "pill bg-white dark:bg-black transition-theme",
                    "text-fluid--2 text-grey-500 dark:text-grey-300 font-medium",
                    "border border-solid border-grey-300 dark:border-grey-800",
                    "group-hover:bg-transparent group-hover:border-transparent",
                    "group-hover:text-white"
                  )}>
                  {tag}
                </p>
              </div>
            ))}
          </div>
        </Link>
      </article>
    </>
  );
};

export default Card;
