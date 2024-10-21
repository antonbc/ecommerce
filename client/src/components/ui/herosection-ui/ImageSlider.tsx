//import { useState } from "react";

function ImageSlider() {
  const [pageIndex, setPageIndex] = useState(0)

  function handleBackPageClick(){
    return setPageIndex(pageIndex - 1)
  }
  function handleNextPageClick(){
    return setPageIndex(pageIndex + 1)
  }
  
  return (
    <div className="">
      <img src="src/assets/images/heroimage1.jpg" alt="hero-image-1" className="w-full h-full object-cover"/>
    </div>
  );
}

export default ImageSlider;
