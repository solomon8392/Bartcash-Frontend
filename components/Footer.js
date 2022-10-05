import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faApple, faAppStore, faFacebook, faGooglePlay, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Home({carouselProperties}) {
    return (
        <div className={`w-full bg-primary grid grid-cols-12 text-center md:text-left px-6 pt-4`}>
        <div className={`col-span-12 md:col-span-6 xl:col-span-3`}>
          <div className={` pt-6 pb-4 text-yellow font-medium text-lg`}>About BartCash</div>
          <ul className={`text-white flex flex-col gap-y-2`}>
            <li><button className={`hover:text-yellow`}>Contact Us</button></li>
            <li><button className={`hover:text-yellow`}>FAQ&apos;s</button></li>
            <li><button className={`hover:text-yellow`}>Terms and conditions</button></li>
            <li><button className={`hover:text-yellow`}>Privacy policy</button></li>
            <li><button className={`hover:text-yellow`}>Track my swap</button></li>
          </ul>
        </div>

        <div className={`col-span-12 md:col-span-6 xl:col-span-3`}>
        <div className={`pt-6 pb-4 text-yellow font-medium text-lg`}>Payment</div>
          <ul className={`text-white flex flex-col gap-y-2`}>
            <li><button className={`hover:text-yellow`}>Verve</button></li>
            <li><button className={`hover:text-yellow`}>Visa</button></li>
            <li><button className={`hover:text-yellow`}>Mastercard</button></li>
            <li><button className={`hover:text-yellow`}>Privacy policy</button></li>
            <li><button className={`hover:text-yellow`}>Wallet</button></li>
          </ul>
        </div>

        <div className={`col-span-12 md:col-span-6 xl:col-span-3`}>
        <div className={`pt-6 pb-4 text-yellow font-medium text-lg`}>Connect with Us</div>
        <ul className={`text-white flex justify-center md:justify-start gap-x-4`}>
          <li><button><FontAwesomeIcon icon={faTwitter} className={`w-8 h-8 hover:text-yellow`} /></button></li>
          <li><button><FontAwesomeIcon icon={faLinkedin} className={`w-8 h-8 hover:text-yellow`} /></button></li>
          <li><button><FontAwesomeIcon icon={faFacebook} className={`w-8 h-8 hover:text-yellow`} /></button></li>
          <li><button><FontAwesomeIcon icon={faInstagram} className={`w-8 h-8 hover:text-yellow`} /></button></li>
        </ul>
        </div>
        <div className={`col-span-12 md:col-span-6 xl:col-span-3`}>
        <div className={`pt-6 pb-4 text-yellow font-medium text-lg`}>Get latest products</div>
        <div className={`flex h-10`}>
        <input type="search" className="form-control relative w-4/6 flex-auto block px-3 py-1.5 text-base font-normal bg-gray-200 text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-100 focus:outline-none" placeholder="Email" />
                <button className="btn inline-block w-2/6 justify-center px-2 ml-[-10px] z-10 py-2.5 bg-yellow text-primary font-medium text-sm leading-tight rounded-r-[10px] hover:text-white hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                  Subscribe
                </button>
        </div>

        <div className={`flex justify-between gap-x-2 text-white my-8`}>

            <button className={`flex w-full gap-x-1 p-2 bg-black rounded-[10px] items-center`}>
            <FontAwesomeIcon icon={faApple} className={`w-10 h-10`} />
            <div className={`text-left`}>
                <div>Download on</div>
                <div>Apple Store</div>
            </div>
            </button>

            <button className={`flex w-full gap-x-1 p-2 bg-black rounded-[10px] items-center`}>
            <FontAwesomeIcon icon={faGooglePlay} className={`w-10 h-10`} />
            <div className={`text-left`}>
                <div>Download on</div>
                <div>Apple Store</div>
            </div>
            </button>

        </div>
        </div>
        <div className={`col-span-12 text-center text-white my-8`}>Copyright &copy; {(new Date).getFullYear()}</div>
      </div>
    );
}