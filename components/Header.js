
import Image from 'next/image'

export default function Home() {
    return (
        <div className={`w-full flex px-6 gap-4 xl:gap-10 items-center justify-between py-2`}>
          <div className={`block md:hidden`}>
          <Image src={`/images/logo.png`} layout='intrinsic'  width={1000} height={600} />
          </div>
          <div className={`hidden md:block`}>
            <Image src={`/images/logo.png`} layout={`intrinsic`} width={310} height={120} />
          </div>
          <div className="flex justify-center w-full">
            <div className="xl:w-90 hidden md:block">
              <div className="input-group relative flex w-full">
                <input type="search" className="form-control xl:w-[600px] relative flex-auto block px-3 py-1.5 text-base font-normal bg-gray-200 text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-100 focus:outline-none" placeholder="Search for product, category" />
                <button className="btn inline-block px-2 ml-[-10px] z-10 py-2.5 bg-yellow text-primary font-medium text-xs leading-tight uppercase rounded-r-lg hover:text-white hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
                </button>
              </div>
            </div>
        </div>
        <div className={`flex justify-end w-full gap-2`}>
        <button className={`p-2 block md:hidden rounded-full text-primary`}>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
        </button>
        <button className={``}>Help</button>
        <button className={``}>Login</button>
        <button className={`flex flex-nowrap justify-center w-[80px] p-1 rounded-[20px] bg-primary text-white`}>Sign Up</button>
        </div>
        
      </div>
    );
}