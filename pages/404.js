import { useRouter } from 'next/router';
import { TbError404 } from "react-icons/tb";

export default function Home() {
    const router = useRouter();

     const goHome = () => {
        router.push("/");
     }

    return(
        <div className={`flex flex-col items-center justify-center h-screen`}>
            <div className={`flex items-center text-white bg-primary justify-center w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full`}>
            <TbError404 className={`text-[80px] md:text-[120px]`} />
            </div>
            <div className={`pt-10 font-bold text-[20px] md:text-[25px]`}>Not Found</div>
            <div className={`pt-4 font-bold text-[20px] md:text-[25px]`}>
                <button onClick={goHome} className={`py-2 px-4 bg-primary text-white rounded`}>Home</button>
            </div>
        </div>
    );
}