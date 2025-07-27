'use client'

import { usePathname } from 'next/navigation';
import Hamburger from 'hamburger-react';

import styles from './Nav.module.css'
import Link from 'next/link';
import { useState } from 'react';

export default function Nav(
) {

  const currentPath = usePathname()

  const [isOpen, setOpen] = useState(false)

  const navList = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Books',
      href: '/books',
    },
    // {
    //   title: 'Events',
    //   href: '/events',
    // },
    // {
    //   title: 'News',
    //   href: '/news',
    // },
    // {
    //   title: 'Blog',
    //   href: '/blog',
    // },
    {
      title: 'About',
      href: '/about',
    },
  ]

  return (
    <nav className={styles.nav}>
      <div className={styles.hamburger}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <ul className={`${styles.navList} ${isOpen ? styles.mobileOpen : ''}`}>
        {navList.map(navItem => {
          const isSelected = navItem.href === '/' ? currentPath ==='/' : currentPath.startsWith(navItem.href)

          return(
          <li key={navItem.title} className={styles.navItem}>
            <Link href={navItem.href} className={`${styles.navLink} ${isSelected ? styles.selected : ''}`}>{navItem.title}</Link>
          </li>)
    })}
      </ul>
    </nav>
  )
}