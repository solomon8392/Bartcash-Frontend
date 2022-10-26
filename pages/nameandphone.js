import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from "axios";
import countries from "../utilities/countries";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCamera, faCheck, faRibbon } from '@fortawesome/free-solid-svg-icons';
import { faApple, faAppStore, faFacebook, faGooglePlay, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [callingcode, setCallingcode] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [profilePic, setProfilePic] = useState("/images/profilepic_avatar.png");

    const router = useRouter();

    const changePicture = async (pic) => {

        const formdata = new FormData();
        formdata.append("profilepicfile", pic);
        formdata.append("id", localStorage.getItem("userID"));

        try {
            const pictureForm = await axios.put("auth/uploadprofilepic", formdata);
    
            console.log(pictureForm);

            let sliceNum;

            if(process.env.NEXT_PUBLIC_BASEURL == "https://bartcash.onrender.com/v1/") {
                sliceNum = 30;
            } else {
                sliceNum = 21;
            }

            setProfilePic(process.env.NEXT_PUBLIC_BASEURL.slice(0, sliceNum) + pictureForm.data.slice(6));
        } catch (error) {
            console.log(error);
        }
    }

    const nextForm = async () => {
        let phoneNumber;
        if(phone[0] == "0") {
            phoneNumber = phone.slice(1);
        } else if(phone[0] == "+") {
            console.log("Phone Number without country code");
            return;
        } else {
            phoneNumber = "+" + callingcode.split("_")[1] + phone;
        }

        if(isNaN(phoneNumber) == true) {
            console.log("Input a valid phone number");
            return;
        }

        console.log(phoneNumber);
        console.log("Signup");

        if(password != confirmPassword) {
            console.log("Passwords don&apos;t match!");
            return
        } else if(password.length > 8) {
            console.log("Password is too short");
        }

        try {
            const nameAndNumberResponse = await axios.put("auth/nameandno", {
                id: localStorage.getItem("userID"),
                fullName: name,
                country: callingcode.split("_")[0],
                phoneNumber
            });

            if(nameAndNumberResponse.status == 200) {
                router.push("/location");
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
        <div className={`h-screen flex flex-row justify-between gap-x-6 w-full px-6 py-10`}>
            <ToastContainer />
            <div className={`h-[400px] w-[400px] xl:h-[600px] xl:w-[600px] 2xl:h-[900px] 2xl:w-[900px] hidden md:block my-auto`}>
            <Image src={"/images/create-account-pic.png"} layout={"intrinsic"} width={800} height={800} />
            </div>
            <div className={`mx-auto py-4 flex flex-col text-center justify-center w-11/12 md:w-6/12 xl:w-4/12`}>
            {/* <div className={`w-[100px] h-[50px] flex mx-auto`}>
            <Image src={`/images/logo.png`} layout='intrinsic'  width={150} height={100} />
            </div> */}
            <div className={`font-bold text-l md:text-left text-[20px] mt-2`}>Welcome</div>
            <div className={`font-bold text-l md:text-left text-[16px] my-2`}>Create an account with BartCash</div>

            <div className={`flex flex-start h-[100px] w-[100px] rounded-full  relative`}>
            <Image src={profilePic} layout='intrinsic' className='rounded-full' width={100} height={100} />
            <div className={`absolute right-[10px] bottom-[10px] h-[20px] w-[20px]`}>
            <input placeholder='Enter your full name' id="fileInput" onChange={(e) => {changePicture(e.target.files[0])}} type={`file`} className={`border hidden rounded-[10px] p-2 mb-4 w-full`} />
            <label htmlFor="fileInput" className={`h-[25px] w-[25px] flex justify-center cursor-pointer items-center block rounded-full bg-primary text-white`}>
                <FontAwesomeIcon icon={faCamera} className={`text-[10px] md:text-[12px]`} />
            </label>
            </div>
            </div>

            <div className={`flex text-left mb-1 flex-col`}>
                <label className={`mb-1`}>Name</label>
                <input placeholder='Enter your full name' onChange={(e) => {setName(e.target.value)}} type={`text`} className={`border rounded-[10px] p-2 mb-4 w-full`} />
            </div>

            <div className={`flex text-left mb-2 flex-col`}>
                <label className={`mb-1`}>Phone Number</label>
                <div className={`flex flex-row items-center`}>
                    
                <select onChange={(e) => {setCallingcode(e.target.value)}} className={`w-[100px] p-[9px] mt-[-16px] border-r-0 rounded-l-[10px] bg-white border`}>
                {countries.map(country => {
                        return (
                            <option key={country.name.common} value={country.name.common + "_" + country.callingCode}>{country.name.common} {country.callingCode.length == 0 ? "N/A" : "+" + country.callingCode}</option>
                        );
                    })}
                    
                </select>
                <input placeholder='E.g 81555555555' type={`text`} onChange={(e) => {setPhone(e.target.value)}} className={`border rounded-r-[10px]  p-2 mb-4 w-full`} />
                </div>
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

            <button className={`p-2 px-3 text-white bg-primary text-sm rounded-[10px] w-fit mx-auto mb-4`} onClick={nextForm}>Next</button>
            </div>
        </div>
    );
}