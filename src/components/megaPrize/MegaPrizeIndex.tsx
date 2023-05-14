import React from 'react'
import Image from 'next/image'
import UserProfile from "../../assets/megaPrizeUserIon.png";
import diamondPremium from "../../assets/megaPrizePremium.svg"
import { AiFillStar } from "react-icons/ai"
import { useState } from 'react';

type challendDataType = {
    id: number,
    title: string,
    points: number
}[]

const MegaPrizeIndex = () => {

    const [loggedIn, setLoggedIn] = useState(false);


    const megaChallengeData: challendDataType = [
        {
            id: 1,
            title: "get 5 kills with vandal using jett", //  vandal (uppercase) rest all capitalize
            points: 100,
        },

        {
            id: 2,
            title: "get 5 kills with vandal using jett", //  vandal (uppercase) rest all capitalize
            points: 100,
        },

        {
            id: 3,
            title: "get 5 kills with vandal using jett", //  vandal (uppercase) rest all capitalize
            points: 100,
        },
        {
            id: 4,
            title: "get 5 kills with vandal using jett", //  vandal (uppercase) rest all capitalize
            points: 100,
        },
        
    ]

    const leaderboardDataAllPlayers: challendDataType = [
        {
            id: 1,
            title: "phlip",
            points: 1274,
        },
        {
            id: 2,
            title: "phlip",
            points: 1274,
        },
        {
            id: 3,
            title: "phlip",
            points: 1274,
        },
        {
            id: 4,
            title: "phlip",
            points: 1274,
        },
        {
            id: 5,
            title: "phlip",
            points: 1274,
        },
        {
            id: 6,
            title: "phlip",
            points: 1274,
        },
        {
            id: 7,
            title: "phlip",
            points: 1274,
        },
        {
            id: 8,
            title: "phlip",
            points: 1274,
        },
        {
            id: 9,
            title: "phlip",
            points: 1274,
        },

        {
            id: 10,
            title: "phlip",
            points: 1274,
        },
        {
            id: 11,
            title: "phlip",
            points: 1274,
        },
        {
            id: 12,
            title: "phlip",
            points: 1274,
        },

        {
            id: 13,
            title: "phlip",
            points: 1274,
        },
        {
            id: 14,
            title: "phlip",
            points: 1274,
        },
        {
            id: 15,
            title: "last user",
            points: 40,
        },

    ]

    const leaderboardDataTop10 = leaderboardDataAllPlayers.filter(item => item.id < 10) //after u get fetch the data of all the players from the backend you  can store that in "leaderboardDataAllPlayers" and then we run the ".filter" function to filter out only the top 10 players based on the rank (id)

    const leaderboardDataLastPlayer = leaderboardDataAllPlayers.slice(-1);


    return (
        <div>
            <div className="flex flex-wrap justify-evenly gap-0">

                <div className="flex flex-col gap-5 items-center md:mb-28 lg:mb-24 xl:mb-0">

                    <div className="maegaPrizeBox1 md:pl-7 pl-4 pt-3">
                        {
                            loggedIn === false ? <>
                                <p className='megaPirzeHeading text-xl'>MEGA CHALLENGE DESC</p>
                                <div className='megaChallengeDivider mt-2 mb-2'></div>
                                <p className=' capitalize box1Description montestratFont w-[83%]'>
                                    Get ready for the ultimate gaming event of the year! Compete against top gamers from around the world and showcase your in-game skills to score points and climb the leaderboard. all players have a chance to win the coveted Mega Prize. Don&apos;t miss out on this unforgettable gaming experience!
                                </p>


                                <div className="flex items-center justify-between mt-7">
                                    <div className="flex items-center gap-1">
                                        <p className=' font-bold text-red-500 text-sm md:text-base'>Remaining Time : </p>
                                        <div className=' font-bold text-red-600 text-sm md:text-xl'> 12:00:01 <span className='text-red-600 text-sm md:text-base -ml-1'>s</span></div>
                                    </div>

                                    <button className='text-white dashBoardHeroBtn uppercase h-9 w-28' onClick={() => setLoggedIn(!loggedIn)}>join</button>
                                </div>
                            </> :
                                <>
                                    <div className="flex justify-end">
                                        <div className="gap-3 items-center rounded-full w-28 flex justify-center h-10 border-yellow-500 border bg-black" onClick={() => setLoggedIn(!loggedIn)}>
                                            <Image src={diamondPremium} alt='' quality={100} />
                                            <p className='uppercase text-xs text-white'>premium</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-between md:justify-around md:gap-12 mt-6 w-full items-center">
                                        <div className="flex flex-col">
                                            <Image src={UserProfile} alt='' quality={100} className='w-24 border-white border border-solid rounded-full' />
                                            <div className="flex justify-end">
                                                <AiFillStar className='text-yellow-500 relative -top-4 -left-3' />
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <p className='uppercase text-white text-sm md:text-lg'>Jenil patel</p>
                                                <p className='text-gray-500 text-sm'>silver rank</p>
                                            </div>
                                        </div>

                                        <div className='bg-gray-500 h-32 megaPrizeDivider'></div>

                                        <div className='flex flex-col items-center'>
                                            <p className='uppercase text-xl text-gray-500'>RANK</p>
                                            <p className='md:text-8xl text-7xl text-white blackBoxFont'>222</p>
                                        </div>
                                    </div>

                                </>

                        }

                    </div>


                    <div className=' relative xl:-top-12 w-full'>
                        <div className="flex w-[93%] justify-center">
                            <div className="lg:h-[3rem] md:h-[2.99rem] bg-[#0B111F] premiumBox3 relative top-[4.4rem] md:top-[4.7rem] w-[72%] left-[0.5rem] md:left-0 h-12 md:w-[45%] lg:w-[48%] ">
                            </div>
                        </div>
                        <p className='text-[#A3C7D7] text-xs -left-2 md:left-0 md:text-base relative top-10 text-center'>MEGA CHALLENGE</p>
                        <div className="w-[38rem] h-[21.1rem] maegaPrizeBox2 border-[#43E5F1] border-[1px] bg-[#43E5F1] megaprizeOuterBox1   my-10 ">
                            <div className="w-[38rem] h-[21rem] maegaPrizeBox2 border-[#43E5F1]  bg-[#000000] MeagPrizeBoxInnder">
                                <div className="flex flex-col items-center gap-4 pt-12 ">
                                    {megaChallengeData.map((item) => {
                                        return (
                                            <div className="flex  h-14 justify-evenly items-center megaChallengeIndivitualRow text-white" key={item.id}>
                                                <p> 0{item.id} </p>
                                                <p className='capitalize'>{item.title}</p>
                                                <p> {item.points} </p>
                                            </div>

                                        )
                                    })}
                                </div>
                                <br />
                            </div>

                        </div>
                    </div>

                    { /* other boxex  */}
                    <div className=' relative xl:-top-20'>
                        <div className="flex w-[93%] justify-center">
                            <div className="lg:h-[3rem] md:h-[2.99rem] bg-[#0B111F] premiumBox3 relative top-[3.2rem] md:top-[2.7rem] w-[81%] left-[0.5rem] md:left-4 h-16 md:w-[45%] lg:w-[48%] ">
                            </div>
                        </div>

                        <p className='text-[#A3C7D7] -left-3 md:left-0 text-lg relative top-1 text-center'>PRIZE</p>
                        <div className="w-[38rem] md:h-[12.1rem] h-[18.1rem]   border-[#43E5F1] border-[1px] bg-[#43E5F1]  ThirdShapecss2Iphone ">
                            <div className="w-[38rem] md:h-[12rem]   h-[18rem] border-[#43E5F1]  bg-[#000000] MeagPrizeBoxInnder2">
                                <div className="flex justify-center items-center w-full h-fit min-h-[16rem]">
                                    <p className='text-white md:text-4xl text-[2.56rem] lg:text-5xl w-full h-full text-center'>WIN AN IPHONE</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>



                <div className='h-[50rem] mt-16 lg:-mt-20'>
                    <div className="flex w-[93%] justify-center">
                        <div className="lg:h-[3.2rem] md:h-[2.99rem] bg-[#0B111F] premiumBox3 relative top-[3.9rem] md:top-[3.4rem] w-[81%] left-[0.7rem] md:left-5 h-16 md:w-[39%] lg:w-[48%] ">
                        </div>
                    </div>

                    <p className='text-[#A3C7D7]  md:text-xl w-full text-center top-4 md:-left-[0.3rem] relative'>LEADERBOARD</p>
                    <div className="w-[40rem] h-[100%] border-[#43E5F1] border-[1px] bg-[#43E5F1] FirstShapecss2">
                        <div className="w-[40rem] h-[100%] bg-[#000000]  FirstShapecss ">
                            <div className="flex flex-col pt-20 gap-2 items-center">
                                <div className="flex w-full justify-around gap-4 mb-3 items-center">
                                    <p className='uppercase text-white'>rank</p>
                                    <p className='uppercase text-white'>name</p>
                                    <p className='uppercase text-white'>points</p>
                                </div>

                                {leaderboardDataTop10.map((item) => {
                                    let rankClass = "leaderBoardRankText";
                                    if (item.id === 1) {
                                        rankClass = "goldText"; // assign golden color to rank 1
                                    } else if (item.id === 2) {
                                        rankClass = "silverText"; // assign silver color to rank 2
                                    } else if (item.id === 3) {
                                        rankClass = "bronzeText"; // assign bronze color to rank 3
                                    }
                                    return (
                                        <div className="flex items-center w-full h-12 justify-around gap-3 leaderBoardIndivitualRow" key={item.id}>
                                            <p className={rankClass}> {item.id < 4 && <span>#</span>} {item.id} </p>
                                            <p className='text-white font-light uppercase text-xl'>{item.title} </p>
                                            <p className='text-white'> {item.points} </p>
                                        </div>
                                    )
                                })}

                                <div className="flex flex-col text-xs">
                                    <p className='text-white'>.</p>
                                    <p className='text-gray-500 -mt-2'>.</p>
                                    <p className='text-gray-500 -mt-2'>.</p>
                                    <p className='text-gray-500 -mt-2'>.</p>
                                    <p className='text-gray-500 -mt-2'>.</p>
                                    <p className='text-gray-500 -mt-2'>.</p>
                                </div>

                                {leaderboardDataLastPlayer.map((item) => {
                                    return (
                                        <div className="flex items-center w-full h-12 justify-around gap-3 leaderBoardIndivitualRow " key={item.id}>
                                            <p className={"text-white"}> {item.id} </p>
                                            <p className='text-white font-light uppercase text-xl'>{item.title} </p>
                                            <p className='text-white'> {item.points} </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <br />

        </div>
    )
}

export default MegaPrizeIndex

/*

   

*/

