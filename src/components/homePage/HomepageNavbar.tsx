import React from 'react'
import loginButton from "../../assets/login button top.png"
import { FcGoogle } from "react-icons/fc"
import Link from 'next/link'

const HomepageNavbar = () => {
    return (
        <div>
            <div className="flex w-full justify-between mt-4 navbarHold mx-auto items-center">
                <p className='md:text-4xl text-2xl blackBoxFont text-white'>
                    Gemaverse
                </p>

                <div className="login-button-container">
                    <Link href={"/dashboard"} >
                        <div className="flex homepageNavbarLOginButton items-center relative z-10 md: gap-4 justify-evenly">
                            <p className='text-white uppercase cursor-pointer'>log in with</p>
                            <div className="bg-white rounded cursor-pointer w-9 flex justify-center items-center h-9">
                                <FcGoogle className='text-2xl' />
                            </div>
                        </div>
                    </Link>
                </div>

            </div>

            {  /*   <Image src={bghexagon} alt='hexagon' quality={100} className='hexagon'  /> */}

        </div>
    )
}

export default HomepageNavbar