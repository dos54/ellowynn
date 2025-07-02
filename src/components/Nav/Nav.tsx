import styles from './Nav.module.css'
import Link from 'next/link';

export default function Nav() {
  const navList = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Books',
      href: '/books',
    },
    {
      title: 'Events',
      href: '/events',
    },
    {
      title: 'News',
      href: '/news',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: 'About',
      href: '/about',
    },
  ]

  return (
    <nav>
      <ul className={styles.navList}>
        {navList.map(navItem => (
          <li key={navItem.title} className={styles.navItem}>
            <Link href={navItem.href} className={styles.navLink}>{navItem.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}