"use client";

import { ThemeContext } from "@/contexts/ThemeProvider";
import clsx from "clsx";
import { HalfMoon, SunLight } from "iconoir-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import "../styles/nav.css";

const navLinks: Array<{ text: string; href: string }> = [
  { text: "About", href: "/" },
  { text: "Blog", href: "/blog" },
  { text: "Projects", href: "/projects" },
  { text: "Uses", href: "/uses" },
];

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const pathname = usePathname();
  const { toggleTheme, theme } = useContext(ThemeContext);

  // close nav menu on navigation
  useEffect(() => {
    setShowNav(false);
  }, [pathname]);

  return (
    <div
      className={clsx("nav-wrapper", showNav && "nav-active")}
      onClick={(e) => {
        if (e.currentTarget === e.target) setShowNav(false);
      }}>
      <nav className="nav">
        <ul>
          {navLinks.map((link, idx) => (
            <li
              style={
                showNav ? { transitionDelay: `${(idx + 1) * 100 + 300}ms` } : {}
              }
              key={link.text}>
              <Link href={link.href} className="nav-link">
                <span>{link.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className="theme-toggle-btn"
        onClick={toggleTheme}
        aria-label="Theme Toggle">
        {theme === "dark" ? <SunLight /> : <HalfMoon />}
      </button>
      <button
        className="nav-btn"
        onClick={() => setShowNav(!showNav)}
        aria-label="Menu Button">
        <div className={"nav-btn__icon"}>
          <div></div>
        </div>
      </button>
    </div>
  );
};

export default Nav;
