import Image from 'next/image';
import { useState, useEffect } from 'react';


export default function Home({carouselProperties}) {

    let [pictures, setPictures] = useState([]);

      const [currentImage, setCurrentImage] = useState(0);

      useEffect(() => {
        setPictures(carouselProperties);
          setTimeout(() => {
              if(currentImage == pictures.length - 1) {
                setCurrentImage(0);
                return;
              }
              setCurrentImage(currentImage + 1);
          }, 5000);
      });

    return (
        <div id="carouselExampleSlidesOnly" className="carousel my-10 mx-6 slide relative" data-bs-ride="carousel">
    <button className={`absolute md:right-5 right-2 z-40 md:bottom-5 text-xs bottom-2 bg-primary px-2 py-1 md:py-4 md:px-6 text-white z-10 hover:bg-yellow hover:text-primary rounded-[10px]`}>Start swapping</button>
  <div className="carousel-indicators absolute z-40 right-0 bottom-0 left-0 flex gap-x-2 justify-center p-0 mb-2 md:mb-10">
    {pictures.map((ele, index) => {
      return (
        <button
        key={index}
      type="button"
      // data-bs-target="#carouselExampleCaptions"
      // data-bs-slide-to="0"
      // aria-current="true"
      // aria-label="Slide 1"
      className={`${index == currentImage ? "bg-yellow h-2 w-4 rounded-[10px]" : "bg-gray-400 h-2 w-2 rounded-full"}`}
      // onClick={() => {setCurrentImage(index)}}
    ></button>
      );
    })}
  </div>
  <div className="carousel-inner relative w-full h-[160px] md:h-[360px] xl:h-[650px] rounded-[20px] overflow-hidden">

    {pictures.map((ele, index) => {
      
      return(
        <div key={index} className={`carousel-item ${index == currentImage ? "active animate-fade z-20" : "z-10"} block relative float-left w-full`}>
      <Image layout='responsive' width={12} height={6}
        src={`/images/${ele.url}`}
        // className="block w-full"
        alt="..."
      />
      {ele.writeup}
    </div>
      );
    })}
    
    {/* <div className="carousel-item relative float-left w-full">
      <Image layout='responsive' width={10} height={5}
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
        // className="block w-full"
        alt="..."
      />
    </div>
    <div className="carousel-item relative float-left w-full">
      <Image layout='responsive' width={10} height={5}
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
        // className="block w-full"
        alt="..."
      />
    </div> */}
  </div>

    

  {/* <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
</div>
    );
}