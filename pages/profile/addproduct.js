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
    
      <div className={`justify-start my-8`}>
      <button className={`text-center bg-lightgrey flex items-center justify-center rounded-[10px] py-2 px-4 text-black text-[14px]`}>Cancel</button>
      </div>

      <div className={`grid grid-cols-2`}>
        <div className="flex flex-col gap-y-4">
            <div>
            <div>Product Name</div>
            <input type={`text`} className={`border w-[80%] py-1 px-4 rounded-lg`} placeholder="Add a product name" />
            </div>

            <div>
            <div>Product Name</div>
            <select className={`border w-[80%] py-1 px-4 rounded-lg`}>
                <option>Choose Category</option>
                <option>Phones</option>
                <option>Laptops</option>
            </select>
            </div>
        </div>

        <div>
            <div>Product Image</div>
        </div>
      </div>

    </ProfileLayout>
      

    </div>
  );
}
