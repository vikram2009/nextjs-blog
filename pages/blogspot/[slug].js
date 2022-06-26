import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
const slug = () => {
  const router = useRouter();
  const {slug} = router.query;
    return (
    
    <div className={styles.slug}>{slug}</div>
  )
}

export default slug