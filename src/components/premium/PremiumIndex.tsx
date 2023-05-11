import React from 'react'
import tick from "../../assets//premiumTick.svg"
import wrong from "../../assets/premiumWrong.svg"
import Image from 'next/image'
const PremiumIndex = () => {
  return (
    <div>

      <div className="flex relative -left-1 md:-left-0  justify-evenly items-center gap-[7.5rem] lg:gap-0 mb-12 mt-16 lg:mt-0 lg:mb-0 flex-wrap-reverse">


        {  /* box 1 */}
        <div className="relative bg-transparent w-[26rem] h-[39rem] mb-16 md:mb-8 lg:mb-0 ">
          <div className="w-[90%] h-[8%] bg-[#0B111F] premiumBox3 absolute top-2 right-[8%] ">
          </div>

          <p className='  text-xl text-[#A3C7D7] text-center w-[93%] top-5 tracking-widest relative '>FREE</p>
          {/* start shape code  */}
          <div className=" h-[100%] w-[100%] bg-[#43E5F1] border-[#43E5F1]   sm:border-1 border-[1px]  premiumBox firsBox ">
            <div className="h-[100%] w-[100%] bg-[#000000] opacity-[99] premiumBox2 flex-col gap-7 md:pt-16 pt-24 flex justify-center  items-center text-white ">

              <div className="flex gap-7 justify-evenly items-center">
                <Image src={tick} alt='' quality={100} />
                <p className='text-white capitalize'>GET abcd 10 amount with dash rupee</p>
              </div>

              <div className="flex gap-7 justify-evenly items-center">
                <Image src={tick} alt='' quality={100} />
                <p className='text-white capitalize'>GET abcd 10 amount with dash rupee</p>
              </div>

              <div className="flex gap-7 justify-evenly items-center">
                <Image src={tick} alt='' quality={100} />
                <p className='text-white capitalize'>GET abcd 10 amount with dash rupee</p>
              </div>

              <div className="flex gap-7 justify-evenly items-center">
                <Image src={tick} alt='' quality={100} />
                <p className='text-white capitalize'>GET abcd 10 amount with dash rupee</p>
              </div>

              { /* CROSS  */}

              <div className="flex gap-7 justify-evenly items-center">
                <Image src={wrong} alt='' quality={100} />
                <p className='text-white capitalize'>GET abcd 10 amount with dash rupee</p>
              </div>

              <div className="flex gap-7 justify-evenly items-center">
                <Image src={wrong} alt='' quality={100} />
                <p className='text-white capitalize'>GET abcd 10 amount with dash rupee</p>
              </div>

              <div className="flex gap-7 justify-evenly items-center">
                <Image src={wrong} alt='' quality={100} />
                <p className='text-white capitalize'>GET abcd 10 amount with dash rupee</p>
              </div>

              <div className="flex gap-7 justify-evenly items-center mb-9">
                <Image src={wrong} alt='' quality={100} />
                <p className='text-white capitalize'>GET abcd 10 amount with dash rupee</p>
              </div>


              <div>
                <button className='text-white dashBoardHeroBtn uppercase h-11 whitespace-nowrap w-48'>current plan</button>
              </div>

              <br />

            </div>
          </div>

        </div>


        { /* divider */}
        <div className='premiumDivider hidden lg:block'></div>



        { /* box 2  */}

        <div className="relative  bg-transparent w-[26rem] h-[39rem] ">
          <div className="w-[90%] h-[8%] bg-[#FFC700] premiumBox3 absolute top-2 right-[8%] ">
          </div>
          <p className=' text-xl text-[#ffffff] font-bold text-center w-[93%] top-5 tracking-widest relative '>PREMIUM</p>


          <div className=" h-[100%] w-[100%] bg-[#FFC700] border-[#FFC700]  sm:border-1 border-[1px]  premiumBox secBox ">
            <div className="h-[100%] w-[100%] bg-[#000000] opacity-[99] premiumBox2 flex-col gap-7 md:pt-16 pt-24 flex justify-center  items-center text-white ">

              <div className="flex gap-7 justify-evenly items-center">
                <Image src={tick} alt='' quality={100} />
                <p className='text-white capitalize'>GET abcd 10 amount with dash rupee</p>
              </div>

              <div className="flex gap-7 justify-evenly items-center">
                <Image src={tick} alt='' quality={100} />
                <p className='text-white capitalize'>GET abcd 10 amount with dash rupee</p>
              </div>

              <div className="flex gap-7 justify-evenly items-center">
                <Image src={tick} alt='' quality={100} />
                <p className='text-white capitalize'>GET abcd 10 amount with dash rupee</p>
              </div>

              <div className="flex gap-7 justify-evenly items-center">
                <Image src={tick} alt='' quality={100} />
                <p className='text-white capitalize'>GET abcd 10 amount with dash rupee</p>
              </div>

              <div className="flex gap-7 justify-evenly items-center">
                <Image src={tick} alt='' quality={100} />
                <p className='text-white capitalize'>GET abcd 10 amount with dash rupee</p>
              </div>

              <div className="flex gap-7 justify-evenly items-center">
                <Image src={tick} alt='' quality={100} />
                <p className='text-white capitalize'>GET abcd 10 amount with dash rupee</p>
              </div>

              <div className="flex gap-7 justify-evenly items-center">
                <Image src={tick} alt='' quality={100} />
                <p className='text-white capitalize'>GET abcd 10 amount with dash rupee</p>
              </div>

              <div className="flex gap-7 justify-evenly items-center">
                <Image src={tick} alt='' quality={100} />
                <p className='text-white capitalize'>GET abcd 10 amount with dash rupee</p>
              </div>

              <br />
              <div>
                <button className='text-white dashBoardHeroBtn uppercase h-11 whitespace-nowrap w-48'>current plan</button>
              </div>

              <br />

            </div>
          </div>

        </div>


      </div>

    </div>
  )
}

