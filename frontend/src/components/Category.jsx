import React from 'react'
import { Link } from 'react-router-dom';

const Category = () => {
    const categories = [
        { id: 1, name: "Quần", image: "https://via.placeholder.com/150" },
        { id: 2, name: "Áo", image: "https://via.placeholder.com/150" },
        { id: 3, name: "WORLDS 2024", image: "https://via.placeholder.com/150" },
        { id: 4, name: "LCK 2024", image: "https://via.placeholder.com/150" },
        { id: 5, name: "Mô hình", image: "https://via.placeholder.com/150" },
        { id: 6, name: "Limited", image: "https://via.placeholder.com/150" },
        { id: 7, name: "Phụ kiện", image: "https://via.placeholder.com/150" },
        { id: 8, name: "Gear", image: "https://via.placeholder.com/150" },
      ];
  return (
    <div className="py-10 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Danh mục sản phẩm</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <Link to='/collection'><img
              src={category.image}
              alt={category.name}
              className="w-full h-32 object-cover"
            />
            </Link>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};
export default Category