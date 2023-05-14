import React from 'react'
import valorant from "../../assets/CHchallengeVallorant.png"
import heart from "../../assets/CHchallengeHeart.png"
import Image, { StaticImageData } from 'next/image'
import tokens from "../../assets/solochallengeCoin.svg"
import rightArrbox from "../../assets/communityRightArr.svg"
import lefArrBox from "../../assets/communityLeftArr.svg"
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import greenTRI2 from "../../assets/communityGreenTRI.svg"
import redTri from "../../assets/redTri.svg"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure
} from '@chakra-ui/react'
import closeBtn from "../../assets/tipsModalCross.svg"
import modalTop from "../../assets/modalTop.svg"
import { useState } from 'react'
import cloud from "../../assets/cloudUpload.svg"
import HeaderImage from "../../assets/trial6.png"

type challengeDataType = {
    id: number,
    title: string,
    subTitle: string,
    coins: number,
    challengeImage: HTMLImageElement | StaticImageData,
    timeLeft?: string,
    completionStatus: string,
    color: string
}[]


const DashboardCommunityChallenge = () => {

    const communityChallengeDataArr: challengeDataType = [
        {
            id: 1,
            title: "Get most kill with vandal",
            subTitle: "community challenge",
            coins: 2500,
            challengeImage: valorant,
            timeLeft: "00:45:00s",
            completionStatus: "ongoing", // if health then green color border else red
            color: 'red'
        },

        {
            id: 2,
            title: "Run 5km marathon", // capitalize
            subTitle: "community challenge",
            coins: 2500,
            challengeImage: heart,
            completionStatus: "health", // if health then green color border else red
            color: 'green'
        },

        {
            id: 3,
            title: "Get most kill with vandal",
            subTitle: "community challenge",
            coins: 2500,
            challengeImage: valorant,
            timeLeft: "00:45:00s",
            completionStatus: "ongoing", // if health then green color border else red
            color: 'red'
        },

        {
            id: 4,
            title: "Get most kill with vandal",
            subTitle: "community challenge",
            coins: 2500,
            challengeImage: valorant,
            timeLeft: "00:45:00s",
            completionStatus: "ongoing", // if health then green color border else red
            color: 'red'
        },

        {
            id: 5,
            title: "Get most kill with vandal",
            subTitle: "community challenge",
            coins: 2500,
            challengeImage: valorant,
            timeLeft: "00:45:00s",
            completionStatus: "ongoing", // if health then green color border else red
            color: 'red'
        },

        {
            id: 6,
            title: "Run 5km marathon", // capitalize
            subTitle: "community challenge",
            coins: 2500,
            challengeImage: heart,
            completionStatus: "health", // if health then green color border else red
            color: 'green'
        },
        

    ]

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [firstModalIsOpen, setFirstModalIsOpen] = useState(false);
    const [secondModalIsOpen, setSecondModalIsOpen] = useState(false);

    const openFirstModal = () => {
        setFirstModalIsOpen(true);
    }

    const closeFirstModal = () => {
        setFirstModalIsOpen(false);
    }

    const openSecondModal = () => {
        setSecondModalIsOpen(true);
    }

    const closeSecondModal = () => {
        setSecondModalIsOpen(false);
    }



    return (
        <div className=''>

            <div className='w92percent'>
                <div className="flex justify-end">
                    <p className='activePlayersMonthly'>14M ACTIVE PLAYER
                        <br />
                        MONTHLY</p>
                </div>
            </div>


            <div className="flex flex-wrap justify-between mx-auto w80percent">
                <p className='text-lg font-semibold uppercase montestratFont soloChallengeHeader text-[#BFC6CC]'>community & health challenge</p>
                <div className='flex mb-8 md:mb-2 mt-6 md:mt-2 lg:mt-0'>
                    <Image src={lefArrBox} quality={100} alt='' className='-mr-4' />
                    <div className='leftArrDashboard relative'>
                        <BsArrowLeft className='text-gray-500 text-sm cursor-pointer' />
                    </div>

                    <Image src={rightArrbox} quality={100} alt='' />
                    <div className='rightArrDashboard relative'>
                        <BsArrowRight className='text-white text-sm cursor-pointer ' />
                    </div>

                </div>
            </div>
            <div className='dashboardDividerLine  w80percent mt-3 mb-7 hidden md:block'></div>

            <div className="">
                <div className='w-9 sidebarSideLine relative -top-7 hidden md:block -ml-1'></div>

                <div className="soloChallengesHold challengeDimensions ">
                    {communityChallengeDataArr.map((item) => {
                        return (
                            <div className={`${item.completionStatus === "ongoing" ? "communityChallengeIndivitual overflow-hidden" : " overflow-hidden communityGreenBorder"}`} key={item.id} >

                                <div className="flex gap-4 items-center mt-4 justify-around pr-2">
                                    <Image src={item.challengeImage} alt='' quality={100} className='' />
                                    <div className="flex items-center gap-3">
                                        {item.timeLeft && <p className='text-gray-300 font-light whitespace-nowrap'>Ends in :</p>}
                                        <p className='text-red-500 font-semibold'> {item.timeLeft} </p>
                                    </div>
                                    <p className={`${item.completionStatus === "ongoing" ? "rounded-full w-24 h-7 bg-blue-400 flex justify-center items-center text-xs uppercase font-semibold " : " uppercase font-semibold rounded-full w-24 h-7 bg-green-400 flex justify-center items-center text-xs"}`}>{item.completionStatus}</p>
                                </div>

                                <br />
                                {item.timeLeft ? <br /> : <p className='mt-3'></p>}
                                <div className="flex justify-around">
                                    <div className="flex flex-col gap-3">
                                        <p className=' uppercase text-white text-lg'> {item.title} </p>
                                        <p className='text-white uppercase text-xs'> {item.subTitle} </p>
                                    </div>

                                    <div className="flex flex-col gap-2 items-center pr-2">
                                        <p className='text-xs greenText capitalize'>win prize</p>
                                        <div className="flex items-center gap-2">
                                            <Image src={tokens} alt='' quality={100} />
                                            <p className='text-white text-xs'> {item.coins} </p>
                                        </div>

                                        {item.completionStatus === "ongoing" ? <button className='text-white dashBoardHeroBtn uppercase h-9 w-28' onClick={openFirstModal}>join</button> : <button className='text-white dashBoardHeroBtn uppercase h-9 w-28' onClick={openFirstModal}>join</button>}
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <p className={`${item.completionStatus === "ongoing" ? "redGradient rounded-full w-12 h-12 relative left-4" : "greenGradient rounded-full w-12 h-12 relative left-4"}`}></p>
                                </div>
                                <div className='flex justify-end'>
                                    {item.color === "green" ? <Image src={greenTRI2} alt='' quality={100} className=' communityChallengeGreenTriangle' /> : <Image src={redTri} alt='' quality={100} className='communityChallengeTriangle' />}
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>



            { /*  MODAL HEALTH CHALLENGE 1 */}

            <div className='relative top-16'>
                <Modal isOpen={firstModalIsOpen} onClose={closeFirstModal}>
                    <ModalOverlay />
                    <ModalContent className='HealthChallenegModal'>
                        <div className="flex justify-center relative -top-[1.5rem]">
                            <div className="flex flex-col items-center">
                                {/*<Image src={HeaderImage} alt='' quality={100} />*/}
                                {<Image src={modalTop} alt='' quality={100} />}
                            </div>
                        </div>
                        {/* <div className="flex w-full justify-end cursor-pointer relative -top-[4.7rem]" >
                            <Image src={closeBtn} alt='' quality={100} onClick={closeFirstModal} />
                </div>*/}

                        {<div className="flex w-full justify-end cursor-pointer relative -top-5" >
                            <Image src={closeBtn} alt='' quality={100} onClick={closeFirstModal} />
                        </div>}
                        <ModalBody>
                            <div className="flex justify-center relative -top-6">
                                <div>
                                    <p className='text-[#EBEBEB] text-center uppercase text-5xl md:text-6xl whitespace-nowrap blackBoxFont tracking-[0.065em]'>HEALTH <br /> CHALLENGE </p>
                                    <div className='w-[90%] mx-auto'>
                                        <p className='text-[#D9D9D9] montestratFont md:text-base text-center mt-2'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                                    </div>
                                    <br />
                                    <div className="flex justify-center">
                                        <button className='dashBoardHeroBtn text-white h-10' onClick={openSecondModal}>PARTICIPATE</button>
                                        <br />
                                    </div>
                                    <br />
                                    <br />
                                    <div className='text-white text-[10px] text-center'>Terms And Conditions: <span className='text-[#5A5A5A]'>Don&apos;t Create Toxicity environment due to the Gemaverse Challenge.</span> </div>
                                </div>
                            </div>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </div>




            { /*  MODAL UPLOAD 2  file upload*/}

            <div className='relative'>
                <Modal isOpen={secondModalIsOpen} onClose={closeSecondModal}>
                    <ModalOverlay />
                    <ModalContent className='uploadModal'>
                        <div className="flex justify-center relative -top-[1.34rem]">
                            <div className="flex flex-col items-center">
                                <Image src={modalTop} alt='' quality={100} />
                            </div>
                        </div>

                        <div className="flex w-full justify-end cursor-pointer relative -top-5" >
                            <Image src={closeBtn} alt='' quality={100} onClick={closeSecondModal} />
                        </div>
                        <ModalBody>
                            <div className="flex justify-center relative -top-6">
                                <div>
                                    <p className='text-[#EBEBEB] montestratFont text-center uppercase text-lg md:text-xl whitespace-nowrap tracking-[0.065em]'>CLICK SELFIE WITH YOUR FAMILY</p>
                                    <div className="flex justify-center">
                                        <p className=' mt-2 purpleDividerModal2'></p>
                                    </div>

                                    <br />
                                    <br />

                                    <div className='flex items-end gap-3'>
                                        <label htmlFor="fileInput" className='dashBoardHeroBtn text-white h-9 cursor-pointer'>
                                            UPLOAD
                                        </label>
                                        <div className="text-xs text-gray-400 text-[9px]">
                                            .jpg/.pdf/.png
                                        </div>
                                    </div>

                                    <br />

                                    <div className="modalCloudMainParent">
                                        <label htmlFor="fileInput">
                                            <div className=" flex flex-col items-center gap-4">
                                                <Image src={cloud} alt='' quality={100} className=' cursor-pointer' />
                                                <div className='text-white text-[9px] cursor-pointer'>DROP YOUR IMAGE HERE OR <span className='text-blue-500'>BROWSE</span> </div>
                                                <input type="file" id='fileInput' className='hidden' />
                                            </div>
                                        </label>
                                    </div>

                                    <br />
                                    <br />

                                    <div className="flex justify-center items-center">
                                        <div className="flex flex-col gap-7 items-center">
                                            <button className='dashBoardHeroBtn text-white h-9'>SUBMIT</button>
                                            <div className='text-white text-[10px] text-center'>Terms And Conditions: <span className='text-[#5A5A5A]'>Don&apos;t Create Toxicity environment due to the Gemaverse Challenge.</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </ModalBody>


                    </ModalContent>
                </Modal>
            </div>


        </div>
    )
}

export default DashboardCommunityChallenge
//  <p className={`${item.completionStatus === "ongoing" ? "rounded-full w-24 h-7 bg-black text-white border-white border flex justify-center items-center text-xs uppercase font-semibold " : " uppercase font-semibold rounded-full w-24 h-7 bg-green-400 flex justify-center items-center text-xs"}`}>{item.completionStatus}</p>
//  <Link href={"/dashboard/Communitychallenge"}>

/* 


            <div className="">
                <div className='w-9 sidebarSideLine relative -top-7 hidden md:block -ml-1'></div>

                <div className="soloChallengesHold flex flex-wrap gap-16 justify-center">
                    {communityChallengeDataArr.map((item) => {
                        return (
                            <div className={`${item.completionStatus === "ongoing" ? "communityChallengeIndivitual overflow-hidden" : " overflow-hidden communityGreenBorder"}`} key={item.id} >

                                <div className="flex gap-4 items-center mt-4 justify-around pr-2">
                                    <Image src={item.challengeImage} alt='' quality={100} className='' />
                                    <div className="flex items-center gap-3">
                                        {item.timeLeft && <p className='text-gray-300 font-light whitespace-nowrap'>Ends in :</p>}
                                        <p className='text-red-500 font-semibold'> {item.timeLeft} </p>
                                    </div>
                                    <p className={`${item.completionStatus === "ongoing" ? "rounded-full w-24 h-7 bg-blue-400 flex justify-center items-center text-xs uppercase font-semibold " : " uppercase font-semibold rounded-full w-24 h-7 bg-green-400 flex justify-center items-center text-xs"}`}>{item.completionStatus}</p>
                                </div>

                                <br />
                                {item.timeLeft ? <br /> : <p className='mt-3'></p>}
                                <div className="flex justify-around">
                                    <div className="flex flex-col gap-3">
                                        <p className=' uppercase text-white text-lg'> {item.title} </p>
                                        <p className='text-white uppercase text-xs'> {item.subTitle} </p>
                                    </div>

                                    <div className="flex flex-col gap-2 items-center pr-2">
                                        <p className='text-xs greenText capitalize'>win prize</p>
                                        <div className="flex items-center gap-2">
                                            <Image src={tokens} alt='' quality={100} />
                                            <p className='text-white text-xs'> {item.coins} </p>
                                        </div>

                                        {item.completionStatus === "ongoing" ? <button className='text-white dashBoardHeroBtn uppercase h-9 w-28' onClick={openFirstModal}>join</button> : <button className='text-white dashBoardHeroBtn uppercase h-9 w-28' onClick={openFirstModal}>join</button>}
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <p className={`${item.completionStatus === "ongoing" ? "redGradient rounded-full w-12 h-12 relative left-4" : "greenGradient rounded-full w-12 h-12 relative left-4"}`}></p>
                                </div>
                                <div className='flex justify-end'>
                                    {item.color === "green" ? <Image src={greenTRI2} alt='' quality={100} className=' communityChallengeGreenTriangle' /> : <Image src={redTri} alt='' quality={100} className='communityChallengeTriangle' />}
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
*/