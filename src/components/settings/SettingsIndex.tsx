import React from 'react'
import { HiPencil } from "react-icons/hi"
import flag from "../../assets/flagSettings.png"
import Image from 'next/image'
import discord from "../../assets/discorLoginDashboard.svg"
import riotId from "../../assets/riotDashboardLogin.svg"
import { useState } from 'react'


const SettingsIndex = () => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState("");

    return (
        <div className='text-white relative left-2'>
            <div className="flex items-start md:ml-4 lg:ml-0 relative top-24 gap-20 md:gap-0 md:top-0 flex-wrap justify-evenly">

                <div className="flex flex-col lg:w-[45%] w-full">
                    <p className=' uppercase text-xl mb-1 text-gray-400 tracking-[0.17em] font-bold'>my details</p>

                    <div className='settingsHorizontalDivider mb-2'></div>

                    <br />

                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between w-[60%]">
                            <p className=' uppercase text-lg tracking-[0.17em]'>USERNAME</p>
                            <HiPencil className='text-2xl text-white' />
                        </div>

                        <input type="text" className='md:w-[60%] w-[85%] bg-transparent border-0 outline-none placeholder-[#4E4E4E]  border-b-2 pb-2' placeholder='sandeep11234' value={userName} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>  setUserName(e.target.value)} />
                    </div>

                    <br />

                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between w-[60%]">
                            <p className=' uppercase text-lg tracking-[0.17em]'>Email</p>
                        </div>

                        <input type={"email"} className='md:w-[60%] w-[85%] bg-transparent border-0 outline-none placeholder-[#4E4E4E]  border-b-2 pb-2' placeholder='abcde@gmail.com' value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>  setEmail(e.target.value)}  />
                    </div>

                    <br />

                    <p className='uppercase text-lg mb-2 mt-2 tracking-[0.17em]'>Country</p>

                    <Image src={flag} alt='' quality={100} className='w-24 relative  -left-5' />

                    <br />

                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between w-[60%]">
                            <p className=' uppercase text-lg tracking-[0.17em]'>Phone no</p>
                            <HiPencil className='text-2xl text-white' />
                        </div>

                        <input  type="tel" name="telphone" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxLength={12} className='md:w-[60%] w-[85%] bg-transparent border-0 outline-none placeholder-[#4E4E4E]  border-b-2 pb-2' value={phoneNumber} onChange={(e: any) =>  setPhoneNumber(e.target.value)} placeholder='+91 8989898989' />
                    </div>

                    <br />
                    <br />
                    <br />



                    <p className='text-xl text-gray-400 mb-3 tracking-[0.17em] uppercase font-bold'>Subscription</p>

                    <div className='settingsHorizontalDivider mb-8'></div>

                    <div className="settingsSubscriptionBoxHold relative -left-[0.2rem] md:-left-0">
                        <div className="flex md:justify-even justify-start md:gap-20 gap-14 mb-4 relative -top-3 md:-top-0 md:pt-0 w-full items-center">
                            <p className='md:text-2xl tracking-[0.17em]'>DATE</p>
                            <p className='md:text-2xl tracking-[0.17em]'>STATUS</p>
                        </div>

                        <div className="flex justify-center  md:gap-16 gap-4 w-full items-center">
                            <p className='md:text-xl font-light tracking-[0.17em]'>22/12/23</p>
                            <p className='md:text-xl uppercase text-green-500 tracking-[0.17em]'>active</p>
                            <button className='blueButton w-36'>View </button>
                        </div>
                    </div>

                    <br />

                </div>

                <div className="flex flex-col lg:w-[45%] w-full">
                    <p className=' uppercase text-xl mb-2 text-gray-400 tracking-[0.17em] font-bold'>my social links</p>

                    <div className='settingsHorizontalDivider mb-2'></div>

                    <p className='text-xl text-white mt-4 mb-5 uppercase tracking-[0.17em]'>discord</p>
                    <div className='flex cursor-pointer w-[90%] items-center mb-4 settingsSocialsButton mr-2 md:mr-0'>
                        <p>Connected with boogeyman </p>
                        <Image src={discord} alt='' quality={100} />
                    </div>

                    <br />

                    <p className=' uppercase text-xl mb-2 text-gray-400 mt-2 tracking-[0.17em] font-bold'>GAME ACCOUNT</p>
                    <div className='settingsHorizontalDivider mb-5'></div>

                    <p className='text-xl text-white mb-3 uppercase tracking-[0.17em]'>Riot</p>
                    <div className='flex cursor-pointer w-[90%] items-center settingsSocialsButton mb-2 mr-2 md:mr-0'>
                        <p>Connected with boogeyman </p>
                        <Image src={riotId} alt='' quality={100} />
                    </div>

                    <br />
                    <br />

                    <br />
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default SettingsIndex