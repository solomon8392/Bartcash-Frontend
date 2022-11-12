import HeaderComponent from "../../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import checkLoggedIn from "../../utilities/checkifloggedin";
import NavigationComponent from "../../components/HeaderNavigation";
import ProfileLayout from "../../components/ProfileLayout";
import Status from "../../styles/Status.module.css";
import { AiFillCamera } from "react-icons/ai";
import { BsEmojiExpressionless, BsEmojiSmile, BsEmojiNeutral, BsEmojiLaughing, BsEmojiSunglasses } from "react-icons/bs";
import {GrEmoji} from "react-icons/gr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTag,
  faHeart,
  faArrowRightArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [loginState, setLoginState] = useState(false);
  const [sliceNum, setSliceNum] = useState(0);
  const [profilePic, setProfilePic] = useState("/images/profilepic_avatar.png");
  const [progressStatus, setProgressStatus] = useState(0);

  const [uploadedProducts, setUploadedProdicts] = useState([
    {
      userPicture: "/images/img2.png",
      userName: "Victor P",
      userId: "001",
      addedToFavourite: false,
      live: true,
      productName: "HP Elitebook",
      productPicture: "/images/sneakers.jpg",
      productDescription:
        "This is my 2 months old sneakers which i would love to swap with something nice, the highest bidder takes it.",
      productPrice: 50000,
      productId: "01",
    },
    {
      userPicture: "/images/profile-image2.jpeg",
      userName: "Didi Peters",
      userId: "001",
      live: true,
      addedToFavourite: true,
      productName: "HP Elitebook",
      productPicture: "/images/laptop-pic2.jpeg",
      productDescription:
        "This is my 4 months old MacBook which i would love to swap with something nice, the highest bidder takes it.",
      productPrice: 50000,
      productId: "01",
    },
    {
      userPicture: "/images/profile-image3.jpeg",
      userName: "Jerry Martins",
      userId: "001",
      live: false,
      addedToFavourite: false,
      productName: "HP Elitebook",
      productPicture: "/images/laptop-img4.jpg",
      productDescription:
        "This is my 3 months old laptop which i would love to swap with something nice, the highest bidder takes it.",
      productPrice: 50000,
      productId: "01",
    },
    {
      userPicture: "/images/img2.png",
      userName: "Victor P",
      userId: "001",
      addedToFavourite: false,
      productName: "HP Elitebook",
      live: false,
      productPicture: "/images/sneakers.jpg",
      productDescription:
        "This is my 2 months old sneakers which i would love to swap with something nice, the highest bidder takes it.",
      productPrice: 50000,
      productId: "01",
    },
    {
      userPicture: "/images/profile-image4.png",
      userName: "Victor P",
      userId: "001",
      addedToFavourite: false,
      productName: "HP Elitebook",
      live: false,
      productPicture: "/images/laptop-img4.jpg",
      productDescription:
        "This is my 2 months old latop which i would love to swap with something nice, the highest bidder takes it.",
      productPrice: 50000,
      productId: "01",
    },
    {
      userPicture: "/images/profile-image2.jpeg",
      userName: "Victor P",
      userId: "001",
      addedToFavourite: false,
      productName: "HP Elitebook",
      live: false,
      productPicture: "/images/laptop-pic2.jpeg",
      productDescription:
        "This is my 2 months old laptop which i would love to swap with something nice, the highest bidder takes it.",
      productPrice: 50000,
      productId: "01",
    },
    {
      userPicture: "/images/profile-image4.png",
      userName: "Victor P",
      userId: "001",
      addedToFavourite: false,
      productName: "HP Elitebook",
      live: false,
      productPicture: "/images/laptop-img3.jpg",
      productDescription:
        "This is my 2 months old laptop which i would love to swap with something nice, the highest bidder takes it.",
      productPrice: 50000,
      productId: "01",
    },
    {
      userPicture: "/images/profile-image2.jpeg",
      userName: "Victor P",
      userId: "001",
      addedToFavourite: false,
      productName: "HP Elitebook",
      live: false,
      productPicture: "/images/laptop-pic1.jpeg",
      productDescription:
        "This is my 2 months old laptop which i would love to swap with something nice, the highest bidder takes it.",
      productPrice: 50000,
      productId: "01",
    },
  ]);

  const checkLogIn = async () => {
    const l = await checkLoggedIn();
    setLoginState(l);
  };

  const [userProfile, setUserProfile] = useState({
    data: {
      fullName: "",
      profilePicUrl: "public/images/profilepic_avatar.png",
    },
  });

  useEffect(function () {
    checkLogIn();
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const u = await axios.get("user/profile", {
        headers: {
          accesstoken: localStorage.getItem("authtoken"),
        },
      });
      console.log(u);
      setUserProfile(u);

      if (
        process.env.NEXT_PUBLIC_BASEURL == "https://bartcash.onrender.com/v1/"
      ) {
        setSliceNum(29);
      } else {
        setSliceNum(21);
      }

      console.log(
        process.env.NEXT_PUBLIC_BASEURL.slice(0, 29) +
          userProfile.data.profilePicUrl.slice(6)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const changePicture = async (pic) => {
    const formdata = new FormData();
    formdata.append("profilepicfile", pic);
    formdata.append("id", localStorage.getItem("userID"));

    try {
      const pictureForm = await axios.put("auth/uploadprofilepic", formdata);

      console.log(pictureForm);

      let sliceNum;

      if (
        process.env.NEXT_PUBLIC_BASEURL == "https://bartcash.onrender.com/v1/"
      ) {
        sliceNum = 29;
      } else {
        sliceNum = 21;
      }

      console.log(process.env.NEXT_PUBLIC_BASEURL.slice(0, sliceNum));
      console.log(pictureForm.data.slice(6));

      setProfilePic(
        process.env.NEXT_PUBLIC_BASEURL.slice(0, sliceNum) +
          pictureForm.data.slice(6)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="overflow-hidden h-[100vh]">
      <HeaderComponent loggedinState={loginState} />

      <hr />

      <NavigationComponent />

      <hr />

      <ProfileLayout>
        <div className={`justify-start my-8`}>
          <button
            className={`text-center bg-lightgrey flex items-center justify-center rounded-[10px] py-2 px-4 text-black text-[14px]`}
          >
            Cancel
          </button>
        </div>

        <div className={`grid grid-cols-2 mb-10`}>
          <div className="flex flex-col gap-y-4">
            <div>
              <div>Product Name</div>
              <input
                type={`text`}
                className={`border w-[80%] py-1 px-4 rounded-lg`}
                placeholder="Add product name"
              />
            </div>

            <div>
              <div>Product Name</div>
              <select className={`border w-[80%] py-1 px-4 rounded-lg`}>
                <option>Choose Category</option>
                <option>Phones</option>
                <option>Laptops</option>
              </select>
            </div>

            <div>
              <div>Product age</div>
              <input
                type={`text`}
                className={`border w-[80%] py-1 px-4 rounded-lg`}
                placeholder="Add product age"
              />
            </div>

            <div>
              <div>Price</div>
              <input
                type={`text`}
                className={`border w-[80%] py-1 px-4 rounded-lg`}
                placeholder="Add price"
              />
            </div>

            <div>
              <div>Product description</div>
              <textarea
                className={`border w-[80%] py-1 px-4 rounded-lg`}
                placeholder="Add description"
              />
            </div>

            <div>
              <div>Condition</div>
              
              <div className={`bg-grey dark:bg-[#12192B] w-[80%] py-2`}>
              <div className={`${Status.stepper_wrapper}`}>
                <div
                onClick={()=> {setProgressStatus(1)}}
                
                  className={`${Status.stepper_item}
  ${progressStatus == 1 ? `font-bold` : ""} cursor-pointer
  `}
                >
                  <div
                    className={`${
                      Status.step_counter
                    } text-white border-[2px] border-solid border-grey dark:border-secondary hover:bg-[#3EC9ED]
    ${progressStatus == 1 ? `bg-[#3EC9ED]` : "bg-[#D9D9D9]"}`}
                  >
                    <BsEmojiExpressionless className={`text-3xl`} />
                  </div>
                  <div className={`${Status.step_name}`}>Bad</div>
                </div>
                <div
                onClick={()=> {setProgressStatus(2)}}
                  className={`${Status.stepper_item}
  ${progressStatus == 2 ? `font-bold` : ""} cursor-pointer
  
  `}
                >
                  <div
                    className={`${
                      Status.step_counter
                    } text-white border-[2px] border-solid border-grey dark:border-secondary hover:bg-[#3EC9ED]
    ${progressStatus == 2 ? `bg-[#3EC9ED]` : "bg-[#D9D9D9]"}`}
                  >
                    <BsEmojiNeutral className={`text-3xl`} />
                  </div>
                  <div className={`${Status.step_name}`}>Fairly Good</div>
                </div>
                <div
                onClick={()=> {setProgressStatus(3)}}
                  className={`${Status.stepper_item} cursor-pointer ${
                    progressStatus == 3 ? `font-bold` : ""
                  }`}
                >
                  <div
                    className={`${
                      Status.step_counter
                    } text-white border-[2px] border-solid border-grey dark:border-secondary hover:bg-[#3EC9ED]
                    ${progressStatus == 3 ? `bg-[#3EC9ED]` : "bg-[#D9D9D9]"}`}
                  >
                    <BsEmojiSmile className={`text-3xl`} />
                  </div>
                  <div className={`${Status.step_name}`}>Good</div>
                </div>
                <div
                onClick={()=> {setProgressStatus(4)}}
                  className={`${Status.stepper_item} cursor-pointer ${
                    progressStatus == 4 ? `font-bold` : ""
                  }`}
                >
                  <div
                    className={`${
                      Status.step_counter
                    } text-white border-[2px] border-solid border-grey dark:border-secondary hover:bg-[#3EC9ED]
                    ${progressStatus == 4 ? `bg-[#3EC9ED]` : "bg-[#D9D9D9]"}`}
                  >
                    <BsEmojiLaughing className={`text-3xl`} />
                  </div>
                  <div className={`${Status.step_name}`}>Very Good</div>
                </div>
                <div
                onClick={()=> {setProgressStatus(5)}}
                  className={`${Status.stepper_item} ${
                    progressStatus == 5 ? `font-bold` : ""
                  } cursor-pointer`}
                >
                  <div
                    className={`${
                      Status.step_counter
                    } text-white border-[2px] border-solid border-grey dark:border-secondary hover:bg-[#3EC9ED]
                    ${progressStatus == 5 ? `bg-[#3EC9ED]` : "bg-[#D9D9D9]"}`}
                  >
                    <BsEmojiSunglasses className={`text-3xl`} />
                  </div>
                  <div className={`${Status.step_name}`}>Excellent</div>
                </div>
              </div>
            </div>

            </div>

            <div>
              <div>Product defects</div>
              <textarea
                className={`border w-[80%] py-1 px-4 rounded-lg`}
                placeholder="Write the problem the product has, if any"
              />
              {/* <input type={`text`} className={`border w-[80%] py-1 px-4 rounded-lg`} placeholder="Add price" /> */}
            </div>

            <div>
              <div>Delivery type</div>
              <div className="flex gap-x-10">
                <div className="flex gap-x-2">
                <input type={`checkbox`} />
                    <div>Shipping</div> 
                </div>

                <div className="flex gap-x-2">
                <input type={`checkbox`} />
                    <div>Pick up</div> 
                </div>
              </div>
              {/* <input type={`text`} className={`border w-[80%] py-1 px-4 rounded-lg`} placeholder="Add price" /> */}
            </div>

          </div>

          <div>
            <div>Products Image</div>

            <div className={`grid grid-cols-2 w-[440px] gap-6`}>
              <div className={`border  flex justify-center items-center border-dashed border-primary rounded-[20px] text-center h-[200px]`}>
              <div className={`w-full`}>
            <input placeholder='Enter your full name' id="fileInput" onChange={(e) => {changePicture(e.target.files[0])}} type={`file`} className={`border hidden rounded-[10px] p-2 mb-4 w-full`} />
            <label htmlFor="fileInput" className={`w-full flex justify-center cursor-pointer items-center block rounded-full text-primary`}>
                {/* <FontAwesomeIcon icon={faCamera} className={`text-[10px] md:text-[12px]`} /> */}
                {/* <AiFillCamera className={`position: absolute`} /> */}
                Add product image or select
            </label>
            </div>
              </div>

              <div className={`border  flex justify-center items-center border-dashed border-primary rounded-[20px] text-center h-[200px]`}>
              <div className={`w-full`}>
            <input placeholder='Enter your full name' id="fileInput" onChange={(e) => {changePicture(e.target.files[0])}} type={`file`} className={`border hidden rounded-[10px] p-2 mb-4 w-full`} />
            <label htmlFor="fileInput" className={`w-full flex justify-center cursor-pointer items-center block rounded-full text-primary`}>
                {/* <FontAwesomeIcon icon={faCamera} className={`text-[10px] md:text-[12px]`} /> */}
                {/* <AiFillCamera className={`position: absolute`} /> */}
                Add product image or select
            </label>
            </div>
              </div>

              {/* <div className={`border flex justify-center items-center border-dashed border-primary rounded-[20px] text-center h-[200px]`}>Add product image or select</div> */}
              {/* <div className={`border flex justify-center items-center border-dashed border-primary rounded-[20px] h-[200px]`}>1</div> */}
              {/* <div className={`border flex justify-center items-center border-dashed border-primary rounded-[20px] h-[200px]`}>1</div> */}
            </div>

            <button
            className={`text-center bg-primary  mt-10 flex items-center justify-center rounded-[10px] py-2 px-4 text-white text-[14px]`}
          >
            Done
          </button>

          </div>
        </div>
      </ProfileLayout>
    </div>
  );
}
