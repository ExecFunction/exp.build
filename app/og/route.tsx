// TODO: Remove this with `ImageResponse` from `next/server` once they bump the
// vendored `@vercel/og` package, as currently radial-gradient doesn't work
// as expected
import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

const font = fetch(
  new URL("../../assets/fonts/SpaceGrotesk-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const fontMedium = fetch(
  new URL("../../assets/fonts/SpaceGrotesk-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(request: Request) {
  const fontData = await font;
  const fontDataMedium = await fontMedium;
  const url = new URL(request.url);
  const title = url.searchParams.get("title");

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          height: "100%",
          backgroundColor: "#121212",
          fontFamily: "SpaceGrotesk",
        }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "radial-gradient(circle at 0% 15%, rgba(131, 24, 69, 0.45), rgba(0,0,0,0) 40%), radial-gradient(circle at 100% 80%, rgba(31, 50, 137, 0.45),rgba(0,0,0,0) 40%)",
          }}></div>
        {title && (
          <p
            style={{
              fontFamily: "SpaceGroteskMedium",
              fontSize: 120,
              color: "white",
              margin: 0,
            }}>
            {title}
          </p>
        )}
        <p
          style={{
            color: "white",
            fontSize: title ? 40 : 100,
          }}>
          <span
            style={{
              background:
                "linear-gradient(90deg, rgba(171, 112, 243, 1) 0%, rgba(238, 90, 132, 1) 50%, rgba(233, 132, 23, 1) 100%)",
              backgroundClip: "text",
              // @ts-ignore
              "-webkit-background-clip": "text",
              color: "transparent",
            }}>
            schar
          </span>
          .dev
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: "SpaceGrotesk",
          data: fontData,
          style: "normal",
        },
        {
          name: "SpaceGroteskMedium",
          data: fontDataMedium,
          style: "normal",
        },
      ],
    }
  );
}
