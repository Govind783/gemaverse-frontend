import DashboardSidebar from '../../components/dashboard/DashboardSidebar'
import { IoChevronBackOutline } from "react-icons/io5"
import Link from 'next/link'
import DashboardNavbar from '@/components/dashboard/DashboardNavbar'
import React from 'react'
import StatsIndex from '@/components/Stats/StatsIndex'

const Stats = () => {
  return (
    <div className="flex bgImage">
      <div className="w-24 relative min-h-full">
        <div className="md:sticky top-0">
          <DashboardSidebar />
        </div>
      </div>

      <div className="w-full relative top-4 bgOverlay -left-[3.5rem] md:top-0 md:-left-0 ">
        <DashboardNavbar />
        <br />
        <StatsIndex />
      </div>


    </div>
  )
}

export default Stats