import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from "axios";
import countries from "../utilities/countries"
import { useRouter } from 'next/router';

export default function Home() {

    const router = useRouter();

    const [email, setEmail] = useState("");

    const resetPassword = async () => {

        var filterRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filterRegex.test(email)) {
        console.log("Email isn't valid");
        return false;
    }

        const response = await axios.post("auth/recover-password", {email});

        console.log(response);

        if(response.status == 200) {
            router.push("/resetpasswordsent");
        }

    }


    return (
        <div className={`h-screen flex flex-row justify-between w-full`}>
            
            <div className={`mx-auto py-4 flex flex-col text-center justify-center w-11/12 md:w-6/12 xl:w-4/12`}>
            <div className={`w-[100px] h-[50px] flex mx-auto`}>
            <Image src={`/images/logo.png`} layout='intrinsic'  width={150} height={100} />
            </div>
            <div className={`font-bold text-[20px] mt-4`}>Reset Password</div>

            <div className={`flex text-left mb-2 flex-col`}>
                <label className={`mb-1`}>Email</label>
                <input placeholder='Enter email' onChange={(e) => {setEmail(e.target.value)}} type={`text`} className={`border rounded-[10px] p-2 mb-4 w-full`} />
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

            <button className={`p-2 px-3 text-white bg-primary text-sm rounded-[10px] w-fit mx-auto mb-4`} onClick={resetPassword}>Reset Password</button>
            </div>
        </div>
    );
}