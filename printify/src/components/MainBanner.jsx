import React from "react";
import bannerImg from "../assets/banner-img.png";
import { FaRegPlayCircle } from "react-icons/fa";
import { IoCheckmarkOutline } from "react-icons/io5";
import logo from "../assets/icon.svg";
const MainBanner = () => {
  return (
    <div className="w-full mt-[71px] flex flex-col sm:flex-row max-w-[1440px] mx-auto px-5 sm:px-10 xl:px-20 items-center ">
      <div className="w-full self-center">
        <h1 className="text-[32px] leading-10 text-[#17262b] font-bold text-wrap  lg:text-[56px] lg:leading-[72px]">
          Create and sell custom products
        </h1>
        <ul className="pt-4 leading-6 font-medium text-[#485256] w-full">
          <li className="flex gap-1 items-center pt-2 pl-5">
            <IoCheckmarkOutline color="#39B75D" size="20px" />
            100% Free to use
          </li>
          <li className="flex gap-1 items-center pt-2 pl-5">
            <IoCheckmarkOutline color="#39B75D" size="20px" />
            900+ High-Quality Products
          </li>
          <li className="flex gap-1 items-center pt-2 pl-5">
            <IoCheckmarkOutline color="#39B75D" size="20px" />
            Largest global print network
          </li>
        </ul>
        <div className="flex gap-4 pt-12 flex-wrap ">
          <a className="withColorBtn rounded px-8 py-3" href="#">
            Start for free
          </a>
          <div className="flex items-center">
            <a
              className="withoutColorBtn inline-flex items-center gap-2 rounded px-5 py-3"
              href="#"
            >
              <FaRegPlayCircle size="20px" />
              <span>How it works?</span>
            </a>
          </div>
        </div>
        <p className="text-[#39B75D] font-normal mt-4">
          Trusted by over 8M sellers around the world
        </p>
      </div>
      <div className="max-w-[500px] h-[500] p-5">
        <img src={bannerImg} className="w-full" alt="banner image" />
      </div>
      <div className="fixed bottom-6 left-6 z-50  p-3 rounded-full shadow-3xl">
        <a href="#"><img src={logo} alt="brand logo" className="w-5 h-5" /></a>
        
      </div>
    </div>
  );
};

export default MainBanner;
