import "./globals.css";
import type { Metadata } from "next";
import { fonts } from "./fonts";

export const metadata: Metadata = {
  title: "Eva Bonald",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body data-theme = "light" className={fonts.poppins.className}>{children}</body>
    </html>
  );
}
