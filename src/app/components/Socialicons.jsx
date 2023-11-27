import Link from 'next/link';
import React from 'react'
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";
import { IoCall } from "react-icons/io5";


export default function Socialicons() {
  return (
    <div className='flex gap-4'>
        <Link href='https://www.linkedin.com/login'> 
        <BsLinkedin />
        </Link>

        <Link href='https://github.com/'>
        <BsGithub />
        </Link>

        <Link href='https://twitter.com/home'>
        <BsTwitter />
        </Link>
        <Link href='https://www.instagram.com/luv.rodeeyah/'>
        <BsInstagram />
        </Link>
        <Link href= 'tel: +2349076337008'>
        <IoCall />
        </Link>
        
    </div>
  )
}
