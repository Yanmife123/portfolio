import type { Metadata } from "next";
import { Space_Grotesk, Noto_Sans } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Navbar } from "@/components/pages/navbar";

export const metadata: Metadata = {
  title: {
    default: "Yanmife | Software Engineer",
    template: "%s | Yanmife",
  },
  description:
    "Portfolio of Yanmife, a software engineer specializing in Next.js, Laravel, TypeScript, and React — building scalable web applications and clean, functional user interfaces.",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk", // Creates a CSS variable for Tailwind
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans", // Creates a CSS variable for Tailwind
  display: "swap",
});

const zeroArea = localFont({
  src: "./fonts/ZeroareaRegular-8O1Pn.otf",
  variable: "--font-zero-area", // Creates a CSS variable for Tailwind
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${spaceGrotesk.variable} ${zeroArea.variable} ${notoSans.variable} scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <div className=" text-white bg-dark">
          <Navbar />
          <div> {children}</div>
        </div>
      </body>
    </html>
  );
}
