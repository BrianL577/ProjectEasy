import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "easy flight support — fuel & ground handling network",
  description:
    "Tailor-made fuel and ground handling coordination for aircraft operators.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
