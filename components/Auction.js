import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBroadcastTower } from '@fortawesome/free-solid-svg-icons';
import { faApple, faAppStore, faFacebook, faGooglePlay, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Home({ auctionProps }) {
    return (
        <div className={`mb-4`}>
            <div className={`bg-yellow text-primary text-center py-4 mb-2 font-bold font-[40px] mx-6`}>{auctionProps.productTitle}</div>

            <div className={`flex gap-4 xl:gap-10 ml-6 overflow-x-auto`}>
                {auctionProps.products.map((product, index) => {
                    return (
                        <div key={index} className={`w-[350px] p-2 shrink-0`}>
                            <div className={`flex gap-x-4 py-2 items-center`}>
                            <Image src={product.userPicture} layout='intrinsic' className={`rounded-full`} width={35} height={35} />
                            <div className={`font-medium`}>{product.userName}</div>
                            {product.live == true ? (
                                <div className={`text-green-600 font-bold`}>Live <FontAwesomeIcon icon={faBroadcastTower} className={`w-4 h-4`} /></div>
                            ) : ""}
                            </div>
                            <div className={`w-full rounded-[20px] overflow-hidden`}>
                            <Image src={product.productPicture} layout={`responsive`} height={60} width={100} />
                            </div>
                            <div className={`my-2`}>
                            {product.productDescription.length > 80 ? (
                                <div>{product.productDescription.slice(0, 80)}...</div>
                            ) : (
                                <div>{product.productDescription}</div>
                            )}
                            </div>
                            

                        </div>
                    )
                })}
            </div>

            </div>
    );
}