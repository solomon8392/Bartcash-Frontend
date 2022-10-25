import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from "next/router";

export default function Home({anyActive}) {

  const router = useRouter();

    return(
        <div className={`flex justify-between items-center gap-6 px-6 py-2`}>
          {console.log(router.asPath)}
          <FontAwesomeIcon icon={faBars} className={`w-6 h-6`} />
          <button className={`block md:hidden`}>Choose a category</button>
          <button className={`hidden md:block ${router.asPath == "/" ? "text-black" : router.asPath.split("/")[2] == "books" ? "text-black" : "text-black/[0.2]"} `}  onClick={() => {router.push("/category/books")}}>Books</button>
          <button className={`hidden md:block ${router.asPath == "/" ? "text-black" : router.asPath.split("/")[2] == "computer_and_accessories" ? "text-black" : "text-black/[0.2]"}`}  onClick={() => {router.push("/category/computer_and_accessories")}}>Computer and accessories</button>
          <button className={`hidden md:block ${router.asPath == "/" ? "text-black" : router.asPath.split("/")[2] == "clothes_and_accessories" ? "text-black" : "text-black/[0.2]"}`}  onClick={() => {router.push("/category/clothes_and_accessories")}}>Cloths and accessories</button>
          <button className={`hidden md:block ${router.asPath == "/" ? "text-black" : router.asPath.split("/")[2] == "loggage_and_bags" ? "text-black" : "text-black/[0.2]"}`}  onClick={() => {router.push("/category/loggage_and_bags")}}>Luggage and bags</button>
          <button className={`hidden md:block ${router.asPath == "/" ? "text-black" : router.asPath.split("/")[2] == "furnitures" ? "text-black" : "text-black/[0.2]"}`}  onClick={() => {router.push("/category/furnitures")}}>Furnitures</button>
          <button className={`hidden md:block ${router.asPath == "/" ? "text-black" : router.asPath.split("/")[2] == "phones_and_accessories" ? "text-black" : "text-black/[0.2]"}`}  onClick={() => {router.push("/category/phones_and_accessories")}}>Phones and accessories</button>
      </div>
    );
}