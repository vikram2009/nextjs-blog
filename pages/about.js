import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
const about = () => {
  return (

<div>
  <Head>
    <title>About</title>
  </Head>
<h1>
<Link href="/Blog-1.txt">
    First Blog
</Link>
<br/>
<a href="/Blog-1.txt">
    FIRST BLOG
    </a>

     </h1>

    </div>
  )
}

export default about