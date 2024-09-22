import React from "react";
import higherProfit from "../assets/higher-profits.svg";
import robustScaling from "../assets/robust-scaling.svg";
import bestSelection from "../assets/best-selection.svg";
const FeatureSection = () => {
  return (
    <div className="w-full px-5 sm:px-10 xl:px-20 relative ">
      <div className="w-full flex flex-col sm:flex-row max-w-[311px]lg:max-w-[1440px] mx-auto py-14 sm:px-14 sm:py-6 sm:gap-6 lg:py-36 lg:px-16">
        <div className="relative mr-0">
          <img
            src={higherProfit}
            className="size-28 rounded-full my-0 mx-auto lg:mx-0 "
            alt="higher-profits image"
          />
          <h4 className="text-center lg:text-start pt-6 text-[#17262b] text-[24px] font-semibold leading-8">
            Higher Profits
          </h4>
          <p className="text-[#485256] text-[16px] text-center lg:text-start leading-6">
            We offer some of the lowest prices in the industry because print
            providers continuously compete to win your business.
          </p>
        </div>
        <div>
          <img
            src={robustScaling}
            className="size-28 rounded-full my-0 mx-auto lg:mx-0"
            alt="robust-scaling image"
          />
          <h4 className="text-center lg:text-start pt-6 text-[#17262b] text-[24px] font-semibold leading-8">
            Robust Scaling
          </h4>
          <p className="text-[#485256] text-[16px] text-center lg:text-start  leading-6">
            Easily handle peak holiday seasons, with our wide network of
            partners and automatic routing functionality.
          </p>
        </div>
        <div>
          <img
            src={bestSelection}
            className="size-28 rounded-full my-0 mx-auto lg:mx-0"
            alt="best-selection image"
          />
          <h4 className="text-center lg:text-start pt-6 text-[#17262b] text-[24px] font-semibold leading-8">
            Best Selection
          </h4>
          <p className="text-[#485256] text-[16px] text-center lg:text-start leading-6">
            With 900+ products and top quality brands, you can choose the best
            products for your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
