"use client";

import { BiUser } from "react-icons/bi";

import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 border-t-2 via-purple-500 to-pink-500 border-b border-gray-200 py-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="font-bold text-3xl sm:text-4xl text-center sm:text-left pb-4 sm:pb-0 text-white">
          <span className="text-2xl">Shop</span>Mate
        </div>

        <div className="flex gap-6 text-white text-2xl">
          <BiUser className="cursor-pointer hover:text-indigo-200 transition duration-300" />

          <div className="relative cursor-pointer hover:text-indigo-200">
            <FiHeart />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white flex items-center justify-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>

          <div
            className="relative cursor-pointer hover:text-indigo-200"
            
          >
            <HiOutlineShoppingBag />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white flex items-center justify-center translate-x-1 -translate-y-1">0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
