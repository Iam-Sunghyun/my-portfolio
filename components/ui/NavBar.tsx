"use client";
import { Navbar, NavBody, NavItems } from "@/components/ui/Resizable-Navbar";
import { useThemes } from "@/context/ThemeProvider";
import NavigationBar from "./NavigationBar";

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
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav>
      <Navbar className="hidden xs:block ">
        {/* Desktop Navigation */}
        <NavBody className={`${theme ? "bg-white" : "bg-black-100 "} h-[3.5rem] bg-transparent`}>
          <NavItems
            className={`${
              theme ? "" : "text-white hover:text-gray-800"
            } text-xl gap-10 hidden min-[510px]:flex`}
            items={navItems}
          />
          {/* <div className="flex items-center gap-4">
          <NavbarButton variant="secondary">Login</NavbarButton>
          <NavbarButton variant="primary">Book a call</NavbarButton>
          </div> */}
          {/* <div
          className={`flex gap-14 justify-center text-2xl tracking-wider pl-2 items-center ${
            theme ? "text-stone-600" : "text-white"
            } mx-auto`}
            >
            <Link href="/#Home" className="xs:hidden hover:scale-110">
            <AiOutlineHome />
            </Link>
            <Link href="/#Info" className="xs:hidden hover:scale-110">
            <HiOutlineWrench />
            </Link>
            <Link href="/#Projects" className="xs:hidden hover:scale-110">
            <BiBook />
            </Link>
            <Link href="/#Contact" className="xs:hidden hover:scale-110">
            <MdOutlinePersonOutline />
            </Link>
            </div> */}
        </NavBody>
      </Navbar>
      <NavigationBar />
    </nav>
  );
}
