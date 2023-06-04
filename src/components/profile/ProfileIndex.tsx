import React from 'react'
import Image from 'next/image'
import diamond from "../../assets/profileDiamond.svg"
import user from "../../assets/profileUser.png"
import chartLineBg from "../../assets/profileLine.svg"
import chartImage from "../../assets/profileChartLine.svg"
import { IoChevronBackOutline } from "react-icons/io5";
import Link from 'next/link'
import { IoChevronForwardOutline } from "react-icons/io5";
import Chart, { ChartDataset } from 'chart.js/auto';
import { useEffect, useRef } from 'react';


type challendDataType = {
    id: number,
    title: string,
    points: number,
    day: number,
    month: number,
    year: number,
}[]

interface ChartCanvas extends HTMLCanvasElement {
    chart?: any;
}



const ProfileIndex = () => {

    const statsData = [
        {
            type: "matches",
            count: 492
        },
        {
            type: "kills",
            count: 540
        },
        {
            type: "deaths",
            count: 557
        },
        {
            type: "assits",
            count: 616
        },
        {
            type: "K/D",
            count: 492
        },
        {
            type: "ace",
            count: 895
        },
        {
            type: "Plants",
            count: 457
        },
        {
            type: "clutches",
            count: 796
        },

    ]

    const megaChallengeData: challendDataType = [
        {
            id: 1,
            title: "daily hard challenge", //  vandal (uppercase) rest all capitalize
            points: 100,
            day: 10,
            month: 5,
            year: 2023,
        },

        {
            id: 2,
            title: "community challenge", //  vandal (uppercase) rest all capitalize
            points: 100,
            day: 10,
            month: 5,
            year: 2023,
        },

        {
            id: 3,
            title: "daily medium challenge", //  vandal (uppercase) rest all capitalize
            points: 100,
            day: 10,
            month: 5,
            year: 2023,
        },
        {
            id: 4,
            title: "daily medium challenge", //  vandal (uppercase) rest all capitalize
            points: 100,
            day: 10,
            month: 5,
            year: 2023,
        },
    ]


    const matchHistory = [
        {
            id: 1,
            title: "match 1", //  vandal (uppercase) rest all capitalize
            day: 10,
            month: 5,
            year: 2023,
        },

        {
            id: 2,
            title: "match 2", //  vandal (uppercase) rest all capitalize
            day: 10,
            month: 5,
            year: 2023,
        },

        {
            id: 3,
            title: "match 3", //  vandal (uppercase) rest all capitalize
            day: 10,
            month: 5,
            year: 2023,
        },
        {
            id: 4,
            title: "match 4", //  vandal (uppercase) rest all capitalize
            day: 10,
            month: 5,
            year: 2023,
        },
    ]

    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current as ChartCanvas;
            if (canvas.chart) {
                canvas.chart.destroy();
            }
            const ctx = canvas.getContext('2d')!;
            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, '#D3EBF7');
            gradient.addColorStop(0.4392, '#34B3F1');
            gradient.addColorStop(0.5386, '#003488');
            gradient.addColorStop(0.6441, '#003488');
            gradient.addColorStop(0.8534, '#34B3F1');
            gradient.addColorStop(0.9864, '#D5EDF8');

            canvas.chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', "eight"],
                    datasets: [{
                        label: '',
                        data: [80, 20, 80, 40, 60, 20, 70, 25],
                        borderColor: gradient,
                        borderWidth: 3.3,
                        tension: 0.4,
                        borderCapStyle: 'round',
                        borderJoinStyle: 'round',
                        pointRadius: 3,
                        pointBackgroundColor: gradient,
                        pointHitRadius: 10
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            display: false
                        },
                        x: {
                            display: false
                        }
                    },
                    interaction: {
                        intersect: true,
                        mode: "index"
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                },
            });
        }
    }, []);



    return (
        <div>
            <div className="flex mt-24 md:mt-0 justify-evenly items-start gap-28 md:gap-24 lg:gap-0 flex-wrap">

                { /* PARENT ONE SHAPE ONE */}
                <div className="w-96 h-[38rem] relative lg:-top-9 md:-left-0">
                    <p className='text-[#A3C7D7] text-2xl relative top-5 -left-4 text-center'>MY STATS</p>
                    <div className="profileBox1a w-full h-full bg-[#43E5F1] border-[#43E5F1]  sm:border-1 border-[1px] ">
                        <div className="profileBox1b h-[100%] w-[100%] bg-[#000000] opacity-[99]">

                            <div className='pt-12'>

                                <div className='flex justify-end'>

                                    <div className="flex rounded-full w-24 h-8 justify-center mr-4 border-yellow-500 border-2 bg-black items-center gap-2">
                                        <Image src={diamond} alt='' quality={100} />
                                        <p className='text-xs text-gray-300'>PREMIUM</p>
                                    </div>
                                </div>

                                { /* user details */}
                                <div className='flex justify-center gap-4 mt-6 items-center mr-3'>
                                    <Image src={user} alt='' quality={100} className='w-24 h-24 border-white border-solid border-1 rounded-full' />

                                    <div className="flex flex-col gap-2 items-center">
                                        <p className='uppercase text-xl'>JAILNIL PATEL</p>

                                        <div className='flex items-end gap-1'>
                                            <p className='text-gray-400 font-light relative -top-3 tracking-widest'>TOKENS</p>
                                            <p className=' blackBoxFont text-7xl '>30</p>
                                        </div>
                                    </div>
                                </div>

                                <br />
                                { /* overall stats */}

                                <p className='text-xl tracking-wider ml-5'>OVERALL STATS</p>
                                <div className="profileDivider w-[90%] h-[1px] ml-5 mt-2">
                                </div>

                                <div className="flex justify-center mt-4 items-center flex-wrap gap-5">

                                    <div className="profileStatsButton flex flex-col items-center justify-center">
                                        <p className='text-xs text-[#8F8F8F] font-light'>WIN</p>
                                        <p className='text-3xl -mt-2 blackBoxFont'>110</p>
                                    </div>

                                    <div className="profileStatsButton flex flex-col items-center justify-center">
                                        <p className='text-xs text-[#8F8F8F] font-light'>WIN</p>
                                        <p className='text-3xl -mt-2 blackBoxFont'>110</p>
                                    </div>

                                    <div className="profileStatsButton flex flex-col items-center justify-center">
                                        <p className='text-xs text-[#8F8F8F] font-light'>WIN</p>
                                        <p className='text-3xl -mt-2 blackBoxFont'>110</p>
                                    </div>

                                    <div className="profileStatsButton flex flex-col items-center justify-center">
                                        <p className='text-xs text-[#8F8F8F] font-light'>WIN</p>
                                        <p className='text-3xl -mt-2 blackBoxFont'>110</p>
                                    </div>
                                </div>



                                { /*  match stats */}
                                <div className="flex flex-wrap items-center mt-8 justify-center gap-10">

                                    {statsData.map((item) => {
                                        return (
                                            <div className="flex flex-col items-center" key={item.type}>
                                                <p className='text-gray-200 capitalize font-light tracking-wide text-xs'>{item.type}</p>
                                                <p className='blackBoxFont text-3xl'>{item.count}</p>
                                            </div>
                                        )
                                    })}

                                </div>

                            </div>
                        </div>
                    </div>
                </div>



                { /* PARENT two SHAPE one and column container */}
                <div className="flex flex-col items-center gap-6 md:mt-16 lg:mt-24 xl:mt-0">
                    <div className='w-[47rem] h-[24rem]'>
                        <div className="max-h-[500px] max-w-[1220px] flex items-center justify-center relative">
                            <div className="z-30 text-white md:-top-[3%] -top-[4%] left-[37%] sm:left-[17%]  absolute">
                                <h1 className="lg:text-xl sm:text-xl text-base font-normal text-[#A3C7D7]">
                                    ACTIVITY
                                </h1>
                            </div>
                            <div className=" w-[100%] h-[20rem] bg-[#43E5F1] border-[#43E5F1] border-[1px] flex justify-center items-center custom-shapeMobile custom-shape">
                                <div className="w-[100%] h-[100%] custom-shapeMobile2 custom-shape2 text-white bg-[#060709] opacity-[99]">
                                    <div className='pt-12 w-full'>
                                        <div className="flex justify-between w-[90%] mx-auto">

                                            <div className="flex gap-7 items-center">
                                                <div className='flex gap-2 items-center'>
                                                    <div className="bg-[#FF0F00] rounded-full w-3 h-3">
                                                    </div>
                                                    <p className='text-xs'>KILLS</p>
                                                </div>

                                                <div className='flex gap-2 items-center'>
                                                    <div className="bg-[#0038FF] rounded-full w-3 h-3">
                                                    </div>
                                                    <p className='text-xs'>MATCH</p>
                                                </div>



                                            </div>


                                            <div className='flex items-center gap-4'>
                                                <div className="flex rounded-full border border-[#D9D9D9] w-20 h-6 pl-2 justify-start items-center">
                                                    <p className='text-xs'>KILLS</p>
                                                </div>

                                                <div className="flex rounded-full border border-[#D9D9D9] w-20 h-6 pl-2 justify-start items-center">
                                                    <p className='text-xs'>AGENT</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="md:w-[45.4rem] w-[20rem] -left-3 top-8 md:-top-1 lg:-top-3 md:left-4 h-[18rem] relative z-10">
                                            <canvas ref={canvasRef} className='profileChart' />
                                        </div>

                                        <div className='relative -top-[18.5rem] left-4'>
                                            <div className="flex gap-3 justify-center items-center mt-4">
                                                <p className='text-red-500 font-semibold text-xs'>12</p>
                                                <Image src={chartLineBg} alt='' quality={100} className="dottedLineChartBg" />
                                            </div>

                                            <div className="flex gap-3 justify-center items-center mt-4">
                                                <p className='text-red-500 font-semibold text-xs'>10</p>
                                                <Image src={chartLineBg} alt='' quality={100} className="dottedLineChartBg" />
                                            </div>

                                            <div className="flex gap-3 justify-center items-center mt-4">
                                                <p className='text-red-500 font-semibold text-xs'>8</p>
                                                <Image src={chartLineBg} alt='' quality={100} className="dottedLineChartBg" />
                                            </div>

                                            <div className="flex gap-3 justify-center items-center mt-4">
                                                <p className='text-red-500 font-semibold text-xs'>6</p>
                                                <Image src={chartLineBg} alt='' quality={100} className="dottedLineChartBg" />
                                            </div>

                                            <div className="flex gap-3 justify-center items-center mt-4">
                                                <p className='text-red-500 font-semibold text-xs'>4</p>
                                                <Image src={chartLineBg} alt='' quality={100} className="dottedLineChartBg" />
                                            </div>

                                            <div className="flex gap-3 justify-center items-center mt-4">
                                                <p className='text-red-500 font-semibold text-xs'>2</p>
                                                <Image src={chartLineBg} alt='' quality={100} className="dottedLineChartBg" />
                                            </div>

                                            <div className="flex gap-3 justify-center items-center mt-4">
                                                <p className='text-red-500 font-semibold text-xs'>0</p>
                                                <Image src={chartLineBg} alt='' quality={100} className="dottedLineChartBg" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/*  parent two shape two */}
                    <div className='w-[47rem] h-[24rem]'>
                        <div className="max-h-[500px] max-w-[1220px] flex items-center justify-center relative">
                            <div className="z-30 text-white md:-top-[5%] -top-[4%] left-[31.7%] sm:left-[14.5%]  absolute">
                                <h1 className="lg:text-lg sm:text-lg text-base font-normal text-[#A3C7D7]">
                                    TOTAL TOKENS
                                </h1>
                            </div>
                            <div className=" w-[100%] h-[21rem] md:h-[15rem] bg-[#43E5F1] border-[#43E5F1] border-[1px] flex justify-center items-center custom-shapeMobile custom-shape">
                                <div className="w-[100%] h-[100%] custom-shapeMobile2 custom-shape2 text-white bg-[#060709] opacity-[99]">
                                    <div className=' flex justify-center flex-wrap items-center w-full h-full'>

                                        <div className="flex items-center md:gap-28 gap-8 flex-wrap justify-around">

                                            <div className="flex items-center gap-6 flex-col">
                                                <p>Current</p>
                                                <p className='blackBoxFont md:text-7xl text-4xl'>429</p>
                                            </div>

                                            <div className="flex items-center gap-6 flex-col">
                                                <p>Total</p>
                                                <p className='blackBoxFont md:text-7xl text-4xl'>5061</p>
                                            </div>

                                            <div className="flex items-center gap-6 flex-col">
                                                <p>Usage</p>
                                                <p className='blackBoxFont md:text-7xl text-4xl'>4534</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                { /* bottom 2 challenge history and match history container  */}

                <div className="flex justify-center flex-wrap gap-16 items-center relative md:-top-16">

                    <div className='w-[35.5rem] h-[22rem]'>
                        <div className="max-h-[500px] max-w-[1220px] flex items-center justify-center relative">
                            <div className="z-30 text-white md:-top-[3%] -top-[3.5%] left-[29.4%] sm:left-[14.8%]  absolute">
                                <h1 className="lg:text-lg sm:text-lg text-sm font-normal text-[#A3C7D7]">
                                    CHALLENGE HISTORY
                                </h1>
                            </div>
                            <div className=" w-[100%] h-[21rem] md:h-[20rem] bg-[#43E5F1] border-[#43E5F1] border-[1px] flex justify-center items-center custom-shapeMobile challengeHistory-shape">
                                <div className="w-[100%] h-[100%] custom-shapeMobile2 challengeHistory-shape2 text-white bg-[#060709] opacity-[99]">
                                    <div className="flex flex-col items-center gap-4 lg:mt-12 mt-14">
                                        {megaChallengeData.map((item) => {
                                            return (
                                                <div className="flex  h-12 justify-evenly items-center megaChallengeIndivitualRow text-white" key={item.id}>
                                                    <p className='text-sm md:text-base'> {item.id} </p>
                                                    <div className="flex items-center font-light text-gray-500 text-xs md:text-base">
                                                        <span>{item.day}</span>/
                                                        <span>{item.month} </span>/
                                                        <span> {item.year} </span>
                                                    </div>
                                                    <Link href={"/dashboard/Megaprize"}>
                                                        <p className=' uppercase  text-xs md:text-base'>{item.title}</p>
                                                    </Link>
                                                    <div className='flex flex-col items-center'>
                                                        <p className='text-yellow-400 text-xs md:text-base'>{item.points}</p>
                                                        <p className=' text-[10px] text-[#555454]'> TOKENS EARNED </p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    { /* match history box 2 */}

                    <div className='w-[35.5rem] h-[22rem]'>
                        <div className="max-h-[500px] max-w-[1220px] flex items-center justify-center relative">
                            <div className="z-30 text-white md:-top-[3%] -top-[3.5%] left-[34.4%] sm:left-[16.8%]  absolute">
                                <h1 className="lg:text-xl sm:text-lg text-sm font-normal text-[#A3C7D7]">
                                    MATCH HISTORY
                                </h1>
                            </div>
                            <div className=" w-[100%] h-[21rem] md:h-[20rem] bg-[#43E5F1] border-[#43E5F1] border-[1px] flex justify-center items-center custom-shapeMobile challengeHistory-shape">
                                <div className="w-[100%] h-[100%] custom-shapeMobile2 challengeHistory-shape2 text-white bg-[#060709] opacity-[99]">
                                    <div className="flex flex-col items-center gap-2 lg:mt-12 mt-14">
                                        {matchHistory.map((item) => {
                                            return (
                                                <div className="flex  h-12 justify-evenly items-center megaChallengeIndivitualRow text-white" key={item.id}>
                                                    <p className='text-sm md:text-base'> {item.id} </p>
                                                    <div className="flex items-center font-light text-gray-500 text-sm md:text-base">
                                                        <span>{item.day}</span>/
                                                        <span>{item.month} </span>/
                                                        <span> {item.year} </span>
                                                    </div>
                                                    <Link href={"/Tips"}>
                                                        <p className=' uppercase  text-sm md:text-base'>{item.title}</p>
                                                    </Link>

                                                </div>

                                            )
                                        })}
                                    </div>

                                    <div className="flex justify-center items-center gap-7 mt-6 ">

                                        <div className='rounded-full w-4 h-4 border border-gray-500 flex justify-center items-center text-[10px]'>
                                            <IoChevronBackOutline />
                                        </div>

                                        <div className="flex items-center gap-6 text-[10px]">
                                            <p>1</p>
                                            <p>2</p>
                                            <p>3</p>
                                            <p>...</p>
                                            <p>32</p>

                                        </div>
                                        <div className='rounded-full w-4 h-4 border border-gray-500 flex justify-center items-center text-[10px]'>
                                            <IoChevronForwardOutline />
                                        </div>
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

export default ProfileIndex
