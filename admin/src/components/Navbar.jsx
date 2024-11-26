import React from 'react'
const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img className='w-[max(10%,80px)]' src="https://shop-t1-na.gg/cdn/shop/files/T1_Logo_Vector__e2012c_130x.png?v=1662060200" alt="" />
      <button onClick={()=>setToken('')} className='bg-green-600 text-white px-5 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Đăng xuất</button>
    </div>
  )
}

export default Navbar
