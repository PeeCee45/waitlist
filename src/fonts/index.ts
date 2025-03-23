import localFont from "next/font/local";
import { Lato, Space_Grotesk } from "next/font/google";

const AlteHaasGrotesk = localFont({
  display: "swap",
  preload: true,
  variable: "--alte-haas-grotesk",
  src: [
    {
      path: "./files/alte-haas-grotesk/AlteHaasGroteskRegular.ttf",
      weight: "400",
    },
    {
      path: "./files/alte-haas-grotesk/AlteHaasGroteskBold.ttf",
      weight: "700",
    },
  ],
});

const CabinetGrotesk = localFont({
  display: "swap",
  preload: true,
  variable: "--cabinet-grotesk",
  src: "./files/cabinet-grotesk/CabinetGrotesk-Variable.ttf",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--lato",
  weight: ["100", "300", "400", "700", "900"],
});

const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export default {
  AlteHaasGrotesk,
  CabinetGrotesk,
  Lato: lato,
  SpaceGrotesk,
};
