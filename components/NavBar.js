import React, { useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react'
import { useRouter } from 'next/router'
export const NavBar = () => {
        const router = useRouter();

    const [progress, setProgress] = useState(0)
  useEffect(() => {
        router.events.on('routeChangeStart' , () => {
                setProgress(40);
                        })

                        router.events.on('routeChangeComplete' , () => {
                                setProgress(100);
                                        })


  })
    return (

        <div>
        <div>
        <LoadingBar
          color='blue'
          progress={progress}
          waitingTime={600}
          onLoaderFinished={() => setProgress(0)}
        />
        </div>
        <nav className={styles.navbar}>

            <ul>

{/* Home */}
        <Link href='/' ><li>
        <img src="/home.svg"></img>
        &nbsp;Home</li></Link>
        
{/* About */}
        <Link href='/about' ><li>
        <img src="/about.svg"></img>
        &nbsp;About</li></Link>
        
{/* Blog */}
<Link href='/blog' ><li>
        <img src="/blog.svg"></img>
        &nbsp;Blog</li></Link>

{/* Contact */} 
       <Link href='/contact' ><li>
        <img src="/contact.svg"></img>
        &nbsp;Contact</li></Link>




            </ul>
</nav>
        </div>

    )
}
