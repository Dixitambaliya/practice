// components/ProductDetail/ProductDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductsData from './ProductData';

const ProductDetail = () => {
  const { id } = useParams();
  const product = ProductsData.find((prod) => prod.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img src={product.img} alt={product.title} className="w-full h-auto" />
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-lg mb-2">Category: {product.category}</p>
          <p className="text-lg mb-2">Color: {product.color}</p>
          <p className="text-lg font-semibold mb-4">${product.price}</p>
          <p className="mb-4">Rating: {product.rating} <span className="text-yellow-500">★</span></p>
          <p>{product.description}</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Other Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {ProductsData.filter((prod) => prod.id !== product.id).map((otherProduct) => (
            <Link to={`/products/${otherProduct.id}`} key={otherProduct.id} className="border rounded-lg overflow-hidden">
              <img src={otherProduct.img} alt={otherProduct.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{otherProduct.title}</h3>
                <p className="text-sm text-gray-600">{otherProduct.color}</p>
                <p className="text-lg font-semibold">${otherProduct.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
