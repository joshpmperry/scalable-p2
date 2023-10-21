import Link from "next/link"
import { usePathname} from "next/navigation"
import MenuItem from "./MenuItem"
import ClientOnly from "@/app/Components/ClientOnly"
import MenuItemFollow from "./MenuItemFollow"


export default function SideNavMain(){
    const pathname = usePathname()

    return (
        <>
            <div
                id="SideNavMain"
                className={`
                    fixed z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r w-[75px] overflow-auto
                    ${pathname=='/' ? 'lg:w-[310px]' : 'lg:w-[220px]'}
                `}
            >
                <div className="lg:w-full w-[55px] mx-auto ">
                    <Link href="/">
                        <MenuItem
                            iconString="For You"
                            colorString={pathname=='/' ? '#F02C56' : ''}
                            sizeString="25"
                        />
                    </Link>
                    <Link href="/">
                        <MenuItem
                            iconString="Following"
                            colorString={pathname=='/' ? '#F02C56' : ''}
                            sizeString="25"
                        />
                    </Link>
                    <Link href="/">
                        <MenuItem
                            iconString="LIVE (Not Implemented)"
                            colorString={pathname=='/' ? '#F02C56' : ''}
                            sizeString="25"
                        />
                    </Link>
                    <div className="border-b lg:ml-2 mt-2"/>
                    <h3 className="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">Suggested Accounts</h3>

                    <div className="lg:hidden block pt-3"></div>
                    <ClientOnly>
                        <div className="cursor-pointer">
                            <MenuItemFollow user={{ id: "1", name:"fake", image:"https://placehold.co/40"}}/>
                        </div>
                    </ClientOnly>

                    <button className="lg:block hidden text-red-500 pt-1.5 pl-2 text-[13px]">
                        See all
                    </button>
                    <div className="border-b lg:ml-2 mt-2"/>
                    
                    {true ? (
                        <><h3 className="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">Following</h3><div className="lg:hidden block pt-3"></div><ClientOnly>
                            <div className="cursor-pointer">
                                <MenuItemFollow user={{ id: "1", name: "fake", image: "https://placehold.co/40" }} />
                            </div>
                        </ClientOnly><button className="lg:block hidden text-red-500 pt-1.5 pl-2 text-[13px]">
                                See more
                            </button></>
                    ) : (
                        <>
                        </>
                    )

                    }
                    
                </div>
            </div>
        </>
    )
}