import React from 'react'
import DashboardSidebar from '../components/dashboard/DashboardSidebar'
import { IoChevronBackOutline } from "react-icons/io5"
import Link from 'next/link'
import DashboardNavbar from '@/components/dashboard/DashboardNavbar'
import TipsIndex from '@/components/profile/TipsIndex'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'


const Tips = () => {
    return (
        <div className="flex bgImage">
            <div className="w-24 relative min-h-full">
                <div className="md:sticky top-0">
                    <DashboardSidebar />

                </div>
            </div>

            <div className="w-full relative top-4 bgOverlay -left-12 md:top-0 md:-left-0 ">
                <div className="flex justify-between items-center md:items-start">
                    <Link href={"/dashboard"} className='block w-32 lg:mb-14 md:mb-8 relative top-16 md:-top-6 lg:top-1'>
                        <div className='flex items-center gap-0 md:ml-12 md:mt-12 font-semibold text-xl'>
                            <IoChevronBackOutline className='text-white font-semibold text-2xl' />
                            <p className='text-white'>Back</p>
                        </div>
                    </Link>

                    <DashboardNavbar />
                </div>

                <div className="lg:-mt-8">
                    <TipsIndex />
                </div>

            </div>
        </div>
    )
}

export default Tips