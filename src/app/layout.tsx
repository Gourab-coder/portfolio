import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/nav/Navbar";

export const metadata: Metadata = {
  title: "Gourab Das | Full-Stack Engineer",
  description: "Senior-style portfolio of Gourab Das, focused on polished frontend systems and practical backend engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
