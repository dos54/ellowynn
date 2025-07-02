import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <p>&copy; Ellowyn Beimler {new Date().getFullYear()}</p>
        <ul className={styles.sociallist}>
          <li>
            <a href="facebook.com">Facebook</a>
          </li>
          <li>
            <a href="Instagram.com">Instagram</a>
          </li>
          <li>
            <a href="x.com">Twitter</a>
          </li>
        </ul>
    </footer>
  )
}