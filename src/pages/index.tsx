import Image from 'next/image'
import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })
import HomeIndex from "../components/homePage/HomeIndex"
import HomepageNavbar from '@/components/homePage/HomepageNavbar'
import Line from "../assets/homePageLine.svg";
import HomePageMiddle1 from '@/components/homePage/HomePageMiddle1';
import HomePageMiddle2 from '@/components/homePage/HomePageMiddle2';
import HomePageMiddle3 from '@/components/homePage/HomePageMiddle3';
import HomeFooter from '@/components/homePage/HomeFooter';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gemaverse</title>
        <meta name="description" content="Gemaverse - Level up your gaming skills and health. Take on our Gamer’s Health challenge revolution and earn rewards for your victories on our platform " />
        <meta name="keywords" content="gaming community, valorant, gaming rewards, gaming challenges jainil patel gemaverse gemaverse founder gemaverse ceo" />
        <meta name="author" content="jainil patel gemaverse gemaverse founder gemaverse ceo" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.gemaverse.in/" />
      </Head>
      <HomepageNavbar />

      <div className="flex justify-center heroNavbarHold">
        <div className='relative '>
          <Image src={Line} alt='line' quality={100} className='mx-auto lg:block hidden' />
        </div>

        <div className="flex flex-col">
          <HomeIndex />
          <br />
          <HomePageMiddle1 />

          <br />
          <HomePageMiddle2 />

          <HomePageMiddle3 />

          <br />
          <br />
          <br />

          <HomeFooter />
        </div>

      </div>





      <br />
      <br />
      <br />
    </div>
  )
}
