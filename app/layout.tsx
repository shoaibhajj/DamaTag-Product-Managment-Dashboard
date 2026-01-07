import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";



export const metadata: Metadata = {
  title: {
    default: "DamaTag Product Management Dashboard",
    template: "%s | Product Dashboard",
  },
  description:
    "A product management dashboard for browsing, filtering, and managing e-commerce products built with Next.js, Redux Toolkit, and Material UI.",
  applicationName: "Product Dashboard",
  authors: [{ name: "Shoaib Haj Hussen" }],
  creator: "Shoaib Haj Hussen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
