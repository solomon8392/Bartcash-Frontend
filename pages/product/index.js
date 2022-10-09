import HeaderComponent from "../../components/Header";
import NavigationComponent from "../../components/HeaderNavigation";
import FooterComponent from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faIdBadge,
  faCheck,
  faArrowLeft,
  faArrowRight,
  faCaretLeft,
  faCaretRight,
  faShield,
  faArrowRightArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faApple,
  faAppStore,
  faFacebook,
  faGooglePlay,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Liked from "../../components/hearts/Liked";
import NotLiked from "../../components/hearts/NotLiked";
import Image from "next/image";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export default function Home() {
  const [currentImage, setCurrentImage] = useState("/images/laptop-pic1.jpeg");

  const [descriptions, setDescriptions] = useState([
    { name: "Name", value: "HP Spectre X360 13AW2038NA" },
    { name: "Color", value: "Grey" },
    { name: "Brand", value: "HP" },
    { name: "Battery life", value: "6hours" },
    { name: "Operating system", value: "Windows 10 pro-bit-english" },
    {
      name: "Features",
      value: `Numerical and alphabetical keypad, USB port, HDMI port, wifi, ethernet, fingerprint`,
    },
    { name: "Hard drive", value: "1TB" },
    { name: "Screen size", value: "15.6 inches" },
    { name: "RAM", value: "12GB" },
  ]);

  const [rating, setRating] = useState(4);

  const [ratingHovered, setRatingHovered] = useState(rating);

  return (
    <div>
      <HeaderComponent />
      <NavigationComponent />

      <div className={`flex w-full flex-col px-6 gap-y-4 py-4`}>
        <div className={`flex w-full items-center justify-between`}>
          <div className="flex items-center gap-x-4">
            <div className={`h-14 w-14`}>
              <Image
                src={`/images/img3.png`}
                layout="responsive"
                className={`rounded-full`}
                width={100}
                height={100}
              />
            </div>
            <div>Jerry Martins</div>
            <div
              className={`flex items-center text-white bg-primary justify-center w-6 h-6 rounded-full`}
            >
              <FontAwesomeIcon icon={faCheck} className={`text-md`} />
            </div>
            {/* <FontAwesomeIcon icon={faIdBadge} className={`w-8 h-8 hover:text-yellow`} /> */}
          </div>
          {false == true ? <Liked /> : <NotLiked />}
        </div>

        <div className={`flex gap-20`}>
          <div className={`w-1/2`}>
            <div
              className={`rounded-[10px] mx-auto h-[200px] w-[320px] xl:h-[280px] xl:w-[450px] overflow-hidden`}
            >
              <Image
                src={currentImage}
                layout="intrinsic"
                className={`rounded`}
                width={1000}
                height={800}
              />
            </div>
            <div className={`flex gap-4 mt-5 justify-center items-center`}>
              {/* <button className={`border flex justify-center items-center w-14 h-20`}>
                            <FontAwesomeIcon icon={faCaretLeft} className={`text-xl`} />
                            </button> */}

              <div className={`flex gap-4 md:w-[320px] xl:w-[450px] overflow-x-scroll`}>
                <button
                  className={`flex items-center`}
                  onClick={() => {
                    setCurrentImage("/images/laptop-pic1.jpeg");
                  }}
                >
                  <Image
                    src={`/images/laptop-pic1.jpeg`}
                    layout="fixed"
                    className={`rounded`}
                    width={100}
                    height={75}
                  />
                </button>

                <button
                  className={`flex items-center`}
                  onClick={() => {
                    setCurrentImage("/images/laptop-pic2.jpeg");
                  }}
                >
                  <Image
                    src={`/images/laptop-pic2.jpeg`}
                    layout="fixed"
                    className={`rounded`}
                    width={100}
                    height={75}
                  />
                </button>

                <button
                  className={`flex items-center`}
                  onClick={() => {
                    setCurrentImage("/images/laptop-img3.jpg");
                  }}
                >
                  <Image
                    src={`/images/laptop-img3.jpg`}
                    layout="fixed"
                    className={`rounded`}
                    width={100}
                    height={75}
                  />
                </button>
              </div>

              {/* <button className={`border flex justify-center items-center w-14 h-20`}>
                            <FontAwesomeIcon icon={faCaretRight} className={`text-xl`} />
                            </button> */}
            </div>
          </div>
          <div className={`flex flex-col md:gap-y-2 xl:gap-y-4 w-1/2`}>
            <div className={`md:text-2xl xl:text-3xl font-semibold mb-2`}>
              HP Spectre X360 13AW2038NA, 13.3 WINS 10, Intel Core I51145G7 8GB
              RAM 256GB SSD(402Z2EA){" "}
              <FontAwesomeIcon
                icon={faShield}
                className={`text-md text-blue-800`}
              />
            </div>
            <div className={`md:text-md xl:text-xl`}>Product age: 2 months old</div>
            <div className={`md:text-md xl:text-xl`}>Price: N95,500</div>
            <div className={`md:text-md xl:text-xl`}>
              Real estimated price:{" "}
              <span className={` text-red-600 line-through`}>N150,000</span>
            </div>
            <div className={`md:text-md xl:text-xl`}>Condition: Working perfectly well</div>
            <div className={`flex mt-6 md:gap-x-6 xl:gap-x-14`}>
              <button
                className={`bg-primary text-white flex items-center justify-center py-2 md:px-10 xl:px-20 rounded-[15px]`}
              >
                Swap{" "}
                <FontAwesomeIcon
                  icon={faArrowRightArrowLeft}
                  className={`w-4 h-6 ml-2`}
                />
              </button>
              <button
                className={`border border-primary border-[2px] border-solid text-primary flex items-center justify-center py-2 md:px-10 xl:px-20 rounded-[15px]`}
              >
                Chat{" "}
                <FontAwesomeIcon icon={faMessage} className={`w-4 h-6 ml-2`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`mx-6 my-8`}>
        <div className={`font-medium`}>Share with friends</div>
        <div className={`flex items-center gap-x-4 my-2`}>
          <button className={`flex items-center`}>
            <Image
              src={`/images/facebook-logo.png`}
              layout="fixed"
              className={`rounded`}
              width={40}
              height={40}
            />
          </button>

          <button className={`flex items-center`}>
            <Image
              src={`/images/whatsapp-logo.png`}
              layout="fixed"
              className={`rounded`}
              width={46}
              height={46}
            />
          </button>

          <button className={`flex items-center`}>
            <Image
              src={`/images/instagram-logo.png`}
              layout="fixed"
              className={`rounded`}
              width={50}
              height={50}
            />
          </button>
        </div>
      </div>

      <div className={`mx-6 my-10`}>
        <div className={`font-semibold text-2xl`}>Description</div>
        <div className={`my-4`}>
          HP Spectre X360 13AW2038NA, 13.3 WINS 10 is a very spectacular brand,
          quick, fast and reliable
        </div>

        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="border min-w-fit text-left">
                  <tbody>
                    {descriptions.map((description) => {
                      return (
                        <tr className="border-b">
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                            {description.name}
                          </td>
                          <td className="text-sm md:w-[400px] xl:w-[650px] text-gray-900 font-light px-6 py-4 border-r">
                            {description.value}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`mx-6 my-8`}>
        <div className={`font-semibold text-2xl`}>
          Jerry Martin&apos;s Reviews
        </div>
        <div className={`mt-2`}>Rated</div>

        <div className={`flex gap-x-4 items-center`}>

        <ul
          className="flex justify-start my-2"
          onMouseLeave={() => {
            setRatingHovered(rating);
          }}
        >
          {[{}, {}, {}, {}, {}].map((star, index) => {
            return (
              <div>
                {ratingHovered > index ? (
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="w-6 text-yellow mr-1"
                      role="img"
                      onMouseEnter={() => {
                        setRatingHovered(index + 1);
                      }}
                      onClick={() => {setRating(index + 1)}}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>
                ) : (
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="star"
                      className="w-6 text-yellow mr-1"
                      role="img"
                      onMouseEnter={() => {setRatingHovered(index + 1)}}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                      ></path>
                    </svg>
                  </li>
                )}
              </div>
            );
          })}
        </ul>

            <div className={`font-bold text-xl`}>4.5</div>
        </div>

        
      </div>

      <FooterComponent />
    </div>
  );
}
