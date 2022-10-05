import Image from 'next/image';
import { useState } from 'react';

export default function Home() {

    const [OTP, setOTP] = useState("");

    return (
        <div className={`h-screen w-full`}>
            <div className={`absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] flex flex-col text-center justify-center w-10/12 md:w-6/12 xl:w-4/12`}>
            <div className={`w-[80px] h-[50px] flex mx-auto`}>
            <Image src={`/images/logo.png`} layout='intrinsic'  width={150} height={100} />
            </div>
            <div className={`font-bold text-[20px] mt-4`}>Log in</div>


            <div className={`flex text-left mb-2 flex-col`}>
                
            </div>

           
            <div className={`mb-2`}>Already have an account? <button className={`text-primary`}>Sign Up</button></div>
            <button className={`p-2 px-3 text-white bg-primary text-sm rounded-[10px] w-fit mx-auto mb-4`}>Log in</button>
            </div>
        </div>
    );
}