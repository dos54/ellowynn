import Nav from "@/components/Nav/Nav"
import styles from './Header.module.css'
import Logo from "@/components/Logo/Logo"
import Link from "next/link"

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href='/' className={styles.link}>
        <Logo />
      </Link>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Ellowyn.com</h1>
        <Nav />
      </div>
    </header>
  )
}