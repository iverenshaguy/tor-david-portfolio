import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseUrl } from "./sitemap";
import { Poppins } from "next/font/google";
import { ReactLenis } from "lenis/react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Tor David Shaguy - Portfolio",
    template: "%s | Tor David's Portfolio",
  },
  description: "Tor David's Portfolio.",
  openGraph: {
    title: "Tor David Shaguy - Portfolio",
    description: "Tor David's Portfolio.",
    url: baseUrl,
    siteName: "Tor David Shaguy - Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/open-graph-image.png",
        width: 1200,
        height: 630,
        alt: "Tor David Shaguy - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tor David Shaguy - Portfolio",
    description: "Tor David's Portfolio.",
    images: ["/open-graph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "bg-white text-black dark:bg-black dark:text-white",
        poppins.variable,
      )}
    >
      <body className="scroll-smooth antialiased">
        <main className="flex min-w-0 flex-auto flex-col px-2 md:px-0">
          <ReactLenis root>
            {children}
            <Analytics />
            <SpeedInsights />
          </ReactLenis>
        </main>
      </body>
    </html>
  );
}
