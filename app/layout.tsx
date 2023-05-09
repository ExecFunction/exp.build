import "@/styles/global.css";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import ThemeProvider from "@/contexts/ThemeProvider";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import clsx from "clsx";
import { Metadata } from "next";
import config from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: {
    default: config.title,
    template: `%s | ${config.title}`,
  },
  description: config.description,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    title: {
      default: config.title,
      template: `%s | ${config.title}`,
    },
    description: config.description,
    siteName: config.title,
    url: config.url,
    images: [config.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@SaurabhCharde",
  },
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-family-sans",
  weight: ["400", "500", "700"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-family-mono",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      data-theme="dark"
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body
        className={clsx(
          "text-black bg-white dark:text-white dark:bg-black",
          "selection:bg-accent selection:text-white transition-theme"
        )}>
        <ThemeProvider>
          <Nav />
        </ThemeProvider>
        <div className="flex justify-center min-h-screen">
          <main className="w-full max-w-screen-lg">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
