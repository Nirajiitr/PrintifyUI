import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const MenuModel = ({ setMenu }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  const handleOutsideClick = (e) => {
    e.stopPropagation();
    setMenu(false);
  };

  const handleInsideClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={handleOutsideClick}
      className="lg:hidden fixed inset-0 bg-gray-600 bg-opacity-80 flex justify-start h-screen"
    >
      <div
        onClick={handleInsideClick}
        className="bg-white text-black w-[260px] flex flex-col h-full"
      >
        <div className="flex items-center justify-center border-b-[1px] border-[#e3e4e5] px-16 py-4 relative">
          <span className="font-bold text-xl">Menu</span>
          <IoMdClose
            onClick={() => setMenu(false)}
            className="absolute top-1/3 right-4 size-5 cursor-pointer"
            size={24}
          />
        </div>

        <div className="flex flex-col justify-center px-6 mt-7">
          <a href="#" className="textBtn py-3 text-lg font-bold">
            Catalog
          </a>

          <div className="py-3">
            <div
              className="flex justify-between items-center cursor-pointer text-lg textBtn font-bold"
              onClick={() => toggleSection("howItWorks")}
            >
              How it works
              {openSection === "howItWorks" ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {openSection === "howItWorks" && (
              <ul className="ml-10 mt-2 space-y-6">
                <li>
                  <a href="#" className="textBtn">
                    How Printify Works
                  </a>
                </li>
                <li>
                  <a href="#" className="textBtn">
                    Print On Demand
                  </a>
                </li>
                <li>
                  <a href="#" className="textBtn">
                    Printify Quality Promise
                  </a>
                </li>
                <li>
                  <a href="#" className="textBtn">
                    What to Sell?
                  </a>
                </li>
              </ul>
            )}
          </div>

          <a href="#" className="textBtn py-3 text-lg font-bold">
            Pricing
          </a>

          <a href="#" className="textBtn py-3 text-lg font-bold">
            Blog
          </a>

          <div className="py-3">
            <div
              className="flex justify-between items-center cursor-pointer text-lg textBtn font-bold"
              onClick={() => toggleSection("services")}
            >
              Services
              {openSection === "services" ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {openSection === "services" && (
              <ul className="ml-10 mt-2 space-y-6">
                <li>
                  <a href="#" className="textBtn">
                    Printify Studio
                  </a>
                </li>
                <li>
                  <a href="#" className="textBtn">
                    Printify Express Delivery
                  </a>
                </li>
                <li>
                  <a href="#" className="textBtn">
                    Transfer Products
                  </a>
                </li>
                <li>
                  <a href="#" className="textBtn">
                    Order In Bulk
                  </a>
                </li>
                <li>
                  <a href="#" className="textBtn">
                    Experts Program
                  </a>
                </li>
              </ul>
            )}
          </div>

          <div className="py-3">
            <div
              className="flex justify-between items-center cursor-pointer text-lg textBtn font-bold"
              onClick={() => toggleSection("useCases")}
            >
              Use-cases
              {openSection === "useCases" ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {openSection === "useCases" && (
              <ul className="ml-10 mt-2 space-y-6">
                <li>
                  <a href="#" className="textBtn">
                    Merch for Fans
                  </a>
                </li>
                <li>
                  <a href="#" className="textBtn">
                    Merch for eCommerce
                  </a>
                </li>
                <li>
                  <a href="#" className="textBtn">
                    Merch for Enterprises
                  </a>
                </li>
                <li>
                  <a href="#" className="textBtn">
                    Grow Your Store
                  </a>
                </li>
              </ul>
            )}
          </div>

          <div className="py-3">
            <div
              className="flex justify-between items-center cursor-pointer text-lg textBtn font-bold"
              onClick={() => toggleSection("needHelp")}
            >
              Need help?
              {openSection === "needHelp" ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {openSection === "needHelp" && (
              <ul className="ml-10 mt-2 space-y-6">
                <li>
                  <a href="#" className="textBtn">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="textBtn">
                    Contacts
                  </a>
                </li>
                <li>
                  <a href="#" className="textBtn">
                    My Requests
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModel;
