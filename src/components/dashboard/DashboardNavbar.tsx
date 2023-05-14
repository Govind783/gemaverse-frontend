import React from 'react'
import Image from 'next/image'
import discord from "../../assets/discorLoginDashboard.svg"
import riotId from "../../assets/riotDashboardLogin.svg"
import { Tooltip } from '@chakra-ui/react'
import Link from 'next/link'
const DashboardNavbar = () => {
    // to get the First letter of the the user's name after login you can use "chartAt[0] to get the first letter and then replace it with ".k"
    
    return (
        <div>
            <div className='w-full'>
                <div className="flex justify-end">
                    <div className="flex items-center w-56 h-12 overflow-hidden justify-center userProfileHold">

                        <div className="flex">
                            <p className='userProfileLine w-1'></p>
                            <p className='userProfileLine w-1'></p>
                        </div>

                        <Link href={"/dashboard/Profile"}>
                            <div className="flex items-center gap-4">
                                <p className=' uppercase font-semibold text-white text-sm'>Sandeep.k</p>
                                <div>
                                    <img src={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"} className='w-10 h-10 rounded-full object-cover' alt='' />
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>

                <div className="flex justify-end">
                    <div className='flex items-center gap-12 w-48 mt-4 justify-center'>
                        <Tooltip hasArrow placement={"bottom"} label='Login with Discord'>
                            <Image src={discord} alt='' className=' cursor-pointer' />
                        </Tooltip>

                        <Tooltip hasArrow placement={"bottom"} label='Login with Riot'>
                            <Image src={riotId} alt='' className=' cursor-pointer w-6' />
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardNavbar