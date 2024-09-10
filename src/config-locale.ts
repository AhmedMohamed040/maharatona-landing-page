import { Pathnames } from "next-intl/routing";

export type Locales = "en" | "ar";

export const locales: Locales[] = ["en", "ar"];
export const defaultLocale: Locales = "en";
export const LocalesNames = {
  en: "English",
  ar: "Arabic",
};

export const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  "/profile": {
    en: "/profile",
    ar: "/profile",
  },
  "/about-us": {
    en: "/about-us",
    ar: "/about-us",
  },
  "/partner": {
    en: "/partner",
    ar: "/partner",
  },
  "/categories": {
    en: "/categories",
    ar: "/categories",
  },
};
