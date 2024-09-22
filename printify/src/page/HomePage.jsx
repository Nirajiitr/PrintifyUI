import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainComponent from "../components/MainComponent";

const HomePage = () => {
  return (
    <div className="w-full mx-auto flex flex-col items-center no-scrollbar h-screen overflow-y-scroll relative">
      <Navbar />
       <MainComponent />
      <Footer />
    </div>
  );
};

export default HomePage;
