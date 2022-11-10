import HeaderComponent from "../../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import checkLoggedIn from "../../utilities/checkifloggedin";
import NavigationComponent from "../../components/HeaderNavigation";
import ProfileLayout from "../../components/ProfileLayout";
import {AiFillCamera} from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTag, faHeart, faArrowRightArrowLeft  } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [loginState, setLoginState] = useState(false);
  const [sliceNum, setSliceNum] = useState(0);
  const [profilePic, setProfilePic] = useState("/images/profilepic_avatar.png");

  const [uploadedProducts, setUploadedProdicts] = useState(
    [
      {
        userPicture: "/images/img2.png",
        userName: "Victor P",
        userId: "001",
        addedToFavourite: false,
        live: true,
        productName: "HP Elitebook",
        productPicture: "/images/sneakers.jpg",
        productDescription: "This is my 2 months old sneakers which i would love to swap with something nice, the highest bidder takes it.",
        productPrice: 50000,
        productId: "01"
      },
      {
        userPicture: "/images/profile-image2.jpeg",
        userName: "Didi Peters",
        userId: "001",
        live: true,
        addedToFavourite: true,
        productName: "HP Elitebook",
        productPicture: "/images/laptop-pic2.jpeg",
        productDescription: "This is my 4 months old MacBook which i would love to swap with something nice, the highest bidder takes it.",
        productPrice: 50000,
        productId: "01"
      },
      {
        userPicture: "/images/profile-image3.jpeg",
        userName: "Jerry Martins",
        userId: "001",
        live: false,
        addedToFavourite: false,
        productName: "HP Elitebook",
        productPicture: "/images/laptop-img4.jpg",
        productDescription: "This is my 3 months old laptop which i would love to swap with something nice, the highest bidder takes it.",
        productPrice: 50000,
        productId: "01"
      },
      {
        userPicture: "/images/img2.png",
        userName: "Victor P",
        userId: "001",
        addedToFavourite: false,
        productName: "HP Elitebook",
        live: false,
        productPicture: "/images/sneakers.jpg",
        productDescription: "This is my 2 months old sneakers which i would love to swap with something nice, the highest bidder takes it.",
        productPrice: 50000,
        productId: "01"
      },
      {
        userPicture: "/images/profile-image4.png",
        userName: "Victor P",
        userId: "001",
        addedToFavourite: false,
        productName: "HP Elitebook",
        live: false,
        productPicture: "/images/laptop-img4.jpg",
        productDescription: "This is my 2 months old latop which i would love to swap with something nice, the highest bidder takes it.",
        productPrice: 50000,
        productId: "01"
      },
      {
        userPicture: "/images/profile-image2.jpeg",
        userName: "Victor P",
        userId: "001",
        addedToFavourite: false,
        productName: "HP Elitebook",
        live: false,
        productPicture: "/images/laptop-pic2.jpeg",
        productDescription: "This is my 2 months old laptop which i would love to swap with something nice, the highest bidder takes it.",
        productPrice: 50000,
        productId: "01"
      },
      {
        userPicture: "/images/profile-image4.png",
        userName: "Victor P",
        userId: "001",
        addedToFavourite: false,
        productName: "HP Elitebook",
        live: false,
        productPicture: "/images/laptop-img3.jpg",
        productDescription: "This is my 2 months old laptop which i would love to swap with something nice, the highest bidder takes it.",
        productPrice: 50000,
        productId: "01"
      },
      {
        userPicture: "/images/profile-image2.jpeg",
        userName: "Victor P",
        userId: "001",
        addedToFavourite: false,
        productName: "HP Elitebook",
        live: false,
        productPicture: "/images/laptop-pic1.jpeg",
        productDescription: "This is my 2 months old laptop which i would love to swap with something nice, the highest bidder takes it.",
        productPrice: 50000,
        productId: "01"
      }
    ]
  );

  const checkLogIn = async () => {
    const l = await checkLoggedIn();
    setLoginState(l);
  };

  const [userProfile, setUserProfile] = useState({
    data: {
      fullName: "",
      profilePicUrl: "public/images/profilepic_avatar.png"
    }
  });

  useEffect(function () {
    checkLogIn();
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

  const changePicture = async (pic) => {

    const formdata = new FormData();
    formdata.append("profilepicfile", pic);
    formdata.append("id", localStorage.getItem("userID"));

    try {
        const pictureForm = await axios.put("auth/uploadprofilepic", formdata);

        console.log(pictureForm);

        let sliceNum;

        if(process.env.NEXT_PUBLIC_BASEURL == "https://bartcash.onrender.com/v1/") {
            sliceNum = 29;
        } else {
            sliceNum = 21;
        }

        console.log(process.env.NEXT_PUBLIC_BASEURL.slice(0, sliceNum));
        console.log(pictureForm.data.slice(6));

        setProfilePic(process.env.NEXT_PUBLIC_BASEURL.slice(0, sliceNum) + pictureForm.data.slice(6));
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className="overflow-hidden h-[100vh]">
      <HeaderComponent loggedinState={loginState} />

      <hr />

      <NavigationComponent />

      <hr />

    <ProfileLayout>
    
      <div className="flex items-center gap-x-4 py-8">

      <div className={`flex flex-start h-[100px] w-[100px] rounded-full  relative`}>
            {/* <Image src={profilePic} layout='intrinsic' className='rounded-full' width={100} height={100} /> */}
            <Image src={process.env.NEXT_PUBLIC_BASEURL.slice(0, sliceNum) + userProfile.data.profilePicUrl.slice(6)} className={`rounded-full`} layout='intrinsic'  width={200} height={200} />
            <div className={`absolute right-[10px] bottom-[10px] h-[20px] w-[20px]`}>
            <input placeholder='Enter your full name' id="fileInput" onChange={(e) => {changePicture(e.target.files[0])}} type={`file`} className={`border hidden rounded-[10px] p-2 mb-4 w-full`} />
            <label htmlFor="fileInput" className={`h-[25px] w-[25px] flex justify-center cursor-pointer items-center block rounded-full bg-primary text-white`}>
                {/* <FontAwesomeIcon icon={faCamera} className={`text-[10px] md:text-[12px]`} /> */}
                <AiFillCamera className={`position: absolute`} />
            </label>
            </div>
            </div>

        <div>
          <div>Name</div>
        </div>

      </div>

      <div className={`w-full flex items-center justify-end mb-6`}>
          <button className={`text-center bg-primary flex items-center justify-center font-bold rounded-[20px] py-2 px-4 text-white text-[14px]`}>Add Product +</button>
        </div>

      <div className={`grid grid-cols-12 gap-y-10 gap-x-14 xl:gap-x-8`}>

      {uploadedProducts.length == 0 ? (
        <div className={`mx-auto text-[60px] col-span-2 md:col-span-12`}>
        No Product
    </div>
      ) : (
        uploadedProducts.map((product, index) => {
          return (
            <div key={index} className={`col-span-2 md:col-span-4 xl:col-span-2 border border-[1px] border-solid p-2 border-yellow rounded-[20px]`}>
              {/* <div className={`flex items-center justify-between rounded-[20px]`}>
                <Image src={product.userPicture} layout='intrinsic' className={`rounded-full`} width={35} height={35} />
                <div className={`text-[20px] font-medium`}>{product.userName}</div>
                <div>
  
                    {product.addedToFavourite == true ? (
                        <Liked />
                        ) : (
                            
                            <NotLiked />
                    )}
                </div>
              </div> */}
  
              <div className={`w-full text-center my-4`}>
              <Image src={product.productPicture} layout={`intrinsic`} height={80} width={100} />
              <div className={`text-[#262626] text-[16px] font-medium`}>{product.productName}</div>
              <div className={`flex justify-center font-semibold text-[14px] items-center`}>N{product.productPrice} <FontAwesomeIcon icon={faTag} className={`w-4 h-6 text-primary ml-2`} /></div>
              </div>
  
              {/* <button className={`text-center w-full bg-primary flex items-center justify-center font-bold rounded-[20px] py-2 text-white text-[14px]`}>Swap <AiOutlineSwap className={`text-white text-[20px] ml-2`} /></button> */}
            </div>
          );
        })
      )}

      </div>
    </ProfileLayout>
      

    </div>
  );
}
