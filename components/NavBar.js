import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react'
export const NavBar = () => {
    const [progress, setProgress] = useState(0)
    return (

        <div>
        <div>
        <LoadingBar
          color='red'
          progress={progress}
          waitingTime={600}
          onLoaderFinished={() => setProgress(0)}
        />
        </div>
        <nav className={styles.navbar}>

            <ul>

{/* Home */}
        <Link href='/' ><li onClick={() => setProgress(100)}>
        <img src="/home.svg"></img>
        &nbsp;Home</li></Link>
        
{/* About */}
        <Link href='/about' ><li onClick={() => setProgress(100)}>
        <img src="/about.svg"></img>
        &nbsp;About</li></Link>
        
{/* Blog */}
        <Link href='/blog' ><li onClick={() => setProgress(100)}>
        <img src="/blog.svg"></img>
        &nbsp;Blog</li></Link>


            </ul>
</nav>
        </div>

    )
}
