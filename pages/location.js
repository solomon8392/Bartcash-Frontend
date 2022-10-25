import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from "axios";
import countries from "../utilities/countries"
import { useRouter } from "next/router";

export default function Home() {

    const router = useRouter();
    const [address, setAddress] = useState("");
    const [stateOfResidence, setStateOfResidence] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");

    const completeSignUp = async () => {

        if(address == "" || stateOfResidence == "" || city == "") {
            console.log("Incomplete registration");
        } else {
            try {
                const response = await axios.put("auth/completeregistration", {
                    id: localStorage.getItem("userID"),
                    address,
                    stateOfResidence,
                    city,
                    postalCode : postalCode == "" ? "N/A" : postalCode
                });

                
                if(response.status == 200) {
                    console.log(response);
                    localStorage.removeItem("userID");
                    localStorage.setItem("authtoken", `${response.data.tokentype} ${response.data.token}`);
                    router.push("/signupsuccess");
                } else {
                    console.log("Something went wrong!");
                }

            } catch (error) {
                console.log(error);
            }
        }
    }


    return (
        <div className={`h-screen flex flex-row justify-between gap-x-6 w-full py-10 px-6`}>
            <div className={`h-[400px] w-[400px] xl:h-[600px] xl:w-[600px] 2xl:h-[900px] 2xl:w-[900px] hidden md:block my-auto`}>
            <Image src={"/images/location.png"} layout={"intrinsic"} width={800} height={800} />
            </div>
            <div className={`mx-auto py-4 flex flex-col text-center justify-center w-11/12 md:w-6/12 xl:w-4/12`}>
            <div className={`w-[100px] h-[50px] flex mx-auto`}>
            <Image src={`/images/logo.png`} layout='intrinsic'  width={150} height={100} />
            </div>
            <div className={`font-bold text-[20px] mb-4`}>Sign Up</div>

            {/* <div className={`flex text-left mb-2 flex-col`}>
                <label className={`mb-1`}>Name</label>
                <input placeholder='Enter your full name' onChange={(e) => {setName(e.target.value)}} type={`text`} className={`border rounded-[10px] p-2 mb-4 w-full`} />
            </div> */}

            {/* <div className={`flex text-left mt-4 mb-2 flex-col`}>
            <select onChange={(e) => {setCountry(e.target.value)}} className={`w-full p-[9px] mt-[-16px] my-2 rounded-[10px] bg-white border`}>
                <option>Country</option>
                {countries.map(country => {
                        return (
                            <option key={country.name.common} value ={country.name.common}>{country.name.common}</option>
                        );
                    })}
                    
                </select>
            </div> */}

            <div className={`flex text-left mb-2 flex-col`}>
                {/* <label className={`mb-1`}>Email</label> */}
                <input className={`py-2 px-4 rounded-[10px] border w-full my-2`} onChange={(e) => {setAddress(e.target.value)}} placeholder={`Address`} />
               
            </div>

            

                

                

            <div className={`flex text-left mb-2 flex-col`}>
                {/* <label className={`mb-1`}>State</label> */}
                <input className={`py-2 px-4 rounded-[10px] border w-full my-2`} onChange={(e) => {setStateOfResidence(e.target.value)}} placeholder={`State`} />
            </div>

            <div className={`flex text-left mb-2 flex-col`}>
                {/* <label className={`mb-1`}>Confirm Password</label> */}
                <div className={`flex gap-x-6`}>
                <input className={`py-2 px-4 rounded-[10px] border w-1/2 my-2`} onChange={(e) => {setCity(e.target.value)}} placeholder={`City`} />
                <input className={`py-2 px-4 rounded-[10px] border w-1/2 my-2`} onChange={(e) => {setPostalCode(e.target.value)}} placeholder={`Postal Code`} />
                </div>
            </div>

            <button className={`p-2 px-3 text-white bg-primary text-sm rounded-[10px] w-fit mx-auto mb-4`} onClick={completeSignUp}>Complete Registration</button>
            </div>
        </div>
    );
}