import Image from "next/image";
// import "..styles/"

export default function Home() {

  const Bids = [
    {
      icon: `/images/profile-image2.jpeg`,
      bidName: "Daniel Lee",
      price: "50,000",
      time: "1",
      reply: "1"
    },
    {
      icon: `/images/profile-image2.jpeg`,
      bidName: "Austin Clein",
      price: "100,000",
      time: "3",
      reply: "5"
    },
    {
      icon: `/images/profile-image2.jpeg`,
      bidName: "Solomon Godwin",
      price: "80,000",
      time: "6",
      reply: "8"
    },
    {
      icon: `/images/profile-image2.jpeg`,
      bidName: "Daniel Lee",
      price: "90,000",
      time: "10",
      reply: "19wac"
    },
  ]

  const biditems = Bids.map((items, index)=>(
    <div className="grid lg:grid-row-4 md:grid-row-4 my-[10px]">
            <div className=" rounded-md flex items-center mb-[5px]">
              <div className=" mr-[6px]">
                <Image
                  className="rounded-full"
                  src={items.icon}
                  width={40}
                  height={40}
                />
              </div>
              <div>{items.bidName}</div>
            </div>
            <div className=" flex items-center mb-[4px] justify-center rounded-full align-text-top  text-center align-middle  w-[80px] h-[35px] bg-[#D6EBFF]">
              {items.price}
            </div>
            <div className="flex gap-x-3 gap-y-2">
              <div>{items.time} min</div>
              <div>
                Reply
                <Image
                  className=""
                  src={`/images/arrow.png`}
                  width={12}
                  height={12}
                />
              </div>
              <div>{items.reply} Reply</div>
            </div>
          </div>

  ))

  return (
    <div className="">
     
      <div className="lg:flex md:grid mdgrid-cols-2">
        <div className="W-[75%]">

        <div className="flex justify-between bg-[#d10e20]">
            
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

          <div className="w-[100%]">
            <Image
              className="h-full bg-contain bg-cover"
              src={`/images/shoe.png`}
              width={900}
              height={587}
            />{" "}
          </div>
          <p className="absolute top-[87%] left-[35px] text-[18px] text-[#fff]">
            #This will be going to the best negotiable..fairly used 3 months old
            sneaker worth 15,000 <br /> naira. though it can go down for best
            negotiable.......
          </p>

        </div>

        <div className=" lg:w-[35%] justify-center md:w-[100%] p-[10px]">
          <div className="text-[24px] font-bold mb-[5px]">Bids</div>
  

          <div>
            {biditems}
          </div>


          <div className={`flex h-10  justify-center mt-[15%]`}>
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
