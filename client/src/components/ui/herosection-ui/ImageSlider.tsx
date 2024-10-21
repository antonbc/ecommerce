import { useState } from "react";
import Slides from "./Slides";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  function goToNextSlide(){
    const isLastSlide = currentIndex === Slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  function goToPreviousSlide(){
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }

  return (
    <div className="relative h-full">
      <FaChevronLeft className="p-2 rounded-2xl text-4xl bg-slate-100 cursor-pointer" onClick={goToPreviousSlide}/>
      <FaChevronRight className="p-2 rounded-2xl text-4xl bg-slate-100 cursor-pointer" onClick={goToNextSlide}/>
      <div className="w-full h-full bg-center bg-cover" style={{backgroundImage: `url(${Slides[currentIndex].url})`}}>

      </div>
    </div>
  );
}

export default ImageSlider;
