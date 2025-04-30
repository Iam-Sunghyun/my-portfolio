"use client";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from "@/components/ui/Resizable-Navbar";
import { useThemes } from "@/context/ThemeProvider";
import { useState } from "react";
import ThemeToggleButton from "./ui/ThemeToggleButton";

export default function NavBar() {
  const { theme } = useThemes();

  const navItems = [
    {
      name: "Home",
      link: "/#Home",
    },
    {
      name: "Info",
      link: "/#Info",
    },
    {
      name: "Projects",
      link: "/#Projects",
    },
    {
      name: "Contact",
      link: "/#Contact",
    },
  ];

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody className={`${theme ? "bg-white" : "bg-black-100 "} h-[3.5rem] bg-transparent`}>
        <NavItems
          className={`${theme ? "" : "text-white hover:text-gray-800"} text-xl gap-10 font-bold`}
          items={navItems}
        />
        {/* <div className="flex items-center gap-4">
          <NavbarButton variant="secondary">Login</NavbarButton>
          <NavbarButton variant="primary">Book a call</NavbarButton>
        </div> */}
      </NavBody>

      {/*       
      <MobileNav>
        <MobileNavHeader>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
            >
              Login
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav> */}
    </Navbar>
  );
}
