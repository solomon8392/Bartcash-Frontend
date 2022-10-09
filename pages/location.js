import Image from "next/image";

export default function Home() {
    return(
        <div className={`flex items-center gap-x-10 h-screen px-6`}>
            <div className={`hidden md:block md:w-6/12`}>
                <Image src={`/images/profile-image2.jpeg`} layout={`responsive`} width={200} height={150} />
            </div>
            <div className={`w-full md:w-6/12`}>
                <div className={`font-bold text-[25px]`}>Add Location</div>

                <select className={`py-2 px-4 rounded-[10px] bg-white border w-full my-4`}>
                    <option>Country</option>

                </select>

                <input className={`py-2 px-4 rounded-[10px] border w-full my-4`} placeholder={`State`} />

                <input className={`py-2 px-4 rounded-[10px] border w-full my-4`} placeholder={`Address`} />

                <div className={`flex gap-x-6`}>
                <input className={`py-2 px-4 rounded-[10px] border w-1/2 my-4`} placeholder={`City`} />
                <input className={`py-2 px-4 rounded-[10px] border w-1/2 my-4`} placeholder={`Postal Code`} />
                </div>

                <div className={`flex justify-end gap-x-16 mt-12`}>
                    <button>Skip, to do later</button>
                    <button className={`bg-primary text-white py-2 px-4 rounded-[10px]`}>Next</button>
                </div>

            </div>
        </div>
    );
}