import '../styles/globals.css'
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASEURL;
// axios.defaults.headers["Access-Control-Allow-Origin"] = ["*"];

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
