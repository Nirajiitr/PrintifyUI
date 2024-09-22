import React from "react";
import icon from "../assets/icon.svg";
import { FaFacebook, FaTiktok, FaReddit, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import FooterSection from "./FooterSection";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      <div className="flex flex-wrap gap-10 justify-between py-5 px-3 sm:px-10 xl:px-20 items-center w-full">
        <div className="flex items-center cursor-pointer">
          <img
            src={icon}
            className="w-10 h-10 sm:w-12 sm:h-12"
            alt="brand logo"
          />
          <span className="font-bold text-2xl sm:text-3xl text-[#39B75D]">
            Printify
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <SocialIcon icon={FaFacebook} />
          <SocialIcon icon={FaInstagram} />
          <SocialIcon icon={IoLogoLinkedin} />
          <SocialIcon icon={RiTwitterXLine} />
          <SocialIcon icon={FaYoutube} />
          <SocialIcon icon={FaTiktok} />
          <SocialIcon icon={FaReddit} />
        </div>
      </div>
      <div className="w-full px-3 sm:px-10 xl:px-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 py-5">
        <FooterSection
          title="Integrations"
          links={[
            "Shopify",
            "Etsy",
            "eBay",
            "Amazon",
            "TikTok Shop",
            "PrestaShop",
            "BigCommerce",
            "Wix",
            "WooCommerce",
            "Squarespace",
            "Printify API",
            "Printify Pop-Up Store",
            "Shutterstock",
          ]}
        />
        <FooterSection
          title="Discover"
          links={[
            "Blog",
            "Guides",
            "Products",
            "Etsy print-on-demand",
            "Shopify print-on-demand",
            "Woocommerce print-on-demand",
            "Wix print-on-demand",
            "Squarespace print-on-demand",
            "Make Your Own Shirt",
            "Brands",
            "Pricing",
            "Shipping Rates",
            "Mockup Generator",
          ]}
        />
        <FooterSection
          title="Start selling"
          links={[
            "Custom T-shirts",
            "Custom Hoodies",
            "Custom Mugs",
            "Custom Socks",
            "Custom Backpacks",
            "Custom Branding",
            "Sell on Etsy",
            "Sell on Social Media",
            "Free T-shirt Designs",
            "Custom Products",
            "Start a Clothing Line",
            "Start POD Business",
            "Bulk Orders",
            "Transferring To Printify",
          ]}
        />
        <FooterSection
          title="Printify"
          links={[
            "Print on Demand",
            "Print Providers",
            "Experts Program",
            "Printify Express Delivery",
            "Become a Partner",
            "About",
            "Jobs",
            "Webinars",
            "Podcast",
            "Contact Us",
            "Affiliate",
            "POD Glossary",
          ]}
        />
      </div>
      <div className="w-screen bg-[#F7F7F7] flex flex-col justify-center items-center py-5 mt-5 gap-1">
        <div className="flex gap-3">
          <a href="#" className="textBtn">
            Intellectual Property Policy
          </a>
          <a href="#" className="textBtn">
            Terms of Service
          </a>
          <a href="#" className="textBtn">
            Privacy Policy
          </a>
          <a href="#" className="textBtn">
            Security
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Printify, Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

const SocialIcon = ({ icon: Icon }) => (
  <a href="#" className="textBtn">
    <Icon color="#39B75D" size="24px" />
  </a>
);

export default Footer;
