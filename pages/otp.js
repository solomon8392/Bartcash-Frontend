import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from "axios";
import countries from "../utilities/countries"

export default function Home() {

    const [otp, setOtp] = useState("");
    const [phone, setPhone] = useState("");
    const [callingcode, setCallingcode] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const signUp = async () => {
        let phoneNumber;
        if(phone[0] == "0") {
            phoneNumber = phone.slice(1);
        } else if(phone[0] == "+") {
            console.log("Phone Number without country code");
            return;
        } else {
            phoneNumber = "+" + callingcode + phone;
        }
        console.log(phoneNumber);
        console.log("Signup");

        if(password != confirmPassword) {
            console.log("Passwords don't match!");
            return;
        } else if(password.length > 8) {
            console.log("Password is too short");
        }

        localStorage.setItem("userDetails", JSON.stringify({
            name, phone
        }));

        

    }


    return (
        <div className={`h-screen flex flex-row justify-between w-full`}>
            <div className={`mx-auto py-4 flex flex-col text-center justify-center w-11/12 md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-5/12`}>
            <div className={`w-[400px] h-[400px] flex mx-auto`}>
            <Image src={`/images/password.png`} layout='intrinsic' className={`mx-auto`} width={800} height={800} />
            </div>
            <div className={`font-bold text-[20px] mt-4`}>Sign Up</div>

            <div className={`flex text-left mb-2 items-center flex-col`}>
                <label className={`mb-1`}>EnterOTP</label>
                <input placeholder='0 0 0 0' onChange={(e) => {setOtp(e.target.value)}} type={`text`} className={`border rounded-[10px] p-2 mb-4 w-[100px] mx-auto text-center`} />
            </div>

            <button className={`p-2 px-3 text-white bg-primary text-sm rounded-[10px] w-fit mx-auto mb-4`} onClick={signUp}>Confirm</button>


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

            
            </div>
        </div>
    );
}