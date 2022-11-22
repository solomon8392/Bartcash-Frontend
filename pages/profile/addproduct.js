import HeaderComponent from "../../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import checkLoggedIn from "../../utilities/checkifloggedin";
import NavigationComponent from "../../components/HeaderNavigation";
import ProfileLayout from "../../components/ProfileLayout";
import Status from "../../styles/Status.module.css";
import { AiFillCamera } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import {
  BsEmojiExpressionless,
  BsEmojiSmile,
  BsEmojiNeutral,
  BsEmojiLaughing,
  BsEmojiSunglasses,
} from "react-icons/bs";
import { GrEmoji } from "react-icons/gr";
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

  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productAge, setProductAge] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCondition, setProductCondition] = useState("");
  const [productDefects, setProductDefects] = useState("");
  const [productDeliveryType, setProductDeliveryType] = useState("");
  const [productMainImage, setProductMainImage] = useState("");
  // const [productExtraImages, setProductExtraImages] = useState("");

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

  const submitForm = async () => {
    // console.log(
    //   productName,
    //   productCategory,
    //   productAge,
    //   productPrice,
    //   productDescription,
    //   productCondition,
    //   productDefects,
    //   productDeliveryType,
    //   productMainImage,
    //   productExtraImages
    // );

    console.log(productMainImage);

    const formdata = new FormData();
    formdata.append("productName", productName);
    formdata.append("productCategory", productCategory);
    formdata.append("productAge", productAge);
    formdata.append("productPrice", productPrice);
    formdata.append("productDescription", productDescription);
    formdata.append("productCondition", productCondition);
    formdata.append("productDefects", productDefects);
    formdata.append("productDeliveryType", productDeliveryType);
    formdata.append("productMainImage", productMainImage);
    // formdata.append("productExtraImages", productExtraImages);


    const res = await axios.post("products/product", formdata, {
      headers: {
        accesstoken: localStorage.getItem("authtoken")
      }
    });

    console.log(res);
    if(res.status == 200) {

    toast.success("Upload Successful");

      console.log("Successful", {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };

  return (
    <div className="overflow-hidden h-[100vh]">
      <ToastContainer />
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

        <div
          className={`grid grid-cols-1 overflow-x-hidden md:grid-cols-2 gap-y-6 mb-10`}
        >
          <div className="flex flex-col gap-y-4">
            <div>
              <div>Product Name</div>
              <input
                type={`text`}
                className={`border w-full md:w-[80%] py-1 px-4 rounded-lg`}
                placeholder="Add product name"
                onChange={(e) => {
                  setProductName(e.target.value);
                }}
              />
            </div>

            <div>
              <div>Product Category</div>
              <select
                className={`border w-full md:w-[80%] py-1 px-4 rounded-lg`}
                onChange={(e) => {
                  setProductCategory(e.target.value);
                }}
              >
                <option>Choose Category</option>
                <option value={`phones_and_accessories`}>
                  Phones and accessories
                </option>
                <option value={`computer_and_accessories`}>
                  Computer and accessories
                </option>
                <option value={`luggage_and_bags`}>Luggages and bags</option>
                <option value={`furnitures`}>Furnitures</option>
                <option value={`books`}>Books</option>
              </select>
            </div>

            <div>
              <div>Product age</div>
              <input
                type={`text`}
                className={`border w-full md:w-[80%] py-1 px-4 rounded-lg`}
                placeholder="Add product age"
                onChange={(e) => {
                  setProductAge(e.target.value);
                }}
              />
            </div>

            <div>
              <div>Price</div>
              <input
                type={`text`}
                className={`border w-full md:w-[80%] py-1 px-4 rounded-lg`}
                placeholder="Add price"
                onChange={(e) => {
                  setProductPrice(e.target.value);
                }}
              />
            </div>

            <div>
              <div>Product description</div>
              <textarea
                className={`border w-full md:w-[80%] py-1 px-4 rounded-lg`}
                rows="5"
                placeholder="Add description"
                onChange={(e) => {
                  setProductDescription(e.target.value);
                }}
              />
            </div>

            <div>
              <div>Condition</div>

              <div
                className={`bg-grey dark:bg-[#12192B] w-full md:w-[80%] py-2`}
              >
                <div className={`${Status.stepper_wrapper}`}>
                  <div
                    onClick={() => {
                      setProductCondition("bad");
                    }}
                    className={`${Status.stepper_item}
  ${productCondition == "bad" ? `font-bold` : ""} cursor-pointer
  `}
                  >
                    <div
                      className={`${
                        Status.step_counter
                      } text-white border-[2px] border-solid border-grey dark:border-secondary hover:bg-[#3EC9ED]
    ${productCondition == "bad" ? `bg-[#3EC9ED]` : "bg-[#D9D9D9]"}`}
                    >
                      <BsEmojiExpressionless className={`text-3xl`} />
                    </div>
                    <div className={`${Status.step_name}`}>Bad</div>
                  </div>
                  <div
                    onClick={() => {
                      setProductCondition("fairly_good");
                    }}
                    className={`${Status.stepper_item}
  ${productCondition == "fairly_good" ? `font-bold` : ""} cursor-pointer
  
  `}
                  >
                    <div
                      className={`${
                        Status.step_counter
                      } text-white border-[2px] border-solid border-grey dark:border-secondary hover:bg-[#3EC9ED]
    ${productCondition == "fairly_good" ? `bg-[#3EC9ED]` : "bg-[#D9D9D9]"}`}
                    >
                      <BsEmojiNeutral className={`text-3xl`} />
                    </div>
                    <div className={`${Status.step_name}`}>Fairly Good</div>
                  </div>
                  <div
                    onClick={() => {
                      setProductCondition("good");
                    }}
                    className={`${Status.stepper_item} cursor-pointer ${
                      productCondition == "good" ? `font-bold` : ""
                    }`}
                  >
                    <div
                      className={`${
                        Status.step_counter
                      } text-white border-[2px] border-solid border-grey dark:border-secondary hover:bg-[#3EC9ED]
                    ${productCondition == "good" ? `bg-[#3EC9ED]` : "bg-[#D9D9D9]"}`}
                    >
                      <BsEmojiSmile className={`text-3xl`} />
                    </div>
                    <div className={`${Status.step_name}`}>Good</div>
                  </div>
                  <div
                    onClick={() => {
                      setProductCondition("very_good");
                    }}
                    className={`${Status.stepper_item} cursor-pointer ${
                      productCondition == "very_good" ? `font-bold` : ""
                    }`}
                  >
                    <div
                      className={`${
                        Status.step_counter
                      } text-white border-[2px] border-solid border-grey dark:border-secondary hover:bg-[#3EC9ED]
                    ${productCondition == "very_good" ? `bg-[#3EC9ED]` : "bg-[#D9D9D9]"}`}
                    >
                      <BsEmojiLaughing className={`text-3xl`} />
                    </div>
                    <div className={`${Status.step_name}`}>Very Good</div>
                  </div>
                  <div
                    onClick={() => {
                      setProductCondition("excellent");
                    }}
                    className={`${Status.stepper_item} ${
                      productCondition == "excellent" ? `font-bold` : ""
                    } cursor-pointer`}
                  >
                    <div
                      className={`${
                        Status.step_counter
                      } text-white border-[2px] border-solid border-grey dark:border-secondary hover:bg-[#3EC9ED]
                    ${productCondition == "excellent" ? `bg-[#3EC9ED]` : "bg-[#D9D9D9]"}`}
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
                className={`border w-full md:w-[80%] py-1 px-4 rounded-lg`}
                placeholder="Write the problem the product has, if any"
                rows="5"
                onChange={(e) => {
                  setProductDefects(e.target.value);
                }}
              />
              {/* <input type={`text`} className={`border w-[80%] py-1 px-4 rounded-lg`} placeholder="Add price" /> */}
            </div>

            <div>
              <div>Delivery type</div>
              <div className="flex gap-x-10">
                <div className="flex gap-x-2">
                  <input
                    name="deliverytype"
                    type={`radio`}
                    value="shipping"
                    onChange={(e) => {
                      setProductDeliveryType(e.target.value);
                    }}
                  />
                  <div>Shipping</div>
                </div>

                <div className="flex gap-x-2">
                  <input
                    name="deliverytype"
                    type={`radio`}
                    value="pickup"
                    onChange={(e) => {
                      setProductDeliveryType(e.target.value);
                    }}
                  />
                  <div>Pick up</div>
                </div>
              </div>
              {/* <input type={`text`} className={`border w-[80%] py-1 px-4 rounded-lg`} placeholder="Add price" /> */}
            </div>
          </div>

          <div>
            <div>Products Image</div>

            <div className={`grid grid-cols-1 md:grid-cols-2 w-full md:w-[440px] gap-6`}>
              <div
                className={`border  flex justify-center items-center border-dashed border-primary rounded-[20px] text-center h-[200px]`}
              >
                <div className={`w-full`}>
                  <input
                    placeholder="Enter your full name"
                    id="fileInput"
                    onChange={(e) => {
                      setProductMainImage(e.target.files[0]);
                    }}
                    type={`file`}
                    className={`border hidden rounded-[10px] p-2 mb-4 w-full`}
                    accept="image/*"
                  />
                  <label
                    htmlFor="fileInput"
                    className={`w-full flex justify-center cursor-pointer items-center block rounded-full text-primary`}
                  >
                    Add primary produce image
                  </label>
                </div>
              </div>

              {/* <div
                className={`border  flex justify-center items-center border-dashed border-primary rounded-[20px] text-center h-[200px]`}
              >
                <div className={`w-full`}>
                  <input
                    id="fileInputExtra"
                    onChange={(e) => {
                      setProductExtraImages(e.target.files);
                    }}
                    type={`file`}
                    accept="image/*"
                    multiple
                    className={`border hidden rounded-[10px] p-2 mb-4 w-full`}
                  />
                  <label
                    htmlFor="fileInputExtra"
                    className={`w-full flex justify-center cursor-pointer items-center block rounded-full text-primary`}
                  >
                    
                    Add extra product image (MAX 10)
                  </label>
                </div>
              </div> */}

              {/* <div className={`border flex justify-center items-center border-dashed border-primary rounded-[20px] text-center h-[200px]`}>Add product image or select</div> */}
              {/* <div className={`border flex justify-center items-center border-dashed border-primary rounded-[20px] h-[200px]`}>1</div> */}
              {/* <div className={`border flex justify-center items-center border-dashed border-primary rounded-[20px] h-[200px]`}>1</div> */}
            </div>

            <button
              className={`text-center bg-primary mt-10 flex items-center justify-center rounded-[10px] py-2 px-4 text-white text-[14px]`}
              onClick={submitForm}
            >
              Done
            </button>
          </div>
        </div>
      </ProfileLayout>
    </div>
  );
}
