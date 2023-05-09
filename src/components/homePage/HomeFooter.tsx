import React from 'react'
import Image from 'next/image'
import discord from "../../assets/discord 1.png"
import instagram from "../../assets/insta 1.png"
import twitter from "../../assets/twitter 1.png"
import youtube from "../../assets/youtube 1.png"
import facebook from "../../assets/facebook 1.png"
import Link from 'next/link'

const HomeFoooter = () => {
  return (
    <div className='HomeFoooterMainParent'>

      <div className="flex justify-evenly items-center flex-wrap mt-10 sm:mt-2 gap-10 sm:gap-0">
        <div className="flex flex-col gap-8 w-72 ">
          <p className='text-3xl blackBoxFont mb-5 pt-3 text-white'>
            Gemaverse
          </p>

          <div>
            <div className="flex mb-4 flex-wrap justify-between text-white interFont text-lg">
              <p className='cursor-pointer hover:underline'>About us</p>
              <p className='cursor-pointer hover:underline'>Careers</p>
            </div>
            <div className="flex flex-wrap mb-8 justify-between text-white interFont text-lg">
              <p className='cursor-pointer hover:underline'>Blog</p>
              <p className='cursor-pointer hover:underline'>Contact</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 sm:ml-0">
          <Link href={"https://discord.gg/Jzed6pEmYz"} target={"_blank"}>
            <Image src={discord} quality={100} alt='social meaid' className='cursor-pointer socialMediaIcon' />
          </Link>

          <Link href={"https://www.instagram.com/gemaverse.in/"} target={"_blank"}>
            <Image src={instagram} quality={100} alt='social meaid' className='cursor-pointer socialMediaIcon' />
          </Link>

          <Link href={"https://twitter.com/GemaverseX"} target={"_blank"}>
            <Image src={twitter} quality={100} alt='social meaid' className='cursor-pointer socialMediaIcon' />
          </Link>

          
          <Image src={facebook} quality={100} alt='social meaid' className='cursor-pointer socialMediaIcon' />

        </div>
      </div>

      <p className=' text-center interFont madeWLove mt-8'>
        Made with Love
        <span className='text-red-500'>❤ </span>
        By Gamers, For Gamers
      </p>

      <p className=' font-semibold text-center interFont madeWLove mt-3'>
        <span className='ml-2 font-semibold mr-2'>
          &copy;
        </span>
        {new Date().getFullYear()}
        <span className=' ml-1'>Gemaverse.</span> All rights reserved
      </p>


    </div>
  )
}

export default HomeFoooter
// https://www.linkedin.com/company/gemaverse/
// <Image src={youtube} quality={100} alt='social meaid' className='cursor-pointer socialMediaIcon' />