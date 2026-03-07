import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { Lenis } from "lenis/react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Designo - Digital Creative Agency",
    template: "Designo - %s",
  },
  description:
    "Designo is a digital creative agency that provides a wide range of services, including web design, app development, and digital marketing. We are passionate about creating beautiful and functional digital experiences that help our clients achieve their goals.",
};

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jost",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Lenis root>
        <body className={`${jost.variable} antialiased`}>
          <main className="ac">{children}</main>
        </body>
      </Lenis>
    </html>
  );
}
