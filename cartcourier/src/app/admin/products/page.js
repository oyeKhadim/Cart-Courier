"use client";
import React, { useState, useEffect } from "react";
import ProductComponent from "../../../components/product";
import AdminSidebar from "../../../components/admin-sidebar";
import AddProductModal from "../../../components/add-product";
import { showToast } from "react-next-toast";
import { saveLog } from "../../../lib/log";

const AdminManageProducts = () => {
	const [products, setProducts] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	// Fetch products
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch("/api/product", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				});
				if (response.ok) {
					const data = await response.json();
					await saveLog("AdminManageProducts", "fetchProducts", "Success");
					setProducts(data.products); // Set the fetched products to state
				} else {
					console.error("Failed to fetch products:", response.statusText);
					await saveLog(
						"AdminManageProducts",
						"fetchProducts",
						response.statusText
					);
				}
			} catch (error) {
				await saveLog("AdminManageProducts", "fetchProducts", error);
				console.error("Error fetching products:", error);
			}
		};

		fetchProducts();
	}, []);
	const handleAddProduct = () => {
		console.log("Adding a new product...");
		setIsModalOpen(true);
	};
	//Save Prducts in db
	const handleSaveProduct = async (newProduct) => {
		try {
			const response = await fetch("/api/product", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newProduct),
			});

			if (response.ok) {
				const data = await response.json();
				await saveLog("AdminManageProducts", "handleSaveProduct", "Success");
				console.log("Product added:", data.product);
				setProducts([...products, data.product]); // Update the products state with the newly added product
				setIsModalOpen(false); // Close the modal after successful addition
			} else {
				console.error("Failed to add product:", response.statusText);
				await saveLog(
					"AdminManageProducts",
					"handleSaveProduct",
					response.statusText
				);
			}
		} catch (error) {
			await saveLog("AdminManageProducts", "handleSaveProduct", error);
			console.error("Error adding product:", error);
		}
	};
	//Closing model
	const handleCloseModal = () => {
		setIsModalOpen(false);
	};
	//Edit product
	const handleEditProduct = (product) => {
		console.log("Editing product:", product);
	};
	//Delete Product
	const handleDeleteProduct = async (productId) => {
		const updatedProducts = products.filter(
			(product) => product._id !== productId
		);
		setProducts(updatedProducts);
		showToast.success(`Product deleted successfully.`);
		// try {
		// 	console.log("Deleting product with ID:", productId);

		// 	const response = await fetch(`/api/product/${productId}`, {
		// 		method: "DELETE",
		// 	});
		// 	console.log(response);
		// 	if (response.ok) {
		// 		const updatedProducts = products.filter(
		// 			(product) => product._id !== productId
		// 		);
		// 		setProducts(updatedProducts);
		// 		console.log(`Product with ID ${productId} deleted successfully.`);
		// 	} else {
		// 		console.error(`Failed to delete product with ID ${productId}.`);
		// 		// Handle error condition if needed
		// 	}
		// } catch (error) {
		// 	console.error("Error deleting product:", error);
		// 	// Handle error condition if needed
		// }
	};

	return (
		<div className="flex">
			<AdminSidebar />
			<div className="flex-1 container mx-auto py-8">
				<h1 className="text-2xl text-center font-bold mb-4">Manage Products</h1>
				<button
					className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
					onClick={handleAddProduct}
				>
					Add Product
				</button>
				<div>
					{products.map((product) => (
						<ProductComponent
							key={product._id}
							product={product}
							onEdit={handleEditProduct}
							onDelete={handleDeleteProduct}
						/>
					))}
				</div>
				<AddProductModal
					isOpen={isModalOpen}
					onClose={handleCloseModal}
					onSave={handleSaveProduct}
				/>
			</div>
		</div>
	);
};

export default AdminManageProducts;
