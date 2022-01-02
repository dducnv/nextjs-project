import React, {useState, useEffect, Fragment} from "react";
import {createWorker} from 'tesseract.js';
import {Listbox, Transition} from '@headlessui/react'
import {toast, Toaster} from "react-hot-toast";
import Zoom from "react-medium-image-zoom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {CheckIcon, SelectorIcon} from "@heroicons/react/outline";
import {
    PhotographIcon
} from '@heroicons/react/outline'
import Header from "../components/Head";

const langs = [
    {
        id: 1,
        name: 'Tiếng Việt',
        value: "vie",
        flag: "https://cdn-icons-png.flaticon.com/512/197/197473.png",
    },
    {
        id: 2,
        name: 'English',
        value: "eng",
        flag: "https://cdn-icons-png.flaticon.com/512/323/323310.png",
    }, {
        id: 3,
        name: 'Japanese',
        value: "jpn",
        flag: "https://cdn-icons-png.flaticon.com/512/197/197604.png",
    },
    {
        id: 4,
        name: 'Chinese',
        value: "chi_tra",
        flag: "https://cdn-icons-png.flaticon.com/512/197/197375.png",
    },
    {
        id: 5,
        name: 'Korean',
        value: "kor",
        flag: "https://cdn-icons-png.flaticon.com/512/197/197582.png",
    },
]
export default function ImageToText() {
    const [selected, setSelected] = useState(langs[0])
    const [imagePath, setImagePath] = useState("");
    const [text, setText] = useState("");
    const [selectedFile, setSelectedFile] = useState()
    useEffect(() => {
        if (!selectedFile) {
            setImagePath(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setImagePath(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])
    const onSelectFile = e => {
        setText('');
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }
    const handleClick = () => {
        setText('')
        if (imagePath == null || imagePath === "") {
            toast.error("Vui Lòng Chọn Ảnh.")
        } else {
            const worker = createWorker();
            const data = (async () => {

                await worker.load();
                await worker.loadLanguage(`${selected.value}`);
                await worker.initialize(`${selected.value}`);
                const {data: {text}} = await worker.recognize(`${imagePath}`);
                setText(text)
                await worker.terminate();
            })();
            toast.promise(
                data,
                {
                    loading: 'Đang Chuyển Đổi...',
                    success: <b>Thành Công!</b>,
                    error: <b>Vui Lòng Thử Lại.</b>,
                }
            );
        }

    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const clearData = () => {
        setText('')
        setImagePath('')
    }
    return (
        <>
            <div><Toaster/></div>
            <Header title={'Chuyển Định Dạng Hình Ảnh Thành Văn Bản | 7th.Dec'} href={"https://ngay7thang12.herokuapp.com/image-to-text"} desc={'Phát hiện và xuất các văn bản có chứa trong hình ảnh và dễ dàng copy.'} img={'https://res.cloudinary.com/blogcuaduc/image/upload/v1641128846/cua-toi/lrb6bfewy7uxne53w4fn.png'}/>
            <div className="max-w-7xl py-6 sm:py-12 mx-auto">
                <div className="space-y-2  text-center">
                    <h2 className="text-4xl font-bold capitalize ">Chuyển Định Dạng Hình Ảnh Thành Văn Bản</h2>
                    <p className="font-serif text-sm text-coolGray-600">Lưu ý: Hãy chọn ngôn ngữ theo ngôn ngữ trong
                        ảnh.</p>
                </div>
                <div
                    className={imagePath === "" || imagePath == null ? "my-6 lg:my-12 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4" : "my-6 lg:my-12 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 border-b border-gray-300"}>
                    <div/>
                    <div className="mt-6 lg:mt-0 lg:flex items-center">

                        {imagePath === "" || imagePath == null ? "" :
                            <>
                                <Listbox value={selected} onChange={setSelected}>
                                    {({open}) => (
                                        <>
                                            <Listbox.Label className="block text-sm mx-2 font-medium text-gray-700">Chọn
                                                Ngôn Ngữ :</Listbox.Label>

                                            <div className="mt-1 relative">

                                                <Listbox.Button
                                                    className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                          <span className="flex items-center">
                                            <img src={selected.flag} alt=""
                                                 className="flex-shrink-0 h-6 w-6 rounded-full"/>
                                            <span className="ml-3 block truncate">{selected.name}</span>
                                          </span>
                                                    <span
                                                        className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                                          </span>
                                                </Listbox.Button>

                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <Listbox.Options
                                                        className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                        {langs.map((lang) => (
                                                            <Listbox.Option
                                                                key={lang.id}
                                                                className={({active}) =>
                                                                    classNames(
                                                                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                                        'cursor-default select-none relative py-2 pl-3 pr-9'
                                                                    )
                                                                }
                                                                value={lang}
                                                            >
                                                                {({selected, active}) => (
                                                                    <>
                                                                        <div className="flex items-center">
                                                                            <img src={lang.flag} alt=""
                                                                                 className="flex-shrink-0 h-6 w-6 rounded-full"/>
                                                                            <span
                                                                                className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                                            >
                                                                    {lang.name}
                                                                  </span>
                                                                        </div>

                                                                        {selected ? (
                                                                            <span
                                                                                className={classNames(
                                                                                    active ? 'text-white' : 'text-indigo-600',
                                                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                )}
                                                                            >
                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                                                                  </span>
                                                                        ) : null}
                                                                    </>
                                                                )}
                                                            </Listbox.Option>
                                                        ))}
                                                    </Listbox.Options>
                                                </Transition>
                                            </div>
                                        </>
                                    )}
                                </Listbox>
                                <button
                                    onClick={clearData}
                                    className="transition mt-3 lg:mt-0 mx-2 duration-150 ease-in-out hover:bg-red-600 focus:outline-none border bg-red-700 rounded text-white px-8 py-2 text-sm">
                                    Xoá
                                </button>
                            </>

                        }
                        {!text === "" || !text == null | imagePath === "" || imagePath == null ? "" :
                            <button
                                onClick={handleClick}
                                className="transition mt-3 lg:mt-0 mx-2 duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none border bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                                Chuyển Đổi
                            </button>
                        }
                    </div>
                </div>
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col lg:flex-row w-full items-start lg:items-center rounded bg-white ">
                        <div
                            className={text === "" ? "w-full cursor-pointer  dark:bg-gray-800" : "w-full lg:w-1/3  dark:bg-gray-800"}>
                            {imagePath === "" || imagePath == null ?
                                <div
                                    className="relative border-dotted cursor-pointer w-full py-4 h-64 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                                    <div className="absolute">
                                        <div className="flex flex-col items-center">
                                            <PhotographIcon
                                                className="fa fa-folder-open  fa-2x text-blue-700"/>
                                            <span
                                                className="block text-gray-400 font-normal">Click vào đây để chọn ảnh</span>
                                        </div>
                                    </div>
                                    <input onChange={onSelectFile} type="file" accept=".png, .jpg, .jpeg"
                                           className="h-full cursor-pointer w-full opacity-0"/>
                                </div>
                                :
                                <div className="flex justify-center items-center">
                                    <Zoom>
                                        <LazyLoadImage
                                            alt={imagePath}
                                            effect="blur"
                                            src={imagePath}
                                            className="w-full h-full object-cover  md:object-cover hidden lg:block"
                                            role="img"
                                        />
                                    </Zoom>
                                    <Zoom>
                                        <LazyLoadImage
                                            alt={imagePath}
                                            effect="blur"
                                            src={imagePath}
                                            className="w-full object-cover object-cover h-full lg:hidden"
                                            role="img"
                                        />
                                    </Zoom>

                                </div>

                            }

                        </div>
                        {text === "" || text == null ? "" :
                            <div className="w-full p-3 h-full lg:w-2/3  ">
                                <label htmlFor="result" className="sr-only">
                                    Kết Quả
                                </label>
                                <textarea
                                    id="result"
                                    name="result"
                                    rows={3}
                                    value={text}
                                    className="shadow-sm h-72  p-3 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                    placeholder="you@example.com"
                                >{text}</textarea>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </>
    );
}