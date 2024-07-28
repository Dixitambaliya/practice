// components/Products/Products.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductsData from '../ProductDetail/ProductData';
import { FaStar } from 'react-icons/fa6';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 100]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const filteredProducts = ProductsData.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;
    const priceMatch =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  return (
    <div className="mt-14 mb-12">
      <div className="container flex">
        {/* Filter Menu */}
        <div className="w-1/4 p-4 border-r">
          <h3 className="font-bold mb-4">Filter By</h3>
          <div className="mb-4">
            <h4 className="font-semibold">Category</h4>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full p-2 mt-2 border rounded"
            >
              <option value="All">All</option>
              <option value="Ethnic">Ethnic</option>
              <option value="Western">Western</option>
              <option value="Accessories">Accessories</option>
              <option value="T-Shirt">T-Shirt</option>
            </select>
          </div>
          <div>
            <h4 className="font-semibold">Price Range</h4>
            <Slider
              range
              min={0}
              max={100}
              value={priceRange}
              onChange={handlePriceChange}
              className="mt-2"
            />
            <div className="flex justify-between text-sm mt-2">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>
        {/* Products Section */}
        <div className="w-3/4">
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm text-primary">Top Selling Products for you</p>
            <h1 className="text-3xl font-bold">Products</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-5">
            {/* Card section */}
            {filteredProducts.map((data) => (
              <Link to={`/products/${data.id}`} key={data.id} className="space-y-3 p-2">
                <img src={data.img} alt={data.title} className="h-[220px] w-[150px] object-cover rounded-md" />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* View all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
