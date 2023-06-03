import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { BiFilter } from "react-icons/bi";
import marketPlace1 from "../../assets/marketPlace1.png"
import greenTRI from "../../assets/greenTRI.svg"
import greenTRI2 from "../../assets/greenTRI2.svg"
import purpleTRI from "../../assets/purpleTRI.svg"
import purpleTRI2 from "../../assets/purpleTRI2.svg"
import ornageTRI from "../../assets/orangeTRI.svg"
import topGradientBorder from "../../assets/marketPlaceTopBorder.svg"

type offersDataARRType = {
    id: number,
    title: string,
    subTitle: string,
    image: HTMLImageElement | StaticImageData,
    premiumprice: number,
    regularPrice: number
}

const MarketplaceIndex = () => {

    const offersDataARR: offersDataARRType[] = [
        {
            id: 1,
            title: "title",
            subTitle: "Amet minim mollit non deserunt ullamcoest sit aliqua dolor do",
            image: marketPlace1,
            premiumprice:4500,
            regularPrice: 1450,
        },
        {
            id: 2,
            title: "title",
            subTitle: "Amet minim mollit non deserunt ullamcoest sit aliqua dolor do",
            image: marketPlace1,
            premiumprice:2500,
            regularPrice:1450,
        },
        {
            id: 3,
            title: "title",
            subTitle: "Amet minim mollit non deserunt ullamcoest sit aliqua dolor do",
            image: marketPlace1,
            premiumprice:2500,
            regularPrice:1450,
        },
        {
            id: 4,
            title: "title",
            subTitle: "Amet minim mollit non deserunt ullamcoest sit aliqua dolor do",
            image: marketPlace1,
            premiumprice:2500,
            regularPrice:1450,
        },
        {
            id: 5,
            title: "title",
            subTitle: "Amet minim mollit non deserunt ullamcoest sit aliqua dolor do",
            image: marketPlace1,
            premiumprice:2500,
            regularPrice:1450,
        },
        {
            id: 6,
            title: "title",
            subTitle: "Amet minim mollit non deserunt ullamcoest sit aliqua dolor do",
            image: marketPlace1,
            premiumprice:2500,
            regularPrice:1450,
        },

        {
            id: 7,
            title: "title",
            subTitle: "Amet minim mollit non deserunt ullamcoest sit aliqua dolor do",
            image: marketPlace1,
            premiumprice:2500,
            regularPrice:1450,
        },
        {
            id: 8,
            title: "title",
            subTitle: "Amet minim mollit non deserunt ullamcoest sit aliqua dolor do",
            image: marketPlace1,
            premiumprice:2500,
            regularPrice:1450,
        },
        
    ]

    return (
        <div className='text-white relative md:-top-14'>
            { /* HERO SECTION */}


            <div className="flex w-[93%] justify-center">
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="lg:h-[3.2rem] md:h-[3.1rem] bg-[#0B111F] premiumBox3 relative top-[7.9rem] md:top-[2.9rem] w-[91%] left-[0.6rem] md:-left-1 h-16 md:w-[37%] lg:w-[27%] ">
                    </div>
                </div>
            </div>

            <p className='lg:text-xl md:text-sm left-3 md:left-0 text-[#A3C7D7] text-center w-[93%]  top-[4.7rem] md:top-1 lg:top-3 tracking-wide relative '>  MARKET PLACE</p>

            <div className="flex justify-center">
                <div className="maarketPlaceHeroMainParent  bg-[#43E5F1]  Newshape2 Newshape2mobile ">
                    <div className='marketPLaceBGColor h-full  Newshape Newshapemobile '>

                        <div className="flex justify-end">
                            <div className="marketPlaceBlueBall w-16 h-16 mr-6 -mt-1 rounded-full">
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="marketPlaceGlassMorphismContainer h-48 mt-6">
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 -mt-8 marketPlaceTextContaier">
                            <p className='text-6xl tracking-widest blackBoxFont text-white w-[61rem]'>
                                GET GAMING ACCESSORIES IN HALF PRIZE
                            </p>
                            <div className='text-gray-400 lg:w-[38rem] md:w-[99%] w-full'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia 
                                consequat duis enim velit mollit.
                            </div>
                            <button className='uppercase h-10 w-32 mt-3 dashBoardHeroBtn'>explore</button>
                        </div>

                        <div className="flex md:justify-end">
                            <div className="marketPlaceBlueBall w-16 h-16 mr-3 md:mt-3 mt-8 rounded-full relative -left-2 -top-6">
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {  /* FILTER TABS */}

            <br />

            <div className="flex justify-between w-full marketPLaceFilterHold mt-6">
                <div className="flex items-center justify-start md:justify-center gap-2 flex-wrap marketPlaceBtnsContainer">
                    <div className=' cursor-pointer marketPlaceFilterBtn text-base uppercase smallCouponBtn'>Register</div>
                    <div className="flex justify-end greenTri1">
                        <Image src={greenTRI} alt='' quality={100} />
                    </div>
                    <div className=' cursor-pointer marketPlaceFilterBtn text-base uppercase smallCouponBtn'>game</div>
                    <div className="flex justify-end greenTri1">
                        <Image src={purpleTRI} alt='' quality={100} />
                    </div>
                    <div className=' cursor-pointer marketPlaceFilterBtn text-base uppercase smallCouponBtn'>coupons</div>
                    <div className="flex justify-end greenTri1">
                        <Image src={ornageTRI} alt='' quality={100} />
                    </div>
                    <div className=' cursor-pointer marketPlaceFilterBtn text-base uppercase larheCouponBtn'>gaming accessories</div>
                    <div className="flex justify-end greenTri1">
                        <Image src={ornageTRI} alt='' quality={100} />
                    </div>

                </div>

                <div className='flex gap-2 items-center'>
                    <BiFilter className='text-3xl' />
                    <p className='text-lg font-semibold uppercase hidden md:block'>filter</p>
                </div>
            </div>

            <br />
            <br />
            <br />

            <div className="flex justify-center gap-16 flex-wrap marketPlaceOffersContainer">
                {offersDataARR.map((item) => {
                    return (
                        <div key={item.id} className='rgba'>

                            <div className="imageContainer">
                                <Image src={item.image} alt='' quality={100} className='offerImage' />


                                <div className="">
                                    <div className='marketPLaceContentHold h-2 '>
                                        <div className='ml-4 mb-2'>
                                            <p className='uppercase text-xl textShadow'>{item.title}</p>
                                            <div className='marketPlaceSubtitle w-80 textShadow'>{item.subTitle} ....
                                                <span className='font-semibold underline ml-1 moreText'>More</span></div>
                                        </div>

                                        <div className='marketPlaceCardBtnsHold flex gap-4'>
                                            <div className="marketPlaceCardBtn1">
                                                <div className='flex flex-col items-center'>
                                                    <p className='uppercase text-yellow-400 text-xs mb-0'>premium</p>
                                                    <div className="flex items-center gap-1">
                                                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4 9.5C2.88333 9.5 1.9375 9.1125 1.1625 8.3375C0.3875 7.5625 0 6.61667 0 5.5C0 4.38333 0.3875 3.4375 1.1625 2.6625C1.9375 1.8875 2.88333 1.5 4 1.5C5.11667 1.5 6.0625 1.8875 6.8375 2.6625C7.6125 3.4375 8 4.38333 8 5.5C8 6.61667 7.6125 7.5625 6.8375 8.3375C6.0625 9.1125 5.11667 9.5 4 9.5ZM3.5 7.25H4.5V4.75H5.5V4H2.5V4.75H3.5V7.25ZM9 4L8.375 2.625L7 2L8.375 1.375L9 0L9.625 1.375L11 2L9.625 2.625L9 4ZM9 11L8.375 9.625L7 9L8.375 8.375L9 7L9.625 8.375L11 9L9.625 9.625L9 11Z" fill="#FFC700" />
                                                        </svg>

                                                        <p className='text-xs'>{item.premiumprice} + 50</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="marketPlaceCardBtn2">
                                                <div className='flex flex-col items-center'>
                                                    <p className='uppercase text-white text-xs mb-0'>regular</p>
                                                    <div className="flex items-center gap-1">
                                                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4 9.5C2.88333 9.5 1.9375 9.1125 1.1625 8.3375C0.3875 7.5625 0 6.61667 0 5.5C0 4.38333 0.3875 3.4375 1.1625 2.6625C1.9375 1.8875 2.88333 1.5 4 1.5C5.11667 1.5 6.0625 1.8875 6.8375 2.6625C7.6125 3.4375 8 4.38333 8 5.5C8 6.61667 7.6125 7.5625 6.8375 8.3375C6.0625 9.1125 5.11667 9.5 4 9.5ZM3.5 7.25H4.5V4.75H5.5V4H2.5V4.75H3.5V7.25ZM9 4L8.375 2.625L7 2L8.375 1.375L9 0L9.625 1.375L11 2L9.625 2.625L9 4ZM9 11L8.375 9.625L7 9L8.375 8.375L9 7L9.625 8.375L11 9L9.625 9.625L9 11Z" fill="#FFC700" />
                                                        </svg>
                                                        <p className='text-xs'>{item.regularPrice} + 50</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end marketPlaceCardTri">
                                {item.id % 2 === 0 ? <Image src={greenTRI2} alt='' quality={100} /> : <Image src={purpleTRI2} alt='' quality={100} />}
                            </div>
                        </div>
                    )
                })}
            </div>

            <br />
            <br />

        </div>
    )
}

export default MarketplaceIndex

/*  

 <Image src={topGradientBorder} alt='' quality={100} className='relative top-[9rem] md:top-[3.5rem] lg:top-[4.4rem] w-[72%] lg:w-[27%] md:w-[30%] left-[0.6rem] md:-left-1 ' />

*/
