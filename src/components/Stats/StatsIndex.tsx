import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import StatsHeroImage from "../../assets/agentHeroStats2.png"
import badge from "../../assets/statsHeroBadge.png"
import RankBadge from "../../assets/statsBadge.png"
import robot from "../../assets/statsRobot.svg"
import { FiChevronDown } from "react-icons/fi"
import { FiChevronUp } from "react-icons/fi"
import statsTopAgents1 from "../../assets/statsTopAgents1.png"
import statsTopAgents2 from "../../assets/statsTopAgents2.png"
import statsTopAgents3 from "../../assets/statsTopAgents3.png"
import statsBronzeRanking from "../../assets/statsBronzeRanking.png"
import statsSilverRanking from "../../assets/statsSilverRanking.png"
import statsTopWeaponBody from "../../assets/statsTopWeaponBody.svg"
import gun1 from "../../assets/statsGun1.png"
import gun2 from "../../assets/statsGun2.png"
import gun3 from "../../assets/statsGun3.png"
import clock from "../../assets/statsClock.svg"
import statsE6Btn from "../../assets/e6Btn.svg"
import { BsTriangle } from "react-icons/bs"
import tipsAgent from "../../assets/tipsAgent.png"
import killjoy from "../../assets/statsHeroAgent.png"



const StatsIndex = () => {
    const [tabState, setTabState] = useState("overview");
    const [hitAccuracyTab, setHitAccuracyTab] = useState(false);
    const [e6Modal, setE6Modal] = useState(false);

    const matchData = [
        {
            id: 1,
            agent: statsTopAgents1,
            timePlayed: 13,
            matches: 16,
            winPercent: 54,
            kd: 1.09,
            adr: 145,
            acs: 226,
            dda: -10
        },

        {
            id: 2,
            agent: statsTopAgents2,
            timePlayed: 35,
            matches: 19,
            winPercent: 28,
            kd: 1.45,
            adr: 500,
            acs: 226,
            dda: -70
        },

        {
            id: 3,
            agent: statsTopAgents3,
            timePlayed: 48,
            matches: 46,
            winPercent: 45,
            kd: 1.88,
            adr: 485,
            acs: 226,
            dda: -40
        },

    ]

    const hitAccuraySattsData = [
        {
            title: "deaths",
            stat: 540,
        },

        {
            title: "score/round",
            stat: 540,
        },

        {
            title: "kda ratio",
            stat: 540,
        },

        {
            title: "kills/round",
            stat: 540,
        },

    ]

    const hitAccuraySattsDat2 = [
        {
            title: "headshots",
            stat: 540,
        },

        {
            title: "first blood",
            stat: 540,
        },

        {
            title: "clutches",
            stat: 540,
        },

        {
            title: "flawless",
            stat: 540,
        },

    ]

    const hitAccuraySattsData3 = [
        {
            title: "dmg/round",
            stat: 540,
        },

        {
            title: "kd/ratio",
            stat: 540,
        },

        {
            title: "headshot %",
            stat: 540,
        },

        {
            title: "win %",
            stat: 540,
        },

    ]

    return (
        <div className='text-white'>
            { /*  navbar */}
            <div className="statsIndexNavbar hidden xl:block">
                <div className="flex gap-4 items-center flex-wrap justify-evenly">
                    <p className={`${tabState === "overview" ? "StatsIndexIndivitualActiveNav text-2xl flex justify-center items-center w-auto pr-8  pl-8 cursor-pointer statsNavIndivitual   h-10" : "text-2xl flex justify-center items-center w-auto pr-8  pl-8  cursor-pointer statsNavIndivitual  h-10"}`} onClick={() => setTabState("overview")}>Overview</p>
                    <p className={`${tabState === "matches" ? "StatsIndexIndivitualActiveNav text-2xl flex justify-center items-center w-auto pr-8  pl-8  cursor-pointer statsNavIndivitual   h-10" : "text-2xl flex justify-center items-center w-auto pr-8  pl-8  cursor-pointer statsNavIndivitual  h-10"}`} onClick={() => setTabState("matches")}>Matches</p>
                    <p className={`${tabState === "performance" ? "StatsIndexIndivitualActiveNav text-2xl flex justify-center items-center w-auto pr-8   cursor-pointer statsNavIndivitual pl-8  h-10" : "text-2xl flex justify-center items-center w-auto pr-8  cursor-pointer statsNavIndivitual  pl-8  h-10"}`} onClick={() => setTabState("performance")}>Performance</p>
                    <p className={`${tabState === "agents" ? "StatsIndexIndivitualActiveNav text-2xl flex justify-center items-center w-auto pr-8  pl-8  cursor-pointer statsNavIndivitual   h-10" : "text-2xl flex justify-center items-center w-auto pr-8  pl-8 cursor-pointer statsNavIndivitual  h-10"}`} onClick={() => setTabState("agents")}>Agents</p>
                    <p className={`${tabState === "maps" ? "StatsIndexIndivitualActiveNav text-2xl flex justify-center items-center w-auto pr-8  pl-8  cursor-pointer statsNavIndivitual   h-10" : "text-2xl flex justify-center items-center w-auto pr-8  pl-8  cursor-pointer statsNavIndivitual  h-10"}`} onClick={() => setTabState("maps")}>Maps</p>
                    <p className={`${tabState === "weapons" ? "StatsIndexIndivitualActiveNav text-2xl flex justify-center items-center w-auto pr-8  pl-8  cursor-pointer statsNavIndivitual   h-10" : "text-2xl flex justify-center items-center w-auto pr-8  cursor-pointer statsNavIndivitual  pl-8  h-10"}`} onClick={() => setTabState("weapons")}>Weapons</p>
                </div>
            </div>

            <div className=" justify-center w-full hidden xl:flex">
                <p className='statsNavBottomLine'></p>
            </div>
            {  /*  hero section  */}

            <br />
            <br />


            <div className="flex w-[93%] justify-center">
                <div className="lg:h-[3.2rem] md:h-[3.1rem] bg-[#0B111F] premiumBox3 relative top-[2.9rem] md:top-[2.9rem] w-[86%] left-[0.1rem] md:-left-1 h-16 md:w-[37%] lg:w-[27%] ">
                </div>
            </div>

            <p className='lg:text-xl md:text-sm left-1 md:left-0 text-[#ffffff] text-center w-[93%]  -top-[0.3rem] md:top-1 lg:top-4 relative '>  VALORANT STATS</p>

            <div className="flex justify-center">
                <div className="statsHeroMainParent bg-[#43E5F1]  border-[#43E5F1] border-[1px]  statsShape2 Newshape2mobile">
                    <div className=' statsShape  Newshapemobile'>

                        <div className="flex w-full flex-wrap justify-around">
                            <p className='blackBoxFontOutline text-[#4F4F4F] md:mt-5 mt-8 md:text-[7rem] whitespace-nowrap relative text-7xl xl:text-[9.5rem] md:ml-4 lg:mt-6 -ml-24'>killjoy</p>

                            <div className='flex items-center md:gap-12 gap-4 lg:gap-24 flex-wrap'>
                                <Image src={killjoy} alt='' priority quality={100} className='relative lg:top-3 top-6 -left-20 lg:-left-10 md:left-16 w-[15rem] md:w-72 lg:w-96' />

                                <div className="">
                                    <div className="relative lg:-top-10 lg:-left-10 md:left-10 md:-top-20 -left-40 -top-[5rem]">
                                        <div className="flex flex-col uppercase gap-1 items-center">
                                            <p className='uppercase text-xs md:text-sm lg:text-base text-gray-500'>top agent</p>
                                            <p className='lg:text-xl text-sm  uppercase tracking-widest'>Killjoy</p>
                                            <p className='text-gray-500 text-sm md:text-base'>Sentinel</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        { /*  RANK BADGE */}

                        <div className='flex md:justify-between items-center relative md:-top-52 w-full flex-wrap md:flex-nowrap justify-end -top-40'>

                            <div className="flex gap-2 h-32 md:ml-4 md:-top-2 top-3  lg:left-16 relative ">
                                <Image src={RankBadge} alt='' quality={100} className=' lg:w-24 md:h-[5.8rem] md:w-[5.8rem] lg:h-24 w-16 h-16  border-solid border-1 border-white rounded-full' />
                                <div className="flex flex-col">
                                    <p className='uppercase text-[10px] whitespace-nowrap md:whitespace-normal md:text-sm lg:text-xl'>Jainil patel</p>
                                    <p className='uppercase text-[10px] whitespace-nowrap md:whitespace-normal md:text-sm lg:text-lg'>Boogeyman</p>
                                    <p className='text-gray-500 whitespace-nowrap md:whitespace-normal text-xs md:text-sm lg:text-base'>Matches Played: 291</p>
                                    <p className='text-gray-500 whitespace-nowrap md:whitespace-normal text-xs md:text-sm lg:text-base'>Play Time: 147H</p>
                                </div>
                            </div>

                            <div className="bronzeRankMobile relative -left-2">
                                <div className="flex items-center  gap-2 ">
                                    <div className=' uppercase flex items-end gap-1 text-[10px] md:text-sm lg:text-base'>RANK bronze <span> | | |</span> </div>
                                    <Image src={badge} alt='' quality={100} className='md:w-[4.4rem] w-12' />
                                </div>
                            </div>

                        </div>




                    </div>


                </div>

                <br />
                <br />
            </div>



            { /* red container */}
            <div className="flex justify-center mt-7 xl:mt-0">
                <div className={`${hitAccuracyTab === true ? "statsHeroBottomContainerOpen relative" : "statsHeroBottomContainer relative"}`}>
                    <div className="flex items-center pt-4 justify-evenly gap-6  xl:gap-2">

                        <div className="flex capitalize flex-col gap-2 items-center xl:items-start">
                            <p className='xl:text-2xl md:text-xl text-sm '>Matches</p>
                            <p className='md:text-4xl text-2xl blackBoxFont'>492</p>
                        </div>

                        <div className="flex capitalize flex-col gap-2 items-center xl:items-start">
                            <p className='xl:text-2xl md:text-xl text-sm '>Wins</p>
                            <p className='md:text-4xl text-2xl blackBoxFont'>540</p>
                        </div>

                        <div className="flex capitalize flex-col gap-2 items-center xl:items-start">
                            <p className='xl:text-2xl md:text-xl text-sm '>Kills</p>
                            <p className='md:text-4xl text-2xl blackBoxFont'>572</p>
                        </div>

                        <div className="flex capitalize flex-col gap-2 items-center xl:items-start">
                            <p className='xl:text-2xl md:text-xl text-sm '>Assists</p>
                            <p className='md:text-4xl text-2xl blackBoxFont'>612</p>
                        </div>

                        <div onClick={() => setHitAccuracyTab(!hitAccuracyTab)}>
                            {hitAccuracyTab === true ? <div className='w md:w-20-8 '><FiChevronUp className='text-5xl font-semibold cursor-pointer' /></div> : <div className='w-8 md:w-20'> <FiChevronDown className='text-5xl font-semibold cursor-pointer' /> </div>}
                        </div>

                    </div>
                </div>
            </div>


            {hitAccuracyTab &&

                <div className="flex justify-center">

                    <div className="statsRobotHold relative -top-16 -left-1">
                        <div className="flex items-center justify-around">
                            <p className='md:text-2xl  text-gray-500'>Stats Overview</p>
                            <p className='md:text-2xl  text-gray-500'>Hit Accuracy</p>
                        </div>

                        <br />

                        <div className="flex justify-evenly items-start xl:items-center gap-4">
                            <div>
                                <div className="flex items-center pl-2 md:pl-0  flex-wrap justify-center gap-8">

                                    {hitAccuraySattsData.map((item) => {
                                        return (
                                            <div className="flex flex-col gap-0 justify-center md: md:w-28  h-16 w-[4.3rem]  items-center rounded-md bg-[#081e2b] text-white" key={item.stat}>
                                                <p className='md:text-sm text-[11px] whitespace-nowrap font-light uppercase '> {item.title} </p>
                                                <p className='md:text-3xl text-xl blackBoxFont'>{item.stat} </p>
                                            </div>
                                        )
                                    })}

                                </div>
                                <br />
                                <div className="flex items-center pl-2 md:pl-0  flex-wrap justify-center gap-8">

                                    {hitAccuraySattsDat2.map((item) => {
                                        return (
                                            <div className="flex flex-col gap-0 justify-center md: md:w-28  h-16 w-[4.3rem]  items-center rounded-md bg-[#081e2b] text-white" key={item.stat}>
                                                <p className='md:text-sm text-[11px] whitespace-nowrap font-light uppercase '> {item.title} </p>
                                                <p className='md:text-3xl text-xl blackBoxFont'>{item.stat} </p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <br />
                                <div className="flex items-center  flex-wrap justify-center gap-8">

                                    {hitAccuraySattsData3.map((item) => {
                                        return (
                                            <div className="flex flex-col gap-0 justify-center md: md:w-28  h-16 w-[4.3rem]  items-center rounded-md bg-[#081e2b] text-white" key={item.stat}>
                                                <p className='md:text-sm text-[11px] whitespace-nowrap font-light uppercase '> {item.title} </p>
                                                <p className='md:text-3xl text-xl blackBoxFont'>{item.stat} </p>
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>

                            <div className="flex items-center justify-center xl:justify-center flex-wrap gap-6 md:gap-2">
                                <Image src={robot} alt='' quality={100} priority />

                                <div className="flex flex-col gap-2 pr-1">
                                    <p className='text-blue-500 text-sm upp md:text-xl'>Head 8.4% Hits: 2088</p>
                                    <p className='text-yellow-500 text-sm upp md:text-xl whitespace-nowrap md:whitespace-normal'>Body 78.5% Hits: 19401</p>
                                    <p className='text-red-500 text-sm upp md:text-xl'>Legs 13% Hits: 3225</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            }


            <div className="flex gap-12 flex-wrap items-start justify-center">
                <div className="flex flex-col gap-10 relative">
                    {/* parent one box one  */}


                    <div className="flex w-[93%] justify-center">
                        <div className="lg:h-[3rem] md:h-[2.99rem] bg-[#0B111F] premiumBox3 relative md:top-[2.9rem] top-12 lg:top-[2.8rem] w-[91%] -left-[0.1rem] md:-left-1 h-14 md:w-[77%] lg:w-[80%] ">
                        </div>
                    </div>

                    <p className='text-base md:text-base  text-[#ffffff] text-center w-[93%] -top-8 relative '>CURRENT RATING</p>

                    <div className="flex items-center justify-center statsP1Box1a relative -top-20 flex-col gap-4 bg-[#43E5F1] border-[#43E5F1]   ">

                        <div className='bg-[#000000] statsP1Box1b w-full  h-full'>

                            <div className='relative top-12 flex flex-col gap-8 items-center w-full h-full'>
                                <div className="flex flex-col items-start ml-8 w-full ">
                                    <div className="flex items-center gap-3">
                                        <Image src={statsBronzeRanking} alt='bronze' quality={100} className='w-[4.1rem]' />
                                        <div className="flex flex-col gap-2">
                                            <p className='text-gray-500'>Rating</p>
                                            <p className='text-xl'>Bronze 3</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="topGunDivider">
                                </div>

                                <div className="flex flex-col items-start ml-8 w-full ">
                                    <div className="flex items-center gap-3">
                                        <div className="flex flex-col gap2">
                                            <p className='text-gray-400'>Peak Rating</p>
                                            <Image src={statsSilverRanking} alt='bronze' quality={100} className='w-[4.1rem]' />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <p className='text-xl'>Silver 1</p>
                                            <p className='text-gray-500 capitalize'>episode 6: ACT 2</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>



                    { /* parent 2 box 2 */}

                    <div className="flex w-[93%] justify-center">
                        <div className="lg:h-[3rem] md:h-[2.99rem] bg-[#0B111F] premiumBox3 relative -top-[1.1rem] md:-top-[1.7rem] w-[91%] left-[0.1rem] md:-left-0 h-[3.7rem] md:w-[77%] lg:w-[78%] ">
                        </div>
                    </div>
                    <p className='  text-lg text-[#ffffff] text-center w-[93%] -top-[6.5rem] tracking-wide relative '>TOP WEAPONS</p>

                    <div className="flex items-center justify-center statsP1Box2a relative -top-40 h-[100%] w-[100%] bg-[#43E5F1] border-[#43E5F1]   sm:border-1 border-[1px] flex-col gap-4">

                        <div className='bg-[#000000] opacity-[99] statsP1Box21b flex flex-col gap-6 pt-12 items-center w-full  h-full'>
                            <div className="flex items-center justify-evenly w-full gap-3">
                                <div className="flex flex-col items-center gap-0">
                                    <Image src={gun1} alt='' quality={100} className="w-40" />
                                    <div className='-mt-3'>
                                        <p className=' capitalize text-xl'>Phantom</p>
                                        <p className=' text-gray-400 capitalize'>assualt riffles</p>
                                    </div>
                                </div>

                                <div className="flex items center gap-3">
                                    <Image src={statsTopWeaponBody} alt='body' quality={100} />
                                    <div className="flex items-center gap-4 flex-col">
                                        <p className='text-xs'>16%</p>
                                        <p className='text-xs'>75%</p>
                                        <p className='text-xs'>9%</p>
                                    </div>

                                    <div className="flex flex-col items-center justify-center">
                                        <p className='text-xl'>Kills</p>
                                        <p>226</p>
                                    </div>
                                </div>
                            </div>

                            <div className="topGunDivider">
                            </div>

                            <div className="flex items-center justify-evenly w-full gap-3">
                                <div className="flex flex-col items-center gap-0">
                                    <Image src={gun2} alt='' quality={100} className="w-40" />
                                    <div className='-mt-3'>
                                        <p className=' capitalize text-xl'>Phantom</p>
                                        <p className=' text-gray-400 capitalize'>assualt riffles</p>
                                    </div>
                                </div>
                                <div className="flex items center gap-3">
                                    <Image src={statsTopWeaponBody} alt='body' quality={100} />
                                    <div className="flex items-center gap-4 flex-col">
                                        <p className='text-xs'>16%</p>
                                        <p className='text-xs'>75%</p>
                                        <p className='text-xs'>9%</p>
                                    </div>

                                    <div className="flex flex-col items-center justify-center">
                                        <p className='text-xl'>Kills</p>
                                        <p>126</p>
                                    </div>
                                </div>
                            </div>


                            <div className="topGunDivider">
                            </div>

                            <div className="flex items-center justify-evenly w-full gap-3">
                                <div className="flex flex-col items-center gap-0">
                                    <Image src={gun3} alt='' quality={100} className="w-40" />
                                    <div className='-mt-1'>
                                        <p className=' capitalize text-xl'>Phantom</p>
                                        <p className=' text-gray-400 capitalize'>assualt riffles</p>
                                    </div>
                                </div>

                                <div className="flex items center gap-3">
                                    <Image src={statsTopWeaponBody} alt='body' quality={100} />
                                    <div className="flex items-center gap-4 flex-col">
                                        <p className='text-xs'>16%</p>
                                        <p className='text-xs'>75%</p>
                                        <p className='text-xs'>9%</p>
                                    </div>

                                    <div className="flex flex-col justify-center items-center">
                                        <p className='text-xl'>Kills</p>
                                        <p>26</p>
                                    </div>
                                </div>
                            </div>


                            <div className="topGunDivider">
                            </div>

                            <button className='text-white dashBoardHeroBtn uppercase mt-3 h-9 topWeaponsBtn'>view all weapons</button>
                            <div className=''></div>

                        </div>


                    </div>

                </div>

                <div className="flex flex-col md:gap-10 lg:gap-0 relative -top-[15rem] md:-top[32] lg:-top-6 xl:-top-8">
                    { /* parent 2 box 1  */}

                    <div>

                        <div className="flex w-[93%] justify-center">
                            <div className="lg:h-[3rem] md:h-[2.99rem] bg-[#0B111F] premiumBox3 relative top-[6.9rem] md:top-[5.7rem] w-[81%] left-[1rem] md:left-4 h-16 md:w-[37%] lg:w-[38%] ">
                            </div>
                        </div>
                        <p className='  text-lg text-[#ffffff] text-center w-[93%] left-3 lg:left-4 top-14 tracking-wide relative '>E6:A2</p>

                        <div className="max-w-[47rem] h-[21rem] StatsP2Box2 border-[#43E5F1] border-[1px] bg-[#43E5F1]  ThirdShapecss2 my-10 ">
                            <div className="max-w-[47rem] h-[21rem] StatsP2Box2 border-[#43E5F1]  bg-[#060606]  ThirdShapecss">
                                <div className="flex items-center w-[95%] justify-between ml-4 pt-8 gap-4">
                                    <div className="flex items-center gap-6">
                                        <div className='text-gray-400 flex items-center gap-2'>
                                            <Image src={clock} alt='' quality={100} />
                                            <p className=' capitalize'>20h Play Time</p>
                                        </div>
                                        <p className='text-gray-400'>34 Matches</p>

                                    </div>

                                    <div>
                                        <Image src={statsE6Btn} alt='' quality={100} className=' cursor-pointer' onClick={() => setE6Modal(!e6Modal)} />
                                        <div className="flex justify-end">

                                            {e6Modal && <div className='flex flex-col absolute bg-black z-40 w-32 md:w-auto'>

                                                <p className=' capitalize e6ModalIndivitual'>all acts</p>
                                                <p className=' uppercase e6ModalIndivitual'>E6: A2</p>
                                                <p className=' uppercase e6ModalIndivitual'>E6: A2</p>
                                                <p className=' uppercase e6ModalIndivitual'>E6: A2</p>
                                                <p className=' uppercase e6ModalIndivitual'>E6: A2</p>
                                                <p className=' uppercase e6ModalIndivitual'>E6: A2</p>

                                            </div>}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between mt-9 ml-4 w-[95%] items-center gap-4">
                                    <p className='text-2xl'>Top Agents</p>
                                    <button className='blueButton w-40 whitespace-nowrap text-xs mr-3 md:mr-0'>View All Agents</button>
                                </div>

                                <br />
                                {  /* table headings  */}

                                <div className="flex md:justify-around justify-start gap-4 md:gap-0 ml-[0.6rem] md:ml-0">
                                    <p className='text-[12px] md:text-base'>Top Agents</p>
                                    <div className='flex items-center md:gap-11 gap-[0.8rem]'>
                                        <p className='text-xs md:text-sm text-yellow-500 md:left-4 relative'>Time <span className='hidden md:inline'>played</span> </p>
                                        <p className='text-[12px] text-[#9E9E9E] md:text-sm'>Matches</p>
                                        <p className='text-[12px] text-[#9E9E9E] md:text-sm md:-left-3 relative'>Win%</p>
                                        <p className='text-[12px] text-[#9E9E9E] md:text-sm relative md:-left-3'>K/D</p>
                                        <p className='text-[12px] text-[#9E9E9E] md:text-sm relative md:-left-3'>ADR</p>
                                        <p className='text-[12px] text-[#9E9E9E] md:text-sm relative md:-left-3'>ACS</p>
                                        <p className='text-[12px] text-[#9E9E9E] md:text-sm relative md:-left-4'>DDΔ</p>
                                    </div>
                                </div>


                                { /* AGENTS TABLE */}

                                <div className="flex justify-center mt-5">
                                    <div className="flex flex-col items-center gap-3 w-full">

                                        {matchData.map((item) => {
                                            return (
                                                <div className="megaChallengeIndivitualRow statsINdexRowPurple h-12" key={item.id}>

                                                    <div className="flex md:justify-around justify-start gap-8 md:gap-12 ml-1 md:ml-0">
                                                        <Image src={item.agent} alt='' quality={100} className=' pt-1 md:pt-0 w-10' />
                                                        <div className="flex md:gap-11 gap-4 text-[13px] md:text-base flex-npwrap items-center">
                                                            <p className='text-yellow-500'>{item.timePlayed}hrs</p>
                                                            <p className=''>{item.matches}M</p>
                                                            <p className=''>{item.winPercent}%</p>
                                                            <p className=''>{item.kd}</p>
                                                            <p className=''>{item.adr}</p>
                                                            <p className=''>{item.acs}</p>
                                                            <p className=''>{item.dda}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {  /* paent 2 box 2  */}

                    <div className='relative -top-10'>
                        <div className="flex w-[93%] justify-center">
                            <div className="lg:h-[2.6rem] md:h-[2.99rem] bg-[#0B111F] premiumBox3 relative top-[6.2rem] md:top-[5.2rem] w-[91%] left-[0.2rem] md:left-4 h-16 md:w-[37%] lg:w-[38%] ">
                            </div>
                        </div>
                        <p className=' text-sm md:text-lg text-[#ffffff] text-center w-[93%] left-2 md:left-6 top-12 md:top-12 tracking-wide relative '>MATCH HISTORY</p>

                        <div className=" StatsP2Box3  max-w-[47rem] h-[21rem] StatsP2Box2 border-[#43E5F1]  ThirdShapecss2 my-10 ">
                            <div className="max-w-[47rem] h-[21rem] StatsP2Box2 h21rem  bg-[#060606]  ThirdShapecss">

                                <p className='text-gray-400 pt-8 mb-3 ml-7'>E6: A2 matches only</p>

                                <br />
                                {  /* table headings  */}

                                <div className="flex md:justify-around justify-start gap-4 md:gap-0 ml-[0.6rem] md:ml-0">
                                    <p className='text-[12px] md:text-base'>Top Agents</p>
                                    <div className='flex items-center md:gap-11 gap-[0.8rem]'>
                                        <p className='text-xs md:text-sm text-yellow-500 md:left-4 relative'>Time <span className='hidden md:inline'>played</span></p>
                                        <p className='text-[12px] text-[#9E9E9E] md:text-sm'>Matches</p>
                                        <p className='text-[12px] text-[#9E9E9E] md:text-sm md:-left-3 relative'>Win%</p>
                                        <p className='text-[12px] text-[#9E9E9E] md:text-sm relative md:-left-3'>K/D</p>
                                        <p className='text-[12px] text-[#9E9E9E] md:text-sm relative md:-left-3'>ADR</p>
                                        <p className='text-[12px] text-[#9E9E9E] md:text-sm relative md:-left-3'>ACS</p>
                                        <p className='text-[12px] text-[#9E9E9E] md:text-sm relative md:-left-4'>DDΔ</p>
                                    </div>
                                </div>

                                { /* AGENTS TABLE */}

                                <div className="flex justify-center mt-5">
                                    <div className="flex flex-col items-center gap-3 w-full">
                                        {matchData.map((item) => {
                                            return (
                                                <div className="megaChallengeIndivitualRow statsINdexRowPurple h-12" key={item.id}>

                                                    <div className="flex md:justify-around justify-start gap-8 md:gap-12 ml-1 md:ml-0">
                                                        <Image src={item.agent} alt='' quality={100} className=' pt-1 md:pt-0 w-10' />
                                                        <div className="flex md:gap-11 gap-4 text-[13px] md:text-base flex-wrap items-center">
                                                            <p className='text-yellow-500'>{item.timePlayed}hrs</p>
                                                            <p className=''>{item.matches}M</p>
                                                            <p className=''>{item.winPercent}%</p>
                                                            <p className=''>{item.kd}</p>
                                                            <p className=''>{item.adr}</p>
                                                            <p className=''>{item.acs}</p>
                                                            <p className=''>{item.dda}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>




                </div>
            </div>


        </div>
    )
}

export default StatsIndex

/*
  
          <div className="flex items-start xl:mr-4 ml-4 justify-evenly">
                            <p className='blackBoxFontOutline text-[#4F4F4F] md:text-[7rem] relative left-36 md:left-16 xl:left-4 text-7xl xl:text-[9.5rem]'>killjoy</p>

                            <Image src={StatsHeroImage} alt='' priority quality={100} className='relative xl:-left-32 md:-top-0 md:-left-20 -left-2 -top-8' />

                            <div className="relative top-20 xl:-left-0 md:-left-20">
                                <div className="flex flex-col uppercase gap-1 items-center">
                                    <p className='uppercase text-gray-500'>top agent</p>
                                    <p className='text-xl  uppercase tracking-widest'>Killjoy</p>
                                    <p className='text-gray-500'>Sentinel</p>
                                </div>
                            </div>
                        </div>


                        <div className="flex mr-5 mt-3 xl:ml-7 ml-2 relative xl:-top-56 -top-10 justify-between flex-wrap">
                            <div className="flex gap-2 h-32 mt-2 relative lg:-top-32 xl:-top-4">
                                <Image src={RankBadge} alt='' quality={100} className=' w-24 h-24' />
                                <div className="flex flex-col">
                                    <p className='uppercase md:text-xl'>Jainil patel</p>
                                    <p className='uppercase md:text-lg'>Boogeyman</p>
                                    <p className='text-gray-500'>Matches Played: 291</p>
                                    <p className='text-gray-500'>Play Time: 147H</p>
                                </div>
                            </div>


                            <div className="bronzeRankMobile">
                                <div className="flex items-center md:top-12 lg:-top-20 lg:left-5 relative xl:-left-16 xl:-top-4  gap-2 h-32">
                                    <div className=' uppercase flex items-end gap-1'>RANK bronze <span> | | |</span> </div>
                                    <Image src={badge} alt='' quality={100} />
                                </div>
                            </div>
                        </div>
*/






