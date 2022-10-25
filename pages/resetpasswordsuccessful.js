import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCheck, faRibbon } from '@fortawesome/free-solid-svg-icons';
import { faApple, faAppStore, faFacebook, faGooglePlay, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from 'next/router';
import { useEffect } from "react";

export default function Home() {
    const router = useRouter();
     useEffect(function() {
        setTimeout(() => {
            router.push("/");
        }, 2000);
     });
    return(
        <div className={`flex flex-col items-center justify-center h-screen`}>
            <div className={`flex items-center text-white bg-primary justify-center w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full`}>
            <FontAwesomeIcon icon={faCheck} className={`text-[80px] md:text-[120px]`} />
            </div>
            <div className={`pt-10 font-bold text-[20px] md:text-[25px]`}>Password reset Successful</div>
        </div>
    );
}