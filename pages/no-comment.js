import Image from "next/image";
// import "..styles/"

export default function Home() {

 

  return (
    <div className="">
     
      <div className="flex overflow-hidden">
        <div className="W-[75%] voverflow-hidden">
            
        <div className="flex justify-between bg-[#c4051c]">
            
            <div className="text-[#fff] bg-[#001D3D] p-[10px] rounded-md rounded-full m-4">End Live</div>

            <div className="m-4 flex items-center justify-center">
              <div className="overflow-y-visible">
                <Image
                  className="bg- bg-contain bg-cover"
                  src={`/images/eye.png`}
                  width={20}
                  height={15}
                />
                <span className="items-center text-center text-[#fff]">50</span>
              </div>
            </div>
          </div>
          <div className="w-[100%] overflow-clip">
            <Image
              className="h-full overflow-clip bg-contain bg-cover"
              src={`/images/shoe.png`}
              width={900}
              height={589}
            />
          </div>
          <p className="absolute top-[87%] left-[35px] text-[15px] text-[#fff]">
            #This will be going to the best negotiable..fairly used 3 months old
            sneaker worth 15,000 <br /> naira. though it can go down for best
            negotiable.......
          </p>

          <div className="">
            <div className="slidecontainer m-[2px] overflow-x-hidden flex  absolute  top-[93%] left-[35px]">
              <input
                type="range"
                min="1"
                max="60"
                value="50"
                className="w-[60%]"
              />

              <div className="">
                <Image
                  className="bg-gradient-to-l bg-contain bg-cover"
                  src={`/images/video.png`}
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>

        

        <div className="w-[35%] p-[10px]">
        <div className="flex space-y-[18px] justify-between items-center">
          <div className="flex">
            <div className="justify-center">
            <Image
              className="rounded-full"
              src={`/images/profile-image2.jpeg`}
              width={60}
              height={60}
            />
          </div>
          <div className="">
          <h4 className="absolute pl-[1%] pr-[1%] text-[12px] bg-[black] text-[#fff] top-[11%] right-[28%]">
              Live
              
            </h4>
          </div>
        <h4 className="text-center text-[11px] lg:text-[18px] md:text-[13px] m-3">
              Dave Vick
            </h4>{" "}

        </div>
        <div className="flex border-slate-100">
        <div className="text-center mt-[10px] rounded-full border-black text-[11px] lg:text-[18px] md:text-[13px] m-9">
              follow
            </div>
            
        </div>
        </div>
          <div className="text-[24px] font-bold mb-[5px]">Bids</div>
  
          <div className="w-[100%] mt-[0%] gridgrid-cols-2 justify-center align-center">
            <Image
              className="h-full justify-center items-center tect bg-contain bg-cover"
              src={`/images/data.png`}
              width={450}
              height={380}
            />
            <p className="text-center font-bold">No Bids Yet</p>
          </div>


          <div className={`flex h-10 p-[0%] justify-center mt-[14%]`}>
            <input
              type="search"
              className="form-control relative w-9/9 w-[100%]  block px-3 py-1.5 text-base font-normal bg-gray-200 text-gray-700 bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-100 focus:outline-none"
              placeholder="Add comment"
            />
            
            <button
              className="btn inline-block w-9/9 justify-center px-2 ml-[-10px] z-10 py-2.5 bg-[#001D3D] font-medium text-sm leading-tight  hover:text-white hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="button"
              id="button-addon2"
            >
             <Image
              className="bg- bg-contain bg-cover"
              src={`/images/arrow.png`}
              width={20}
              height={15}
            />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
