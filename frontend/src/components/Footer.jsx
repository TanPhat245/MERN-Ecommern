import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex veniam, magni velit omnis ea inventore possimus debitis, explicabo iste facere quibusdam quisquam vero nihil officia ipsum optio animi quidem. Porro.
            </p>
        </div>

            <div>
                <p className='text-xl font-medium mb-5'>CỬA HÀNG</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Trang chủ</li>
                    <li>Về chúng tôi</li>
                    <li>Giao hàng</li>
                    <li>Chính sách đổi trả</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>Liên hệ</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>0375567352</li>
                    <li>phat_liv245@gmail.com</li>
                </ul>
            </div>

      </div>
        
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ tanphat.com - All right Resverd</p>
        </div>

    </div>
  )
}

export default Footer
