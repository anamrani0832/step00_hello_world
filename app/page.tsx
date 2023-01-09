import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from './page.module.css'
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className="title">Welcome To AnamTech</h1>
      <br />
      Read My <Link href="/name">Name</Link>
    </div>
  );
}
