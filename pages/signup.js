import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import countries from "../utilities/countries";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 

  const signUp = async () => {
    var filterRegex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filterRegex.test(email)) {
      console.log("Email isn't valid");
      return false;
    }

    if (password.length < 8) {
      toast.warn("Password is to short", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    try {
      const response = await axios.post("auth/nameandemail", {
        email,
        password,
      });

      console.log(response);

      if (response.status == 200) {
        router.push("/verificationemailsent");
        return;
      }
    } catch (error) {
      console.log(error);

      if (error.response.status == 409) {
        toast.warning("You already have an acoount.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setTimeout(() => {
          router.push("/login");
        }, 2000);
        return;
      }

      // if(error.response.status == 302) {

      //     toast.warning('You already have an acoount.', {
      //         position: "top-center",
      //         autoClose: 5000,
      //         hideProgressBar: false,
      //         closeOnClick: true,
      //         pauseOnHover: true,
      //         draggable: true,
      //         progress: undefined,
      //         theme: "light",
      //     });

      //     setTimeout(() => {
      //         router.push("/login");
      //     }, 2000);
      //     return;
      // }

      toast.error("An error occurred!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <div className={`h-screen flex flex-row justify-between w-full`}>
      <ToastContainer />
      <div
        className={`mx-auto py-4 flex flex-col text-center justify-center w-11/12 md:w-6/12 xl:w-4/12`}
      >
        <div className={`w-[100px] h-[50px] flex mx-auto`}>
          <Image
            src={`/images/logo.png`}
            layout="intrinsic"
            width={150}
            height={100}
          />
        </div>
        <div className={`font-bold text-[20px] mt-4`}>Sign Up</div>

        <div className={`flex text-left mb-2 flex-col`}>
          <label className={`mb-1`}>Email</label>
          <input
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type={`text`}
            className={`border rounded-[10px] p-2 mb-4 w-full`}
          />
        </div>

        <div className={`flex text-left mb-2 flex-col`}>
          <label className={`mb-1`}>Password</label>
          <input
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type={`password`}
            className={`border rounded-[10px] p-2 mb-4 w-full`}
          />
        </div>

        {/* <div className={`flex text-left mb-2 flex-col`}>
                <label className={`mb-1`}>Email</label>
                <input placeholder='Enter email' type={`email`} onChange={(e) => {setEmail(e.target.value)}} className={`border rounded-[10px] p-2 mb-4 w-full`} />
            </div>

            <div className={`flex text-left mb-2 flex-col`}>
                <label className={`mb-1`}>Password</label>
                <input placeholder='Enter password' type={`password`} onChange={(e) => {setPassword(e.target.value)}} className={`border rounded-[10px] p-2 mb-4 w-full`} />
            </div>

            <div className={`flex text-left mb-2 flex-col`}>
                <label className={`mb-1`}>Confirm Password</label>
                <input placeholder='Enter password again' type={`password`} onChange={(e) => {setConfirmPassword(e.target.value)}} className={`border rounded-[10px] p-2 mb-4 w-full`} />
            </div> */}

        <button
          className={`p-2 px-3 text-white bg-primary text-sm rounded-[10px] w-fit mx-auto mb-4`}
          onClick={signUp}
        >
          Sign Up
        </button>
        <div className={`mb-2`}>
          Already have an account?{" "}
          <button
            className={`text-primary`}
            onClick={() => {
              router.push("/login");
            }}
          >
            Log in
          </button>
        </div>
        <div className={`mb-2`}>OR</div>
        <div className={`flex justify-center gap-x-10`}>
        
        {/* <GoogleLogin
          clientId="358295793500-f3p593tkjvfogoehcrudpu22t9u460n8.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          responseType="code"
        /> */}

            {/* <button>
                <Image
              src={`/images/google-logo.jpg`}
              layout="intrinsic"
              className="rounded-full"
              width={40}
              height={40}
            />
              </button> */}

          <button onClick={() => {router.push(process.env.NEXT_PUBLIC_BASEURL + "auth/login/google")}}>
            <Image
              src={`/images/google-logo.jpg`}
              layout="intrinsic"
              className="rounded-full"
              width={40}
              height={40}
            />
          </button>

          <button onClick={() => {router.push(process.env.NEXT_PUBLIC_BASEURL + "auth/facebook")}}>
            <Image
              src={`/images/facebook-logo.png`}
              layout="intrinsic"
              className="rounded-full"
              width={40}
              height={40}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
