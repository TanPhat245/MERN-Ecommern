import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const Order = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Lấy tất cả các đơn hàng
  const fetchAllOrders = async () => {
    if (!token) return;
    try {
      const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } });
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Cập nhật trạng thái đơn hàng
  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(backendUrl + '/api/order/status', { orderId, status: event.target.value }, { headers: { token } });
      if (response.data.success) {
        fetchAllOrders();
      }
    } catch (error) {
      console.error(error);
      toast.error("Cập nhật trạng thái thất bại.");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  // Hàm hiển thị chi tiết đơn hàng
  const handleViewDetails = (order) => {
    setSelectedOrder(order);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h3 className="text-3xl font-semibold text-indigo-600 mb-6">Danh sách Đơn Hàng</h3>

      <div className="space-y-6">
        {orders.map((order, index) => (
          <div key={index} className="bg-white border rounded-lg shadow-md p-6 flex flex-col sm:flex-row items-start gap-4 border-gray-200">
            
            {/* Hình ảnh biểu tượng đơn hàng */}
            <div className="flex-shrink-0 w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
              <img className="w-10 h-10" src={assets.parcel_icon} alt="parcel icon" />
            </div>
            
            {/* Thông tin đơn hàng */}
            <div className="flex-grow">
              <div className="text-gray-700">
                {order.items.map((item, index) => (
                  <p key={index} className="py-0.5">
                    {item.name} x {item.quantity} <span>{item.size}</span>
                    {index !== order.items.length - 1 && ','}
                  </p>
                ))}
              </div>
              <div className="mt-3 mb-2 font-medium text-gray-800">
                {order.address.firstName} {order.address.lastName}
              </div>
              <div className="text-sm text-gray-600">
                <p>{order.address.street}, {order.address.city}, {order.address.state}, {order.address.country}</p>
                <p>{order.address.phone}</p>
              </div>
            </div>

            {/* Thông tin thanh toán và trạng thái */}
            <div className="flex flex-col justify-between text-gray-700">
              <p className="text-sm">ĐƠN: {order.items.length}</p>
              <p className="mt-3">PHƯƠNG THỨC: <span className="font-semibold">{order.paymentMethod}</span></p>
              <p>THANH TOÁN: <span className={order.payment ? "text-green-600" : "text-red-600"}>{order.payment ? 'Đã thanh toán' : 'Chưa thanh toán'}</span></p>
              <p className="text-sm">NGÀY ĐẶT: {new Date(order.date).toLocaleDateString()}</p>
            </div>

            {/* Tổng tiền */}
            <div className="flex flex-col items-end text-lg font-semibold text-gray-800">
              <p className="mb-2 text-xl text-indigo-600">TỔNG TIỀN: <span className="text-green-600">{order.amount}{currency}</span></p>
              <select onChange={(event) => statusHandler(event, order._id)} value={order.status} className="border border-gray-300 p-2 rounded-md text-sm bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="Đã đặt hàng">Đã đặt hàng</option>
                <option value="Đang đóng gói">Đang đóng gói</option>
                <option value="Đang vận chuyển">Đang vận chuyển</option>
                <option value="Shipper té xe">Shipper té xe</option>
                <option value="Đã giao">Đã giao</option>
              </select>
            </div>

            {/* Nút Xem Chi Tiết */}
            <button className="mt-4 px-4 py-2 bg-indigo-500 text-white text-sm rounded-lg hover:bg-indigo-600 transition" onClick={() => handleViewDetails(order)}>
              Chi Tiết
            </button>
          </div>
        ))}
      </div>

      {/* Modal hiển thị chi tiết đơn hàng 12:11:21 stripe/momo/sửa sản phẩm/ cập nhật tình trạng sp, thêm xóa sửa danh mục*/}
      {selectedOrder && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h3 className="text-2xl font-semibold text-indigo-600">Chi Tiết Đơn Hàng</h3>
            <div className="mt-4">
              <p><strong>Người nhận: </strong>{selectedOrder.address.firstName} {selectedOrder.address.lastName}</p>
              <p><strong>Địa chỉ: </strong>{selectedOrder.address.street}, {selectedOrder.address.city}, {selectedOrder.address.state}, {selectedOrder.address.country}</p>
              <p><strong>Số điện thoại: </strong>{selectedOrder.address.phone}</p>
              <p><strong>Phương thức thanh toán: </strong>{selectedOrder.paymentMethod}</p>
              <p><strong>Ngày đặt: </strong>{new Date(selectedOrder.date).toLocaleDateString()}</p>
              <p><strong>Trạng thái: </strong>{selectedOrder.status}</p>
              <div>
                <h4 className="font-semibold mt-3">Danh sách sản phẩm:</h4>
                <ul>
                  {selectedOrder.items.map((item, index) => (
                    <li key={index} className="py-1">{item.name} x {item.quantity} ({item.size})</li>
                  ))}
                </ul>
              </div>
            </div>
            <button className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700" onClick={() => setSelectedOrder(null)}>
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
