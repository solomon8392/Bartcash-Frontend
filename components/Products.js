import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTag, faHeart, faArrowRightArrowLeft  } from '@fortawesome/free-solid-svg-icons';
import far from '@fortawesome/free-regular-svg-icons';
import Liked from "./hearts/Liked";
import NotLiked from "./hearts/NotLiked";

export default function Home({ productsProps }) {

    const [products, setProducts] = useState(productsProps);

    return(
        <div className={`w-full px-6`}>
        <div className={`bg-yellow text-primary text-center py-4 mb-2 font-bold font-[40px]`}>{products.productTitle}</div>
        <div className={`grid grid-cols-12 gap-6 w-full my-10`}>

        {products.products.map((product) => {
            return (
                <div className={`col-span-12 md:col-span-4 xl:col-span-3 border border-[2px] border-solid p-4 border-yellow rounded-[20px]`}>
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

            <button className={`text-center w-full bg-primary flex items-center justify-center font-bold rounded-[20px] py-2 text-white text-[14px]`}>Swap <FontAwesomeIcon icon={faArrowRightArrowLeft} className={`w-4 h-6 text-white ml-2`} /></button>
          </div>
            );
        })}
          

        </div>
      </div>
    );
}