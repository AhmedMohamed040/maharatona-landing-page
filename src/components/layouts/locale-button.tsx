"use client";

import { Button } from "@mui/material";

import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { defaultLocale, locales, LocalesNames } from "@/config-locale";

export default function LocaleButton() {
  const currentLocale = useLocale();
  const anotherLocale =
    locales.find((locale) => locale !== currentLocale) || defaultLocale;
  const pathname = usePathname();
  const link = pathname.replace(`/${currentLocale}`, `/${anotherLocale}`);

  return (
    <Button
      // onClick={link}
      href={link}
      sx={{
        fontSize: { xs: "14px", md: "16px" },
        fontWeight: "bold",
        bg: "#919EAB",
      }}
    >
      {currentLocale}
    </Button>
  );
}
