import Head from 'next/head'
import React from 'react'
import style from '../../styles/slug.module.css'
import { useRouter } from 'next/router'

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <Head>
        <title>
          {slug}
        </title>
      </Head>
      <main>
        <h1 className={style.title}>
          {slug}
        </h1>
        <p className={style.content}>

        content content content content content content content content content content content<br />
        content content content content content content content content content content content
        content content content content content content content content content content content<br />
        content content content content content content content content content content content


        </p>

      </main>
    </div>
  )
}

export default Slug