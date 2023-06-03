import { Metadata } from "next";
import { generateCommonMeta } from "@/lib/utils";
import config from "@/lib/siteConfig";
import Card from "@/components/card";

export const metadata: Metadata = {
  ...generateCommonMeta({
    title: "Projects",
    description: "All my open-source projects and works.",
    ogImage: "/og?title=Projects",
  }),
};

const projects = [
  {
    title: "schar.dev",
    desc: "My personal portfolio website built using latest Next 13 app directory, Tailwind CSS and Content Layer.",
    href: `${config.socials.github}/schar.dev`,
    tags: ["React", "Next.js", "Tailwind CSS", "Content Layer"],
  },
  {
    title: "Torrent Metadata",
    desc: "A simple web app to extract metadata from .torrent file, magnet URI or torrent info hash.",
    href: `${config.socials.github}/torrent-metadata`,
    tags: ["Express", "Next.js", "Typescript", "React", "Tailwind CSS"],
  },
  {
    title: "CSS Modular Type",
    desc: "A PostCSS and TailwindCSS plugin to generate modular type scales.",
    href: `${config.socials.github}/css-modular-type`,
    tags: ["Typescript", "PostCSS", "TailwindCSS"],
  },
  {
    title: "Netflix Clone",
    desc: "Netflix clone built using React and React Router DOM, Vite and TMDB API. ",
    href: "https://nfx.vercel.app",
    tags: ["Typescript", "React", "SCSS", "Vite"],
  },
];

const Project = () => {
  return (
    <section className="px-6 py-10">
      <h1 className="mb-10 text-fluid-4 font-bold">Projects</h1>
      <div className="grid gap-4 md:gap-6 md:grid-cols-2">
        {projects.map((proj) => {
          return (
            <Card
              key={proj.title}
              title={proj.title}
              subtitle={proj.desc}
              tags={proj.tags}
              href={proj.href}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Project;
