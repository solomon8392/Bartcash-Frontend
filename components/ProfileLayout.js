import {BsChat, BsShop} from "react-icons/bs"
import {MdOutlineSwapHorizontalCircle} from "react-icons/md"
import {IoNotificationsOutline, IoSettingsOutline} from "react-icons/io5"
import {CgProfile} from "react-icons/cg";
import {MdLogout} from "react-icons/md";
import NavStyle from "../styles/ProfileNav.module.css";

export default function Home({children}) {
    return (
        <div className="grid grid-cols-[100px_1fr]">
            <div className={`bg-primary text-white text-2xl ${NavStyle.parentSidebar} justify-between py-4 z-20 flex items-center flex-col px-6 py-10 h-[83vh] hover:overflow-y-auto overflow-x-hidden`}>
                <div className={`flex items-center flex-col`}>
                    <div className="hover:text-yellow hover:cursor-pointer"><BsChat /><span>Chat</span></div>
                    <div className="hover:text-yellow hover:cursor-pointer"><MdOutlineSwapHorizontalCircle /> <span>Offers</span></div>
                    <div className="hover:text-yellow hover:cursor-pointer"><IoNotificationsOutline /><span>Notifications</span></div>
                    <div className="hover:text-yellow hover:cursor-pointer"><BsShop /><span>Aunctions</span></div>
                    <div className="hover:text-yellow hover:cursor-pointer"><IoSettingsOutline /><span>Settings</span></div>
                </div>

                <div className={`flex w-full items-center flex-col`}>
                    
                        <div className="hover:text-yellow hover:cursor-pointer"><CgProfile /><span>Profile</span></div>
                        <div className="hover:text-yellow hover:cursor-pointer"><MdLogout /><span>Log Out</span></div>
            
                </div>
                
            </div>
            <div className="p-4 md:p-6 wi overflow-y-auto h-[82vh]">
            {children}
            </div>
            
        </div>
    );
}

