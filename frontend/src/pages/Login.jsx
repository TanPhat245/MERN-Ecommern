import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
const Login = () => {


  const [currentState, setCurrentState] = useState('Đăng nhập');
  const { token, setToken, navigate, backenUrl } = useContext(ShopContext)
  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Đăng ký') {
        const response = await axios.post(backenUrl + '/api/user/register',{name,email,password})
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
          toast.success(response.data.message)
        } else {
          toast.error(response.data.message)
        }
        
      }
      else {
        const response = await axios.post(backenUrl + '/api/user/login', {email,password})
        if(response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
          toast.success(response.data.message)
        }
        else {
          toast.error(response.data.message)
        }
        
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }
  useEffect(()=>{
    if (token) {
      navigate('/')
    }
  },[token])
  
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Đăng nhập' ? '' : <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Tên' required />}
      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
      <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Mật khẩu' required />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Quên mật khẩu?</p>
        {
          currentState === 'Đăng nhập'
            ? <p onClick={() => setCurrentState('Đăng ký')} className='cursor-pointer'>Tạo tài khoản</p>
            : <p onClick={() => setCurrentState('Đăng nhập')} className='cursor-pointer'>Đăng nhập</p>
        }
      </div>
      <button className='bg-red-500 text-white font-light px-8 py-2 mt-4'>{currentState === 'Đăng nhập' ? 'Đăng nhập' : 'Đăng ký'}</button>
    </form>
  )
}

export default Login
