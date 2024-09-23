import React from "react";
import icon from "../assets/icon.svg";
import { FaFacebook, FaTiktok, FaReddit, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import FooterSection from "./FooterSection";
 import {Integrations, Discover, Startselling, Printify} from "../data/footerData"
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
          links={Integrations}
        />
        <FooterSection
          title="Discover"
          links={Discover}
        />
        <FooterSection
          title="Start selling"
          links={Startselling}
        />
        <FooterSection
          title="Printify"
          links={Printify}
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
