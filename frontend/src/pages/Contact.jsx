import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletter from '../components/Newsletter'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
      <Title  text1={'KẾT NỐI'} text2={'VỚI CHÚNG TÔI'}/>

      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
          <div className='flex flex-col justify-center items-start gap-6'>
              <p className='font-semibold text-xl text-gray-600'>Cửa hàng</p>
              <p>Lorem ipsum dolor sit amet consectetur,p nobis iste corrupti molestias id repellendus?!</p>
              <p>SDT: 0147258369 <br />Email: cc@gmail.commodi</p>
              <p className='font-semibold text-xl text-gray-600'>foiwoefhfhqfpqjpf</p>
              <p>Lorem, facere accusamus atque, nulla, quidem distinctio molestiae non?</p>
              <button className='border border-black px-8 py-4 text-sm hover:bg-green-600 hover:text-white transition-all duration-500'>Exlore jut</button>
          </div>
      </div>
      <Newsletter/>
    </div>
  )
}

export default Contact
