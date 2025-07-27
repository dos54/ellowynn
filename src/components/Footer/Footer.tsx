import SignInOrOut from '../Auth/SignInOrOut'
import styles from './Footer.module.css'
import { auth } from '@/auth'

export default async function Footer() {
  const session = await auth()
  const userGreeting = ''

  if (session?.user) {

  }

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
          <li>
            <SignInOrOut />
          </li>
          {session?.user && <li>You are logged in as {session.user.name}</li>}
        </ul>
    </footer>
  )
}