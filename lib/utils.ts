import { Metadata } from "next";
import config from "@/lib/siteConfig";

type CommonMeta = {
  title: string;
  description: string;
  ogImage?: string;
};

export const formatDate = (date: string | Date) => {
  if (typeof date === "string") date = new Date(date);
  return Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(date);
};

export const generateCommonMeta = (meta: CommonMeta): Metadata => {
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [meta.ogImage || config.ogImage],
    },
  };
};
