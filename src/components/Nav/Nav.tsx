import styles from './Nav.module.css'

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'Projects', href: '/projects' },
  { title: 'Events', href: '/events' },
  { title: 'News', href: '/news' },
  { title: 'About', href: '/about' },
];

export default function Nav() {
  const navList = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Projects',
      href: '/projects',
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
      title: 'About',
      href: '/about',
    },
  ]

  return (
    <nav>
      <ul className={styles.navList}>
        {navList.map(navItem => (
          <li key={navItem.title} className={styles.navItem}>
            <a href={navItem.href} className={styles.navLink}>{navItem.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}