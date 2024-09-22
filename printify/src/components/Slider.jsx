import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
const Slider = ({ CardInf, location }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handlePrev = () => {
    setCurrentSlide(
      currentSlide === 0 ? CardInf.length - 1 : currentSlide - 1
    );
  };
  const handleNext = () => {
    setCurrentSlide(
      currentSlide === CardInf.length - 1 ? 0 : currentSlide + 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % CardInf.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [CardInf.length]);
  return (
    <div className=" relative flex justify-center items-center w-full h-96  mb-10">
      <BsArrowLeftCircleFill
        onClick={handlePrev}
        color="#485256"
        className=" cursor-pointer size-8 absolute left-4"
      />
      {CardInf.length !== 0
        ? CardInf.map((item, index) => {
            return (
              <div className={`${location !=="workSection"&& "bg-white", currentSlide === index ? "block" : "hidden" } w-80 flex flex-col items-center flex-wrap`}>
                <img
                  key={index}
                  className="rounded w-40"
                  src={item.imgUrl}
                  alt="img"
                />
                {
                    location ==="workSection" ? <div className="w-full flex flex-col items-center flex-wrap px-4">
                        <h1 className="text-xl font-bold text-[#29ab51]">{item?.heading?.toUpperCase()}</h1>
                        <h2 className="text-xl font-semibold">{item?.subHeading}</h2>
                        <p>{item?.desc}</p>
                    </div> : <div></div>
                }
              </div>
            );
          })
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        color="#485256"
        className="cursor-pointer size-8 absolute right-10 "
      />
      <span className=" absolute flex gap-2 bottom-1">
        {CardInf.length !== 0
          ? CardInf.map((_, index) => (
              <button
                className={`w-3 h-3  rounded-full  border-none focus:outline-none ${
                  currentSlide === index ? "bg-[#39b75d]" : "bg-gray-500"
                }`}
                key={index}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default Slider;
