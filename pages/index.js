import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTag,  } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import HeaderComponent from "../components/Header";
import NavigationComponent from "../components/HeaderNavigation";
import CarouselComponent from "../components/Carousel";
import ProductsComponent from "../components/Products";
import FooterComponent from "../components/Footer";
import AuctionComponent from "../components/Auction";
import { useState, useEffect } from 'react';
import checkLoggedIn from "../utilities/checkifloggedin";
import axios from "axios";
import Homenav from '../components/barnav';

export default function Home() {

  const [loginState, setLoginState] = useState(false);
  const [productsProps, setProducts] = useState({
    productTitle: "Hot Deals",
    products: []
  });

  const checkLogIn = async () => {
    const l = await checkLoggedIn();
    setLoginState(l);
  }

  useEffect(function() {
    checkLogIn();
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const results = await axios.get("products/products", {
        headers: {
          accesstoken: localStorage.getItem("authtoken")
        }
      });

      setProducts({
        productTitle: "Hot Deals",
        products: results.data
      });
      console.log(results.data);
      console.log("Here");
    } catch (error) {
      console.log(error);
    }
  }
  
  const [carProps, setCarousel] = useState([
    {
      url: "65aecca1f6488041a9f221f84fe1b12e.jpeg",
      writeup: (<div className={`absolute left-[50%] flex flex-col gap-y-4 md:gap-y-6 xl:gap-y-10 leading-5 md:leading-10 top-[50%] z-10 translate-y-[-50%] translate-x-[-50%] xl:text-[48px] text-xl xl:w-[480px] w-[200px] font-bold text-white text-center`}>
      <div>Save more money</div>
  <div>when you buy less </div>
  <div>and <span className={`text-yellow`}>swap</span> more</div>
      </div>)
    },
    {
      url: "windowsphone.jpg",
      writeup: ``
    },
    {
      url: "library.jpg",
      writeup: ``
    }
    ]);

    

    const [popularProducts, setPopularProducts] = useState({
      productTitle: "Popular Products",
      products: []
    });

    const [recommendedProducts, setRecommendedProducts] = useState({
      productTitle: "Recommended",
      products: []
    });

    const [auction, setAunction] = useState({
      productTitle: "Ongoing Auctions",
      products: [
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
    });

  return (
    <div>
      <Head>
        <title>BartCash</title>
      </Head>

      <HeaderComponent loggedinState={loginState} />

      <hr />

      <NavigationComponent />

      <hr />
      <Homenav />

      <CarouselComponent carouselProperties={carProps} />

      <ProductsComponent productsProps={productsProps} />

      <ProductsComponent productsProps={popularProducts} />

      <AuctionComponent auctionProps={auction} />

      <ProductsComponent productsProps={recommendedProducts} />

      <FooterComponent />

    </div>
  )
}
