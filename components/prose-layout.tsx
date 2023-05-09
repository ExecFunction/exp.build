import clsx from "clsx";

const ProseLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={clsx("prose dark:prose-invert", className)}>{children}</div>
  );
};

export default ProseLayout;
