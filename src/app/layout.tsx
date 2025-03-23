import { Metadata } from "next";
import { Providers } from "@/components/providers";
import trendibbleFonts from "@/fonts";

import "@workspace/ui/globals.css";
import '@/anime/anime.css'

export const metadata: Metadata = {
  title: "Trendibble",
  description:
    "Trendibble is a cutting-edge platform that connects brands with influencers to create impactful and meaningful collaborations.",
  openGraph: {
    siteName: "Trendibble",
    type: "website",
    images: [], // TODO: update trendibble open graph images,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${trendibbleFonts.AlteHaasGrotesk.variable} ${trendibbleFonts.Lato.variable} font-sans antialiased text-brand-gray-500`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
