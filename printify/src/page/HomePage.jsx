import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/icon.svg";
const HomePage = () => {
  return (
    <div className="w-screen no-scrollbar h-screen overflow-y-scroll relative">
      <Navbar />
      <div className="absolute bottom-0 scale-150 left-6 p-2 rounded-full shadow-3xl ">
        <img src={logo} className="size-5 " alt="brand logo" />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
