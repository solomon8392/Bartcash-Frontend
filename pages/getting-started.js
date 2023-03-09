import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const [arrowOpen, setArrowOpen] = useState(null);
  const [openaccordion, setOpenaccordion] = useState(null);
  const router = useRouter();

  const handleClick = (index) => {
    if (openaccordion === index) {
      setOpenaccordion(null);
      setArrowOpen(null);
    } else {
      setOpenaccordion(index);
      setArrowOpen(index);
    }
  };

  const Bids = [
    {
      bidName: "Account Information",
      innertext:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      bidName: "Account recovery",
      innertext:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      bidName: "Account Verification",
      innertext:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      bidName: "Manage my account",
      innertext:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
  ];

  const biditems = Bids.map((items, index) => (
    <div className="my-[20px] justify-between" key={index}>
      <div className="w-[100%]  cursor-pointer flex rounded-md justify-center text-center items-center">
        <div
          onClick={() => handleClick(index)}
          className="w-[85%] flex justify-between font-semibold lg:w-[40%] md:w-[46] text-[12px] rounded-md lg:text-[13px]  border-b-[5px] border-[1px] p-[9px]"
        >
          {items.bidName}

          <div className=" justify-between">
            <div className="justify-between">
              {arrowOpen === index ? (
                <Image src={`/images/buttonup.png`} width={11 } height={8} />
              ) : (
                <Image src={`/images/buttondown.png`} width={11} height={8} />
              )}
            </div>
          </div>
        </div>
      </div>

      {openaccordion === index && (
        <div className="w-[100%] flex justify-center">
          <p className="w-[85%] lg:w-[40%] md:w-[46] text-[12px] rounded-md lg:text-[13px]align-center justify-center text-[11px] lg:text-[13px] rounded-md border-b-[5px] grid col-[2] p-3 border-[1px] margin-[29%]">
            {items.innertext}
          </p>
        </div>
      )}
    </div>
  ));

  return (
    <div>

        <div className="flex space-y-[18px] justify-between items-center">
        <div className="text-center ">
        <Image src={`/images/cash.png`} width={100} height={66} />
        </div>
        <div className="flex">
        <h4 className="text-center text-[11px] lg:text-[18px] md:text-[13px] m-3">
              Go back to main website
            </h4>{" "}

            <div className="rounded-md justify-center">
            <Image
              className="rounded-full"
              src={`/images/profile-image2.jpeg`}
              width={40}
              height={40}
            />
          </div>
        </div>
        </div>

      <div className="bg-[#001D3D] justify-center flex items-center h-[61vh] lg:h-[67vh] md:h-[67vh]">
      <div className="container justify-center flex-col md:mt-[0%] items-center  bg-contain ">
          <div className="flex justify-center">
            <Image src={`/images/human.png`} width={200} height={200} />
          </div>
          <div className="flex justify-center">
            <strong className="justify-center mt-1 lg:mt-5 sm:mt-1 text-[#fff] font-medium text-xs text-[100%] font-['Poppins'] font-[600] lg:text-[28px] md:text-[26px] text-[15px]">
              Hello, How Can We Help You?
            </strong>
          </div>
          <div className={`flex h-10 justify-center mt-[4%]`}>
            <input
              type="search"
              className="form-control relative w-4/6 w-[50%]  block px-3 py-1.5 text-base font-normal bg-gray-200 text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-100 focus:outline-none"
              placeholder="Email"
            />
            <button
              className="btn inline-block w-5/5 justify-center px-2 ml-[-10px] z-10 py-2.5 bg-yellow font-medium text-sm leading-tight rounded-r-[10px] hover:text-white hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="button"
              id="button-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="md:block">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 m-12 flex text-center place-items-center lg:gap-[0%] gap-[3%]  justify-center sm:grid-cols-4">
          {/* <table class="w-full"/>  lg:w-[60%] md:w-[50%] */}

          <div
            className="text-center w-[100%] lg:w-[60%] md:w-[50%] gap-[19%] cursor-pointer place-items-center border-1 hover:border-[#FFC300] lg:mt-2 mt-1 m-2 justify-center bg-white p-4 rounded-lg shadow border-2"
          >
            <Image src={`/images/vector-1.png`} width={20} height={20} />

            {/* <h5 class="text-xl font-medium leading-tight mb-2">Getting Started</h5> */}
            <p className="text-gray-500 cursor-pointer md:text-[10px] text-[11px] lg:text-[13px] lg:font-[550] md:font-[450] font-[350] text-[#001D3D] font-['Roboto']">
              Getting Started
            </p>
          </div>
          <div 
            onClick={() => router.push("/Account-selected")}
            className="text-center w-[100%] lg:w-[60%] md:w-[50%] cursor-pointer border-1 hover:border-[#FFC300] lg:mt-2 mt-1 m-2 justify-center bg-white p-4 rounded-lg shadow border-2">
            <Image src={`/images/vector-1.png`} width={20} height={20} />

            <p className="text-gray-500 cursor-pointer md:text-[10px] text-[11px] lg:text-[13px] lg:font-[550] md:font-[450] font-[350] text-[#001D3D] font-['Roboto']">
              Account
            </p>
          </div>
          <div 
              
          className="text-center w-[100%] lg:w-[60%] md:w-[50%] cursor-pointer border-1 hover:border-[#FFC300] lg:mt-2 mt-1 m-2 justify-center bg-white p-4 rounded-lg shadow border-2">
            <Image src={`/images/vector-3.png`} width={20} height={20} />

            <p className="text-gray-500 cursor-pointer md:text-[10px] text-[11px] lg:text-[13px] lg:font-[550] md:font-[450] font-[350] text-[#001D3D] font-['Roboto']">
              Security
            </p>
          </div>
          <div className="text-center w-[100%] lg:w-[60%] md:w-[50%] cursor-pointer border-1 hover:border-[#FFC300] lg:mt-2 mt-1 m-2 justify-center bg-white p-4 rounded-lg shadow border-2">
            <Image src={`/images/vector-2.png`} width={20} height={20} />

            <p className="text-gray-500 cursor-pointer md:text-[10px] text-[10px] lg:text-[13px]  lg:font-[550] md:font-[450] font-[350] text-[#001D3D] font-['Roboto']">
              Pricing and plans
            </p>
          </div>
        </div>
      </div>

      <div>{biditems}</div>

      <spam>
        <a
          className="flex mt-[40px] font-[500] font-medium justify-center text-[#404040] text-[12px] font-semibold md:text-[13px] lg:text-[14px] "
          href="#"
        >
          Can’t find an answer?{" "}
          <spam className="text-[12px] md:text-[13px] font-semibold font-[500] font-medium lg:text-[14px] hover:text-[#FFC300]">
            Click here
          </spam>
        </a>
      </spam>
    </div>
  );
}
