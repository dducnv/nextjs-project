import React, {useState} from 'react';
import {toast} from "react-hot-toast";
import Header from "../components/Head";

const {
    getDownloadUrl,
    isYtUrl,
    changeFormatStorage,
} = require('./../utils/helpers');
const {getInfos, getSuggestions} = require('./../utils/API');
const formats = [
    {
        id: 'mp4',
        name: 'mp4-video',
        isChecked: true,
    },
    {
        id: 'mp3',
        name: 'mp3-audio',
    }
    ,
    {
        id: 'mov',
        name: 'mov-video',
    }
];

export default class YoutubeDownload extends React.Component {
    hiddenDownloadBtn = React.createRef();
    state = {
        input: '',
        filename: '',
        downloadUrl: '',
        format: 'mp4',
        suggestions: [],
        downloads: [],
        currentVideoInfo: null,
        focus: false,
        isDark: false,
    };
    handleChange = (event) => {
        const {target} = event;
        const {name, value} = target;
        this.setState({[name]: value}, () => {
            if (name === 'format') {
                changeFormatStorage(value);
            }
        });
    }
    handleKeydown = (event) => {
        if (event.keyCode === 13) {
            this.checkInput();
        }
    };
    checkInput = () => {
        const {input} = this.state;
        if (isYtUrl(input)) {
            this.download();
        } else {
            this.fetchSuggestions();
        }
    };
    setFocus = () => {
        this.setState({focus: !this.state.focus});
    };

    fetchSuggestions = async () => {
        const {input} = this.state;
        const {data, success} = await getSuggestions(input);
        if (success) {
            this.setState({suggestions: data, currentVideoInfo: undefined});
            // console.log('data',data);
        }
    };

    download = async (videoId) => {
        const {input, format} = this.state;
        const videoUrl = videoId || input;
        if (!videoUrl) return;
        const {data, success} = await getInfos(videoUrl);
        // console.log('data ', data);
        if (success) {
            toast.success('Successfully!')
            const downloadUrl = getDownloadUrl(videoUrl, format);
            // console.log('data ', downloadUrl);
            const videoInfo = {
                title: data.videoDetails.title,
                videoId: data.videoDetails.videoId,
            };
            this.setState(
                {
                    downloadUrl,
                    currentVideoInfo: data.videoDetails,
                    downloads: [...this.state.downloads, videoInfo],
                },
                () => {
                    if (!!videoUrl) {
                        this.hiddenDownloadBtn.click();
                    }
                }
            );
        }
    };

    handleDownloadClick = (videoId) => {
        this.download(videoId);
    };

    render() {
        const {downloadUrl, focus, suggestions, currentVideoInfo} = this.state;
        return (
            <>
                <Header title="Tải Video và Audio từ Youtube | 7th.Dec" desc="Tải Video và Audio từ Youtube" img="https://res.cloudinary.com/blogcuaduc/image/upload/v1639993655/cua-toi/download_q26igk.png"/>
                <div className=" max-w-7xl mx-auto bg-white p-12">
                    <p className="text-center text-3xl font-bold text-gray-800 dark:text-white">
                        Youtube Download
                    </p>
                    <p className="text-center mb-12 mt-4 text-xl font-normal text-gray-500 dark:text-gray-300">
                        Tải Video và Audio từ Youtube
                    </p>
                    <div className="header mb-12">
                        <div className="text-center">
                            <div className=" relative ">
                                <input type="text"
                                       name="input"
                                       id="text"
                                       spellCheck={false}
                                       autoComplete="off"
                                       onBlur={this.setFocus}
                                       onFocus={this.setFocus}
                                       onChange={this.handleChange}
                                       onKeyDown={this.handleKeydown}
                                       autoFocus
                                       className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-4 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                       placeholder="Nhập Từ Khoá Hoặc URL"/>
                            </div>

                            <div className="flex items-center m-auto my-3 gap-8">
                                {formats.map((format) => {
                                    return (
                                        <label key={format.id} className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                name="format"
                                                value={format.id}
                                                onChange={this.handleChange}
                                                id={format.id}
                                                className="h-5 w-5 text-red-600"
                                                checked={format.isChecked}
                                            />
                                            <span className="ml-2 text-gray-700">
                                        {format.name}
                                    </span>
                                        </label>
                                    );
                                })}
                            </div>

                            <button onClick={this.checkInput}
                                    className="flex-shrink-0 mt-4  w-3/6 md:w-1/6 m-auto px-4 py-4 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                                    type="button">
                                Tìm Kiếm
                            </button>
                        </div>
                    </div>
                    {currentVideoInfo && (
                        <section className="downloading-section">
                            <div className="m-auto">
                                <p className="text-center text-3xl font-bold text-gray-800 dark:text-white">
                                    {currentVideoInfo.title}
                                </p>
                                <img
                                    className="text-center m-auto mt-4"
                                    src={`https://i.ytimg.com/vi/${currentVideoInfo.videoId}/hqdefault.jpg`}
                                    alt={currentVideoInfo.title}
                                />
                            </div>
                        </section>
                    )}
                    <p className="text-center text-3xl font-bold text-gray-800 py-6 dark:text-white">
                        {!!suggestions.length && 'Gợi Ý'}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">

                        {suggestions.map((video) => {
                            const {snippet: s} = video;
                            return (
                                <>
                                    <div
                                        className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                                        <a href={`https://youtube.com/watch?v=${video.id.videoId}`}
                                           className="w-full block h-full">
                                            <img alt="blog photo"
                                                 src={s.thumbnails.medium.url}
                                                 className="max-h-40 w-full object-cover"/>
                                            <div className="bg-white dark:bg-gray-800 w-full p-4">
                                                <p className="text-indigo-500 text-md my-2 font-medium">
                                                    {s.channelTitle}
                                                </p>
                                                <p className="text-gray-800 truncate dark:text-white text-sm font-medium mb-2">
                                                    {s.title}
                                                </p>

                                            </div>

                                        </a>
                                        <div className="p-4">
                                            <button
                                                onClick={() => this.handleDownloadClick(video.id.videoId)}
                                                type="button"
                                                className="py-2 px-4 w-32 bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
                <a
                    href={downloadUrl}
                    download
                    className="hidden"
                    ref={(ref) => (this.hiddenDownloadBtn = ref)}
                >
                    {downloadUrl}
                </a>
            </>
        )
    }

}