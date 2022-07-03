import Head from 'next/head'
import React, { useEffect } from 'react'
import styles from '../styles/blog.module.css'
import Link from 'next/link'
const Blog = () => {

  useEffect(() => {
    fetch("https://nextjs-blog-vikram2009.vercel.app/api/blog").then((a) =>{
      return a.json(); })
      .then((parsed) => {
        console.log(parsed)        
      })
  })

  return (
    <div>
        <Head>
            <title>
                Blog
            </title>

        </Head>
<main className={styles.content}>

<Link href='/blogspot/What Is JavaScript'>
<a>
  
  <h1>    Learn JavaScript  </h1>

</a>
</Link>



  <Link href='/blogspot/Best JS Frameworks'>
<a>

  <h1>Best JS Frameworks</h1>
  
</a>
</Link>





</main>

    </div>
  )
}

export default Blog