import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <h2 className={styles.h1}>Home</h2>

      <Link href="/about" target="_blank">About</Link><br />
      <Link href="/contact">Contact</Link><br />
      <Link href="/contact/serves">Serves</Link>
    </>
  );
}
