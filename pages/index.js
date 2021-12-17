import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../components/Navbar";
import {LazyLoadImage} from "react-lazy-load-image-component";
import Header from "../components/Head";

export default function Home() {
  return (
    <>
     <Header desc="web này để chia sẻ nhưng cái kỳ quái mang tầm vũ trụ, nó giúp cho chúng ta khai sang tâm hồn dánh thức con hổ trong người. Web còn tổng hợp các link tải phần mềm và một số thứ vớ vẩn khác tôi làm cho trang web này =))" href={'https://sat-7thdec.herokuapp.com'} img="https://uploads-ssl.webflow.com/612a3d9cd9c35344a2460d68/616fea3cb4886891f2960f80_logo7th.png" title="Home | 7th.Dec"/>
      <main>
      <div className="flex  z-20 items-center">
        <div className="container mx-auto px-6 flex flex-col justify-between items-center  py-4">
          <div className="flex flex-col mt-8">
            <LazyLoadImage
                alt="avatar"
                effect="blur"
                src="https://uploads-ssl.webflow.com/612a3d9cd9c35344a2460d68/61b4ba4c8e9e68583ebecde4_127276256_1330240820660968_9032823244503499320_n.jpg"
                className="rounded-full w-28 mx-auto"
                role="img"
            />
            <p className="text-3xl my-6 text-center my-name font-secondary dark:text-white">
              Hi, I&#x27;m Nguyen Van Duc 🤘
            </p>
            <h2 className="max-w-3xl typing-animation font-secondary text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
              Welcome To My Web!
            </h2>
            <div className="flex font-secondary items-center justify-center mt-4">
              <a href="https://blogcuadduc.herokuapp.com/" className="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md">
                My Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>

</>
  )
}
