import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { BiLogOut, BiSearch, BiUser} from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"
import { BsThreeDotsVertical} from "react-icons/bs"

export default function TopNav(){
    const router = useRouter()
    const pathname = usePathname()

    const goTo = () => {
        console.log("here");
    }

    const handleSearchName = (event: {target: {value: string}}) => {
        console.log(event.target.value)
    }

    return (
        <>
            <div id="TopNav" className="fixed w-full bg-[#0d1321] z-30 flex items-center  border-b h-[60px]">
                <div className={`flex items-center justify-between gap-6 w-full px-4 mx-auto`}>
                    <Link href="/">
                        <img className="min-w-[80px] w-[80px]" src="/images/tiktok-logo-1.png"/>
                    </Link>

                    <div className="relative hidden md:flex items-center justify-end bg-gray-100 p-1 rounded-full max-w-[430px]">
                        <input
                            type="text"
                            onChange={handleSearchName}
                            className="w-full pl-3 my-2 bg-transparent placeholder-slate-400 text-[15px] focus:outline-none text-[#0D1321]"
                            placeholder="Search accounts"

                        />
                        <div className="absolute bg-white max-w-[910px] h-auto w-full z-20 left-0 top-12 border p-1">
                            <div className="p-1">
                                <Link 
                                    href={`/profile/1`}
                                    className="flex items-center justify-between w-full text-red-500 cursor-pointer hover:bg-red-500 p-1 px-2 hover:text-white" 
                                >
                                    <div className="flex items-center">
                                        <img className="rounded-md" width='40' src="https://placehold.co/40"/>
                                        <div className="truncate ml-2">placeholder account</div>
                                    </div>
                                </Link>
                            </div>
                            <div className="p-1">
                                <Link 
                                    href={`/profile/1`}
                                    className="flex items-center justify-between w-full cursor-pointer text-red-500 hover:bg-red-500 p-1 px-2 hover:text-white" 
                                >
                                    <div className="flex items-center">
                                        <img className="rounded-md" width='40' src="https://placehold.co/40"/>
                                        <div className="truncate ml-2">placeholder account</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="px-3 py-1 flex items-center border-l border-l-gray-300">
                            <BiSearch color="#A1A2A6" size="22"/>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button 
                            onClick={() => goTo}
                            className="flex items-center text-black border-black rounded-md px-3 py-[6px] hover:bg-gray-100 bg-[#F0EBD8]"
                        >
                            <AiOutlinePlus color="#00000" size="22" />
                            <span className="px-2 font-medium text-[15px]">Upload</span>
                        </button>

                        {true ? (
                            <div className="flex item-center">
                                <button className="flex items-center bg-[#ef233c] text-white hover:bg-gray-100 hover:text-black border-black rounded-md px-3 py-[6px]">
                                    <span className="whitespace-nowrap mx-4 font-medium text-[15px]">Log in</span>
                                </button>
                                <BsThreeDotsVertical color="#F0EBD8" size="25"/>
                            </div>
                        ) : 
                        (
                            <div className="flex items-center">
                                <div className="relative">
                                    <button className="mt-1 border border-gray-200 rounded-full" >
                                        <img className="rounded-full w-[35px] h-[35px]" src="https://placehold.co/35"/>
                                    </button>

                                    <div className=" absolute bg-white rounded-lg py-1.5 w-[200px] shadow-xl border top-[40px] right-0">
                                        <button className="flex items-center w-full justify-start py-3 px-2 hover:bg-indigo-50">
                                            <BiUser size="20"/>
                                            <span className="pl-2 font-semibold text-sm">Profile</span>
                                        </button>
                                        <button className="flex items-center w-full justify-start py-3 px-2 hover:bg-indigo-50">
                                            <BiLogOut size="20"/>
                                            <span className="pl-2 font-semibold text-sm">Log out</span>
                                        </button>
                                    </div>
                                    
                                </div>

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}