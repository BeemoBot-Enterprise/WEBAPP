import "@/styles/globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Best Beemo Bot",
  description: "The best discord bot to help you playing with teemo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-[100vh] w-full">{children}</body>
    </html>
  );
}
