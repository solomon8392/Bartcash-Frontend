import axios from "axios";

const checkLoggedIn = async () => {
    let accesstoken = localStorage.getItem("authtoken") || sessionStorage.getItem("authtoken");
    // console.log(accesstoken);

    if(!accesstoken) {
      return false;
    } else {
      const isLoggedIn = await axios.post("auth/checkifloggedin", {accesstoken});
      if(isLoggedIn.status == 200 && isLoggedIn.data.role == "user" && isLoggedIn.data.emailVerified == true) {
        return true;
      } else {
        return false;
      }
    }
  }

export default checkLoggedIn;