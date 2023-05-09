import CalloutCard from "@/components/callout-card";
import LinkHeader from "@/components/link-header";
import config from "@/lib/siteConfig";
import { Metadata } from "next";
import { generateCommonMeta } from "@/lib/utils";

// TODO: convert this page to use contentlayer page
export const metadata: Metadata = {
  ...generateCommonMeta({
    title: "Uses",
    description:
      "A list of all the tools and hardware I use daily for a faster and productive workflow.",
    ogImage: "/og?title=Uses",
  }),
};

const hardwareLinks = {
  heading: "Hardware",
  links: [
    {
      name: "HP Omen 15 (2020)",
      href: "https://www.amazon.in/HP-15-6-inch-5-4600H-Windows-15-en0002AX/dp/B08CGGRHLH?th=1",
    },
    {
      name: "Cosmic Byte CB-GK-02 Coron Keyboard",
      href: "https://www.flipkart.com/cosmic-byte-cb-gk-02-rgb-coron-keyboard-wired-usb-gaming/p/itmc35c4fbff05af",
    },
    {
      name: "Zebronics ZEB-TRANSFORMER Mouse",
      href: "https://www.flipkart.com/zebronics-zeb-transformer-m-wired-optical-gaming-mouse/p/itm9414717eb9f98",
    },
    {
      name: "HyperX Cloud Stinger Core Headset",
      href: "https://www.flipkart.com/hyperx-cloud-stinger-core-hx-hscsc-bk-wired-gaming-headset/p/itm03c9d7be8f53a",
    },
    {
      name: "Xiaomi Redmi K20 Pro",
      href: "https://www.mi.com/in/redmi-k20-pro/",
    },
  ],
};

const devEnvLinks = {
  heading: "Development Environment",
  links: [
    {
      title: "OS",
      value: "Arch Linux",
      href: "https://archlinux.org/",
    },
    {
      title: "DE",
      value: "GNOME",
      href: "https://www.gnome.org/",
    },
    {
      title: "Terminal",
      value: "Wezterm",
      href: "https://github.com/wez/wezterm",
    },
    {
      title: "Editor",
      value: "Neovim",
      href: "https://neovim.io",
    },
    {
      title: "Browser",
      value: "Firefox, Chrome, and Brave",
      href: "",
    },
    {
      title: "Design Tool",
      value: "Figma",
      href: "https://www.figma.com/",
    },
    {
      title: "Android Terminal",
      value: "Termux",
      href: "https://github.com/termux",
    },
  ],
};

const Uses = () => {
  return (
    <section className="py-10 px-6">
      <h1 className="mb-10 text-fluid-4 font-bold">Uses</h1>
      <div className="space-y-8">
        <p>
          Here’s a list of all the tools and hardware I use daily for a faster
          and productive workflow:
        </p>
        <article className="space-y-4">
          <LinkHeader as="h2" id={hardwareLinks.heading}>
            {hardwareLinks.heading}
          </LinkHeader>
          <ul className="leading-7 lg:leading-9 list-disc list-inside md:text-fluid-0">
            {hardwareLinks.links.map((hard) => (
              <li
                key={hard.name}
                className="marker:text-grey-300/100 dark:marker:text-grey-500/100">
                <a href={hard.href} target="_blank" className="link">
                  <span>{hard.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </article>
        <article className="space-y-4">
          <LinkHeader as="h2" id="developer-env">
            {devEnvLinks.heading}
          </LinkHeader>
          <CalloutCard severity="note">
            <p>
              All of my environments scripts and dotfiles are open sourced{" "}
              <a
                href={`${config.socials.github}/dotfiles`}
                target="_blank"
                className="link-blue">
                here
              </a>
              .
            </p>
          </CalloutCard>
          <ul className="leading-7 lg:leading-9 list-disc list-inside md:text-fluid-0">
            {devEnvLinks.links.map((link) => (
              <li
                key={link.title}
                className="marker:text-grey-300/100 dark:marker:text-grey-500/100">
                <b>{link.title}: </b>
                {link.title === "Browser" ? (
                  <span>{link.value}</span>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    className="hover:underline hover:underline-offset-[0.5ex]">
                    <span>{link.value}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Uses;
