import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Theme appearance="light">
          <main className="w-screen h-screen">{children}</main>
        </Theme>
        <SpeedInsights />
      </body>
    </html>
  );
}
