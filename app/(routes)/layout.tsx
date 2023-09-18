import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "@/app/_styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const GTM_ID = process.env.GOOGLE_TAG_MANAGER || "";

export const metadata: Metadata = {
  title: "Mickael Neves",
  description:
    "Mickael Neves is a senior front-end engineer who builds products and delivers top-notch user experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <body className={inter.className}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
        <main className="mx-auto max-w-screen-lg px-4 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
