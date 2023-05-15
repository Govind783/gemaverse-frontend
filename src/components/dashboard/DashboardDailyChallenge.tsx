import React from 'react'
import coins from "../../assets/solochallengeCoin.svg"
import gun from "../../assets/soloChallengeGun.png"
import avatar from "../../assets/soloChallengeAvatar2.png"
import Image from 'next/image'
import pinktri from "./../../assets/homePinkTri.svg"
import browwnTri from "./../../assets/homeBrownTri.svg"
import { useState } from 'react'
import { MdLock } from "react-icons/md"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import closeBtn from "../../assets/tipsModalCross.svg"
import modalLeftCurve from "../../assets/modalLeftCurve.svg"
import modalRightCurve from "../../assets/modalRightCurve.svg"
import modalTop from "../../assets/modalTop.svg"
import cloud from "../../assets/cloudUpload.svg"



const DashboardDailyChallenge = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [showProgressBar, setShowProgressBar] = useState(false);
    const [showGGText, setShowGGText] = useState(false);
    const [firstModalIsOpen, setFirstModalIsOpen] = useState(false);
    const [secondModalIsOpen, setSecondModalIsOpen] = useState(false);
    const [thirdModalIsOpen, setThirdModalIsOpen] = useState(false);


    const openFirstModal = () => {
        setFirstModalIsOpen(true);
    }

    const closeFirstModal = () => {
        setFirstModalIsOpen(false);
    }

    const openSecondModal = () => {
        setSecondModalIsOpen(true);
        setFirstModalIsOpen(false)

    }

    const closeSecondModal = () => {
        setSecondModalIsOpen(false);
    }

    const openThridModal = () => {
        setThirdModalIsOpen(true)
    }

    const closeThirdModal = () => {
        setThirdModalIsOpen(false)

    }

    const handleClick = () => {
        setShowProgressBar(true);
        setTimeout(() => {
            setShowProgressBar(false);
            setShowGGText(true);
        }, 900);
    }

    const soloChallengeDataArr = [
        {
            id: 1,
            title: "Get 5 KILLs with astra",
            tokens: 2500,
            isActive: true,
            challengeImage: avatar,
            difficulty: "easy"
        },

        {
            id: 2,
            title: "Get 5 KILLs with astra",
            tokens: 2500,
            isActive: true,
            challengeImage: avatar,
            difficulty: "medium"
        },
        {
            id: 3,
            title: "Get 5 KILLs with astra",
            tokens: 2500,
            isActive: false,
            challengeImage: avatar,
            difficulty: "hard"
        },

    ]

    return (
        <div className=''>
            <div className="flex flex-wrap justify-between mx-auto w80percent mb-6 md:mb-2">
                <p className='text-lg font-semibold uppercase montestratFont soloChallengeHeader text-[#BFC6CC]'>daily solo challenge</p>
                <div><span className='text-gray-400 text-sm'>Reset in</span> <span className='text-sm text-red-600 font-semibold'>12:00:01s</span></div>
            </div>
            <div className='dashboardDividerLine w80percent mt-3 mb-7 hidden md:block'></div>

            <div className="">

                <div className="soloChallengesHold relative left-[0.3rem] md:left-0 gridDimensionsDailyHold">
                    {soloChallengeDataArr.map((item) => {
                        return (
                            <div key={item.id}>
                                {item.isActive === true ?
                                    <div className='soloChallengeIndivitualCard overflow-hidden'>

                                        <div>
                                            <div className={`${item.difficulty === "medium" ? "mediumBg rounded-full w-24 h-6 border-white border text-white uppercase blueTheme flex justify-center items-center text-xs font-semibold mt-4 " : " mt-4 easyBg rounded-full w-24 h-6 border-white border text-white uppercase blueTheme flex justify-center items-center text-xs font-semibold"}`}>
                                                {item.difficulty}
                                            </div>

                                            <div className="flex gap-0 mt-7">

                                                <div className="flex flex-col">
                                                    <p className='text-white h-12 uppercase text-lg'>{item.title}</p>
                                                    <div className="flex gap-4 mt-4">
                                                        <div className="flex flex-col">
                                                            <p className='greenText text-xs'>Tokens</p>
                                                            <div className='flex items-center gap-2 mt-1'>
                                                                <Image src={coins} alt='' quality={100} className=' ' />
                                                                <p className='text-white text-xs'> {item.tokens} </p>
                                                            </div>
                                                        </div>

                                                        <div className="challengeDivider mr-3 ml-3"></div>



                                                        <button className='text-white dashBoardHeroBtn uppercase h-9 w-28' onClick={onOpen} >ACTIVATE </button>

                                                    </div>
                                                </div>
                                                <Image src={item.challengeImage} alt='' quality={100} className='relative -top-16 w-40 h-[13rem]' />
                                            </div>

                                            <div className="flex justify-end items-end blurTriangleHold">
                                                {/* <div className="gradient bg-red-500 w-4 h-4 relative top-3 rounded-full blur-md"></div>*/}
                                                {item.id % 2 === 0 ? <Image src={pinktri} alt='' quality={100} className='homeDailyChallengeTri relative top-5 w-7' /> : <Image src={browwnTri} alt='' quality={100} className='homeDailyChallengeTri relative top-5 w-7' />}
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className='soloChallengeIndivitualCard soloChallengeRedBorder overflow-hidden' key={item.id}>
                                        <div className="flex justify-center items-center lockedDailyChallenegOverlay z-30 w-full h-full opacity-100">
                                            <div className="flex flex-col items-center gap-5">
                                                <MdLock className='text-white text-7xl' />
                                                <button className='text-white dashBoardHeroBtn uppercase h-9 w-28' onClick={openFirstModal}>Unlock!!</button>
                                            </div>
                                        </div>

                                        <div className='bgLockedCardContainer'>
                                            <div className={`${item.difficulty === "medium" ? "mediumBg rounded-full w-24 h-6 border-white border text-white uppercase blueTheme flex justify-center items-center text-xs font-semibold mt-4 " : " mt-4 easyBg rounded-full w-24 h-6 border-white border text-white uppercase blueTheme flex justify-center items-center text-xs font-semibold"}`}>
                                                {item.difficulty}
                                            </div>

                                            <div className="flex gap-0 mt-7">

                                                <div className="flex flex-col">
                                                    <p className='text-white h-12 uppercase text-lg'>{item.title}</p>
                                                    <div className="flex gap-4 mt-4">
                                                        <div className="flex flex-col">
                                                            <p className='greenText text-xs'>Tokens</p>
                                                            <div className='flex items-center gap-2 mt-1'>
                                                                <Image src={coins} alt='' quality={100} className=' ' />
                                                                <p className='text-white text-xs'> {item.tokens} </p>
                                                            </div>
                                                        </div>

                                                        <div className="challengeDivider mr-3 ml-3"></div>

                                                        {item.isActive ? <button className='text-white dashBoardHeroBtn uppercase h-9 w-28'>Activate</button> : <button className='text-white dashBoardHeroBtn h-10 uppercase'>NOTACT</button>}
                                                    </div>
                                                </div>
                                                <Image src={item.challengeImage} alt='' quality={100} className='relative -top-16 w-40 h-[13rem]' />
                                            </div>

                                            <div className="flex justify-end items-end blurTriangleHold">
                                                {/* <div className="gradient bg-red-500 w-4 h-4 relative top-3 rounded-full blur-md"></div>*/}
                                                {item.id % 2 === 0 ? <Image src={pinktri} alt='' quality={100} className='homeDailyChallengeTri relative top-5 w-7' /> : <Image src={browwnTri} alt='' quality={100} className='homeDailyChallengeTri relative top-5 w-7' />}
                                            </div>
                                        </div>

                                    </div>
                                }
                            </div>
                        )
                    })}
                </div>

            </div>


            { /*  authenticate with riod modal */}

            <div className='relative top-16'>
                <Modal isOpen={isOpen} onClose={onClose} >
                    <ModalOverlay />
                    <ModalContent>
                        <div className="flex justify-center relative -top-[1.34rem]">
                            <div className="flex flex-col items-center">
                                <Image src={modalTop} alt='' quality={100} />
                            </div>
                        </div>

                        <div className="flex w-full justify-end cursor-pointer relative -top-5" >
                            <Image src={closeBtn} alt='' quality={100} onClick={onClose} />
                        </div>
                        <ModalBody>
                            <div className="flex justify-center">
                                <div>
                                    <p className='text-[#EBEBEB] montestratFont text-center uppercase text-lg md:text-2xl whitespace-nowrap tracking-[0.065em]'>AUTHENTICATE WITH RIOT ID</p>
                                    <div className="flex justify-center">
                                        <p className='purpleDividerModal'></p>
                                    </div>

                                    <br />
                                    <br />
                                    <div className='w-[82%] mx-auto'>
                                        <p className='text-[#D9D9D9] montestratFont text-center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                                    </div>

                                    <br />
                                    <br />
                                    <div className="flex justify-center">
                                        <button className='dashBoardHeroBtn text-white h-10'>AUTHENTICATE</button>
                                    </div>
                                    <br />
                                </div>
                            </div>

                        </ModalBody>


                    </ModalContent>
                </Modal>
            </div>



            {/* UNLOACK MODAL 1  */}
            <div className=''>
                <Modal isOpen={firstModalIsOpen} onClose={closeFirstModal} >
                    <ModalOverlay />
                    <ModalContent className="unlockModal1">
                        <div className="flex justify-center relative -top-[1.34rem]">
                            <div className="flex flex-col items-center">
                                <Image src={modalTop} alt='' quality={100} />
                            </div>
                        </div>

                        <div className="flex w-full justify-end cursor-pointer relative -top-5" >
                            <Image src={closeBtn} alt='' quality={100} onClick={closeFirstModal} />
                        </div>
                        <ModalBody>
                            <div className="flex justify-center">
                                <div>
                                    <p className='text-[#EBEBEB] blackBoxFont text-center uppercase text-5xl md:text-5xl whitespace-nowrap tracking-[0.065em]'>DAILY <br /> CHALLENGE </p>



                                    <div className='w-[86%] mt-2 mx-auto'>
                                        <p className='text-[#D9D9D9] montestratFont text-sm md:text-base text-center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                                    </div>

                                    <br />

                                    <div className="flex justify-center">
                                        <div className="flex flex-col gap-3 items-center">
                                            <button className='dashBoardHeroBtn text-white h-10'>Unlock with 50 Tokens</button>
                                            <p className='text-[10px] text-gray-300 font-light'>OR</p>
                                            <button className='dashBoardHeroBtn text-white h-10' onClick={openSecondModal}>Finish Health Challenge</button>

                                        </div>
                                    </div>

                                    <br />

                                    <div className='text-white text-[10px] text-center'>Terms And Conditions: <span className='text-[#5A5A5A]'>Don&apos;t Create Toxicity environment due to the Gemaverse Challenge.</span>  </div>
                                    <br />

                                </div>
                            </div>

                        </ModalBody>


                    </ModalContent>
                </Modal>
            </div>



            { /* UNLLOCK MODAL 2 (HEALTH CHALLENGE)  */}
            <div>
                <Modal isOpen={secondModalIsOpen} onClose={closeSecondModal} >
                    <ModalOverlay />
                    <ModalContent className='modal2Unlock'>
                        <div className="flex justify-center relative -top-[1.34rem]">
                            <div className="flex flex-col items-center">
                                <Image src={modalTop} alt='' quality={100} />
                            </div>
                        </div>

                        <div className="flex w-full justify-end cursor-pointer relative -top-5" >
                            <Image src={closeBtn} alt='' quality={100} onClick={closeSecondModal} />
                        </div>
                        <ModalBody>
                            <div className="flex justify-center">
                                <div>
                                    <p className='text-[#EBEBEB] blackBoxFont text-center uppercase text-5xl md:text-6xl whitespace-nowrap tracking-[0.065em]'>HEALTH <br /> CHALLENGE </p>


                                    <br />
                                    <div className='w-[95%] mx-auto'>
                                        <p className='text-[#D9D9D9] text-sm md:text-base montestratFont text-center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                                    </div>

                                    <br />
                                    <div className="flex justify-center">
                                        <div className="flex flex-col gap-3 items-center">
                                            <button className='dashBoardHeroBtn text-white h-10 w-36' onClick={openThridModal}>PARTICIPATE</button>
                                            <br />
                                            <div className='text-white text-[10px] text-center md::whitespace-nowrap'>Terms And Conditions: <span className='text-[#5A5A5A]'>Don&apos;t Create Toxicity environment due to the Gemaverse Challenge.</span> </div>
                                        </div>
                                        <br />
                                    </div>
                                    <br />
                                </div>

                            </div>

                        </ModalBody>


                    </ModalContent>
                </Modal>
            </div>

            { /* UNLOCK MODAL 3 (UPLOAD)  */}

            <div className='relative'>
                <Modal isOpen={thirdModalIsOpen} onClose={closeThirdModal}>
                    <ModalOverlay />
                    <ModalContent className='uploadModal'>
                        <div className="flex justify-center relative -top-[1.34rem]">
                            <div className="flex flex-col items-center">
                                <Image src={modalTop} alt='' quality={100} />
                            </div>
                        </div>

                        <div className="flex w-full justify-end cursor-pointer relative -top-5" >
                            <Image src={closeBtn} alt='' quality={100} onClick={closeThirdModal} />
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

export default DashboardDailyChallenge
//                 <div className="soloChallengesHold relative left-[0.3rem] md:left-0 flex flex-wrap gap-16 justify-center">
