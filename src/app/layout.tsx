import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Job Tracker",
  description: "Track your job application here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Theme appearance="dark">
          <main className="w-screen h-screen">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
