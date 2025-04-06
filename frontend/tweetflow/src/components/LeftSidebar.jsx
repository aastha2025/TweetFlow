import React from "react";
import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { IoBookmarkSharp } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";


const LeftSidebar = () => {
    return (
        <div className="w-[20%]">
            <div>
                <div >
                    <img  className="ml-5"  width={"24px"} src="https://brandlogos.net/wp-content/uploads/2023/07/x__twitter-logo_brandlogos.net_fxbde.png" alt="twitter-logo" />
                </div>
                <div className="my-4">
                    <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
                        <div>
                        < CiHome  size={"24px"}/>
                        </div>
                        <h1 className="font-bold text-lg ml-2 ">Home</h1>
                    </div>
                    <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
                        <div>
                        < CiSearch  size={"24px"}/>
                        </div>
                        <h1 className="font-bold text-lg ml-2 ">Explore</h1>
                    </div>
                    <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
                        <div>
                        < IoIosNotifications  size={"24px"}/>
                        </div>
                        <h1 className="font-bold text-lg ml-2 ">Notifications</h1>
                    </div>
                    <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
                        <div>
                        < IoPersonOutline  size={"24px"}/>
                        </div>
                        <h1 className="font-bold text-lg ml-2 ">Profile</h1>
                    </div>
                    <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
                        <div>
                        <IoBookmarkSharp  size={"24px"}/>
                        </div>
                        <h1 className="font-bold text-lg ml-2 ">Bookmarks</h1>
                    </div>
                    <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
                        <div>
                        < CiLogout  size={"24px"}/>
                        </div>
                        <h1 className="font-bold text-lg ml-2 ">Logout</h1>
                    </div>
                    <button className="px-4 py-2 border-none text-md bg-[#1D9BF0] w-full rounded-full text-white font-bold">Post</button>
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar;