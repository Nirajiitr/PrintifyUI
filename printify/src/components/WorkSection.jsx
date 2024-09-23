import React from "react";
import clothsComputer from "../assets/clothes-CMPWJ6JG.webp";
import clothsMobile from "../assets/clothes-mobile-Q6UN6X6P.webp";
import clothsBottom from "../assets/clothes-bottom-53OO5ML3.svg";
import yourProducts from "../assets/your-products.webp";
import fullfillment from "../assets/fullfillment.webp";
import customProduct from "../assets/custom-products.webp";
import { LuMoveRight } from "react-icons/lu";
import Slider from "./Slider";
import { useInView } from "react-intersection-observer";
import arrowDownImg from "../assets/arrow-down-S7NHO6CI.svg"

const WorkSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, 
    triggerOnce: true, 
  });
  const CardInf = [{imgUrl:customProduct, heading: "Create", subHeading: "custom products", desc : "Easily add your designs to a wide range of products using our free tools"},
     {imgUrl:yourProducts, heading: "Sell", subHeading: "on your terms", desc : "You choose the products, sale price, and where to sell"},
     {imgUrl:fullfillment, heading: "We handle", subHeading: "fulfillment", desc : "Once an order is placed, we automatically handle all the printing and delivery logistics"}]
  return (
    <div className="w-full px-4 mx-auto py-14 bg-[#f7f7f7] relative ">
      <div className="w-full flex flex-col lg:flex-row max-w-[552px] lg:max-h-[400px] lg:max-w-[1200px] mx-auto bg-white rounded-3xl relative z-10 lg:mt-40 ">
        <div className="relative">
          <img
            src={clothsMobile}
            className="bg-[#18C75A] rounded-3xl  lg:hidden "
            alt=""
          />
          <img
            src={clothsComputer}
            className="bg-[#18C75A] rounded-3xl hidden lg:h-full lg:inline-block "
            alt=""
          />
          <img
            src={clothsBottom}
            className="absolute bottom-0 right-0 lg:left-10"
            alt=""
          />
        </div>
        <div ref={ref} className={`static ${ inView && "animate-slideright"} px-6 pt-8 pb-10  rounded-3xl bg-white`}>
          <div>
            <h2 className="pr-16 text-[#17262b] text-3xl font-semibold leading-8">Easily add your design to a wide range of products</h2>
            <p className="text-[#485256] opacity-70 py-7">
              With our free design tools, you can easily add your custom designs
              to t-shirts, mugs, phone cases, and hundreds of other products.
            </p>
            <a href="#" className="font-normal text-[#39b75d] flex gap-1 items-center">All products<LuMoveRight size="26px" /></a>
          </div>
        </div>
      </div>
      <div>
        <Slider CardInf = {CardInf} location="workSection" />
     </div>
      <img src={arrowDownImg} className="absolute top-0 left-[40%] bg-[#f7f7f7] hidden lg:block w-72" alt="" />
    </div>
  );
};

export default WorkSection;
