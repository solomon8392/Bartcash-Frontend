import Image from "next/image";

// import "../styles/Aunctions.css";

export default function Home() {
 
  return (
    <div className="slidecontainer">
    {/* <p>Default range slider:</p> */}
    <input type="range" min="1" max="100" value="50"  className="w-[50%]"/>
    
    {/* <p>Custom range slider:</p>
    <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/> */}
  </div>
      
  );
}
