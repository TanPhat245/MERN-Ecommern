import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Slidebar = () => {
  // State để quản lý mở/đóng menu con
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);

  return (
    <div className="w-[20%] min-h-screen bg-gray-100 border-r border-gray-300">
      <div className="flex flex-col gap-2 pt-6 pl-4 text-gray-700">
        {/* Header */}
        <h2 className="text-lg font-semibold pl-2 mb-4">Menu</h2>

        {/* Dashboard */}
        <NavLink
          className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gray-200 transition-all"
          to="/"
        >
          <img className="w-5 h-5" src={assets.dashboard_icon} alt="" />
          <span className="text-sm font-medium">Dashboard</span>
        </NavLink>

        {/* Category */}
        <div>
          <div
            className="flex items-center justify-between gap-3 py-3 px-4 rounded-lg hover:bg-gray-200 transition-all cursor-pointer"
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          >
            <div className="flex items-center gap-3">
              <img className="w-5 h-5" src={assets.category_icon} alt="" />
              <span className="text-sm font-medium">Category</span>
            </div>
            <span>{isCategoryOpen ? '▲' : '▼'}</span>
          </div>
          {isCategoryOpen && (
            <div className="ml-8 mt-1">
              <NavLink
                className="block py-2 px-4 rounded-lg hover:bg-gray-200 transition-all"
                to="/category/add"
              >
                Thêm
              </NavLink>
              <NavLink
                className="block py-2 px-4 rounded-lg hover:bg-gray-200 transition-all"
                to="/category/list"
              >
                Danh sách
              </NavLink>
            </div>
          )}
        </div>

        {/* Products */}
        <div>
          <div
            className="flex items-center justify-between gap-3 py-3 px-4 rounded-lg hover:bg-gray-200 transition-all cursor-pointer"
            onClick={() => setIsProductOpen(!isProductOpen)}
          >
            <div className="flex items-center gap-3">
              <img className="w-5 h-5" src={assets.product_icon} alt="" />
              <span className="text-sm font-medium">Products</span>
            </div>
            <span>{isProductOpen ? '▲' : '▼'}</span>
          </div>
          {isProductOpen && (
            <div className="ml-8 mt-1">
              <NavLink
                className="block py-2 px-4 rounded-lg hover:bg-gray-200 transition-all"
                to="/add"
              >
                Thêm
              </NavLink>
              <NavLink
                className="block py-2 px-4 rounded-lg hover:bg-gray-200 transition-all"
                to="/list"
              >
                Danh sách
              </NavLink>
            </div>
          )}
        </div>

        {/* Orders */}
        <NavLink
          className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gray-200 transition-all"
          to="/orders"
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="" />
          <span className="text-sm font-medium">Orders</span>
        </NavLink>

        {/* Comments */}
        <NavLink
          className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gray-200 transition-all"
          to="/comments"
        >
          <img className="w-5 h-5" src={assets.comment_icon} alt="" />
          <span className="text-sm font-medium">Comments</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Slidebar;
