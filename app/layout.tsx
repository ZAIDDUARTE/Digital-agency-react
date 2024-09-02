import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Helmet } from 'react-helmet-async';
const font = Space_Grotesk({ subsets: ["latin"] });



function MyComponent() {
  return (
    <div>
      <Helmet>
        <title>OmniWebMarketing | Your Partner in Digital Success</title>
        <meta
          name="description"
          content="OmniWebMarketing is a full-service digital agency offering expert web design, SEO, and marketing strategies to help your business grow online."
        />
        <meta
          name="keywords"
          content="Digital Marketing, Web Design, SEO, Online Advertising, OmniWebMarketing"
        />
        <meta property="og:title" content="OmniWebMarketing | Your Partner in Digital Success" />
        <meta
          property="og:description"
          content="Expert digital marketing and web design services to boost your online presence and drive growth."
        />
        <meta property="og:url" content="https://www.omniwebmarketing.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OmniWebMarketing | Your Partner in Digital Success" />
        <meta
          name="twitter:description"
          content="Boost your business with our comprehensive digital marketing services."
        />
        <link rel="canonical" href="https://www.omniwebmarketing.com" />
      </Helmet>
      <h1>Welcome to OmniWebMarketing</h1>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>

        {children}
        <Analytics />

      </body>
    </html>
  );
}
