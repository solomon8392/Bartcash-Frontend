import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="Section bg-[#001D3D] lg:h-[61vh] md:h-[60vh] h-[60vh] lg:mb-[0%] flex  justify-center">
        <div className="container justify-center flex-col mt-[1%] md:mt-[0%] items-center  bg-contain ">
            <div className="flex justify-center"><Image src={`/images/human.png`} width={200} height={200} /></div>

          <div class="flex justify-center">
            <strong className="justify-center mt-1 lg:mt-5 sm:mt-1 text-[#fff] font-medium text-xs text-[100%] font-['Poppins'] font-[600] lg:text-[33px] md:text-[26px] text-[15px]">
              Hello, How Can We Help You?
            </strong>
          </div>


<div className={`flex h-10 justify-center mt-[2%]`}>
        <input type="search" className="form-control relative w-4/6 w-[50%]  block px-3 py-1.5 text-base font-normal bg-gray-200 text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-100 focus:outline-none" placeholder="Email" />
                <button className="btn inline-block w-5/5 justify-center px-2 ml-[-10px] z-10 py-2.5 bg-yellow font-medium text-sm leading-tight rounded-r-[10px] hover:text-white hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
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
      <strong><a className="flex justify-center text-[#404040] text-[12px] md:text-[14px] lg:text-[16px] " href="#">Can't find an answer? <spam className="text-[12px] md:text-[14px] lg:text-[16px] hover:text-[#FFC300]">Click here</spam></a></strong>
    </div>

  );
}
