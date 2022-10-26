import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTag, faHeart, faArrowRightArrowLeft  } from '@fortawesome/free-solid-svg-icons';
import far from '@fortawesome/free-regular-svg-icons';
import Liked from "./hearts/Liked";
import NotLiked from "./hearts/NotLiked";
import { AiOutlineSwap } from "react-icons/ai";

export default function Home({ productsProps }) {

    const [products, setProducts] = useState(productsProps);

    return(
        <div className={`w-full px-6 pb-6 pt-10`}>
        <div className={`bg-yellow text-primary text-center py-4 mb-2 font-bold font-[40px]`}>{products.productTitle}</div>
        <div className={`grid grid-cols-2 md:grid-cols-12 gap-y-10 gap-x-14 xl:gap-x-8 w-full my-10`}>

        {!products ? (
            <div className={`mx-auto text-[60px] col-span-2 md:col-span-12`}>
                No Product
            </div>
        ) : (
          products.products.map((product, index) => {
            return (
                <div key={index} className={`col-span-2 md:col-span-4 xl:col-span-2 border border-[1px] border-solid p-2 border-yellow rounded-[20px]`}>
            <div className={`flex items-center justify-between rounded-[20px]`}>
              <Image src={product.userPicture} layout='intrinsic' className={`rounded-full`} width={35} height={35} />
              <div className={`text-[20px] font-medium`}>{product.userName}</div>
              <div>

                  {product.addedToFavourite == true ? (
                      <Liked />
                      ) : (
                          
                          <NotLiked />
                  )}
              </div>
            </div>

            <div className={`w-full text-center my-4`}>
            <Image src={product.productPicture} layout={`intrinsic`} height={80} width={100} />
            <div className={`text-[#262626] text-[16px] font-medium`}>{product.productName}</div>
            <div className={`flex justify-center font-semibold text-[14px] items-center`}>N{product.productPrice} <FontAwesomeIcon icon={faTag} className={`w-4 h-6 text-primary ml-2`} /></div>
            </div>

            <button className={`text-center w-full bg-primary flex items-center justify-center font-bold rounded-[20px] py-2 text-white text-[14px]`}>Swap <AiOutlineSwap className={`text-white text-[20px] ml-2`} /></button>
          </div>
            );
        })
          
        )}

        
          

        </div>
      </div>
    );
}