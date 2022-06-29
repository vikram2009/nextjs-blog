import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
export const NavBar = () => {
    return (

        <nav className={styles.navbar}>

            <ul>

        <Link href='/'><li>Home</li></Link>
        <Link href='/about'><li>About</li></Link>
        <Link href='/blogspot/Welcome to Our Blog'><li>Blog</li></Link>


            </ul>
</nav>

    )
}
