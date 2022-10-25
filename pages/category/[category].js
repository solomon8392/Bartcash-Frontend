import Head from 'next/head';
import HeaderComponent from "../../components/Header";
import NavigationComponent from "../../components/HeaderNavigation";
import CategoryProduct from "../../components/CategoryProducts";

export default function Home() {

    return (
        <div>
            <Head>
        <title>BartCash</title>
      </Head>

      <HeaderComponent />

      <hr />

      <NavigationComponent />

      <hr />

      <CategoryProduct />

        </div>
    );

}
