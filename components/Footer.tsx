import { useThemes } from "@/context/ThemeProvider";

function Footer() {
  const { theme } = useThemes();

  return (
    <footer
      className={` flex justify-center items-center top-[100%] left-0 w-full h-24 p-6 mt-36 ${
        theme ? "bg-blue-100 text-stone-700" : "bg-black-100 text-stone-300"
      }`}
    >
      © 2025 Sunghyun&apos;s Portfolio
    </footer>
  );
}

export default Footer;
