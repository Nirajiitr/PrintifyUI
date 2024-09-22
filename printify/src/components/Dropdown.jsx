import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Dropdown = ({ title, links }) => {
  return (
    <div className="group">
      <div className="flex items-center space-x-1 textBtn cursor-pointer">
        <span>{title}</span>
        <FaAngleDown className="group-hover:hidden" />
        <FaAngleUp className="hidden group-hover:block" />
      </div>
      <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-3 w-auto border border-t-transparent">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="textBtn block px-4 py-2">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
