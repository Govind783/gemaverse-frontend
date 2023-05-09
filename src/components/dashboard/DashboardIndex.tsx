import React from 'react'
import DashboardSidebar from './DashboardSidebar'
import DashboardHome from './DashboardHome'
import DashboardNavbar from './DashboardNavbar'
const DashboardIndex = () => {
    return (
        <div>


            <div className="flex bgImage">
                <div className="w-24 relative min-h-full">
                    <div className="md:sticky top-0">
                        <div className="flex dasdd items-center">
                            <DashboardSidebar />
                            <div className='blackBoxFontOutline text-9xl dashboardSideText hidden md:block '>
                                <span className='singleLetterDashboard'>V</span>
                                <span className='singleLetterDashboard'>E</span>
                                <span className='singleLetterDashboard'>R</span>
                                <span className='singleLetterDashboard'>S</span>
                                <span className='singleLetterDashboard'>E</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full relative top-5 bgOverlay -left-14 md:top-0 md:-left-0">
                    <div className="mb-8 md:mb-1">
                        <DashboardNavbar />
                    </div>

                    <DashboardHome />
                </div>
            </div>

        </div>
    )
}

export default DashboardIndex

/* 

position: relative;
    top: 8rem;
    left: -3.4rem;
*/