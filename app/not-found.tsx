import Image from "next/image";

const NotFound = () => {
  return (
    <>
      {/* TODO: remove <head> when next fixes not-found page
        see - https://github.com/vercel/next.js/issues/47862
      */}
      <head>
        <title>404 | Not Found</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <div className="flex flex-col items-center justify-center h-full text-black dark:text-white">
        <div className="bg-circles"></div>
        <Image
          src="/images/yuzuko_404.webp"
          alt=""
          width={150}
          height={150}
          className="pointer-events-none w-40"
        />
        <h1 className="text-fluid-4">404</h1>
        <p>Page does not exist.</p>
      </div>
    </>
  );
};

export default NotFound;
