
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import {AiOutlineShoppingCart} from "react-icons/ai";

export default function Home({loggedinState}) {

  const router = useRouter();
  const [hide, setHide] = useState(true);
  const [helpHide, setHelpHide] = useState(true);
  const [search, setSearch] = useState("");
  const [userProfile, setUserProfile] = useState({
    data: {
      fullName: "",
      profilePicUrl: "public/images/profilepic_avatar.png"
    }
  });

  const [sliceNum, setSliceNum] = useState(0);

  useEffect(() => {
    getProfile();

  }, []);

  const getProfile = async () => {

    try {
      const u = await axios.get("user/profile", {
        headers: {
          accesstoken: localStorage.getItem("authtoken")
        }
      });
      console.log(u);
      setUserProfile(u);

      if(process.env.NEXT_PUBLIC_BASEURL == "https://bartcash.onrender.com/v1/") {
        setSliceNum(29);
      } else {
        setSliceNum(21);
      }

      console.log(process.env.NEXT_PUBLIC_BASEURL.slice(0, 29) + userProfile.data.profilePicUrl.slice(6));
    } catch (error) {
      console.log(error);
    }
  }

  const logOut = async () => {
    localStorage.removeItem("authtoken");
    router.reload();
  }

    return (
        <div className={`w-full flex px-6 gap-4 xl:gap-10 relative items-center justify-between py-1`}>
          <Link href="/">
            <div>
            <div className={`block md:hidden`}>
          <Image src={`/images/logo.png`} layout='fixed' className='hover:cursor-pointer'  width={80} height={40} />
          </div>
          <div className={`hidden md:block`}>
            <Image src={`/images/logo.png`} layout={`fixed`} className='hover:cursor-pointer' width={110} height={50} />
          </div>
            </div>
          </Link>
          <div className="flex justify-center absolute left-[50%] z-50 translate-x-[-50%] w-fit">
            <div className="xl:w-[600px] hidden md:block">
              <div className="relative flex w-full rounded">
                <input type="search" onChange={(e) => {setSearch(e.target.value)}} className="form-control relative flex-auto block px-3 py-1.5 text-base font-normal bg-gray-200 text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-100 focus:outline-none" placeholder="Search for product, category" />
                <button className="inline-block px-4 ml-[-10px] z-10 py-2.5 bg-yellow text-primary font-medium text-xs leading-tight uppercase rounded-r-md hover:text-white hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
                </button>
                <ul
        className={`
          dropdown-menu
          absolute
          min-w-max
          top-[40px]
          block
          bg-white
          border
          xl:w-[600px]
          text-base
          ${search.length < 3 ? "hidden": "block"}
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          m-0
          bg-clip-padding
        `}
        aria-labelledby="dropdownMenuButton1"
      >
        <li>
          <a
            className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            href="#"
            >Action</a
          >
        </li>
        <li>
          <a
            className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            href="#"
            >Another action</a
          >
        </li>
        <li>
          <a
            className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            href="#"
            >Something else here</a
          >
        </li>
      </ul>
              </div>
            </div>
        </div>
        {console.log(loggedinState)}
        <div className={` ${loggedinState == false ? "flex" : "hidden"}  justify-end w-full gap-2 xl:gap-6`}>
        <button className={`p-2 block md:hidden rounded-full text-primary`}>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
        </button>
        <div className="flex justify-center">
  <div>
    <HelpButton hide={helpHide} setHide={setHelpHide} />
  </div>
</div>
        <button className={``} onClick={() => {router.push("/login")}}>Login</button>
        <button className={`flex flex-nowrap items-center justify-center w-[80px] p-1 rounded-[20px] bg-primary text-white`} onClick={() => {router.push("/signup")}}>Sign Up</button>
        </div>

        <div className={`${loggedinState == true ? "flex" : "hidden"}  justify-end w-full gap-2 xl:gap-6`}>
            <div className={`flex items-center gap-x-2 text-bold text-xl`}>
              <button><AiOutlineShoppingCart className={`text-[35px]`} /></button>
            {/* <HelpButton hide={helpHide} setHide={setHelpHide} /> */}
              {/* <button className={`bg-primary text-white text-sm p-1 rounded`} onClick={logOut}>Log Out</button> */}
          
              <div className="dropdown relative">
      <button
        className="
          dropdown-toggle
          px-2
          py-2.5
          transition
          duration-150
          ease-in-out
          flex
          relative
          items-center
          whitespace-nowrap
        "
        type="button"
        id="dropdownMenuButton1"
        onClick={() => {setHide(!hide)}}
      >
        <Image src={process.env.NEXT_PUBLIC_BASEURL.slice(0, sliceNum) + userProfile.data.profilePicUrl.slice(6)|| ""} className={`rounded-full`} layout='fixed'  width={40} height={40} />
        
        {/* <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-down"
          className="w-2 ml-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512" >
          <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          ></path>
        </svg> */}

      </button>
      <ul
        className={`
          dropdown-menu
          absolute
          min-w-max
          block
          bg-white
          text-base
          ${hide == true ? "hidden": "block"}
          z-50
          float-left
          py-2
          right-0
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          m-0
          bg-clip-padding
          border-none
        `}
        aria-labelledby="dropdownMenuButton1"
      >
       
        <hr className={`w-[90%] mx-auto my-2 border-yellow`} />
        <li>
          <a
            className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            href="#"
            >Chats</a>
        </li>
        <li>
          <a
            className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            href="#"
            >Offers</a>
        </li>
        <li>
          <a
            className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            href="#"
            >Notifications</a>
        </li>
        <li>
          <a
            className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            href="#"
            >Auction</a>
        </li>
        <li>
          <a
            className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            href="#"
            >Settings</a>
        </li>
        <hr className={`w-[90%] mx-auto my-2 border-yellow`} />
        <li>
          <div
            className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            onClick={logOut}
            >Log Out</div>
        </li>
      </ul>
    </div>

          </div>
        </div>
        
      </div>
    );
}

function HelpButton({hide, setHide}) {
  return (
    <div className="dropdown relative">
      <button
        className="
          dropdown-toggle
          px-2
          py-2.5
          transition
          duration-150
          ease-in-out
          flex
          relative
          items-center
          whitespace-nowrap
        "
        type="button"
        id="dropdownMenuButton1"
        onClick={() => {setHide(!hide)}}
      >
        Help
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-down"
          className="w-2 ml-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          ></path>
        </svg>
      </button>
      <ul
        className={`
          dropdown-menu
          absolute
          min-w-max
          absolute
          block
          bg-white
          text-base
          ${hide == true ? "hidden": "block"}
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          m-0
          bg-clip-padding
          border-none
        `}
        aria-labelledby="dropdownMenuButton1"
      >
        <li>
          <a
            className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            href="#"
            >Contact Us</a>
        </li>
        <li>
          <a
            className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            href="#"
            >FAQ&apos;s</a>
        </li>
      </ul>
    </div>
  );
}