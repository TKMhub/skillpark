import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "../components/header/Header";
import styles from "../../public/globalcss/Global.module.scss";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function Open({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}
