import type { Metadata } from "next";
import { bloggerSans } from "./fonts";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Prepaid Card Verification Portal",
  description:
    "The prepaid card verification portal is primarily used by the finance team and member success team to verify cards of trust group members and also resolve card issues",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bloggerSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
