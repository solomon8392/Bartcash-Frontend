import Image from 'next/image';

export default function Home() {
    return (
        <div className={`h-screen w-full`}>
            <div className={`absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] flex flex-col text-center justify-center w-10/12 md:w-6/12 xl:w-4/12`}>
            <div className={`w-[80px] h-[50px] flex mx-auto`}>
            <Image src={`/images/logo.png`} layout='intrinsic'  width={150} height={100} />
            </div>
            <div className={`font-bold text-[20px] mt-4`}>Log in</div>


            <div className={`flex text-left mb-2 flex-col`}>
                <label className={`mb-1`}>Email</label>
                <input placeholder='Enter email' type={`email`} className={`border rounded-[10px] p-2 mb-4 w-full`} />
            </div>

            <div className={`flex text-left mb-2 flex-col`}>
                <label className={`mb-1`}>Password</label>
                <input placeholder='Enter password' type={`password`} className={`border rounded-[10px] p-2 mb-2 w-full`} />
                <button className={`text-xs text-primary ml-auto`}>Forgot Password?</button>
            </div>
            <button className={`p-2 px-3 text-white bg-primary text-sm rounded-[10px] w-fit mx-auto mb-4`}>Log in</button>
            <div className={`mb-2`}>Already have an account? <button className={`text-primary`}>Sign Up</button></div>
            <div className={`mb-2`}>OR</div>
            <div className={`flex justify-center gap-x-10`}>
                <button>
                    <Image src={`/images/google-logo.jpg`} layout='intrinsic' className='rounded-full'  width={40} height={40} />
                </button>
                <button>
                    <Image src={`/images/facebook-logo.png`} layout='intrinsic' className='rounded-full'  width={40} height={40} />
                </button>
            </div>
            </div>
        </div>
    );
}