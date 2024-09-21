import React, { useState } from 'react'
import icon from "../assets/icon.svg"
import { FiAlignJustify } from "react-icons/fi";
import MenuModel from './MenuModel';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
const Navbar = () => {
  const [menu, setMenu] = useState(false)
  return (
    <nav className='h-[71px] border-b scale-105 w-full shadow-sm '>
      <div className='flex justify-between lg:justify-center px-5 sm:px-10 lg:px-0 py-2 sm:gap-8 md:gap-24 items-center h-full w-full'>
          <div title='logo' className='h-full flex gap-0 items-center cursor-pointer  '>
            <FiAlignJustify onClick={()=>setMenu(true)} color='#39B75D' className='size-7 sm:size-12 lg:hidden' />
            <img src={icon} className='  size-7 sm:size-12' alt="brand logo" />
             <span className='font-bold text-3xl text-[#39B75D] hidden sm:block'>Printify</span>
          </div>
          <div className="hidden lg:flex items-center space-x-10 p-6 bg-white">
        <a href="#" className="textBtn">
          Catalog
        </a>

        <div className="relative group">
          <div className="flex items-center space-x-1  textBtn  cursor-pointer">
            <span>How it works</span>
            <FaAngleDown className='block group-hover:hidden' />
            <FaAngleUp className='hidden group-hover:block' />
          </div>
          <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 mt-2 w-40">
            <li>
              <a href="#" className="textBtn block px-4 py-2 hover:bg-gray-100">
                How Printify Works
              </a>
            </li>
            <li>
              <a href="#" className="textBtn block px-4 py-2 hover:bg-gray-100">
                Print On Demand
              </a>
            </li>
            <li>
              <a href="#" className="textBtn block px-4 py-2 hover:bg-gray-100">
                Printify Quality Promise
              </a>
            </li>
            <li>
              <a href="#" className="textBtn block px-4 py-2 hover:bg-gray-100">
                What to Sell?
              </a>
            </li>
          </ul>
        </div>

        <a href="#" className="textBtn  ">
          Pricing
        </a>

        <a href="#" className="textBtn ">
          Blog
        </a>

        <div className="relative group">
          <div className="flex items-center space-x-1  textBtn  cursor-pointer">
            <span>Services</span>
            <FaAngleDown className='block group-hover:hidden' />
            <FaAngleUp className='hidden group-hover:block' />
          </div>
          <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 mt-2 w-40">
            <li>
              <a href="#" className="textBtn block px-4 py-2 hover:bg-gray-100">
                Printify Studio
              </a>
            </li>
            <li>
              <a href="#" className="textBtn block px-4 py-2 hover:bg-gray-100">
                Printify Express Delivery
              </a>
            </li>
            <li>
              <a href="#" className="textBtn block px-4 py-2 hover:bg-gray-100">
                Transfer Products
              </a>
            </li>
            <li>
              <a href="#" className="textBtn block px-4 py-2 hover:bg-gray-100">
                Order In Bulk
              </a>
            </li>
            <li>
              <a href="#" className="textBtn block px-4 py-2 hover:bg-gray-100">
                Experts Program
              </a>
            </li>
          </ul>
        </div>

        <div className="relative group">
          <div className="flex items-center space-x-1  textBtn cursor-pointer">
            <span>Use-cases</span>
            <FaAngleDown className='block group-hover:hidden' />
            <FaAngleUp className='hidden group-hover:block' />
          </div>
          <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 mt-2 w-40">
            <li>
              <a href="#" className="textBtn block px-4 py-2 hover:bg-gray-100">
                Merch for Fans
              </a>
            </li>
            <li>
              <a href="#" className="textBtn block px-4 py-2 hover:bg-gray-100">
                Merch for eCommerce
              </a>
            </li>
            <li>
              <a href="#" className="textBtn block px-4 py-2 hover:bg-gray-100">
                Merch for Enterprises
              </a>
            </li>
            <li>
              <a href="#" className="textBtn block px-4 py-2 hover:bg-gray-100">
                Grow Your Store
              </a>
            </li>
          </ul>
        </div>

        <div className="relative group">
          <div className="flex items-center space-x-1 textBtn cursor-pointer">
            <span>Need help?</span>
            <FaAngleDown className='block group-hover:hidden' />
            <FaAngleUp className='hidden group-hover:block' />
          </div>
          <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 mt-2 w-40">
            <li>
              <a href="#" className="textBtn block px-4 py-2 hover:bg-gray-100">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="textBtn block px-4 py-2 hover:bg-gray-100">
                Contacts
              </a>
            </li>
            <li>
              <a href="#" className="textBtn block px-4 py-2 hover:bg-gray-100">
                My Requests
              </a>
            </li>
          </ul>
        </div>
      </div>
          {
            menu && 
            <MenuModel setMenu={setMenu} />
          }
       
          <div className='flex gap-4 pr-3'>
            <a className='withoutColorBtn rounded px-2 sm:px-3 py-[2px] sm:py-1' href="#">Log in</a>
            <a className='withColorBtn rounded px-2 sm:px-3 py-[2px] sm:py-1' href="#">Sign up</a>
          </div>
      </div>
    </nav>
  )
}

export default Navbar