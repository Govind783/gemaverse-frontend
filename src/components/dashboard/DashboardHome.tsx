import React from 'react'
import DashboardDailyChallenge from './DashboardDailyChallenge'
import DashboardCommunityChallenge from './DashboardCommunityChallenge'
import Link from 'next/link'

const DashboardHome = () => {

    return (
        <div>
            <div>
                <div className="md:w-[17rem] w-[14rem] left-[4.5rem] h-14 md:h-[2.8%] md:left-52 lg:left-[33rem] bg-[#0B111F] premiumBox3 absolute top-[6.5rem] md:top-[7.5rem]">
                </div>
                <p className=' left-4 top-[-0.1rem] md:top-8 text-[11px]  md:text-base text-[#ffffff] md:-left-3 lg:left-1 text-center w-[93%] tracking-widest relative '>MEGA CHALLENGE</p>
            </div>
            <div className="DashboardHeroComponentMainParent relative left-[0.2rem] md:left-0 flex justify-center md:mt-8 ">


                <div className="xl:w-[1266px] lg:w-[1100px] md:w-[900px] sm:w-[640px sm:h-[280px] h-[400px] border-[1px] backgoundpathmobile2 sm:border-0 border-[#43E5F1]">
                    <div className="xl:w-[1266px] lg:w-[1100px] md:w-[900px] sm:w-[640px] w-[400px] sm:h-[280px] h-[400px] backgoundpathfirst bg-cover sm:bg-center bg-no-repeat flex imageBg backgoundpathmobile justify-start items-start ">

                        {<div className="heroDashboardContainer pb-10 relative top-12 md:ml-8 bg-black bg-opacity-40 heroGlassBox rounded">

                            <div className="flex flex-col gap-4 md:ml-5 ml-2 pt-2 pb-6 rounded-md ">
                                <p className='text-gray-400 -mb-7'>PLay and earn</p>
                                <p className='blackBoxFont text-white text-7xl'>Mega prize</p>
                                <p className='text-gray-400 -mt-5 montestratFont'>
                                    Join the ultimate gaming event, compete for the Mega Prize! Score points <br />
                                    based on your in-game performance, climb the leaderboard, and win.
                                </p>

                                <div className="flex gap-9 items-center ">
                                    <Link href={"/dashboard/Megaprize"}>
                                        <button className='text-white w-28 h-8 montestratFont text-sm md:text-base dashBoardHeroBtn'>REGISTER</button>
                                    </Link>

                                    <div className="flex flex-col text-white items-start w-16 ml-1 md:w-auto md:ml-0">
                                        <p className='  text-gray-400 text-xs'>Already Registered</p>
                                        <p className='montestratFont'>23k</p>
                                    </div>

                                    <div className="flex gap-0 flex-col items-start">
                                        <p className='  text-gray-400 text-xs'>Remaining Time</p>
                                        <div className='interFont items-center  flex'>
                                            <div className='text-white'><span className='mr-0'>15</span> <span className='text-gray-400 text-xs mr-3 pl-0 timeD uppercase'>D</span> </div>
                                            <div className='text-white'><span className='mr-0'>12</span> <span className='text-gray-400 text-xs mr-3 pl-0 timeD uppercase'>H</span> </div>
                                            <div className='text-white'><span className='mr-0'>25</span> <span className='text-gray-400 text-xs pl-0 timeD uppercase'>M</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
            <div />



            <br />
            <br />
            <br />
            <br />

            <DashboardDailyChallenge />

            <br />
            <br />
            <DashboardCommunityChallenge />

            <br />
            <br />
            <br />
            <br />

        </div>
    )
}

export default DashboardHome

/*


*/