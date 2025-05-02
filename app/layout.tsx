import { ThemeProvider } from "@/context/ThemeProvider";
import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import "./globals.css";
import { ScrollProvider } from "@/context/ScrollProvider";

const nanumGothic = Nanum_Gothic({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Newbie frontend developer's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={` ${nanumGothic.className}  antialiased scrollbar `}>
        <ScrollProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ScrollProvider>
      </body>
    </html>
  );
}
