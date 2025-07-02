import styles from './Sidebar.module.css'
import PostList from '@/components/PostList/PostList'

export default async function Sidebar() {

  return (
  <aside className={styles.sidebar}>
    <PostList limit={6} />
  </aside>
  )
}