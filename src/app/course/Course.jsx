import Link from 'next/link'
import React from 'react'

export default function Course() {
  return (
    <nav>
        <ul className='flex justify-around h-10 bg-blue-800 text-white text-2xl'>
            <Link href='/course'> 
            <li>all</li>      
            </Link>

            <Link href='/course/drama'>
            <li>drama</li>
            </Link>

            <Link href='/course/prose'>
            <li>prose</li>
            </Link>
            
            <Link href='/course/novel'>
            <li>novel</li>
            </Link>
        </ul>
    </nav>
  )
}
