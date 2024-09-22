import React from "react";

const FooterSection = ({ title, links }) => {
  return (
    <div className="flex flex-col space-y-2">
      <strong>{title}</strong>
      {links.map((link, index) => (
        <a key={index} href="#" className="textBtn">
          {link}
        </a>
      ))}
    </div>
  );
};

export default FooterSection;
