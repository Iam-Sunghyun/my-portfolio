import { useThemes } from "@/context/ThemeProvider";

function Footer() {
  const { theme } = useThemes();

  return (
    <div
      className={`relative flex justify-center items-center top-[100%] left-0 w-full h-24 p-6  ${
        theme ? "bg-blue-100 text-stone-700" : "bg-black-100 text-stone-300"
      }`}
    >
      footer
    </div>
  );
}

export default Footer;
