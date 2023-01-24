import Image from "next/image";
import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Accordion from './Accordion';

export default function Home() {
  return (
    <div>
      <div className="Section bg-[#001D3D] w-100% h-[55vh] flex  justify-center">
        <div className="container flex justify-center flex-col -mb-5 m-0  items-center  bg-contain ">
          <Image src={`/images/human.png`} width={200} height={200} />

          <div class="flex justify-center">
            <strong className="justify-center mt-2 lg:mt-5 sm:mt-1 text-[#fff] font-medium text-xs text-[100%] font-['Poppins'] font-[600] lg:text-[33px] sm:text-[26px] text-[15px]">
              Hello' How Can We Help You?
            </strong>
          </div>

          {/* <div class="mb-3 xl:w-96 mt-3 md:mt-6 lg:mt-8 ">
            <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
              <input
                type="search"
                class="form-control w-[100px]  rounded-[10px] relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Ask a question"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <button
                class="btn inline-block px-6 py-2.5 rounded-[10px] bg-[#FFC300] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#FFC300] hover:shadow-lg focus:bg-[#FFC300]  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#FFC300] active:shadow-lg transition duration-150 ease-in-out flex items-center"
                type="button"
                id="button-addon2"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  class="w-4"
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
          </div> */}


<div className={`flex mt-4 mb-5 justify-center h-10`}>
        <input
          type="search"
          className="form-control relative w-1/1 w-[38%] block px-3 py-1.5 text-base font-normal bg-gray-200 text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-100 focus:outline-none"
          placeholder="xyzposakhfciyacfnvkjfjxcn,ckjfxck"
        />
        <button
          className="btn inline-block w-1/1 justify-center px-2 ml-[-10px] text-[#FFFFFF] z-10 py-2.5 bg-[#001D3D] text-primary font-medium text-sm leading-tight rounded-r-[10px] hover:shadow-lg   focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out flex items-center"
          type="button"
          id="button-addon2"
        >
          Copy Link
        </button>
      </div>
        </div>
      </div>

      <div className="md:block">
        <div className="grid lg:grid-cols-4 m-12 sm:grid-cols-2 grid-cols-1">
          {/* <table class="w-full"/> */}

          <div class="text-center cursor-pointer border-1 hover:border-[#FFC300] lg:mt-2 mt-1 m-2 justify-center bg-white p-5 rounded-lg shadow border-2">
            <Image src={`/images/vector-1.png`} width={20} height={20} />

            {/* <h5 class="text-xl font-medium leading-tight mb-2">Getting Started</h5> */}
            <p class="text-gray-500 font-medium cursor-pointer leading-tight text-x1 mt-4">
              Getting Started
            </p>
          </div>
          <div class="text-center cursor-pointer border-1 hover:border-[#FFC300] lg:mt-2 mt-1 m-2 justify-center bg-white p-5 rounded-lg shadow border-2">
            <Image src={`/images/vector-1.png`} width={20} height={20} />

            {/* <h5 class="text-xl font-medium leading-tight mb-2">Getting Started</h5> */}
            <p class="text-gray-500 font-medium cursor-pointer leading-tight text-x1 mt-4">
              Getting Started
            </p>
          </div>
          <div class="text-center cursor-pointer border-1 hover:border-[#FFC300] lg:mt-2 mt-1 m-2 justify-center  bg-white p-5 rounded-lg shadow border-2">
            <Image src={`/images/vector-1.png`} width={20} height={20} />

            {/* <h5 class="text-xl font-medium leading-tight mb-2">Getting Started</h5> */}
            <p class="text-gray-500 font-medium cursor-pointer leading-tight text-x1 mt-4">
              Getting Started
            </p>
          </div>
          <div class="text-center cursor-pointer border-1 hover:border-[#FFC300] lg:mt-2 mt-1 m-2 justify-center bg-white p-5 rounded-lg shadow border-2">
            <Image src={`/images/vector-1.png`} width={20} height={20} />

            {/* <h5 class="text-xl font-medium leading-tight mb-2">Getting Started</h5> */}
            <p class="text-gray-500 font-medium cursor-pointer leading-tight text-x1 mt-4">
              Getting Started
            </p>
          </div>
        </div>
      </div>

        <div className="Accordion">
          <Accordion/>
        </div>

      <strong><a className="flex justify-center text-[#404040] text-[10px] md:text-[14px] lg:text-[16px] " href="#">Can't find an answer? <spam className="text-[10px] md:text-[14px] lg:text-[16px] hover:text-[#FFC300]">Click here</spam></a></strong>
    </div>





  );
}
