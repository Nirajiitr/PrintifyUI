import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Dropdown = ({ title, links }) => {
  return (
    <div className="relative group">
      <div className="flex items-center space-x-1 textBtn cursor-pointer">
        <span>{title}</span>
        <FaAngleDown className="group-hover:hidden" />
        <FaAngleUp className="hidden group-hover:block" />
      </div>
      <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 mt-2 w-40">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="textBtn block px-4 py-2 hover:bg-gray-100">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