export default PremiumIndex
/* 

    <div className="flex justify-end w-full">
                <div className="premiumYellowGradient bg-[#FFC700] opacity-70 blur-[20px] w-32 h-14">

                </div>
              </div>
*/

/* box 2 
<div className="flex flex-col lg:-ml-8 justify-center premiumBox2 gap-7 items-center">

  <div className="flex gap-7 justify-evenly items-center">
    <Image src={tick} alt='' quality={100} />
    <p className='text-white capitalize'>GET abcd 10 amount with dash rupee</p>
  </div>

  <div className="flex gap-7 justify-evenly items-center">
    <Image src={tick} alt='' quality={100} />
    <p className='text-white capitalize'>GET abcd 10 amount with dash rupee</p>
  </div>

  <div className="flex gap-7 justify-evenly items-center">
    <Image src={tick} alt='' quality={100} />
    <p className='text-white capitalize'>GET abcd 10 amount with dash rupee</p>
  </div>

  <div className="flex gap-7 justify-evenly items-center">
    <Image src={tick} alt='' quality={100} />
    <p className='text-white capitalize'>GET abcd 10 amount with dash rupee</p>
  </div>

  { /* CROSS  

  <div className="flex gap-7 justify-evenly items-center">
    <Image src={tick} alt='' quality={100} />
    <p className='text-white capitalize'>GET abcd 10 amount with dash rupee</p>
  </div>

  <div className="flex gap-7 justify-evenly items-center">
    <Image src={tick} alt='' quality={100} />
    <p className='text-white capitalize'>GET abcd 10 amount with dash rupee</p>
  </div>

  <div className="flex gap-7 justify-evenly items-center">
    <Image src={tick} alt='' quality={100} />
    <p className='text-white capitalize'>GET abcd 10 amount with dash rupee</p>
  </div>

  <div className="flex gap-7 justify-evenly items-center mb-9">
    <Image src={tick} alt='' quality={100} />
    <p className='text-white capitalize'>GET abcd 10 amount with dash rupee</p>
  </div>


  <div>
    <button className='text-white dashBoardHeroBtn uppercase h-11 whitespace-nowrap w-48'>purchase now</button>
  </div>

</div>*/