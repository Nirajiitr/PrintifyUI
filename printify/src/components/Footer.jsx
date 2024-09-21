import React from "react";
import icon from "../assets/icon.svg";
import { FaFacebook, FaTiktok, FaReddit, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-wrap gap-10 justify-between py-5 max-w-[1600px] px-5 lg:px-20 items-center w-full">
        <div title="logo" className="flex gap-2 items-center cursor-pointer">
          <img src={icon} className="w-10 h-10 sm:w-12 sm:h-12" alt="brand logo" />
          <span className="font-bold text-2xl sm:text-3xl text-[#39B75D]">
            Printify
          </span>
        </div>
        <div className="flex gap-4 sm:gap-5 items-center">
          <a href="#" className="textBtn">
            <FaFacebook color="#39B75D" size="24px" />
          </a>
          <a href="#" className="textBtn">
            <FaInstagram color="#39B75D" size="24px" />
          </a>
          <a href="#" className="textBtn">
            <IoLogoLinkedin color="#39B75D" size="24px" />
          </a>
          <a href="#" className="textBtn">
            <RiTwitterXLine color="#39B75D" size="24px" />
          </a>
          <a href="#" className="textBtn">
            <FaYoutube color="#39B75D" size="24px" />
          </a>
          <a href="#" className="textBtn">
            <FaTiktok color="#39B75D" size="24px" />
          </a>
          <a href="#" className="textBtn">
            <FaReddit color="#39B75D" size="24px" />
          </a>
        </div>
      </div>

     
      <div className="w-full max-w-[1600px] px-5 lg:px-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 py-5">
        <div className="flex flex-col space-y-2">
          <a href="#" className="textBtn">Shopify</a>
          <a href="#" className="textBtn">Etsy</a>
          <a href="#" className="textBtn">eBay</a>
          <a href="#" className="textBtn">Amazon</a>
          <a href="#" className="textBtn">TikTok Shop</a>
          <a href="#" className="textBtn">PrestaShop</a>
          <a href="#" className="textBtn">BigCommerce</a>
          <a href="#" className="textBtn">Wix</a>
          <a href="#" className="textBtn">WooCommerce</a>
          <a href="#" className="textBtn">Squarespace</a>
          <a href="#" className="textBtn">Printify API</a>
          <a href="#" className="textBtn">Printify Pop-Up Store</a>
          <a href="#" className="textBtn">Shutterstock</a>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="#" className="textBtn">Blog</a>
          <a href="#" className="textBtn">Guides</a>
          <a href="#" className="textBtn">Products</a>
          <a href="#" className="textBtn">Etsy print-on-demand</a>
          <a href="#" className="textBtn">Shopify print-on-demand</a>
          <a href="#" className="textBtn">Woocommerce print-on-demand</a>
          <a href="#" className="textBtn">Wix print-on-demand</a>
          <a href="#" className="textBtn">Squarespace print-on-demand</a>
          <a href="#" className="textBtn">Make Your Own Shirt</a>
          <a href="#" className="textBtn">Brands</a>
          <a href="#" className="textBtn">Pricing</a>
          <a href="#" className="textBtn">Shipping Rates</a>
          <a href="#" className="textBtn">Mockup Generator</a>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="#" className="textBtn">Custom T-shirts</a>
          <a href="#" className="textBtn">Custom Hoodies</a>
          <a href="#" className="textBtn">Custom Mugs</a>
          <a href="#" className="textBtn">Custom Socks</a>
          <a href="#" className="textBtn">Custom Backpacks</a>
          <a href="#" className="textBtn">Custom Branding</a>
          <a href="#" className="textBtn">Sell on Etsy</a>
          <a href="#" className="textBtn">Sell on Social Media</a>
          <a href="#" className="textBtn">Free T-shirt Designs</a>
          <a href="#" className="textBtn">Custom Products</a>
          <a href="#" className="textBtn">Custom All-Over-Print Hoodies</a>
          <a href="#" className="textBtn">Start a Clothing Line</a>
          <a href="#" className="textBtn">Start POD Business</a>
          <a href="#" className="textBtn">Bulk Orders</a>
          <a href="#" className="textBtn">Transferring To Printify</a>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="#" className="textBtn">Print on Demand</a>
          <a href="#" className="textBtn">Print Providers</a>
          <a href="#" className="textBtn">Experts Program</a>
          <a href="#" className="textBtn">Printify Express Delivery</a>
          <a href="#" className="textBtn">Become a Partner</a>
          <a href="#" className="textBtn">About</a>
          <a href="#" className="textBtn">Printify Quality Promise</a>
          <a href="#" className="textBtn">Jobs</a>
          <a href="#" className="textBtn">Webinars</a>
          <a href="#" className="textBtn">Printing Profits Podcast</a>
          <a href="#" className="textBtn">Contact Us</a>
          <a href="#" className="textBtn">Affiliate</a>
          <a href="#" className="textBtn">Contact Sales</a>
          <a href="#" className="textBtn">POD Glossary</a>
          <a href="#" className="textBtn">Network Fulfillment Status</a>
          <a href="#" className="textBtn">Merchant Protection</a>
          <a href="#" className="textBtn">Security</a>
          <a href="#" className="textBtn">Sitemap</a>
        </div>
      </div>
       <div className="w-full h-28 bg-[#F7F7F7] flex flex-col mt-5 justify-center items-center gap-1">
         <div className="w-full flex gap-3 justify-center items-center">
          <a href="#" className="textBtn">Intellectual Property Policy</a>
          <a href="#" className="textBtn">Terms of Service</a>
          <a href="#" className="textBtn">Privacy Policy</a>
          <a href="#" className="textBtn">Security</a>
         </div>
         <p>&copy; {new Date().getFullYear()} Printify, Inc. All rights reserved.</p>
       </div>
    </div>
  );
};

export default Footer;
