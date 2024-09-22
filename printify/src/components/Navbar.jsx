import React, { useState } from "react";
import icon from "../assets/icon.svg";
import { FiAlignJustify } from "react-icons/fi";
import MenuModel from "./MenuModel";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="fixed bg-white h-[71px] border-b w-full shadow-sm z-50">
      <div className="flex justify-between max-w-[1440px] mx-auto px-5 sm:px-10 xl:px-20 items-center h-full w-full">
        <div className="h-full flex items-center cursor-pointer">
          <FiAlignJustify
            onClick={() => setMenu(true)}
            color="#39B75D"
            className="text-2xl sm:text-3xl lg:hidden"
          />
          <img src={icon} className="w-8 h-8 sm:w-10 sm:h-10" alt="brand logo" />
          <span className="font-bold text-2xl xl:text-3xl text-[#39B75D] hidden sm:block">
            Printify
          </span>
        </div>
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
          <a href="#" className="textBtn">Catalog</a>
          <Dropdown title="How it works" links={["How Printify Works", "Print On Demand", "Printify Quality Promise", "What to Sell?"]} />
          <a href="#" className="textBtn">Pricing</a>
          <a href="#" className="textBtn">Blog</a>
          <Dropdown title="Services" links={["Printify Studio", "Printify Express Delivery", "Transfer Products", "Order In Bulk", "Experts Program"]} />
          <Dropdown title="Use-cases" links={["Merch for Fans", "Merch for eCommerce", "Merch for Enterprises", "Grow Your Store"]} />
          <Dropdown title="Need help?" links={["Help Center", "Contacts", "My Requests"]} />
        </div>
        {menu && <MenuModel setMenu={setMenu} />}
        <div className="flex gap-4 pr-3">
          <a className="withoutColorBtn rounded px-3 py-1" href="#">Log in</a>
          <a className="withColorBtn rounded px-3 py-1" href="#">Sign up</a>
        </div>
      </div>
    </nav>
  );
};



export default Navbar;
