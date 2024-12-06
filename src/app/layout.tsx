import { ReactNode } from "react";
import { Public_Sans, Karla } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import localFont from '@next/font/local'

export const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"]
});


export const karla = Public_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"]
});

export const VIOLA = localFont({
  src: [
    {
      path: '../../public/fonts/VIOLA.ttf',
      weight: '300'
    }
  ],
  // weight: "200",
  variable: '--font-poppins'
})

import "overlayscrollbars/overlayscrollbars.css";
// SLICK CAROUSEL CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// THEME PROVIDER
import ThemeProvider from "theme/theme-provider";
// PRODUCT CART PROVIDER
import CartProvider from "contexts/CartContext";
// SITE SETTINGS PROVIDER
import SettingsProvider from "contexts/SettingContext";
// GLOBAL CUSTOM COMPONENTS
import RTL from "components/rtl";
import ProgressBar from "components/progress";

// IMPORT i18n SUPPORT FILE
import "i18n";

export default function RootLayout({ children, modal }: { children: ReactNode; modal: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body id="body" className={publicSans.className}>
        <CartProvider>
          <SettingsProvider>
            <ThemeProvider>
              <ProgressBar />
              <RTL>
                {modal}
                {children}
              </RTL>
            </ThemeProvider>
          </SettingsProvider>
        </CartProvider>

        <GoogleAnalytics gaId="G-XKPD36JXY0" />
      </body>
    </html>
  );
}
