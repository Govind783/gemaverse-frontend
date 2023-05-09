import React from 'react'
import Link from 'next/link'
const Try = () => {
    return (
        <div>
            <div className="max-w-[1320px] h-[14rem] flex justify-center items-center py-10 ">
                <div className="lg:w-[1266px]  md:w-[1100px] sm:w-[1000px] w-[100vw] lg:h-[279px] md:h-[180px] sm:h-[170px] h-[14rem] lg:bg-auto bg-cover bg-no-repeat bg-center bg-white backgoundpath backgoundpath2 backgoundpathMobile">
                    <div className="heroDashboardContainer pb-10 relative top-12 md:ml-8 bg-black bg-opacity-40 heroGlassBox rounded">

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
                    </div>
                </div>
            </div>


            <div className="w-full bg-[#000000] ">
                <div className=" relative  bg-[#000000]  ">
                    {/* disconect button */}
                    <div className="z-30 text-white -top-4 left-[35%] absolute">
                        <h1 className="lg:text-2xl sm:text-xl text-xs font-semibold uppercase">
                            discconect
                        </h1>
                    </div>
                    {/* start shape code  */}
                    <div className=" h-[20%] w-[30%] bg-[#43E5F1] border-[#43E5F1]  sm:border-2 border-[1px]  second-shape ">
                        <div className="h-[100%] w-[100%] bg-[#000000]  second-shape2 flex justify-center items-center text-white ">
                            <div className="flex flex-col md:gap-6 gap-3 items-center md:mt-20 mt-10">
                                <h1 className="md:text-6xl text-3xl  w-full uppercase">
                                    disconect{" "}
                                </h1>
                                <h1 className="md:text-6xl text-3xl w-full uppercase">discord</h1>
                                <h1 className="md:text-6xl text-3xl  w-full uppercase">
                                    account{" "}
                                </h1>
                                <span className="md:text-xl text-xs w-[80%]">
                                    Thinking Of Disconnecting Your Discord Account ? Confirm To Log
                                    Out.{" "}
                                </span>
                                {/* buttons with clip path  */}
                                <div className="md:m-10 m-5 flex justify-around md:gap-14 gap-7">
                                    <div className="md:w-32 w-16 md:h-12 h-6 border-2 bg-red-500  border-red-500 button-shape">
                                        <div className="w-[100%] h-[100%] button-shape bg-[#2d3e49] flex justify-center items-center ">
                                            <button className="md:text-xl text-sm font-medium">
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                    <div className="md:w-32 w-16  md:h-12 h-6 border-2 bg-blue-500  border-blue-500 button-shape">
                                        <div className="w-[100%] h-[100%] button-shape bg-[#2d3e49] flex justify-center items-center ">
                                            <button className="md:text-xl text-sm  font-medium">
                                                Confirm
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {  /*  */}
            <div className='w-[80%]'>
                <div className="max-h-[500px] max-w-[1220px] flex items-center justify-center relative bg-black p-10">
                    <div className="z-30 text-white md:top-[8%] top-[7%] left-[36%] sm:left-[17%]  absolute">
                        <h1 className="lg:text-2xl sm:text-xl text-xs font-normal">
                            TOTAL TOKENS
                        </h1>
                    </div>
                    <div className=" w-[100%] h-[100%] bg-[#43E5F1] border-[#43E5F1] border-[1px] flex justify-center items-center custom-shapeMobile custom-shape">
                        <div className="w-[100%] h-[100%] custom-shapeMobile2 custom-shape2 text-white bg-[#060709] opacity-[99]">
                            <div className="sm:flex  flex-row grid grid-cols-2 grid-rows-2 w-full h-[90%] justify-around items-start sm:my-20 my-10 gap-10 ">
                                <div className="flex flex-col sm:gap-12 gap-6 md:ml-10 ">
                                    <h1 className="md:text-2xl text-xl font-normal">Current</h1>
                                    <span className="md:text-5xl text-3xl font-extrabold">429</span>
                                </div>
                                <div className="flex flex-col sm:gap-12 gap-6">
                                    <h1 className="md:text-2xl text-xl font-normal">Total</h1>
                                    <span className="md:text-5xl text-3xl font-extrabold">
                                        5061
                                    </span>
                                </div>
                                <div className="flex flex-col sm:gap-12 gap-6 md:mr-10">
                                    <h1 className="md:text-2xl text-xl font-normal">Usage</h1>
                                    <span className="md:text-5xl text-3xl font-extrabold">
                                        4534
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default Try