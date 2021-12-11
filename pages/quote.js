import {useState,useEffect} from "react";
import Skeleton from 'react-loading-skeleton'
// eslint-disable-next-line @next/next/no-document-import-in-page
import Head from 'next/head'
export default function quote(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading,setLoad] = useState(true)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data,setData] = useState('');
    function reload(){
        fetchData();
        async function fetchData() {
            const res = await fetch('https://api.quotable.io/random')
            const dataQuote = await res.json();
            setData(dataQuote)
            setLoad(false)
            console.log(data)
        }
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks,react-hooks/exhaustive-deps
    useEffect(async()=>{
        reload();
    },[]);

    function changeQuote() {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        setLoad(true)
         reload();

    }
    function text(){
        if(loading){
            return (
                <>
                    <p className="pt-2 pb-4 text-sl italic font-medium text-center text-gray-600">

                        <p>
                            <Skeleton width={350}  height={20}/>
                        </p>
                        <p>
                            <Skeleton width={300}  height={20}/>
                        </p>
                        <p>
                            <Skeleton width={200}  height={20}/>
                        </p>
                    </p>
                    <p className="pt-2 pb-4 text-sm italic font-medium text-center text-gray-400"><Skeleton width={70} height={10}/></p>
                </>
            )
        }
        return(
            <p>
                <p className="pt-2 pb-4 text-sl italic font-medium text-center text-gray-600">

                    <span className="mr-1">&#10077;</span>{data.content}<span className="ml-1">&#10078;</span>
                </p>
                <p className="pt-2 pb-4 text-sm italic font-medium text-center text-gray-400">- {data.author} -</p>
            </p>
        )
    }
    return(
        <>
            <Head>
                <title>Trích Dẫn</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/png" href="https://uploads-ssl.webflow.com/612a3d9cd9c35344a2460d68/61b2181355e88e77082f397d_Myloc.svg"/>
                <link rel="icon" type="image/png" href="https://uploads-ssl.webflow.com/612a3d9cd9c35344a2460d68/61b2181355e88e77082f397d_Myloc.svg"/>
            </Head>
            <section className="py-6 bg-violet-600 text-coolGray-50">
                <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
                    <div className="space-y-2 text-center">
                        <h2 className="text-4xl font-bold capitalize ">Trích Dẫn</h2>
                        <p className="font-serif text-sm text-coolGray-600">Dữ Liệu đươc sử dụng: <a className="text-indigo-500" href={"https://github.com/lukePeavey/quotable"}>Quotable API</a></p>
                    </div>
                    {text()}
                    <button onClick={changeQuote} disabled={loading} className="px-5 py-2 text-lg text-white rounded bg-gray-900 hover:bg-gray-700 text-coolGray-900">{!loading? 'Làm Mới': "Đang Tải..."}</button>
                </div>
            </section>
        </>
    )
}