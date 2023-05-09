import React from 'react'
import Image from 'next/image'

const HomePageMiddle1 = () => {
    return (
        <div>
            <div className='blackBoxFontOutline offWhite text-7xl mt-6 flex justify-end fadedHeading'>
                HEALTH
            </div>

            <div>
                <p className='offWhite proxonFont lg:text-5xl md:text-4xl text-3xl mt-24 md:mt-2 pl-4 relative -top-32'>
                    Mental and Physical goals meet Rewards : <br />
                    Join our Gamer’s Health challenge <br />
                    revolution!
                </p>

               {/* <Image src={Button} alt='button' quality={100} className=' cursor-pointer -mt-20 pl-6' />*/}
               <button className='flex justify-center items-center w-36 h-10 homePageButton orbitronFont text-xl -mt-20 ml-6'>Explore Now</button>
            </div>
        </div>
    )
}

export default HomePageMiddle1
// 