import { useThemes } from "@/context/ThemeProvider";

function Card({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  const { theme } = useThemes();
  return (
    <div
      className={`border rounded-lg ${
        theme ? "shadow-md" : "shadow-white-100 shadow-md"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
