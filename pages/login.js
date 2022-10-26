import Image from 'next/image';
import { useRouter } from "next/router";
import { useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        try {
            const response = await axios.post("auth/login", {
                email, password
            });

            console.log(response);
            if(response.status == 200) {
                localStorage.setItem("authtoken", `${response.data.tokentype} ${response.data.token}`);
                router.push("/");
            }

        } catch (error) {
            console.log(error);
            toast.error('An error occurred!', {
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
    }


    return (
        <div className={`h-screen w-full`}>
            <ToastContainer />
            <div className={`absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] flex flex-col text-center justify-center w-10/12 md:w-6/12 xl:w-4/12`}>
            <div className={`w-[80px] h-[50px] flex mx-auto`}>
            <Image src={`/images/logo.png`} layout='intrinsic'  width={150} height={100} />
            </div>
            <div className={`font-bold text-[20px] mt-4`}>Log in</div>


            <div className={`flex text-left mb-2 flex-col`}>
                <label className={`mb-1`}>Email</label>
                <input placeholder='Enter email' type={`email`} onChange={(e) => {setEmail(e.target.value)}} className={`border rounded-[10px] p-2 mb-4 w-full`} />
            </div>

            <div className={`flex text-left mb-2 flex-col`}>
                <label className={`mb-1`}>Password</label>
                <input placeholder='Enter password' type={`password`} onChange={(e) => {setPassword(e.target.value)}} className={`border rounded-[10px] p-2 mb-2 w-full`} />
                <button className={`text-xs text-primary ml-auto`} onClick={() => {router.push("/forgotpassword")}}>Forgot Password?</button>
            </div>
            <button className={`p-2 px-3 text-white bg-primary text-sm rounded-[10px] w-fit mx-auto mb-4`} onClick={login}>Log in</button>
            <div className={`mb-2`}>Already have an account? <button className={`text-primary`} onClick={() => {router.push("/signup")}}>Sign Up</button></div>
            <div className={`mb-2`}>OR</div>
            <div className={`flex justify-center gap-x-10`}>
                <button>
                    <Image src={`/images/google-logo.jpg`} layout='intrinsic' className='rounded-full'  width={40} height={40} />
                </button>
                <button>
                    <Image src={`/images/facebook-logo.png`} layout='intrinsic' className='rounded-full'  width={40} height={40} />
                </button>
            </div>
            </div>
        </div>
    );
}