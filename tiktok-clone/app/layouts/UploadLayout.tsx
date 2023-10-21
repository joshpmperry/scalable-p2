import React from "react";
import { usePathname } from "next/navigation";
import TopNav from "./includes/TopNav";

export default function UploadLayout({children}: {children: React.ReactNode}){
    const pathname = usePathname()

    return (
        <>
            <div className="bg-white h-[100vh]">
                <TopNav/>
                <div className={"flex justify-between mx-auto px-2 max-w-[1140px] w-full"}>
                    {children}
                </div>
            </div>
        </>
    )
}