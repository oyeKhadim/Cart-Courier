import React, { useState } from "react";
import Modal from "react-modal";

const ProductDetailsModal = ({
	product,
	isOpen,
	onRequestClose,
	onAddToCart,
}) => {
	const [quantity, setQuantity] = useState(1);

	const handleQuantityChange = (e) => {
		setQuantity(parseInt(e.target.value, 10));
	};

	const handleAddToCart = () => {
		const selectedProduct = { ...product, quantity };
		onAddToCart(selectedProduct);
		setQuantity(1)
		onRequestClose(); // Close the modal after adding to cart
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			ariaHideApp={false}
			className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg border border-gray-300"
			overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
		>
			<div className="product-details w-80 max-w-full mx-auto">
				<h2 className="text-xl font-semibold mb-2">{product.name}</h2>
				<img
					src={product.image}
					alt={product.name}
					className="rounded-lg mb-4"
				/>
				<p className="mb-2">Price: ${product.price}</p>
				<p className="mb-2">Category: {product.category}</p>
				<p className="mb-4">Description: {product.description}</p>
				<div className="quantity-selector mb-4">
					<label htmlFor="quantity" className="block mb-1">
						Quantity:
					</label>
					<input
						type="number"
						id="quantity"
						value={quantity}
						onChange={handleQuantityChange}
						min="1"
						className="border border-gray-300 px-2 py-1 rounded-md w-16"
					/>
				</div>
				<button
					onClick={handleAddToCart}
					className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600"
				>
					Add to Cart
				</button>
				<button
					onClick={onRequestClose}
					className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
				>
					Close
				</button>
			</div>
		</Modal>
	);

};

export default ProductDetailsModal;
