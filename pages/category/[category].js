import Head from 'next/head';
import HeaderComponent from "../../components/Header";
import NavigationComponent from "../../components/HeaderNavigation";
import CategoryProduct from "../../components/CategoryProducts";
import checkLoggedIn from "../../utilities/checkifloggedin";
import { useState, useEffect } from 'react';

export default function Home() {

    const [loginState, setLoginState] = useState(false);

  const checkLogIn = async () => {
    const l = await checkLoggedIn();
    setLoginState(l);
  }

  useEffect(function() {
    checkLogIn();
  }, []);

    return (
        <div>
            <Head>
        <title>BartCash</title>
      </Head>

      <HeaderComponent loggedinState={loginState} />

      <hr />

      <NavigationComponent />

      <hr />

      <CategoryProduct />

        </div>
    );

}
