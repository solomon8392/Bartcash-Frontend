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
import { useEffect, useState } from "react";
import MoreLikeThis from "../../components/MoreLikeThis"
import checkLoggedIn from "../../utilities/checkifloggedin";
import { useRouter } from "next/router";
import axios from "axios";

export default function Home() {
  
  const [loginState, setLoginState] = useState(false);
  const [currentImage, setCurrentImage] = useState("/images/laptop-pic1.jpeg");
  const [details, setDetails] = useState({
    userid: {
      fullName: "loading",
      profilePicUrl: "public/images/profile-image3.jpeg"
    }
  });

  const router = useRouter();

  useEffect(function() {
    checkLogIn();
    fetchDetails();
  }, []);

  const checkLogIn = async () => {
    const l = await checkLoggedIn();
    setLoginState(l);
  }


  const fetchDetails = async () => {
    console.log(router.query.productid);

    try {
      const response = await axios.get("products/product/" + router.query.productid, {
        headers: {
          accesstoken: localStorage.getItem("authtoken"),
        }
      });
      console.log(response);
      if(response.status == 200) {
        setDetails(response.data);
        setCurrentImage(process.env.NEXT_PUBLIC_BASEURL.slice(0, -3) + response.data.mainImage);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const [moreProducts, setMoreProducts] = useState({
    productTitle: "More Like This",
    products: [
      {
        userPicture: "/images/profile-image3.jpeg",
        userName: "Victor P",
        userId: "001",
        addedToFavourite: false,
        productName: "HP Elitebook",
        productPicture: "/images/hp-laptop.png",
        productPrice: 50000,
        productId: "01"
      },
      {
        userPicture: "/images/profile-image4.png",
        userName: "Victor P",
        userId: "001",
        addedToFavourite: true,
        productName: "HP Elitebook",
        productPicture: "/images/hp-laptop.png",
        productPrice: 50000,
        productId: "01"
      },
      {
        userPicture: "/images/profile-image3.jpeg",
        userName: "Victor P",
        userId: "001",
        addedToFavourite: false,
        productName: "HP Elitebook",
        productPicture: "/images/hp-laptop.png",
        productPrice: 50000,
        productId: "01"
      },
      {
        userPicture: "/images/img2.png",
        userName: "Victor P",
        userId: "001",
        addedToFavourite: false,
        productName: "HP Elitebook",
        productPicture: "/images/hp-laptop.png",
        productPrice: 50000,
        productId: "01"
      },
      {
        userPicture: "/images/profile-image2.jpeg",
        userName: "Victor P",
        userId: "001",
        addedToFavourite: false,
        productName: "HP Elitebook",
        productPicture: "/images/hp-laptop.png",
        productPrice: 50000,
        productId: "01"
      },
      {
        userPicture: "/images/profile-image4.png",
        userName: "Victor P",
        userId: "001",
        addedToFavourite: true,
        productName: "HP Elitebook",
        productPicture: "/images/hp-laptop.png",
        productPrice: 50000,
        productId: "01"
      }
    ]
  });


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

  const [imageModal, showImageModal] = useState(false);

  const [relevance, setRelevanceDropdown] = useState(false);

  const toggleModalState = () => {
    showImageModal(!imageModal);
    console.log("Called");
  };

  return (
    <div>
      <HeaderComponent />
      <NavigationComponent />

      <div className={`flex w-full flex-col px-6 gap-y-4 py-4`}>
        <div className={`flex w-full items-center my-6 justify-between`}>
          <div className="flex items-center gap-x-2">
            <div className={`h-10 w-10`}>
              <Image
                src={process.env.NEXT_PUBLIC_BASEURL.slice(0, -3) + details.userid.profilePicUrl.slice(7)}
                layout="responsive"
                className={`rounded-full`}
                width={50}
                height={50}
              />
            </div>
            <div>{details.userid.fullName}</div>
            <div
              className={`flex items-center text-white bg-[#006FD6] justify-center w-4 h-4 rounded-full`}
            >
              <FontAwesomeIcon icon={faCheck} className={`text-sm`} />
            </div>
            {/* <FontAwesomeIcon icon={faIdBadge} className={`w-8 h-8 hover:text-yellow`} /> */}
          </div>
          {false == true ? <Liked /> : <NotLiked />}
        </div>

        <div className={`flex gap-20`}>
          <div className={`w-1/2`}>
            <div
              className={`rounded-[10px] mx-auto h-[200px] w-[320px] xl:h-[280px] xl:w-[450px] overflow-hidden`}
              onClick={toggleModalState}
            >
              <Image
                src={currentImage}
                layout="intrinsic"
                className={`cursor-pointer`}
                width={1000}
                height={800}
              />

              <div
                onClick={toggleModalState}
                className={`bg-black/[50%] fixed top-0 left-0 ${
                  imageModal == true ? "block" : "hidden"
                } z-50 w-full h-full outline-none overflow-x-hidden overflow-y-auto`}
                id="exampleModalCenter"
              >
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-6/12">
                  <div className="border-none shadow-lg relative flex flex-col w-full bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div className="flex flex-shrink-0 items-center justify-end p-4 border-b border-gray-200 rounded-t-md">
                      <button
                        onClick={toggleModalState}
                        className="bg-primary rounded text-white py-2 px-4"
                      >
                        Close
                      </button>
                    </div>
                    <div className="modal-body h-[400px] relative p-4">
                      <Image src={currentImage} layout="fill" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`flex gap-4 mt-5 justify-center items-center`}>
              {/* <button className={`border flex justify-center items-center w-14 h-20`}>
                            <FontAwesomeIcon icon={faCaretLeft} className={`text-xl`} />
                            </button> */}

              {/* <div
                className={`flex gap-4 md:w-[320px] xl:w-[450px] overflow-x-auto`}
              >
                <button
                  className={`flex flex-col gap-y-2 mb-2 items-center`}
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
                  {currentImage == "/images/laptop-pic1.jpeg" ? (
                    <div className={`w-10 h-2 bg-yellow`}></div>
                  ) : ""}
                </button>

                <button
                  className={`flex flex-col gap-y-2 mb-2 items-center`}
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
                  {currentImage == "/images/laptop-pic2.jpeg" ? (
                    <div className={`w-10 h-2 bg-yellow`}></div>
                  ) : ""}
                </button>

                <button
                  className={`flex flex-col gap-y-2 mb-2 items-center`}
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
                  {currentImage == "/images/laptop-img3.jpg" ? (
                    <div className={`w-10 h-2 bg-yellow`}></div>
                  ) : ""}
                </button>
              </div> */}

              {/* <button className={`border flex justify-center items-center w-14 h-20`}>
                            <FontAwesomeIcon icon={faCaretRight} className={`text-xl`} />
                            </button> */}
            </div>
          </div>
          <div className={`flex flex-col md:gap-y-2 xl:gap-y-4 w-1/2`}>
            <div className={`md:text-2xl xl:text-3xl font-semibold mb-2`}>
              {details.name}
              <FontAwesomeIcon
                icon={faShield}
                className={`text-md text-[#006FD6]`}
              />
            </div>
            <div className={`md:text-md xl:text-xl`}>
              Product age: {details.age}
            </div>
            <div className={`md:text-md xl:text-xl`}>Price: N{details.price}</div>
            {/* <div className={`md:text-md xl:text-xl`}>
              Real estimated price:{" "}
              <span className={` text-red-600 line-through`}>N150,000</span>
            </div> */}
            <div className={`md:text-md xl:text-xl`}>
              Condition: {details.condition}
            </div>
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
              src={`/images/facebook.png`}
              layout="fixed"
              className={`rounded`}
              width={40}
              height={40}
            />
          </button>

          <button className={`flex items-center`}>
            <Image
              src={`/images/whatsapp.png`}
              layout="fixed"
              className={`rounded`}
              width={40}
              height={40}
            />
          </button>

          <button className={`flex items-center`}>
            <Image
              src={`/images/instagram.png`}
              layout="fixed"
              className={`rounded`}
              width={40}
              height={40}
            />
          </button>
        </div>
      </div>

      <div className={`mx-6 my-10`}>
        <div className={`font-semibold text-2xl`}>Description</div>
        <div className={`my-4`}>
          {details.description}
        </div>

        {/* <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="py-2 inline-block min-w-full">
              <div className="overflow-hidden">
                <table className="border min-w-fit text-left">
                  <tbody>
                    {descriptions.map((description, index) => {
                      return (
                        <tr key={index} className="border-b">
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
        </div> */}
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
                <div key={index}>
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
                        onClick={() => {
                          setRating(index + 1);
                        }}
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
                        onMouseEnter={() => {
                          setRatingHovered(index + 1);
                        }}
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

        <div className={`flex`}>
          <div className={`flex gap-x-20 items-center my-4`}>
            <div>Reviews (10)</div>

            <div>
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
                onClick={() => {
                  setRelevanceDropdown(!relevance);
                }}
              >
                Relevance
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
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
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
          ${relevance == true ? "block" : "hidden"}
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
                  >
                    Action
                  </a>
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
                  >
                    Another action
                  </a>
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
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`flex  flex-col gap-y-6`}>

          <div className={`flex flex-col`}>
            <div className={`flex gap-x-2 items-center`}>
                <Image 
                  src={`/images/profile-image2.jpeg`}
                  layout="intrinsic"
                  className={`rounded-full`}
                  width={40}
                  height={40}
                />
                <div className={`my-2`}>Mary Kings</div>
            </div>
            <div>I love your products bro, old but gold</div>
          </div>

          <div className={`flex flex-col`}>
          <div className={`flex gap-x-2 items-center`}>
              <Image 
                src={`/images/profile-image3.jpeg`}
                layout="intrinsic"
                className={`rounded-full`}
                width={40}
                height={40}
              />
              <div className={`my-2`}>Mary Kings</div>
          </div>
          <div>I love your products bro, old but gold</div>
        </div>

        <div className={`flex flex-col`}>
          <div className={`flex gap-x-2 items-center`}>
              <Image 
                src={`/images/profile-image4.png`}
                layout="intrinsic"
                className={`rounded-full`}
                width={40}
                height={40}
              />
              <div className={`my-2`}>Mary Kings</div>
          </div>
          <div>I love your products bro, old but gold</div>
        </div>

        </div>

      </div>
      
      <MoreLikeThis moreProducts={moreProducts} />

      <FooterComponent />
    </div>
  );
}
