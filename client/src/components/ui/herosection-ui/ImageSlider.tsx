import { useState } from "react";

function ImageSlider() {
  const [pageIndex, setPageIndex] = useState(0)

  function handleBackPageClick(){
    return setPageIndex(pageIndex - 1)
  }
  function handleNextPageClick(){
    return setPageIndex(pageIndex + 1)
  }

  return (
    <div className="relative h-full">
      <div className="w-full h-full bg-center bg-cover bg-[url('')]"></div>
    </div>
  );
}

export default ImageSlider;
