export default function OperatingSystem() {
    const win10 = [
        {
            imgUrl:"https://res.cloudinary.com/blogcuaduc/image/upload/v1639640658/cua-toi/window-10-logo-vector_tuhxkq.png",
            name:"Windows 10",
            ver:"21H2",
            url64:"https://drive.google.com/file/d/1kKRf2AzZQVzshNsMhpyLi7DDTDh4mq8w/view?usp=sharing",
            url32:"https://drive.google.com/file/d/1IORW7JJDZ3QUfafmSmX2pDSZ81HW9xl6/view?usp=sharing",
            size64:"5,48GB",
            size32:"3,9GB",
        },
        {
            imgUrl:"https://res.cloudinary.com/blogcuaduc/image/upload/v1639640588/cua-toi/windows-7-logo-vector-01_fwtg63.png",
            name:"Windows 7",
            ver:"ultimate",
            url64:"https://drive.google.com/file/d/1o7ZkLQIuqcwOjfoqFbM2YP-ZngCO5Xkj/view?usp=sharing",
            url32:"https://drive.google.com/file/d/1d2mnADrZn5DvwPUcIc9QTKCfjNO0SUyS/view?usp=sharing",
            size64:"3,9GB",
            size32:"2,39GB",
        }

    ]

    return (
        <>

            <div className=" max-w-7xl mx-auto py-6 sm:py-12">
                <p className="text-center text-3xl font-bold text-gray-800 dark:text-white">
                    Hệ Điều Hành Dành Cho Máy Tính
                </p>
                <p className="text-center mb-12 mt-4 text-xl font-normal text-gray-500 dark:text-gray-300">
                    Tất cả tệp tin được tải từ trang chủ chính thức, hoàn toàn không gây hại cho máy tinh.
                </p>
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center ">

                    <h2 className="ml-4 font-extrabold tracking-tight text-gray-900 ">
                        <span className="block text-3xl sm:text-4xl">Windows</span>
                        <span className="block  text-indigo-600">Hãy Chon Phiên Bản Phù Hợp Với Máy Tính.</span>
                    </h2>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
                    {win10.map(res => (
                        <>
                            <article className="flex flex-col bg-coolGray-50">

                                <div className="shadow-lg rounded-2xl w-100 p-3 bg-white dark:bg-gray-800">
                                    <div className="flex flex-row items-start gap-4">
                                        <img src={res.imgUrl} className="w-28 h-28 rounded-lg"/>

                                        <div className="h-28 w-full flex flex-col justify-between">
                                            <div>
                                                <p className="text-gray-800 dark:text-white text-xl font-medium">
                                                    {res.name}
                                                </p>
                                                <p className="text-gray-400 text-xs">
                                                    version: {res.ver}
                                                </p>
                                            </div>
                                            <div className="rounded-lg bg-blue-100 dark:bg-white p-2 w-full">
                                                <div
                                                    className="flex items-center justify-between text-xs text-gray-400 dark:text-black">
                                                    <p className="flex flex-col">
                                                        Size:
                                                    </p>
                                                    <p className="flex flex-col">
                                                        x64
                                                        <span className="text-black dark:text-indigo-500 font-bold">
                                                    {res.size64}
                                                </span>
                                                    </p>
                                                    <p className="flex flex-col">
                                                        x86
                                                        <span className="text-black dark:text-indigo-500 font-bold">
                                                       {res.size32}
                                                </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between gap-4 mt-6">
                                        <a href={res.url32}
                                            className="w-1/2 px-3 py-2 text-base border rounded-lg text-grey-500 bg-white hover:bg-gray-200 ">
                                            32-bit (x86)
                                        </a>
                                        <a href={res.url64}
                                           className="w-1/2 px-3 py-2 text-base border rounded-lg text-white bg-indigo-500 hover:bg-indigo-700 ">
                                            64-bit (x64)
                                        </a>
                                    </div>
                                </div>

                            </article>
                        </>
                    ))}

                </div>
            </div>

        </>
    )
}
