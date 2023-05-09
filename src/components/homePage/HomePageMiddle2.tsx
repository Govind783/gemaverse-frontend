import React from 'react'
import Image from 'next/image'
import Button from "../../assets/button.png"
import cup from "../../assets/cup.png"


const HomePageMiddle2 = () => {
    return (
        <div>
            <div className='blackBoxFontOutline offWhite text-7xl mt-6 flex justify-start fadedHeading'>
                SKILLS
            </div>

            <div className=''>
                <p className='offWhite flex justify-end proxonFont lg:text-5xl md:text-4xl text-3xl mt-24 md:mt-2 md:pr-6 pl-5 relative -top-32'>
                    Take on the community challenge  <br />
                    and come out on top – with <br />
                    rewards up for grabs!
                </p>

                <div className="flex justify-end">
                    <button className='flex justify-center items-center w-36 h-10 homePageButton orbitronFont text-xl -mt-14 mr-8'>Explore Now</button>
                </div>

                <div className="flex justify-start">
                    <Image src={cup} alt='button' quality={100} className='relative lg:-top-36 md:-top-20 top-12 lg:w-80 w-64 cup' />
                </div>

            </div>
        </div>
    )
}

export default HomePageMiddle2