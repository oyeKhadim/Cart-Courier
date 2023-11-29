import React from 'react';

const ProductComponent = ({ product, onEdit, onDelete }) => {
  const { name, price, category, restaurantName, image, createdAt, updatedAt, active } = product;

  return (
    <div className="border p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold">{name}</h3>
        <div>
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded mr-2"
            onClick={() => onEdit(product)}
          >
            Edit
          </button>
          <button
            className="px-3 py-1 bg-red-500 text-white rounded"
            onClick={() => onDelete(product._id)}
          >
            Delete
          </button>
        </div>
      </div>
      <img src={image} alt={name} className="mb-2 rounded" />
      <p>
        <strong>Price:</strong> ${price}
      </p>
      <p>
        <strong>Category:</strong> {category}
      </p>
      <p>
        <strong>Restaurant:</strong> {restaurantName}
      </p>
      
    </div>
  );
};

export default ProductComponent;
