import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Slidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2 border-gray-900'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
      
        <NavLink className='flex items-center gap-3 border border-gray-900 border-r-0 px-3 py-2 rounded-' to="/add">
            <img className='w-5 h-5' src={assets.add_icon} alt="" />
            <p className='hidden md:block'>Thêm sản phẩm</p>
        </NavLink>

        <NavLink className='flex items-center gap-3 border border-gray-900 border-r-0 px-3 py-2 rounded-' to="/list">
            <img className='w-5 h-5' src={assets.order_icon} alt="" />
            <p className='hidden md:block'>Danh sách sản phẩm</p>
        </NavLink>

        <NavLink className='flex items-center gap-3 border border-gray-900 border-r-0 px-3 py-2 rounded-' to="/order">
            <img className='w-5 h-5' src={assets.order_icon} alt="" />
            <p className='hidden md:block'>Đơn hàng</p>
        </NavLink>

        <NavLink className='flex items-center gap-3 border border-gray-900 border-r-0 px-3 py-2 rounded-' to="/">
            <img className='w-5 h-5' src={assets.add_icon} alt="" />
            <p className='hidden md:block'>Thống kê</p>
        </NavLink>

        <NavLink className='flex items-center gap-3 border border-gray-900 border-r-0 px-3 py-2 rounded-' to="/">
            <img className='w-5 h-5' src={assets.add_icon} alt="" />
            <p className='hidden md:block'>Bình luận</p>
        </NavLink>

      </div>
    </div>
  )
}

export default Slidebar
