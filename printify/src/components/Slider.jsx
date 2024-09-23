import React, { useEffect, useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { useInView } from "react-intersection-observer";

const Slider = ({ CardInf, location }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  let slideInterval;

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? CardInf.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === CardInf.length - 1 ? 0 : currentSlide + 1);
  };

  const startSlideShow = () => {
    slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % CardInf.length);
    }, 1000);
  };

  const stopSlideShow = () => {
    clearInterval(slideInterval);
  };

  useEffect(() => {
    if (!isHovered) {
      startSlideShow();
    }

    return () => {
      stopSlideShow();
    };
  }, [CardInf.length, isHovered]);
  const { ref, inView } = useInView({
    threshold: 0.5, 
    triggerOnce: true, 
  });
  return (
    <div className="relative flex justify-center items-center w-full h-96 mb-10">
      <MdArrowBackIos
        onClick={handlePrev}
        color="#485256"
        className={`cursor-pointer size-8 bottom-0 absolute left-2 ${location === "workSection" && "xl:hidden"}`}
      />
      {CardInf.length !== 0
        ? CardInf.map((item, index) => {
            return (
              <div ref={ref}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                key={index}
                className={`${
                  location !== "workSection"
                    ? "bg-white max-w-[500px] rounded-lg p-5"
                    : ""
                } ${currentSlide === index ? "inline-block" : "hidden"} ${
                  location === "workSection" && `xl:flex ${inView && "xl:animate-sliderBottom"}`
                }`}
              >
                <div
                  className={`${
                    location !== "workSection"
                      ? "flex-row items-start gap-5 w-full"
                      : "flex-col items-center w-80  flex-wrap"
                  } flex`}
                >
                  <img className="rounded w-40" src={item.imgUrl} alt="img" />
                  {location === "workSection" ? (
                    <div className="w-full flex flex-col items-center flex-wrap px-4">
                      <h1 className="text-xl font-bold text-[#29ab51]">
                        {item?.heading?.toUpperCase()}
                      </h1>
                      <h2 className="text-xl font-semibold">
                        {item?.subHeading}
                      </h2>
                      <p>{item?.desc}</p>
                    </div>
                  ) : (
                    <div>
                      <h1 className="text-2xl font-bold">{item?.name}</h1>
                      <a className="text-[#29ab51]" href={item?.linkUrl}>
                        {item?.linkTitle}
                      </a>
                      <div className="flex gap-1 text-yellow-300">
                        {Array(item.noOfStar)
                          .fill(0)
                          .map((_, i) => (
                            <IoIosStar size="24px" key={i} />
                          ))}
                      </div>
                    </div>
                  )}
                </div>
                {location !== "workSection" && (
                  <p className="py-5">{item.review}</p>
                )}
              </div>
            );
          })
        : null}
      <MdArrowForwardIos
        onClick={handleNext}
        color="#485256"
        className={`cursor-pointer size-8 bottom-0 absolute right-2 ${location === "workSection" && "xl:hidden"}`}
      />
      <span className={`absolute flex gap-2 bottom-1 ${location === "workSection" && "xl:hidden"}`}>
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
