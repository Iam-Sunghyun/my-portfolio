"use client";
import { Navbar, NavBody, NavItems } from "@/components/ui/Resizable-Navbar";
import { useThemes } from "@/context/ThemeProvider";
import NavigationBar from "./NavigationBar";

const navItems = [
  {
    name: "Home",
    link: "/#Home",
  },
  {
    name: "About",
    link: "/#About",
  },
  {
    name: "Skills",
    link: "/#Skills",
  },
  {
    name: "Projects",
    link: "/#Projects",
  },
  // {
  //   name: "Archive",
  //   link: "/#Archive",
  // },
  {
    name: "Contact",
    link: "/#Contact",
  },
];

export default function NavBar() {
  const { theme } = useThemes();

  return (
    <nav>
      <Navbar className="hidden xs:block ">
        {/* Desktop Navigation */}
        <NavBody className={`${theme ? "bg-white" : "bg-black-100 "} h-[3rem] bg-transparent`}>
          <NavItems
            className={`${theme ? "" : "text-white hover:text-gray-800"}   hidden min-[510px]:flex`}
            items={navItems}
          />
        </NavBody>
      </Navbar>
      <NavigationBar />
    </nav>
  );
}
