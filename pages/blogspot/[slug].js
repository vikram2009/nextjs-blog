import { useRouter } from "next/router"
import styles from '../../styles/Home.module.css'

export default function slug() {
  const router = useRouter()
  const {slug }= router.query;
  return ( 
  
  <div className={styles.slug}>
    {slug}
    </div>

  )
}