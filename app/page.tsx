import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
          <div>Hello World From ANAM
            <br/>
            <Link href = "/name">To Find Name click Here</Link>
          
          </div>
  )
}