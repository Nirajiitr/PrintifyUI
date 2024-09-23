import React from 'react';
import { useInView } from 'react-intersection-observer';
import bigcommerce from "../assets/big-commerce-EGSGKPYX.svg";
import etsyMXXFYORZ from "../assets/etsy-MXXFYORZ.svg";
import presta54F6AYUU from "../assets/presta-54F6AYUU.svg";
import shopify3NAPXPBF from "../assets/shopify-3NAPXPBF.svg";
import wixMWZCZDTE from "../assets/wix-MWZCZDTE.svg";
import wooPGFAG65X from "../assets/woo-PGFAG65X.svg";
import squarespaceFIBF2RIF from "../assets/squarespace-FIBF2RIF.svg";
import logo from "../assets/icon.svg";

const ConnectStoreSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, 
    triggerOnce: true, 
  });

  return (
    <div ref={ref} className="bg-white py-10 px-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-[#17262B]">Connect your store</h2>
        <p className="text-[#858B8E] py-5">
          Printify easily integrates with major e-commerce platforms and marketplaces
        </p>
      </div>

      <div className="relative flex justify-center items-center">
      
        <div
          className={`absolute bg-[#18C75A] rounded-lg shadow-lg p-6 z-10 flex justify-center items-center w-24 h-24 ${
            inView ? 'animate-flower-open' : 'opacity-0'
          }`}
        >
          <a href="#">
            <img src={logo} alt="brand logo" className="w-12 h-12" />
          </a>
        </div>

        
        <div className="grid grid-cols-3 gap-4 lg:gap-16 sm:grid-cols-4 lg:grid-cols-5 max-w-6xl mx-auto">
          <div className={`flex justify-center items-center bg-white rounded-lg shadow-lg p-4 w-24 h-24 ${inView ? 'animate-flower-open' : 'opacity-0'}`}>
            <img src={bigcommerce} alt="BigCommerce" className="w-12 h-12" />
          </div>
          <div className={`flex justify-center items-center bg-white rounded-lg shadow-lg p-4 w-24 h-24 ${inView ? 'animate-flower-open' : 'opacity-0'}`}>
            <img src={squarespaceFIBF2RIF} alt="Squarespace" className="w-12 h-12" />
          </div>
          <div className={`flex justify-center items-center bg-white rounded-lg shadow-lg p-4 w-24 h-24 ${inView ? 'animate-flower-open' : 'opacity-0'}`}>
            <img src={wixMWZCZDTE} alt="Wix" className="w-12 h-12" />
          </div>
          <div className={`flex justify-center items-center bg-white rounded-lg shadow-lg p-4 w-24 h-24 ${inView ? 'animate-flower-open' : 'opacity-0'}`}>
            <img src={wooPGFAG65X} alt="WooCommerce" className="w-12 h-12" />
          </div>
          <div className={`flex justify-center items-center bg-white rounded-lg shadow-lg p-4 w-24 h-24 ${inView ? 'animate-flower-open' : 'opacity-0'}`}>
            <img src={etsyMXXFYORZ} alt="Etsy" className="w-12 h-12" />
          </div>
          <div className={`flex justify-center items-center bg-white rounded-lg shadow-lg p-4 w-24 h-24 ${inView ? 'animate-flower-open' : 'opacity-0'}`}>
            <img src={shopify3NAPXPBF} alt="Shopify" className="w-12 h-12" />
          </div>
          <div className={`flex justify-center items-center bg-white rounded-lg shadow-lg p-4 w-24 h-24 ${inView ? 'animate-flower-open' : 'opacity-0'}`}>
            <img src={presta54F6AYUU} alt="PrestaShop" className="w-12 h-12" />
          </div>
          <div className={`flex justify-center items-center bg-white rounded-lg shadow-lg p-4 w-24 h-24 ${inView ? 'animate-flower-open' : 'opacity-0'}`}>
            <span className="text-sm text-gray-700">And more</span>
          </div>
          <div className={`flex justify-center items-center bg-white rounded-lg shadow-lg p-4 w-24 h-24 ${inView ? 'animate-flower-open' : 'opacity-0'}`}>
            <span className="text-sm text-gray-700">API</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectStoreSection;
