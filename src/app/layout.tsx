import "app/globals.css";
import type { Metadata } from "next";
import { baseUrl } from "app/sitemap";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Only load weights you actually use
  display: "swap", // Optimize font loading
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Tor David Shaguy - Portfolio",
    template: "%s | Tor David's Portfolio",
  },
  description:
    "I am a UI/UX Designer and I conduct QA tests for websites and applications. I am skilled in a range of design tools such as Figma, Webflow, Notion, Microsoft Office, and more.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/logo.png",
  },
  openGraph: {
    title: "Tor David Shaguy - Portfolio",
    description:
      "I am a UI/UX Designer and I conduct QA tests for websites and applications. I am skilled in a range of design tools such as Figma, Webflow, Notion, Microsoft Office, and more.",
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
    description:
      "I am a UI/UX Designer and I conduct QA tests for websites and applications. I am skilled in a range of design tools such as Figma, Webflow, Notion, Microsoft Office, and more.",
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
  verification: {
    google: "vpXalrTLMlB3tHmqNPG8mcFt1q_Z1eMrpobG2Q8476g",
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cx(
        "bg-white text-[#1A1A1A] dark:bg-[#1A1A1A] dark:text-white",
        poppins.variable,
      )}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/logo.png" sizes="180x180" />
      </head>
      {children}
    </html>
  );
}
