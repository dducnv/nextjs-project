import Header from "../components/Head";
import {PaperClipIcon, ArrowDownIcon} from "@heroicons/react/outline";

export default function Office() {
    const office = [
        {
            name: "Office 365",
            desc: "Office 365 là một phiên bản nâng cao, cần phải gia hạn hàng tháng hoặc theo năm.",
            sys: "Windows",
            ver: "Pro",
            file: [
                {
                    nameFile: "office 365 pro",
                    size: "4GB",
                    url: "https://tb.rg-adguard.net/dl.php?go=287bd637",
                }
            ]


        },
        {
            name: "Office 2021",
            desc: "File Office sẽ tồng hợp tất tả ứng dụng có trong bộ, bạn cũng có thể tải riêng ứng dụng mà bạn cần.",
            sys: "Windows",
            ver: "Pro",
            file: [
                {
                    nameFile: "Office 2021",
                    size: "4,3GB",
                    url: "https://tb.rg-adguard.net/dl.php?go=7713396f",
                },
                {
                    nameFile: "Word 2021",
                    size: "4,3GB",
                    url: "https://tb.rg-adguard.net/dl.php?go=5f99d42e",
                },
                {
                    nameFile: "Excel 2021",
                    size: "4,3GB",
                    url: "https://tb.rg-adguard.net/dl.php?go=b5cfff16",
                },
                {
                    nameFile: "PowerPoint 2021",
                    size: "4,3GB",
                    url: "https://tb.rg-adguard.net/dl.php?go=846a97cc",
                }

            ]


        },
        {
            name: "Office 2019",
            desc: "File Office sẽ tồng hợp tất tả ứng dụng có trong bộ, bạn cũng có thể tải riêng ứng dụng mà bạn cần.",
            sys: "Windows",
            ver: "Pro",
            file: [
                {
                    nameFile: "Office 2019",
                    size: "3,4GB",
                    url: "https://tb.rg-adguard.net/dl.php?go=6e41d65d",
                },
                {
                    nameFile: "Word 2019",
                    size: "3,4GB",
                    url: "https://tb.rg-adguard.net/dl.php?go=acd61ced",
                },
                {
                    nameFile: "Excel 2019",
                    size: "3,4GB",
                    url: "https://tb.rg-adguard.net/dl.php?go=d67e3b21",
                },
                {
                    nameFile: "PowerPoint 2019",
                    size: "3,4GB",
                    url: "https://tb.rg-adguard.net/dl.php?go=142ce877",
                }

            ]


        },
        {
            name: "Office 2016 for Mac",
            desc: "File Office sẽ tồng hợp tất tả ứng dụng có trong bộ, bạn cũng có thể tải riêng ứng dụng mà bạn cần.",
            sys: "MacOS",
            ver: "Pro",
            file: [
                {
                    nameFile: "Office 2016",
                    size: "1,6GB",
                    url: "https://tb.rg-adguard.net/dl.php?go=6ab7fa11",
                },
                {
                    nameFile: "Word 2016",
                    size: "1GB",
                    url: "https://tb.rg-adguard.net/dl.php?go=f53f7a77",
                },
                {
                    nameFile: "Excel 2016",
                    size: "0,7GB",
                    url: "https://tb.rg-adguard.net/dl.php?go=918e2f5b",
                },
                {
                    nameFile: "PowerPoint 2016",
                    size: "0,7GB",
                    url: "https://tb.rg-adguard.net/dl.php?go=555da5d3",
                }

            ]


        },
        {
            name: "Office 2016",
            desc: "File Office sẽ tồng hợp tất tả ứng dụng có trong bộ, bạn cũng có thể tải riêng ứng dụng mà bạn cần.",
            sys: "Windows",
            ver: "Pro",
            file: [
                {
                    nameFile: "Office 2016",
                    size: "4,2GB",
                    url: "https://tb.rg-adguard.net/dl.php?go=498c76e7",
                },
                {
                    nameFile: "Word 2016",
                    size: "4,2GB",
                    url: "https://tb.rg-adguard.net/dl.php?go=6bace57f",
                },
                {
                    nameFile: "Excel 2016",
                    size: "4,2GB",
                    url: "https://tb.rg-adguard.net/dl.php?go=e736f53d",
                },
                {
                    nameFile: "PowerPoint 2016",
                    size: "4,2GB",
                    url: "https://tb.rg-adguard.net/dl.php?go=dd76989f",
                }

            ]


        },
        {
            name: "Office 2013",
            desc: "File Office sẽ tồng hợp tất tả ứng dụng có trong bộ, bạn cũng có thể tải riêng ứng dụng mà bạn cần.",
            sys: "Windows",
            ver: "Pro",
            file: [
                {
                    nameFile: "Office 2013",
                    size: "2GB",
                    url: "https://tb.rg-adguard.net/dl.php?go=eec9cb96",
                },
                {
                    nameFile: "Word 2013",
                    size: "2GB",
                    url: "https://tb.rg-adguard.net/dl.php?go=49c599d2",
                },
                {
                    nameFile: "Excel 2013",
                    size: "2GB",
                    url: "https://tb.rg-adguard.net/dl.php?go=31249579",
                },
                {
                    nameFile: "PowerPoint 2013",
                    size: "2GB",
                    url: "https://tb.rg-adguard.net/dl.php?go=b11a8829",
                }

            ]


        }
    ]
    return (
        <>
            <Header
                title={'Tổng Hợp Các Bộ Office | Tải và cài đặt các bộ office, tổng hợp các key kick hoạt'}
                img={'https://res.cloudinary.com/blogcuaduc/image/upload/v1639659502/cua-toi/office-365_256x256_y4l6ik.png'}
                desc={'Link cài đặt,Key kích hoạt Microsoft 365 hoặc Office 2021, Office 2016, Office 2013 trên Windows hoặc Mac.' +
                    'Microsoft Office mang đến cho bạn tất cả Word, Excel và PowerPoint trong một ứng dụng. Tận dụng trải nghiệm liền mạch với các công cụ của Microsoft khi đang di chuyển với Ứng dụng Office, giải pháp đơn giản cho năng suất.Quét tệp PDF, tạo bảng tính hoặc soạn thảo tài liệu mọi lúc và mọi nơi bằng cách truy cập các chức năng Office tích hợp thông qua thiết bị di động của bạn. Hoàn thành quy trình công việc của bạn'}
                href={'https://sat-7thdec.herokuapp.com/office'}
            />

            <div className=" max-w-7xl mx-auto py-6 sm:py-12">
                <p className="text-center text-3xl font-bold text-gray-800 dark:text-white">
                    Tổng Hợp Link Tải Bộ Microsoft Office
                </p>
                <p className="text-center mb-12 mt-4 text-xl font-normal text-gray-500 dark:text-gray-300">
                    Tất cả tệp tin không gây hại cho máy tính.
                </p>
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center ">

                    <h2 className="ml-4 font-extrabold tracking-tight text-gray-900 ">
                        <span className="block text-3xl sm:text-4xl">Microsoft Office</span>
                        <span className="block  text-indigo-600">Hãy Chọn Phiên Bản Phù Hợp Với Máy Tính.</span>
                    </h2>
                </div>
                {office.map(item => (
                    <>
                        <div className="bg-white shadow-lg border-t-2 overflow-hidden sm:rounded-lg my-4">
                            <div className="px-4 py-5 sm:px-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">{item.name}</h3>
                                {/*<p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>*/}
                            </div>
                            <div className="border-t border-gray-200">
                                <dl>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Phiên Bản</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{item.ver}</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Hệ Điều Hành</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{item.sys}</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Chi tiết</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {item.desc}
                                        </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Tập tin đính kèm</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            <ul role="list"
                                                className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                                {item.file.map(file => (
                                                    <li key={file.nameFile}
                                                        className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                                        <div className="w-0 flex-1 flex items-center">
                                                            <PaperClipIcon
                                                                className="flex-shrink-0 h-5 w-5 text-gray-400"
                                                                aria-hidden="true"/>
                                                            <span
                                                                className="ml-2 flex-1 w-0 truncate">{file.nameFile}</span>
                                                        </div>
                                                        <div className="w-0 flex-1 flex items-center">
                                                            <ArrowDownIcon
                                                                className="flex-shrink-0 h-5 w-5 text-gray-400"
                                                                aria-hidden="true"/>
                                                            <span
                                                                className="ml-2 flex-1 w-0 truncate">Dung Lượng: {file.size}</span>
                                                        </div>
                                                        <div className="ml-4 flex-shrink-0">
                                                            <button
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    window.location.href = file.url;
                                                                }}
                                                                className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                Download
                                                            </button>
                                                        </div>
                                                    </li>
                                                ))}

                                            </ul>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </>
                ))}

            </div>

        </>
    )
}
