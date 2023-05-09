import { GitHub, LinkedIn, Mail, Telegram, Twitter } from "iconoir-react";
import config from "@/lib/siteConfig";

const socialLinks = [
  { icon: <GitHub />, href: config.socials.github, title: "Github" },
  { icon: <LinkedIn />, href: config.socials.linkedin, title: "LinkedIn" },
  { icon: <Twitter />, href: config.socials.twitter, title: "Twitter" },
  { icon: <Telegram />, href: config.socials.telegram, title: "Telegram" },
  { icon: <Mail />, href: `mailto:${config.socials.email}`, title: "Email" },
];

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-10 border-t border-solid border-grey-100 dark:border-grey-950 text-center text-fluid--1 py-10 text-grey-500 dark:text-grey-300">
      <div>
        <div className="mb-4">
          <p className="font-medium text-fluid--1 text-grey-600 dark:text-grey-200">
            Saurabh Charde
          </p>
          <p className="text-fluid--1">
            A front-end developer coding his way to glory.
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              className="hover:text-accent"
              target="_blank"
              href={link.href}
              aria-label={link.title}>
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <p className="text-fluid--2">
        © {new Date().getFullYear()}, Saurabh Charde. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
