import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Providers } from "@/lib/Providers";

import "./globals.css";
import "react-tooltip/dist/react-tooltip.css";

import { inter, urbanist } from "@/lib/fonts";
import { appName, appURL } from "@/lib/app-config";

export const metadata: Metadata = {
  title: {
    template: "%s | " + appName,
    default: appName,
  },
  description:
    "A Next.js starter kit with auth and subscriptions powered by Reflow",
  metadataBase: new URL(appURL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${urbanist.variable} dark:bg-gray-800 dark:text-white`}
      >
        <Providers>
          {children}
          <Toaster position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
