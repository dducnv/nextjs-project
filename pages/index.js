import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../components/Navbar";
import {LazyLoadImage} from "react-lazy-load-image-component";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | 7th.Dec</title>
        <meta charSet="UTF-8"/>
         <meta name="description" content="Này Là Web Của Đức"/>
          <meta itemProp="image" content="https://uploads-ssl.webflow.com/612a3d9cd9c35344a2460d68/61b4ba4c8e9e68583ebecde4_127276256_1330240820660968_9032823244503499320_n.jpg"/>
          <meta name="keywords" content="HTML, CSS, JavaScript, reacjs, nextjs"/>
         <meta name="author" content="Nguyễn Văn Đức"/>
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" type="image/png" href="https://uploads-ssl.webflow.com/612a3d9cd9c35344a2460d68/61b2181355e88e77082f397d_Myloc.svg"/>
        <link rel="icon" type="image/png" href="https://uploads-ssl.webflow.com/612a3d9cd9c35344a2460d68/61b2181355e88e77082f397d_Myloc.svg"/>
      </Head>
      <main>
      <div className="flex  z-20 items-center">
        <div className="container mx-auto px-6 flex flex-col justify-between items-center  py-4">
          <div className="flex flex-col">
            <LazyLoadImage
                alt="avatar"
                effect="blur"
                src="https://uploads-ssl.webflow.com/612a3d9cd9c35344a2460d68/61b4ba4c8e9e68583ebecde4_127276256_1330240820660968_9032823244503499320_n.jpg"
                className="rounded-full w-28 mx-auto"
                role="img"
            />
            <p className="text-3xl my-6 text-center dark:text-white">
              Hi, I&#x27;m Nguyen Van Duc 🤘
            </p>
            <h2 className="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
              Welcome To My Web
            </h2>
            <div className="flex items-center justify-center mt-4">
              <a href="https://blogcuadduc.herokuapp.com/" className="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md">
                My Web
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>

</>
  )
}
