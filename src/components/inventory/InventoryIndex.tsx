import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { BiFilter } from "react-icons/bi";
import marketPlace1 from "../../assets/marketPlace1.png"
import greenTRI2 from "../../assets/greenTRI2.svg"
import purpleTRI2 from "../../assets/purpleTRI2.svg"

type offersDataARRType = {
  id: number,
  title: string,
  subTitle: string,
  image: HTMLImageElement | StaticImageData
}

const InventoryIndex = () => {

  const offersDataARR: offersDataARRType[] = [
    {
      id: 1,
      title: "title",
      subTitle: "Amet minim mollit non deserunt ullamcoest sit aliqua dolor do",
      image: marketPlace1
    },
    {
      id: 2,
      title: "title",
      subTitle: "Amet minim mollit non deserunt ullamcoest sit aliqua dolor do",
      image: marketPlace1
    },
    {
      id: 3,
      title: "title",
      subTitle: "Amet minim mollit non deserunt ullamcoest sit aliqua dolor do",
      image: marketPlace1
    },
    {
      id: 4,
      title: "title",
      subTitle: "Amet minim mollit non deserunt ullamcoest sit aliqua dolor do",
      image: marketPlace1
    },
    {
      id: 5,
      title: "title",
      subTitle: "Amet minim mollit non deserunt ullamcoest sit aliqua dolor do",
      image: marketPlace1
    },
    {
      id: 6,
      title: "title",
      subTitle: "Amet minim mollit non deserunt ullamcoest sit aliqua dolor do",
      image: marketPlace1
    },

    {
      id: 7,
      title: "title",
      subTitle: "Amet minim mollit non deserunt ullamcoest sit aliqua dolor do",
      image: marketPlace1
    },
    {
      id: 8,
      title: "title",
      subTitle: "Amet minim mollit non deserunt ullamcoest sit aliqua dolor do",
      image: marketPlace1
    },
    {
      id: 9,
      title: "title",
      subTitle: "Amet minim mollit non deserunt ullamcoest sit aliqua dolor do",
      image: marketPlace1
    },
  ]

  return (
    <div className='text-white'>

      <div className="inventoryOffersHold mt-16 md:mt-2">
        {offersDataARR.map((item) => {
          return (
            <div key={item.id}>

              <div className="imageContainer imageContainer2">
                <Image src={item.image} alt='' quality={100} className='offerImage' />


                <div className="">
                  <div className='marketPLaceContentHold h-2 '>
                    <div className='ml-4 mb-2'>
                      <p className='uppercase text-xl textShadow'>{item.title}</p>
                      <div className='inventorySubtitle w-80 textShadow'>{item.subTitle} ....
                        <span className='font-semibold underline ml-1 moreText'>More</span></div>
                    </div>

                    <div className='InventoryCardBtnsHold flex gap-4'>

                      <div className='text-white text-2xl flex justify-center cursor-pointer items-center w-full textShadow'>check details</div>

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

export default InventoryIndex