import React from 'react'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
const Slug = () => {
  const router = useRouter();
  const { slug } = router.query ;
  return (
    <div className={styles.slug}>{slug}</div>
  )
}

export default Slug