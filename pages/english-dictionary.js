import React, {useEffect, useState} from "react";
import {PaperClipIcon} from "@heroicons/react/outline";
import {toast, Toaster} from "react-hot-toast";
import Skeleton from 'react-loading-skeleton'
import {
    VolumeUpIcon
} from '@heroicons/react/outline'
import {data} from "autoprefixer";
import Header from "../components/Head";

export default function EnglishDictionary() {
    const [word, setWord] = useState('');
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [url, setUrl] = useState('')
    const [content, setContent] = useState(false);
    const [sources] = useState('')

    function loadWord() {
        // toast.error('Try Again!')
        setLoad(true)
        fetchData();

        async function fetchData() {
            try {
                const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
                const dataDirectory = await res.json();
                setData(dataDirectory)
                setLoad(false)
                setContent(true)
            } catch (err) {
                toast.error('Try Again!')
                setLoad(false)
                setContent(false)
            }
        }
    }
    function audioPlay() {
        new Audio(data[0].phonetics[0].audio).play()
    }
    function renderBody() {
        if (load) {
            return (
                <>
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="mb-3"><Skeleton height={40}/></div>
                        <div className="mb-3"><Skeleton height={40}/></div>
                        <div className="mb-3"><Skeleton height={40}/></div>
                        <div className="mb-3"><Skeleton height={40}/></div>
                        <div className="mb-3"><Skeleton height={40}/></div>
                    </div>
                </>
            )
        }

        if (content && !data.title) {
            return (
                <>
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">English Dictionary</h3>
                            {/*<p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>*/}
                        </div>
                        <div className="border-t border-gray-200">
                            <dl>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Word</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center justify-between">
                                        <div>
                                            {data[0].word}
                                        </div>
                                        <div>
                                            <VolumeUpIcon onClick={audioPlay}
                                                          className="flex-shrink-0 cursor-pointer h-6 w-6 text-indigo-600"/>
                                        </div>

                                    </dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Part Of Speech</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {data[0].meanings[0].partOfSpeech}
                                    </dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Phonetic</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data[0].phonetic}</dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Meanings</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data[0].meanings[0].definitions[0].definition}</dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Example</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {data[0].meanings[0].definitions[0].example}
                                    </dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Origin</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {data[0].origin}
                                    </dd>
                                </div>

                            </dl>
                        </div>
                    </div>
                </>
            )

        }
    }

    return (
        <>
            <Header desc={'Nhận các định nghĩa và bản thu phát âm rõ ràng về các từ, các cụm từ và thành ngữ trong tiếng Anh'} title={'English Dictionary'} href={'https://sat-7thdec.herokuapp.com'} img="https://uploads-ssl.webflow.com/612a3d9cd9c35344a2460d68/616fea3cb4886891f2960f80_logo7th.png"/>
            <div><Toaster/></div>
            <div className=" max-w-7xl mx-auto bg-white p-12">
                <p className="text-center text-3xl font-bold text-gray-800 dark:text-white">
                    English Dictionary
                </p>
                <p className="text-center mb-12 mt-4 text-xl font-normal text-gray-500 dark:text-gray-300">
                    Nhận các định nghĩa và bản thu phát âm rõ ràng về các từ, các cụm từ và thành ngữ trong tiếng Anh
                </p>
                <div className="header mb-12">
                    <div className="text-center">
                        <div className=" relative ">
                            <input type="text"
                                   name="input"
                                   id="text"
                                   spellCheck={true}
                                   onChange={(e) => setWord(e.target.value)}
                                   autoComplete="off"
                                   className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-4 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                   placeholder="Nhập Từ Khoá"/>
                        </div>

                        <button onClick={loadWord}
                                className="flex-shrink-0 mt-4  w-3/6 md:w-1/6 m-auto px-4 py-4 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                                type="button">
                            Tìm Kiếm
                        </button>
                    </div>
                </div>
                {renderBody()}

            </div>
        </>
    )
}