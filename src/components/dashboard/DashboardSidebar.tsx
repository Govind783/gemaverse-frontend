import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dashboardLine from "../../assets/Vector17.svg"
import { IoBagHandleOutline } from "react-icons/io5"
import { MdInventory } from "react-icons/md"
import { IoSettingsOutline } from "react-icons/io5"
import expandBtn from "../../assets/dashboardExpandBtn.png";
import diamondSidebarIconsHold from "../../assets/sidebarIconHold.png"
import dashboardSidebarDiamond2 from "../../assets/dashboardSidebarDiamon2.png"
import { BsBoxArrowInLeft } from "react-icons/bs"
import { useState, useRef } from "react";
import { MdWorkspacePremium } from "react-icons/md"
import { BiUserCircle } from "react-icons/bi"
import { AiOutlineBarChart } from "react-icons/ai"
import { MdDashboard } from "react-icons/md"
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure
} from '@chakra-ui/react'
import drawerCloseBtn from "../../assets/drawerCloseBtn.png"
import { useRouter } from 'next/router'
import sidebarLogout from "../../assets/sidebarLogout.svg"


const DashboardSidebar = () => {

    const [tabState, setTabState] = useState("dashboard");
    const { isOpen, onOpen, onClose } = useDisclosure()

    const router = useRouter();
    const dashboarScreendName = router.pathname.split("/dashboard/")[1];

    return (
        <div className='flex'>
            <div className="sideBarHold min-h-screen w-24 hidden md:flex flex-col gap-8 items-center justify-center">
                <div className='relative  flex flex-col gap-8 items-center justify-center'>
                    <div className='expandButtonHold rounded w-10 h-10 flex relative cursor-pointer -top-6 justify-center items-center'>
                        <Image quality={100} src={expandBtn} priority alt='expand' onClick={onOpen} />
                    </div>
                    { /* sidebar non-expanded */}
                    <div className="relative mt-4 -top-5">
                        <Image src={diamondSidebarIconsHold} alt="expand" className="diamondSidebarIconsHold " />
                        <div className="flex flex-col sidebarIconsHold absolute top-1/2 left-1/2 transform items-center gap-3 -translate-x-1/2 -translate-y-1/2">
                            <Link href={"/dashboard"}>
                                <div className={`${dashboarScreendName === undefined ? "activeTabSidebar" :
                                    dashboarScreendName === "Megaprize" ? "activeTabSidebar" :
                                        dashboarScreendName === "Communitychallenge" ? "activeTabSidebar" :
                                            "inactiveTabSidebar"
                                    } flex justify-center items-center w-12 h-12 sidebarIndivitualIcon`}>
                                    <MdDashboard className='text-lg cursor-pointer' onClick={() => setTabState("dashboard")} />
                                </div>
                            </Link>

                            <Link href={"/dashboard/Marketplace"}>
                                <div className={`${dashboarScreendName === "Marketplace" ? "activeTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon" : "inactiveTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon"}`}>
                                    <IoBagHandleOutline className='text-lg cursor-pointer font-bold' />
                                </div>
                            </Link>

                            <Link href={"/dashboard/Inventory"}>
                                <div className={`${dashboarScreendName === "Inventory" ? "activeTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon" : "inactiveTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon"}`} >
                                    <MdInventory className='text-lg cursor-pointer' />
                                </div>
                            </Link>

                            <Link href={"/dashboard/Premium"}>
                                <div className={`${dashboarScreendName === "Premium" ? "activeTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon" : "inactiveTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon"}`}>
                                    <MdWorkspacePremium className='text-lg cursor-pointer' />
                                </div>
                            </Link>

                            <Link href={"/dashboard/Stats"}>
                                <div className={`${dashboarScreendName === "Stats" ? "activeTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon" : "inactiveTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon"}`}>
                                    <AiOutlineBarChart className='text-xl cursor-pointer' />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <Image src={dashboardSidebarDiamond2} alt="expand" className=" h-28" />
                        <div className="flex flex-col sidebarIconsHold absolute top-1/2 left-1/2 transform items-center gap-3 -translate-x-1/2 -translate-y-1/2">

                            <Link href={"/dashboard/Profile"}>
                                <div className={`${dashboarScreendName === "Profile" ? "activeTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon" : "inactiveTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon"}`}>
                                    <BiUserCircle className='text-2xl cursor-pointer' />
                                </div>
                            </Link>

                            <Link href={"/dashboard/Settings"}>
                                <div className={`${dashboarScreendName === "Settings" ? "activeTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon" : "inactiveTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon"}`} >
                                    <IoSettingsOutline className='text-lg cursor-pointer' />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className='mt-12'>
                        <BsBoxArrowInLeft className='text-2xl text-white' />
                    </div>

                    { /* END */}
                </div>

                <>
                    <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerHeader>
                                <div className='expandButtonHold rounded w-10 h-10 flex relative mt-6 ml-2 justify-center items-center'>
                                    <Image quality={100} src={drawerCloseBtn} priority alt='expand' onClick={onClose} className='cursor-pointer' />
                                </div>
                            </DrawerHeader>
                            <DrawerBody>
                                <div>
                                    <div className="flex flex-col md:gap-8 gap-7 mt-3 items-start">

                                        <Link href={"/dashboard"}>
                                            <div className="flex gap-6 items-center">
                                                <div className={`${dashboarScreendName === undefined ? "activeTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon" : "inactiveTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon"}`}>
                                                    <MdDashboard className='text-lg cursor-pointer' onClick={() => setTabState("dashboard")} />
                                                </div>
                                                <p onClick={() => setTabState("dashboard")} className={`${dashboarScreendName === undefined ? "text-white interFont md:text-lg drawerText lg:text-xl text-sm" : " drawerText sidebarText md:text-lg lg:text-xl text-sm interFont"}`}>Dashboard</p>
                                            </div>
                                        </Link>


                                        <Link href={"/dashboard/Marketplace"}>
                                            <div className="flex gap-6 items-center">
                                                <div className={`${dashboarScreendName === "Marketplace" ? "activeTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon" : "inactiveTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon"}`}>
                                                    <IoBagHandleOutline className='text-lg cursor-pointer' />
                                                </div>
                                                <p className={`${dashboarScreendName === "Marketplace" ? "text-white interFont md:text-lg lg:text-xl drawerText text-sm" : "sidebarText drawerText md:text-lg lg:text-xl text-sm interFont"}`}>Market place</p>
                                            </div>
                                        </Link>

                                        <Link href={"/dashboard/Inventory"}>
                                            <div className="flex gap-6 items-center">
                                                <div className={`${dashboarScreendName === "Inventory" ? "activeTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon" : "inactiveTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon"}`} >
                                                    <MdInventory className='text-lg cursor-pointer' />
                                                </div>
                                                <p className={`${dashboarScreendName === "Inventory" ? "text-white interFont md:text-lg lg:text-xl drawerText text-sm" : "sidebarText drawerText md:text-lg lg:text-xl text-sm interFont"}`}>Inventory</p>
                                            </div>
                                        </Link>


                                        <Link href={"/dashboard/Premium"}>
                                            <div className="flex gap-6 items-center">
                                                <div className={`${dashboarScreendName === "Premium" ? "activeTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon" : "inactiveTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon"}`}>
                                                    <MdWorkspacePremium className='text-lg cursor-pointer' />
                                                </div>
                                                <p className={`${dashboarScreendName === "Premium" ? "text-white interFont md:text-lg lg:text-xl drawerText text-sm" : "sidebarText drawerText md:text-lg lg:text-xl text-sm interFont"}`}>Premium</p>
                                            </div>
                                        </Link>

                                        <Link href={"/dashboard/Stats"}>
                                            <div className="flex gap-6 items-center">
                                                <div className={`${dashboarScreendName === "Stats" ? "activeTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon" : "inactiveTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon"}`}>
                                                    <AiOutlineBarChart className='text-xl cursor-pointer' />
                                                    <p className={`${dashboarScreendName === "Stats" ? "text-white interFont md:text-lg lg:text-xl drawerText text-sm" : "sidebarText drawerText md:text-lg lg:text-xl text-sm interFont"}`}>Stats</p>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link href={"/dashboard/Profile"}>
                                            <div className="flex gap-6 items-center">
                                                <div className={`${dashboarScreendName === "Profile" ? "activeTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon" : "inactiveTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon"}`}>
                                                    <BiUserCircle className='text-2xl cursor-pointer' />
                                                </div>
                                                <p className={`${dashboarScreendName === "Profile" ? "text-white interFont md:text-lg lg:text-xl drawerText text-sm" : "sidebarText drawerText md:text-lg lg:text-xl text-sm interFont"}`}>Profile</p>
                                            </div>
                                        </Link>


                                        <Link href={"/dashboard/Settings"}>
                                            <div className="flex gap-6 items-center">
                                                <div className={`${dashboarScreendName === "Settings" ? "activeTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon" : "inactiveTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon"}`} >
                                                    <IoSettingsOutline className='text-lg cursor-pointer' />
                                                </div>
                                                <p className={`${dashboarScreendName === "Settings" ? "text-white interFont md:text-lg lg:text-xl drawerText text-sm" : "sidebarText drawerText md:text-lg lg:text-xl text-sm interFont"}`}>Settings</p>
                                            </div>
                                        </Link>

                                        <div className="flex items-center gap-[1.3rem]">
                                            <Image src={sidebarLogout} alt='' quality={100} />
                                            <p className='text-white text-sm font-light md:text-xl interFont drawerText'>Logout</p>
                                        </div>

                                    </div>
                                </div>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </>

            </div>

            <div className='hidden md:block'>
                <Image src={dashboardLine} alt='' quality={100} />
            </div>

            <div className='expandButtonHold rounded w-10 h-10 md:hidden flex relative cursor-pointer ml-4 top-6 z-10 justify-center items-center'>
                <Image quality={100} src={expandBtn} priority alt='expand' onClick={onOpen} />
            </div>

            <div className='md:hidden'>
                <>
                    <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerHeader>
                                <div className='expandButtonHold rounded w-10 h-10 flex relative mt-6 ml-2 justify-center items-center'>
                                    <Image quality={100} priority src={drawerCloseBtn} alt='expand' onClick={onClose} className='cursor-pointer' />
                                </div>
                            </DrawerHeader>
                            { /*  drawer mobile as well as big screens */}
                            <DrawerBody>
                                <div>
                                    <div className="flex flex-col md:gap-8 gap-7 mt-3 items-start">
                                        { /* 
                                            <div className="flex flex-col justify-evenly h-screen -mt-6  items-start">
                                        */ }

                                        <div className="flex gap-6 items-center">
                                            <Link href={"/dashboard"}>
                                                <div className={`${dashboarScreendName === undefined ? "activeTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon" : "inactiveTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon"}`}>
                                                    <MdDashboard className='text-lg cursor-pointer' />
                                                </div>
                                            </Link>

                                            <Link href={"/dashboard"}>
                                                <p className={`${dashboarScreendName === "dashboard" ? "text-white interFont md:text-lg drawerText lg:text-xl text-sm" : " drawerText sidebarText md:text-lg lg:text-xl text-sm interFont"}`}>Dashboard</p>
                                            </Link>
                                        </div>


                                        <div className="flex gap-6 items-center">
                                            <Link href={"/dashboard/Marketplace"}>
                                                <div className={`${dashboarScreendName === "Marketplace" ? "activeTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon" : "inactiveTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon"}`}>
                                                    <IoBagHandleOutline className='text-lg cursor-pointer' />
                                                </div>
                                            </Link>

                                            <Link href={"/dashboard/Marketplace"}>
                                                <p className={`${dashboarScreendName === "Marketplace" ? "text-white interFont md:text-lg lg:text-xl drawerText text-sm" : "sidebarText drawerText md:text-lg lg:text-xl text-sm interFont"}`}>Market place</p>
                                            </Link>
                                        </div>

                                        <div className="flex gap-6 items-center">
                                            <Link href={"/dashboard/Inventory"}>
                                                <div className={`${dashboarScreendName === "Inventory" ? "activeTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon" : "inactiveTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon"}`} >
                                                    <MdInventory className='text-lg cursor-pointer' />
                                                </div>
                                            </Link>
                                            <Link href={"/dashboard/Inventory"}>
                                                <p className={`${dashboarScreendName === "Inventory" ? "text-white interFont md:text-lg lg:text-xl drawerText text-sm" : "sidebarText drawerText md:text-lg lg:text-xl text-sm interFont"}`}>Inventory</p>
                                            </Link>
                                        </div>


                                        <div className="flex gap-6 items-center">
                                            <Link href={"/dashboard/Premium"}>
                                                <div className={`${dashboarScreendName === "Premium" ? "activeTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon" : "inactiveTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon"}`}>
                                                    <MdWorkspacePremium className='text-lg cursor-pointer' />
                                                </div>
                                            </Link>
                                            <Link href={"/dashboard/Premium"}>
                                                <p className={`${dashboarScreendName === "Premium" ? "text-white interFont md:text-lg lg:text-xl drawerText text-sm" : "sidebarText drawerText md:text-lg lg:text-xl text-sm interFont"}`}>Premium</p>
                                            </Link>
                                        </div>


                                        <div className="flex gap-6 items-center">
                                            <Link href={"/dashboard/Stats"}>
                                                <div className={`${dashboarScreendName === "Stats" ? "activeTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon" : "inactiveTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon"}`}>
                                                    <AiOutlineBarChart className='text-xl cursor-pointer' />
                                                </div>
                                            </Link>

                                            <Link href={"/dashboard/Stats"}>
                                                <p className={`${dashboarScreendName === "Stats" ? "text-white interFont md:text-lg lg:text-xl drawerText text-sm" : "sidebarText drawerText md:text-lg lg:text-xl text-sm interFont"}`}>Stats</p>
                                            </Link>
                                        </div>

                                        <div className="flex gap-6 items-center">
                                            <Link href={"/dashboard/Profile"}>
                                                <div className={`${dashboarScreendName === "Profile" ? "activeTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon" : "inactiveTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon"}`}>
                                                    <BiUserCircle className='text-2xl cursor-pointer' />
                                                </div>
                                            </Link>

                                            <Link href={"/dashboard/Profile"}>
                                                <p className={`${dashboarScreendName === "Profile" ? "text-white interFont md:text-lg lg:text-xl drawerText text-sm" : "sidebarText drawerText md:text-lg lg:text-xl text-sm interFont"}`}>Profile</p>
                                            </Link>
                                        </div>

                                        <div className="flex gap-6 items-center">
                                            <Link href={"/dashboard/Settings"}>
                                                <div className={`${dashboarScreendName === "Settings" ? "activeTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon" : "inactiveTabSidebar flex justify-center items-center w-12 h-12 sidebarIndivitualIcon"}`} >
                                                    <IoSettingsOutline className='text-lg cursor-pointer' />
                                                </div>
                                            </Link>

                                            <Link href={"/dashboard/Settings"}>
                                                <p className={`${dashboarScreendName === "Settings" ? "text-white interFont md:text-lg lg:text-xl drawerText text-sm" : "sidebarText drawerText md:text-lg lg:text-xl text-sm interFont"}`}>Settings</p>
                                            </Link>
                                        </div>


                                        <div className="flex items-center gap-[1.3rem] relative left-1">
                                            <Image src={sidebarLogout} alt='' quality={100} />
                                            <p className='text-white text-sm font-light md:text-xl interFont drawerText'>Logout</p>
                                        </div>
                                        <br />
                                    </div>
                                </div>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </>
            </div>


        </div>

    )
}

export default DashboardSidebar