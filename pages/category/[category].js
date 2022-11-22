import Head from 'next/head';
import HeaderComponent from "../../components/Header";
import NavigationComponent from "../../components/HeaderNavigation";
import CategoryProduct from "../../components/CategoryProducts";
import checkLoggedIn from "../../utilities/checkifloggedin";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from "axios";

export default function Home() {

    const [loginState, setLoginState] = useState(false);
    const [products, setProducts] = useState([]);
    const router = useRouter();

  const checkLogIn = async () => {
    const l = await checkLoggedIn();
    setLoginState(l);
  }

  useEffect(function() {
    checkLogIn();
    getProducts();
  }, [router.query.category]);

  const getProducts = async () => {
    try {
      const results = await axios.get("products/products", {
        headers: {
          accesstoken: localStorage.getItem("authtoken")
        }
      });

      let r = results.data;

      const filteredProduct = r.filter(p => {
        console.log(p);
        console.log(router.query.category);
        return p.category == router.query.category;
      });

      setProducts(filteredProduct);
      console.log(filteredProduct);
      console.log(r);
      console.log("Here");
    } catch (error) {
      console.log(error);
    }
  }

    return (
        <div>
            <Head>
        <title>BartCash</title>
      </Head>

      <HeaderComponent loggedinState={loginState} />

      <hr />

      <NavigationComponent />

      <hr />

      <CategoryProduct productsProps={products} />

        </div>
    );

}
