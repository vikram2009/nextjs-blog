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

        <Link href='/' ><li onClick={() => setProgress(100)}>Home</li></Link>
        <Link href='/about' ><li onClick={() => setProgress(100)}>About</li></Link>
        <Link href='/blogspot/Welcome to Our Blog' ><li onClick={() => setProgress(100)}>Blog</li></Link>


            </ul>
</nav>
        </div>

    )
}
