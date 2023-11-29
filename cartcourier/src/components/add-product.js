import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const AddProductModal = ({ isOpen, onClose, onSave }) => {
	const [productName, setProductName] = useState("");
	const [productDescription, setProductDescription] = useState("");
	const [productPrice, setProductPrice] = useState("");
	const [productImage, setProductImage] = useState("");
	const [productCategory, setProductCategory] = useState("");
	const [productRestaurant, setProductRestaurant] = useState("");
	const [imageFile, setImageFile] = useState(null);

	const categories = [
		"Bakery Items",
		"Dairy and Cheese",
		"Fresh Produce",
		"Meat and Seafood",
		"Pantry Staples",
		"Non-Alcoholic Beverages",
		"Alcoholic Beverages",
		"Hot Beverages",
		"Dairy Alternatives",
		"Snacks and Confectionery",
	];
	const restaurants = [
		"Marriott",
		"Hilton",
		"Hyatt",
		"InterContinental Hotels Group (IHG)",
		"Accor",
		"Wyndham",
		"Choice Hotels",
		"Best Western",
		"Radisson Hotel Group",
		"Four Seasons",
		
	];

	const handleSave = () => {
		if (
			!productName ||
			!productDescription ||
			!productPrice ||
			!productImage ||
			!productCategory ||
			!productRestaurant
		) {
			alert("Please fill in all fields");
			return;
		}
		const newProduct = {
			name: productName,
            description:productDescription,
			price: parseFloat(productPrice),
			image: productImage,
			category: productCategory,
			restaurantName: productRestaurant,
		};

		onSave(newProduct);
		onClose();
	};

	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();

		reader.onloadend = () => {
			setProductImage(reader.result);
			setImageFile(file);
		};

		if (file) {
			reader.readAsDataURL(file);
		}
	};
	const clearForm = () => {
		setProductName("");
		setProductDescription("");
		setProductPrice("");
		setProductImage("");
		setProductCategory("");
		setProductRestaurant("");
		setImageFile(null);
	};

	useEffect(() => {
		if (!isOpen) {
			clearForm();
		}
	}, [isOpen]);
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg"
			overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
		>
			<div className="p-8 bg-white rounded-lg">
				<h2 className="text-2xl font-semibold mb-4">Add Product</h2>
				<form>
					<div className="mb-4">
						<label htmlFor="productName" className="block mb-1 font-semibold">
							Product Name
						</label>
						<input
							id="productName"
							type="text"
							value={productName}
							onChange={(e) => setProductName(e.target.value)}
							className="w-full px-4 py-2 border rounded-lg"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="productDescription"
							className="block mb-1 font-semibold"
						>
							Product Description
						</label>
						<input
							id="productDescription"
							type="text"
							value={productDescription}
							onChange={(e) => setProductDescription(e.target.value)}
							className="w-full px-4 py-2 border rounded-lg"
							required
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="productPrice" className="block mb-1 font-semibold">
							Product Price
						</label>
						<input
							id="productPrice"
							type="number"
							value={productPrice}
							onChange={(e) => setProductPrice(e.target.value)}
							className="w-full px-4 py-2 border rounded-lg"
							required
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="productImage" className="block mb-1 font-semibold">
							Image
						</label>
						<input
							id="productImage"
							type="file"
							accept="image/*"
							onChange={handleImageUpload}
							className="w-full px-4 py-2 border rounded-lg"
						/>
						{productImage && (
							<img
								src={productImage}
								alt="Product"
								className="mt-2 w-24 h-24 object-cover"
							/>
						)}
					</div>
					<div className="mb-4">
						<label
							htmlFor="productCategory"
							className="block mb-1 font-semibold"
						>
							Category
						</label>
						<select
							id="productCategory"
							value={productCategory}
							onChange={(e) => setProductCategory(e.target.value)}
							className="w-full px-4 py-2 border rounded-lg"
							required
						>
							<option value="">Select Category</option>
							{categories.map((category) => (
								<option key={category} value={category}>
									{category}
								</option>
							))}
						</select>
					</div>
					<div className="mb-4">
						<label
							htmlFor="productRestaurant"
							className="block mb-1 font-semibold"
						>
							Restaurant Name
						</label>
						<select
							id="productRestaurant"
							value={productRestaurant}
							onChange={(e) => setProductRestaurant(e.target.value)}
							className="w-full px-4 py-2 border rounded-lg"
							required
						>
							<option value="">Select Restaurant</option>
							{restaurants.map((restaurant) => (
								<option key={restaurant} value={restaurant}>
									{restaurant}
								</option>
							))}
						</select>
					</div>
					<div className="flex justify-end">
						<button
							type="button"
							onClick={handleSave}
							className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
						>
							Save
						</button>
						<button
							type="button"
							onClick={onClose}
							className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</Modal>
	);
};

export default AddProductModal;
