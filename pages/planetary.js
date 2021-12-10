import {useState, useEffect, Fragment} from "react";
import Skeleton from 'react-loading-skeleton'
import {Listbox, Transition} from '@headlessui/react'
import {CheckIcon, SelectorIcon} from '@heroicons/react/solid'
import Image from 'next/image'
import Head from 'next/head'
const axios = require('axios').default;

export default function planetary() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoad] = useState(true)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [content, setContent] = useState('')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState('');
    function dataNasa() {
        fetchData();

        async function fetchData() {
            const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=uJSsAxE9N7A8LAcrQhjRylOcfzK5rCjpPZv1Wza5')
            const dataNasa = await res.json();
            setData(dataNasa)
            setContent(dataNasa.explanation)
            setLoad(false)
        }
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks,react-hooks/exhaustive-deps
    useEffect( async () => {
        dataNasa();

    }, [])
    if (loading) {
        return (
            <>
                <Head>
                    <title>Hình ảnh thiên văn trong ngày</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="icon" type="image/png" href="https://uploads-ssl.webflow.com/612a3d9cd9c35344a2460d68/61b2181355e88e77082f397d_Myloc.svg"/>
                    <link rel="icon" type="image/png" href="https://uploads-ssl.webflow.com/612a3d9cd9c35344a2460d68/61b2181355e88e77082f397d_Myloc.svg"/>
                </Head>
                <div className="max-w-7xl py-6 sm:py-12 mx-auto">
                    <div className="space-y-2  text-center">
                        <h2 className="text-4xl font-bold capitalize ">Hình ảnh thiên văn trong ngày</h2>
                        <p className="font-serif text-sm text-coolGray-600">Dữ Liệu đươc sử dụng: <a className="text-indigo-500" href={"https://api.nasa.gov/"}>Nasa API</a></p>
                    </div>

                    <div className=" py-9 md:py-9 lg:py-13">
                        <div className="flex flex-col lg:flex-row justify-center items-strech mx-4">
                            <div className="lg:w-4/12 mt-6 md:mt-8 lg:mt-0">
                                <div className="w-full h-full">
                                    <Skeleton height={300}/>
                                </div>
                            </div>
                            <div className="lg:w-8/12 flex justify-center md:px-10">
                                <div className=" w-full h-full">
                                    <h1 className="dark:text-white mt-4 text-center md:text-left text-4xl md:text-4xl xl:text-4xl font-semibold text-gray-900">
                                        <Skeleton width={250} height={20}/></h1>
                                    <p className="dark:text-white text-center md:text-left mt-2 text-sm md:mt-0 py-3 font-medium leading-3 text-gray-400">
                                        <Skeleton width={150} height={10}/></p>
                                    <p className="dark:text-gray-300 lg:mt-3 text-base  text-gray-600">
                                        <Skeleton width height={150}/>
                                    </p>
                                    <p className="dark:text-white mt-4 text-xs font-medium leading-3 text-gray-600">
                                        <Skeleton width={300} height={10}/></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <Head>
                <title>Hình ảnh thiên văn trong ngày</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/png" href="https://uploads-ssl.webflow.com/612a3d9cd9c35344a2460d68/61b2181355e88e77082f397d_Myloc.svg"/>
                <link rel="icon" type="image/png" href="https://uploads-ssl.webflow.com/612a3d9cd9c35344a2460d68/61b2181355e88e77082f397d_Myloc.svg"/>
            </Head>
            <div className="max-w-7xl py-6 sm:py-12 mx-auto">
                <div className="space-y-2  text-center">
                    <h2 className="text-4xl font-bold capitalize ">Hình ảnh thiên văn trong ngày</h2>
                    <p className="font-serif text-sm text-coolGray-600">Dữ Liệu đươc sử dụng: <a className="text-indigo-500" href={"https://api.nasa.gov/"}>Nasa API</a></p>
                </div>
                <div className=" py-9 md:py-9 lg:py-13">
                    <div className="flex flex-col lg:flex-row justify-center items-strech mx-4">
                        <div className="lg:w-4/12 mt-6 md:mt-8 lg:mt-0">
                            <div className=" w-full h-full">
                                <Image src={data.hdurl}
                                     alt={data.title} role="img"
                                     className="w-full h-full  md:object-cover hidden lg:block"/>
                                <Image src={data.hdurl}
                                     alt={data.title} role="img" className="w-full object-cover h-full lg:hidden"/>
                            </div>
                        </div>
                        <div className="lg:w-8/12 flex justify-center md:px-10">
                            <div>
                                <h1 className="dark:text-white mt-4 text-center md:text-left text-4xl md:text-4xl xl:text-4xl font-semibold text-gray-900">{data.title}</h1>
                                <p className="dark:text-white text-center md:text-left mt-2 text-sm md:mt-0 py-3 font-medium leading-3 text-gray-400">{data.date}</p>
                                <p className="dark:text-gray-300 lg:mt-3 text-base  text-gray-600">
                                    {content}
                                </p>
                                <p className="dark:text-white mt-4 text-xs font-medium leading-3 text-gray-600">&copy;copyright
                                    - <a
                                        href={`https://www.google.com/search?q=` + data.copyright + `=` + data.copyright + `=edge..69i57.317j0j1&sourceid=chrome&ie=UTF-8`}>{data.copyright}</a>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}