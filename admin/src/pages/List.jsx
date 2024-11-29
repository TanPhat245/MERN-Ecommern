import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    const result = await Swal.fire({
      title: 'Xác nhận xóa',
      text: 'Bạn có chắc chắn muốn xóa sản phẩm này?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } });
        if (response.data.success) {
          toast.success(response.data.message);
          await fetchList();
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    } else {
      Swal.fire('Hủy', 'Sản phẩm không bị xóa.', 'info');
    }
  };

  const editProduct = (id) => {
    console.log('Edit product with ID:', id);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className='mb-4 text-lg font-semibold'>Danh sách sản phẩm</p>
      <div className='overflow-x-auto'>
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr_1fr] items-center py-3 px-4 border bg-gray-100 text-sm font-semibold text-gray-700'>
          <b className='text-center'>Hình</b>
          <b className='text-left'>Tên</b>
          <b className='text-center'>Loại</b>
          <b className='text-center'>Giá</b>
          <b className='text-center'>Tình trạng</b>
          <b className='text-center'>Sửa</b>
          <b className='text-center'>Xóa</b>
        </div>

        {list.map((item, index) => (
          <div
            className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr_1fr] items-center gap-4 py-3 px-4 border-b text-sm'
            key={index}
          >
            <div className='flex justify-center items-center'>
              <img className='w-16 h-16 object-cover' src={item.image[0]} alt={item.name} />
            </div>
            <p className='text-left'>{item.name}</p>
            <p className='text-center'>{item.category}</p>
            <p className='text-center'>{item.price} {currency}</p>
            <div className='flex justify-center items-center'>
              <select
                value={item.status || 'Còn hàng'}
                onChange={(e) => console.log(`Change status for ${item._id}`)}
                className='border rounded px-2 py-1 text-sm'
              >
                <option value="Còn hàng">Còn hàng</option>
                <option value="Hết hàng">Hết hàng</option>
              </select>
            </div>
            <div className='flex justify-center items-center'>
              <button
                onClick={() => editProduct(item._id)}
                className='text-blue-500 hover:text-blue-700 text-lg'
              >
                <FaEdit />
              </button>
            </div>
            <div className='flex justify-center items-center'>
              <button
                onClick={() => removeProduct(item._id)}
                className='text-red-500 hover:text-red-700 text-lg'
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
