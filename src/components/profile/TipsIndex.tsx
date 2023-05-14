import React from 'react'
import tipsAgent from "../../assets/tipsAgent.png"
// 
import Image from 'next/image'
import statsImage from "../../assets/profileStatsImage.svg"
import greenSkull from "../../assets/profileGreenSkull.svg"
import redSkull from "../../assets/profileRedSkull.svg"
import yellowSkull from "../../assets/profileYellowSkull.svg"
import { useState, useEffect, useRef } from 'react'
import opponent1 from "../../assets/tipsOpponentAgent1.png";
import opponent2 from "../../assets/tipsOpponentAgent2.png";
import opponent3 from "../../assets/tipsOpponentAgent3.png";
import agentWeapon from "../../assets/tipsWeapon1.png";
import closeBtn from "../../assets/tipsModalCross.svg"


const TipsIndex = () => {
    const [isOpen, setIsOpen] = useState(false);
    const modalContentRef = useRef<HTMLDivElement>(null);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const closeModal = (event: any) => {
        if (modalContentRef.current && !modalContentRef.current.contains(event.target)) {
            setIsOpen(false);

        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", closeModal);
        } else {
            document.removeEventListener("mousedown", closeModal);
        }
        return () => {
            document.removeEventListener("mousedown", closeModal);
        };
    }, [isOpen]);



    const matchDta = [
        {
            category: "mode",
            result: "competitive"
        },

        {
            category: "map",
            result: "fracture"
        },

        {
            category: "team a",
            result: "13"
        },


        {
            category: "team b",
            result: "3"
        },

        {
            category: "time",
            result: "1/11/23 23:12:00PM",

        },

        {
            category: "macth time",
            result: "26.17s"
        },

    ]

    const allRoundArr = [
        {
            red: redSkull,
            red2: redSkull,
            green: greenSkull,
            yellow: yellowSkull,
            id: 1,

        },

        {
            red: redSkull,
            red2: redSkull,
            green: greenSkull,
            yellow: yellowSkull,
            id: 2,

        },
        {
            red: redSkull,
            red2: redSkull,
            green: greenSkull,
            yellow: yellowSkull,
            id: 3,

        },
        {
            red: redSkull,
            red2: redSkull,
            green: greenSkull,
            yellow: yellowSkull,
            id: 4,

        },
        {
            red: redSkull,
            red2: redSkull,
            green: greenSkull,
            yellow: yellowSkull,
            id: 5,

        },
        {
            red: redSkull,
            red2: redSkull,
            green: greenSkull,
            yellow: yellowSkull,
            id: 6,

        },
        {
            red: redSkull,
            red2: redSkull,
            green: greenSkull,
            yellow: yellowSkull,
            id: 7,

        },
        {
            red: redSkull,
            red2: redSkull,
            green: greenSkull,
            yellow: yellowSkull,
            id: 8,

        },
        {
            red: redSkull,
            red2: redSkull,
            green: greenSkull,
            yellow: yellowSkull,
            id: 9,

        },
        {
            red: redSkull,
            red2: redSkull,
            green: greenSkull,
            yellow: yellowSkull,
            id: 10,

        },
        {
            red: redSkull,
            red2: redSkull,
            green: greenSkull,
            yellow: yellowSkull,
            id: 11,

        },
        {
            red: redSkull,
            red2: redSkull,
            green: greenSkull,
            yellow: yellowSkull,
            id: 12,

        },
        {
            red: redSkull,
            red2: redSkull,
            green: greenSkull,
            yellow: yellowSkull,
            id: 13,

        },
        {
            red: redSkull,
            red2: redSkull,
            green: greenSkull,
            yellow: yellowSkull,
            id: 14,

        },
        {
            red: redSkull,
            red2: redSkull,
            green: greenSkull,
            yellow: yellowSkull,
            id: 15,

        },
        {
            red: redSkull,
            red2: redSkull,
            green: greenSkull,
            yellow: yellowSkull,
            id: 16,

        },
        {
            red: redSkull,
            red2: redSkull,
            green: greenSkull,
            yellow: yellowSkull,
            id: 17,

        },
        {
            red: redSkull,
            red2: redSkull,
            green: greenSkull,
            yellow: yellowSkull,
            id: 18,

        },
        {
            red: redSkull,
            red2: redSkull,
            green: greenSkull,
            yellow: yellowSkull,
            id: 19,

        },
        {
            red: redSkull,
            red2: redSkull,
            green: greenSkull,
            yellow: yellowSkull,
            id: 20,

        },
        {
            red: redSkull,
            red2: redSkull,
            green: greenSkull,
            yellow: yellowSkull,
            id: 21,

        },
        {
            red: redSkull,
            red2: redSkull,
            green: greenSkull,
            yellow: yellowSkull,
            id: 22,

        },
        {
            red: redSkull,
            red2: redSkull,
            green: greenSkull,
            yellow: yellowSkull,
            id: 23,

        },
        {
            red: redSkull,
            red2: redSkull,
            green: greenSkull,
            yellow: yellowSkull,
            id: 24,

        },


    ]

    const tips = [
        {
            id: 1,
            tipType: "game tips",
            actualTip: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 2,
            tipType: "game tips",
            actualTip: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        }
    ]

    const tipsmodalDta = [
        {
            id: 1,
            kill: 1,
            deaths: 5,
            damage: 994,
            recieved: 850,
            opponentAvatar: opponent1,
            opponentName: "floyd miles"
        },
        {
            id: 2,
            kill: 5,
            deaths: 4,
            damage: 494,
            recieved: 850,
            opponentAvatar: opponent2,
            opponentName: "cameron williamson"
        },
        {
            id: 3,
            kill: 15,
            deaths: 10,
            damage: 5494,
            recieved: 800,
            opponentAvatar: opponent3,
            opponentName: "arelne mccoy"
        },
    ]


    const tipsModalWeapon = [
        {
            id: 1,
            weaponName: 'knife',
            weaponImage: agentWeapon,
            kills: 5,
            damage: 9995
        },
        {
            id: 2,
            weaponName: "knife",
            weaponImage: agentWeapon,
            kills: 5,
            damage: 9995
        },
        {
            id: 3,
            weaponName: "knife",
            weaponImage: agentWeapon,
            kills: 5,
            damage: 9995
        },
       
    ]


    const tipsModalYourStats = [
        {
            id: 1,
            kills: 1,
            deaths: 4,
            damage: 994,
            recieved: 5000
        },
        {
            id: 2,
            kills: 10,
            deaths: 4,
            damage: 520,
            recieved: 800,
        },
        {
            id: 3,
            kills: 15,
            deaths: 5,
            damage: 994,
            recieved: 900
        },
    ]

    const tipsModalOpponentStats = [
        {
            id: 1,
            avatar: opponent1,
            opponentName: "floyd miles",
        },
        {
            id: 2,
            avatar: opponent2,
            opponentName: "cameron williamson",
        },
        {
            id: 3,
            avatar: opponent3,
            opponentName: "Arlen mccoy",
        },
    ]


    return (
        <div className='text-white'>
            <div className='w-full'>

                <div className="flex items-start agent justify-evenly flex-wrap">
                    <div className=" w-full md:w-[55%]">

                        <div className="flex items-center gap-4 w-full h-full">
                            <div className="flex flex-col w-full h-full items-center gap-4">


                                <div className="flex justify-evenly w-full items-center md:gap-20 gap-16 lg:gap-28 flex-wrap">

                                    {  /* boox 1  */}
                                    <div>
                                        <div className="flex w-[93%] justify-center">
                                            <div className="lg:h-[3.1rem] md:h-[3.1rem] bg-[#0B111F] premiumBox3 relative top-[7.9rem] md:top-[3.2rem] w-[91%] left-[0.6rem] md:-left-0 h-16 md:w-[37%] lg:w-[80%] ">
                                            </div>
                                        </div>

                                        <p className='relative mb-1 top-3 -left-2 text-center'>MATCH DATA</p>
                                        <div className="w-[16rem] h-[19rem] flex items-center justify-center  tipsP1Box1 flex-col gap-4 bg-[#43E5F1] border-[#43E5F1]   sm:border-1 border-[1px]">

                                            <div className='bg-[#000000] opacity-[99]  tipsP1Box1b w-full  h-full'>

                                                <div className="flex flex-col gap-4 pt-12 pl-8 items-center">
                                                    {matchDta.map((item) => {
                                                        return (
                                                            <div className="flex w-[100%] items-center justify-between gap-4" key={item.category}>
                                                                <p className='text-gray-500 uppercase font-light text-sm'>{item.category}</p>
                                                                <p className='text-sm  w-1/2  tracking-wider uppercase text-left font-light text-white'> {item.result} </p>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {  /* boox 2  */}


                                    <div className='mt-1'>
                                        <div className="flex w-[93%] justify-center">
                                            <div className="lg:h-[3.1rem] md:h-[3.1rem] bg-[#0B111F] premiumBox3 relative top-[7.9rem] md:top-[3.2rem] w-[91%] left-[0.6rem] md:-left-0 h-16 md:w-[37%] lg:w-[80%] ">
                                            </div>
                                        </div>
                                        <p className='relative top-1 left-[4.99rem] md:left-[3.6rem] md:text-[12px] lg:text-[14px] lg:left-20 text-sm'>YOUR PERFORMANCE</p>
                                        <div className="w-[16rem] h-[19rem] flex items-center justify-center  tipsP1Box1 flex-col gap-4 bg-[#43E5F1] border-[#43E5F1]   sm:border-1 border-[1px]">

                                            <div className='bg-[#000000] opacity-[99]  tipsP1Box1b w-full  h-full'>

                                                <div className="flex justify-center w-full h-full items-center">
                                                    <Image src={statsImage} alt='' quality={100} className='w-[15rem]' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                { /*  SKULL STATS  */}
                                <p className='lg:text-xl md:text-base relative md:top-11 top-12 -left-2 lg:-left-1'>ALL ROUNDS</p>
                                <div className="w-[50rem] relative border-[#43E5F1] border-[1px] bg-[#43E5F1] pr-[0.1rem] pl-[0.04rem] sm:pr-0 sm:pl-0  allRoundsShape2 mt-3 -mb-4 md:left-0 -left-2">
                                    <div className="w-[50rem]   bg-[#000000]   allRoundsShape1">
                                        <br />

                                        <div className="flex justify-evenly  flex-wrap items-center pt-6 gap-x-1 lg:gap-x-5 gap-y-1">

                                            {allRoundArr.map((item) => {
                                                return (

                                                    <div key={item.id} className="flex flex-col mb-2 justify-evenly gap-0 flex-wrap items-end">

                                                        <p className=' text-sm pr-2 font-light'> {item.id} </p>
                                                        <div className="flex items-center gap-[0.15rem] blueButton flex-wrap cursor-pointer justify-evenly blueButton2 w-32" key={item.id} onClick={toggleModal} >
                                                            <Image src={item.red} alt='' quality={100} />
                                                            <Image src={item.red2} alt='' quality={100} />
                                                            <Image src={item.red} alt='' quality={100} />
                                                            <div className='bg-white w-[1px] h-4'></div>
                                                            <Image src={item.green} alt='' quality={100} />
                                                        </div>


                                                    </div>
                                                )
                                            })}

                                        </div>

                                        <br />
                                        <div className="flex justify-end items-center gap-5 w-[95%]">

                                            <div className="flex items-center gap-2">
                                                <Image src={greenSkull} alt='' quality={100} />
                                                <p>-</p>
                                                <p>KILL</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Image src={redSkull} alt='' quality={100} />
                                                <p>-</p>
                                                <p>KILL</p>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <Image src={yellowSkull} alt='' quality={100} />
                                                <p>-</p>
                                                <p>KILL</p>
                                            </div>
                                        </div>

                                        <br />

                                    </div>
                                </div>

                            </div>

                            {  /* PARENT ONE END  */}

                        </div>
                    </div>

                    {  /* AGENT */}

                    <div className='  -z-[1] lg:z-20 brightness-150 lg:brightness-110  -top-[99rem] left-32 overflow-hidden relative  md:top-8 md:left-0'>
                        <p className='text-4xl text-center relative font-semibold md:left-10 md:tracking-[0.2em] hidden lg:block'>AGENT</p>

                        <div className="flex items-center gap-0">
                            <div className='text-9xl blackBoxFontOutline text-gray-600 left-20 relative hidden lg:block'>
                                <span className='flex'>O</span>
                                <span className='flex'>M</span>
                                <span className='flex'>E</span>
                                <span className='flex'>N</span>
                            </div>
                            <Image src={tipsAgent} alt='' quality={100} priority className='relative  md:left-0' />
                        </div>
                    </div>

                </div>


                { /*  tips */}
                <div className="flex justify-center">
                    <div className='w-full'>
                        <div className="flex w-[93%] justify-center">
                            <div className="lg:h-[3.2rem] md:h-[3.1rem] bg-[#0B111F] premiumBox3 relative top-[7.8rem] md:top-[2.9rem] w-[91%] left-[0.6rem] md:left-1 h-16 md:w-[37%] lg:w-[27%] ">
                            </div>
                        </div>

                        <p className='lg:text-xl md:text-sm left-0 md:left-0 text-[#A3C7D7] text-center w-[93%]  top-[5rem] md:top-1 lg:top-3 tracking-wide relative '> TIPS</p>

                        <div className="maarketPlaceHeroMainParent tipsContainer bg-[#43E5F1]  tipsPraent2 mb-8 lg:mb-0  mx-auto ">
                            <div className='tipsBGColor h-full    tipsParent1 '>

                                <div className="flex justify-start items-center w-full h-full gap-3 pt-12 lg:mb-16 mb-2">

                                    <div className="flex flex-col gap-3 md:gap-5">

                                        {tips.map((item) => {
                                            return (
                                                <div className="tipsPurpleBorder w-full mb-8 lg:mb-0 md:ml-3 ml-[0.4rem]" key={item.id}>
                                                    <div className="flex flex-col gap-2 w-full">
                                                        <p className='text-gray-500 font-light  md:text-xl mt-3 lg:mt-0'>{item.tipType}</p>
                                                        <div className="tipsPurpleDivider mb-2"></div>
                                                        <div className="flex justify-between  items-center gap-3 flex-wrap">
                                                            <p className='md:text-lg text-base w-[85%] capitalize'>
                                                                {item.actualTip}
                                                            </p>
                                                            <button className='dashBoardHeroBtn md:w-36 w-28 mb-4 md:mb-2 mt-2 '>VIEW</button>
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



                { /* tips modal  */}
                {isOpen && (
                    <div className="modal-backdrop show">

                        <div className="" >
                            <div className='w-full'>
                                <div className="flex w-[93%] justify-center">
                                    <div className="lg:h-[3.8rem] md:h-[3.6rem] bg-[#0B111F] premiumBox3 relative -top-[15rem] md:-top-[16.1rem] lg:-top-[8.4rem] w-[18rem] left-[0.5rem] md:-left-[1.7rem] h-16 md:w-[19rem] lg:w-[21rem] ">
                                    </div>
                                </div>

                                <p className='lg:text-xl md:text-sm left-0 md:-left-10 text-[#A3C7D7] text-center  w-full  -top-[18rem] md:-top-[19rem] lg:-top-[11.5rem] tracking-wide relative '> ROUND 1</p>

                                <div className="  bg-[#43E5F1] tipsModalParentDimensions modal-content show  tipsModalParent2 mb-8 lg:mb-0  mx-auto " ref={modalContentRef}>
                                    <div className=' bg-black h-full tipsModalParentDimensions   tipsModalParent1 '>

                                        <div className="flex w-full justify-end">
                                            <Image src={closeBtn} alt='' quality={100} className=' cursor-pointer' onClick={toggleModal} />
                                        </div>

                                        <div className="text-white  w-full h-full gap-3 pt-12 ">

                                            <div className="flex w-full flex-wrap  montestratFont justify-around items-center">
                                                <div className="flex items-center  flex-col gap-5">
                                                    <p className='text-3xl text-gray-500'>Kills</p>
                                                    <p className='text-2xl '>1</p>
                                                </div>

                                                <div className="flex items-center  flex-col gap-5">
                                                    <p className='text-3xl text-gray-500'>Assits</p>
                                                    <p className='text-2xl '>8</p>
                                                </div>

                                                <div className="flex items-center  flex-col gap-5">
                                                    <p className='text-3xl text-gray-500'>Death</p>
                                                    <p className='text-2xl '>6</p>
                                                </div>

                                                <div className="flex  items-center flex-col gap-5">
                                                    <p className='text-3xl text-gray-500'>K/D</p>
                                                    <p className='text-2xl '>20</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start md:gap-4 mt-3 flex-wrap">
                                                { /*  your stats parent */}

                                                <div className="flex flex-col items-center gap-2 lg:w-[56%] w-full ml-2 md:ml-4">
                                                    <div className="flex justify-around w-full border-purple-500 border-2 items-center relative tipsModalHeadingHold">
                                                        <div className="flex capitalize  items-center gap-2 text-[12px] md:text-base md:gap-[2rem] relative -left-5 lg:-left-8">
                                                            <p>Kill</p>
                                                            <p>Deaths</p>
                                                            <p>Damage</p>
                                                            <p>Recieved</p>
                                                        </div>
                                                        <p className=' capitalize w-[28%] text-[12px] md:text-base'>Opponent</p>
                                                    </div>

                                                    <div className="flex w-full flex-wrap gap-0">

                                                        { /*  YOUR STATS */}
                                                        <div className="flex w-[50%] flex-col gap-1 items-center mb-8 lg:mb-0">
                                                            {tipsModalYourStats.map((item) => {
                                                                return (
                                                                    <div className="flex w-full justify-around items-center gap-7 tipsModalYourStatsRow" key={item.id}>
                                                                        <p className='text-xs md:text-sm lg:text-base'> {item.kills} </p>
                                                                        <p className='text-xs md:text-sm lg:text-base'> {item.deaths} </p>
                                                                        <p className='text-xs md:text-sm lg:text-base'> {item.damage} </p>
                                                                        <p className='text-xs md:text-sm lg:text-base'> {item.recieved} </p>
                                                                    </div>
                                                                )
                                                            })}


                                                           

                                                        </div>


                                                        {  /*  OPPONENTTS STATS  */}
                                                        <div className="flex w-[50%] flex-col gap-1 items-center mb-8 lg:mb-0">


                                                            {tipsModalOpponentStats.map((item) => {
                                                                return (
                                                                    <div className="flex w-full justify-evenly items-center h-12 tipsOpponentIndivitualRow" key={item.id}>
                                                                        <div className="flex items-center justify-start w-full md:pl-0 relative -left-2 md:left-0">
                                                                            <div className='flex items-center justify-start gap-3'>
                                                                                <p className='text-[9px] font-semibold'>VS</p>
                                                                                <Image src={item.avatar} alt='' quality={100} className='md:w-10 w-8' />
                                                                                <p className='text-[9px] whitespace-nowrap md:text-base'> {item.opponentName} </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })}

                                                         
                                                        </div>
                                                    </div>
                                                </div>


                                                {/*  weapon PARENT */}

                                                <div className="flex flex-col items-center gap-2 lg:w-[36%] w-full ml-2 md:ml-4">
                                                    <div className="flex justify-between w-full border-purple-500 border-2 items-center relative tipsModalHeadingHold">
                                                        <div className="flex capitalize items-center gap-3 text-[13px] md:text-base md:gap-[2rem] relative">
                                                            <p>Weapons</p>
                                                        </div>

                                                        <div className='flex items-center gap-10 w-[36%] justify-between '>
                                                            <p className=' capitalize text-[12px] md:text-base'>Kills</p>
                                                            <p className=' capitalize text-[12px] md:text-base'>Damage</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex w-full flex-wrap gap-0">

                                                        { /*  YOUR STATS */}
                                                        <div className="flex w-[100%] flex-col gap-1 items-center">


                                                            {tipsModalWeapon.map((item) => {
                                                                return (
                                                                    <div className="flex w-full justify-around items-center gap-7 tipsModalYourStatsRow weaponRow" key={item.id} >
                                                                        <div className='flex items-center w-[50%] justify-between'>
                                                                            <p> {item.weaponName} </p>
                                                                            <Image src={item.weaponImage} alt='' quality={100} className='w-40 h-10' />
                                                                        </div>


                                                                        <div className="flex items-center w-[30%] justify-between">
                                                                            <p> {item.kills} </p>
                                                                            <p> {item.damage} </p>
                                                                        </div>

                                                                    </div>
                                                                )
                                                            })}

                                                            <br />
                                                            <br />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                )}

            </div>


            <br />
            <br />
            <br />


        </div>
    )
}

export default TipsIndex

/*



*/