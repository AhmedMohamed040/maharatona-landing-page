import { Locales, locales } from "@/config-locale";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { Roboto } from "next/font/google";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { ThemeProvider } from "@mui/material";
import theme from "@/lib/hooks/mui/theme";

// Base Font
const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locales };
}) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={roboto.className} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider theme={theme}>
            <Header />
            <main style={{ minHeight: 300, marginTop: "184px" }}>
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
