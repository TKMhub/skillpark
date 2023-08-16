import Header from "@/app/conponents/header/Header";
import "../../globalcss/globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jp">
      <Head>
        <title>skillPark</title>
        <meta
          name="description"
          content="SkillPark is a web application that supports everyone's smooth skill acquisition."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
