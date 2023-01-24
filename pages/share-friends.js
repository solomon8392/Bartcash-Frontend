import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faApple,
  faAppStore,
  faFacebook,
  faGooglePlay,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="main-container justify-center flex-col place-content-center ">
      <div className="image flex justify-center">
        <Image src={`/images/share-friends.png`} width={200} height={200} />
      </div>
      <div>
        <strong className="flex justify-center text-[19px] md:text-[20px] font-[700] lg:[30px] text-gray-700 font-normal">Share With Friends</strong>
        <h5 className="flex justify-center  text-gray-700 text-[11px] md:text-[15px] lg:text-[21px] ">
          Cos' your friedns deserve to use Bartcash too
        </h5>
      </div>

      

      <div className={`flex mt-4 mb-5 justify-center h-10`}>
        <input
          type="search"
          className="form-control relative w-1/1 w-[38%] block px-3 py-1.5 text-base font-normal bg-gray-200 text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-100 focus:outline-none"
          placeholder="xyzposakhfciyacfnvkjfjxcn,ckjfxck"
        />
        <button
          className="btn inline-block w-1/1 justify-center px-2 ml-[-10px] text-[#FFFFFF] z-10 py-2.5 bg-[#001D3D] text-primary font-medium text-sm leading-tight rounded-r-[10px] hover:shadow-lg   focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out flex items-center"
          type="button"
          id="button-addon2"
        >
          Copy Link
        </button>
      </div>

      <div className=" flex justify-center">
        <div>
          <strong>Share this on:</strong>
        </div>
      </div>

      <div className="image-display flex justify-center m-[29]">
        <a className="m-[5px] cursor-pointer">
          <Image src={`/images/facebook.png`} width={24} height={24} />
        </a>
        <a className="m-[5px] cursor-pointer">
          <Image src={`/images/twitter.png`} width={24} height={24} />
        </a>
        <a className="m-[5px] cursor-pointer">
          <Image src={`/images/instagram.png`} width={24} height={24} />
        </a>
        <a className="m-[5px] cursor-pointer">
          <Image src={`/images/whatsapp.png`} width={24} height={24} />
        </a>
      </div>

      <div className={`flex justify-center gap-x-2 text-white my-8`}>
        <button
          className={`flex border-[#001D3D] border-2 gap-x-2 p-2 rounded-[10px] items-center`}
        >
          <FontAwesomeIcon
            icon={faApple}
            className="w-5 h-5 md:w-6 md:h-6 lg:w-10 lg:h-10 text-[#001D3D]"
          />
          <div className={`text-left`}>
            <div className="text-[#001D3D] text-[11px] md:text-[15px] lg:text-[20px]">Download on</div>
            <div className="text-[#001D3D] text-[11px] md:text-[15px] lg:text-[20px]">Apple Store</div>
          </div>
        </button>

        <button
          className={`flex border-[#001D3D] border-2 gap-x-2 p-2 rounded-[10px] items-center`}
        >
          <FontAwesomeIcon
            icon={faGooglePlay}
            className="w-5 h-5 md:w-6 md:h-6 lg:w-10 lg:h-10 text-[#001D3D]"
          />
          <div className={`text-left`}>
            <div className="text-[#001D3D] text-[11px] md:text-[15px] lg:text-[20px]">Download on</div>
            <div className="text-[#001D3D] text-[11px] md:text-[15px] lg:text-[20px]">Apple Store</div>
          </div>
        </button>
      </div>
    </div>
  );
}
