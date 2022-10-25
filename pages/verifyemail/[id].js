import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCheck, faClock, faRibbon, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faApple, faAppStore, faFacebook, faGooglePlay, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Home() {

    const router = useRouter();

    const [verificationStatus, setVerificationStatus] = useState("notverified");

    useEffect(function () {
        // console.log(router.asPath.split("/")[2]);
        verifyTheEmail();
    }, []);
    
    async function verifyTheEmail() {
        const id = location.pathname.split("/")[2];
        localStorage.setItem("userID", id);
        const response = await axios.put("auth/verifyemail", {
            id
        });

        console.log(response);

        if(response.status == 200) {
            setVerificationStatus("verified");

            setTimeout(() => {
                router.push("/nameandphone");
            }, 4000);
        } else {
            console.log("Something went wrong");
        }

    }
    

    return(
        <div className={`flex flex-col items-center justify-center h-screen`}>

            {verificationStatus == "verified" ? (
                <div>
                    <div className={`flex items-center mx-auto text-white bg-primary justify-center w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full`}>
                    <FontAwesomeIcon icon={faCheck} className={`text-[80px] md:text-[120px]`} />
                    </div>
                    <div className={`pt-10 font-bold text-[20px] md:text-[25px]`}>Email Verification Successful</div>
                </div>
            ) : (
                <div>
                    <div className={`flex items-center mx-auto text-white bg-primary justify-center w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full`}>
            <FontAwesomeIcon icon={faClock} className={`text-[80px] md:text-[120px]`} />
            </div>
            <div className={`pt-10 font-bold text-[20px] md:text-[25px]`}>Verifying... Please wait.</div>
                </div>
            )}

        </div>
    );
}