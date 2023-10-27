"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { UploadError } from "../types";
import UploadLayout from "../layouts/UploadLayout";
import { BiLoaderCircle } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function upload(){
    const router = useRouter();
    
    let [fileDisplay, setFileDisplay] = useState<string>('');
    let [caption, setCaption] = useState<string>('');
    let [file, setFile] = useState<File | null>(null);
    let [error, setError] = useState<UploadError | null>(null);
    let [isUploading, setIsUploading] = useState<boolean>(false);


    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (files && files.length > 0) {
            const file = files[0];
            const fileUrl = URL.createObjectURL(file);
            setFileDisplay(fileUrl);
            setFile(file);
        }
    }

    const discard = () => {
        setFileDisplay('')
        setFile(null)
        setCaption('')
    }

    const clearVideo = () => {
        setFileDisplay('')
        setFile(null)
    }

    const validate = () => {
        setError(null)
        let isError = false

        if (!file) {
            setError({ type: 'File', message: 'A video is required'})
            isError = true
        } else if (!caption) {
            setError({ type: 'caption', message: 'A caption is required'})
            isError = true
        }
        return isError
    }


    return (
        <>
            <UploadLayout>
                <div className="w-full mt-[80px] mb-[40px] bg-white shadow-lg rounded-md py-6 md:px-10 px-4">
                    <div >
                        <h1 className="text-[23px] font-semibold">Upload video</h1>
                        <h2 className="text-gray-400 mt-1">Post a video to your account</h2>
                    </div>
                    {!fileDisplay ? 
                            <label 
                                htmlFor="fileInput"
                                className="
                                    md:mx-0
                                    mx-auto
                                    mt-4
                                    mb-6
                                    flex 
                                    flex-col 
                                    items-center 
                                    justify-center 
                                    w-full 
                                    max-w-[260px] 
                                    h-[470px] 
                                    text-center 
                                    p-3 
                                    border-2 
                                    border-dashed 
                                    border-gray-300 
                                    rounded-lg 
                                    hover:bg-gray-200 
                                    cursor-pointer
                                "
                            >
                                <p className="mt-4 text-[17px]">Select video to upload</p>
                                <p className="mt-1.5 text-gray-500 text-[13px]">Or drag and drop a file</p>
                                <p className="mt-12 text-gray-400 text-sm">MP4</p>
                                <p className="mt-2 text-gray-400 text-[13px]">Up to 60 seconds</p>
                                <p className="mt-2 text-gray-400 text-[13px]">Less than 64 MB</p>
                                <label 
                                    htmlFor="fileInput" 
                                    className="px-2 py-1.5 mt-8 text-white text-[15px] w-[80%] bg-[#F02C56] rounded-sm cursor-pointer"
                                >
                                    Select file
                                </label>
                                <input 
                                    type="file" 
                                    id="fileInput"
                                    onChange={onChange}
                                    hidden 
                                    accept=".mp4" 
                                />                         
                            </label>
                            
                        :
                            <div
                                className="
                                    md:mx-0
                                    mx-auto
                                    mt-4
                                    md:mb-12
                                    mb-16
                                    flex 
                                    items-center 
                                    justify-center 
                                    w-full 
                                    max-w-[260px] 
                                    h-[540px] 
                                    p-3 
                                    rounded-2xl
                                    cursor-pointer
                                    relative
                                "
                            >
                                {isUploading ? (
                                    <div className="absolute flex items-center justify-center z-20 bg-black h-full w-full rounded-[50px] bg-opacity-50">
                                        <div className="mx-auto flex items-center justify-center gap-1">
                                            <BiLoaderCircle className="animate-spin" color="#F12B56" size={30} />
                                            <div className="text-white font-bold">Uploading...</div>
                                        </div>
                                    </div>
                                ) : null}
                                
                                <video 
                                    autoPlay
                                    loop
                                    muted
                                    className="absolute rounded-xl object-cover z-10 p-[13px] w-full h-full" 
                                    src={fileDisplay} 
                                />

                                <div className="absolute -bottom-12 flex items-center justify-between z-50 rounded-xl border w-full p-2 border-gray-300">
                                    <div className="flex items-center truncate">
                                        <AiOutlineCheckCircle size="16" className="min-w-[16px]"/>
                                        <p className="text-[11px] pl-1 truncate text-ellipsis">{File.name}</p>
                                    </div>
                                    <button onClick={() => clearVideo()} className="text-[11px] ml-2 font-semibold">
                                        Change
                                    </button>
                                </div>
                            </div>
                        }
                        <div className="mt-4 mb-6">
                            <div className="mt-5">
                                <div className="flex items-center justify-between">
                                    <div className="mb-1 text-[15px]">Caption</div>
                                    <div className="text-gray-400 text-[12px]">{caption.length}/150</div>
                                </div>
                                <input 
                                    maxLength={150}
                                    type="text"
                                    className="
                                        w-full
                                        border
                                        p-2.5
                                        rounded-md
                                        focus:outline-none
                                    "
                                    value={caption}
                                    onChange={event => setCaption(event.target.value)}
                                />
                            </div>

                            <div className="flex gap-3">
                                <button 
                                    disabled={isUploading}
                                    onClick={() => discard()}
                                    className="px-10 py-2.5 mt-8 border text-[16px] hover:bg-gray-100 rounded-sm"
                                >
                                    Discard
                                </button>
                                <button 
                                    disabled={isUploading}
                                    className="px-10 py-2.5 mt-8 border text-[16px] text-white bg-[#F02C56] rounded-sm hover:bg-white hover:text-[#0d1321] hover:border-black"
                                >
                                    {isUploading ? <BiLoaderCircle className="animate-spin " color="#ffffff" size={25} /> : 'Post'}
                                </button>
                            </div>

                            {error ? (
                                <div className="text-red-600 mt-4">
                                    {error.message}
                                </div>
                            ) : null}

                        </div>
                </div>
            </UploadLayout>
        </>
    )
}