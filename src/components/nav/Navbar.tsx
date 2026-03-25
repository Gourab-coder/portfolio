"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { portfolioData } from "../../data/portfolioData";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        {portfolioData.brand}
      </Link>

      <ul className={styles.navLinks}>
        {portfolioData.navLinks.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
