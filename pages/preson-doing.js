import Image from "next/image";
// import "..styles/"

export default function Home() {

 

  return (
    <div className="">
     
      <div className="flex overflow-hidden">
        <div className="W-[75%] voverflow-hidden">
            
      {/* <div className="absolute top-[92%] bg-[black]">
          <div >End Live</div>
          <div className=" flex items-center">
          <Image
              className="bg- bg-contain bg-cover"
              src={`/images/eye.png`}
              width={30}
              height={25}
            />
            <div className="items-center text-center">50</div>
          </div>
        </div> */}
          <div className="w-[100%] overflow-clip">
            <Image
              className="h-full overflow-clip bg-contain bg-cover"
              src={`/images/shoe.png`}
              width={900}
              height={665}
            />
          </div>
          <p className="absolute top-[87%] left-[35px] text-[18px] text-[#fff]">
            #This will be going to the best negotiable..fairly used 3 months old
            sneaker worth 15,000 <br /> naira. though it can go down for best
            negotiable.......
          </p>
        </div>

        

        <div className="w-[35%] p-[10px]">
          <div className="text-[24px] font-bold mb-[5px]">Bids</div>
  
          <div className="w-[100%] mt-[70px] gridgrid-cols-2 justify-center align-center">
            <Image
              className="h-full justify-center items-center tect bg-contain bg-cover"
              src={`/images/data.png`}
              width={450}
              height={380}
            />
            <p className="text-center font-bold">No Bids Yet</p>
          </div>


          <div className={`flex h-10 p-[0%] justify-center mt-[20%]`}>
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
