import Image from "next/image";

type MarkdownImageProps = React.ComponentPropsWithoutRef<"img">;

const MarkdownImage = async ({ src, alt = "" }: MarkdownImageProps) => {
  if (!src) return null;
  const isPublicImage = src.startsWith("/");
  const isExternalImage = src.startsWith("https");
  let ImgToRender = <img src={src} alt={alt} />;

  if (isPublicImage) {
    const img = await import(`../public/images${src}`);
    ImgToRender = <Image src={img} alt={alt} />;
  }

  if (isExternalImage) {
    // This is a workaround to pass width and height data to next/image as I
    // can't pass that info using just markdown tag itself, since I don't want
    // to bother creating a rehype/remark plugin, I just pass them using
    // `searchParams` and extract it here.
    // TODO: rework when contentlayer adds support for image field
    const srcUrl = new URL(src);
    const w = srcUrl.searchParams.get("width");
    const h = srcUrl.searchParams.get("height");

    if (w && h) {
      ImgToRender = <Image src={src} alt={alt} width={+w} height={+h} />;
    } else {
      console.log(
        `Couldn't find width and height in searchParams for external image: ${src}`
      );
    }
  }

  return (
    <figure>
      {ImgToRender}
      {alt && <figcaption>{alt}</figcaption>}
    </figure>
  );
};

export default MarkdownImage;
