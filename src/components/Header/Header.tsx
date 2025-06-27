import Nav from "@/components/Nav/Nav"
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
      <p>Logo</p>
      <h1>Ellowyn.com</h1>
      </div>
      <Nav />
    </header>
  )
}