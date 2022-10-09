import Image from "next/image";

export default function Home() {
    return(
        <div className={`flex items-center gap-x-10 h-screen px-6`}>
            <div className={`w-6/12`}>
                <Image src={`/images/profile-image2.jpeg`} layout={`responsive`} width={200} height={150} />
            </div>
            <div className={`w-6/12 text-center`}>
                <div className={`font-bold text-[25px]`}>Facial Recognition</div>

                <div className={`mt-10`}>
                    We need to verify your face to be sure you&apos;re human
                </div>

                <div className={`flex justify-center gap-x-16 mt-12`}>
                    <button className={`bg-primary text-white py-2 px-4 rounded-[10px]`} >Continue</button>
                    {/* <button className={`bg-primary text-white py-2 px-4 rounded-[10px]`}>Next</button> */}
                </div>

            </div>
        </div>
    );
}