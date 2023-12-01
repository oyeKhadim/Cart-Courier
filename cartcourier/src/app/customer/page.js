"use client";
import React, { useState, useEffect } from "react";
import CustomerSidebar from "../../components/customer-sidebar";
import ItemCard from "../../components/item-card";
import ProductDetails from "../../components/product-details";
import AccountDetails from "../../components/account-details";
import { useRouter } from "next/navigation";
import { saveLog } from "../../lib/log";

const CustomerDashboardPage = () => {
	const router = useRouter();
	const [items, setItems] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	useEffect(() => {
		async function fetchProducts() {
			try {
				const response = await fetch("/api/product");
				if (response.ok) {
					const productsData = await response.json();
					await saveLog("CustomerDashboardPage", "fetchProducts", "Success");
					setItems(productsData.products); // Update the 'items' state with fetched data
				} else {
					console.error("Failed to fetch products:", response.statusText);
					await saveLog(
						"CustomerDashboardPage",
						"fetchProducts",
						response.statusText
					);
				}
			} catch (error) {
				await saveLog("CustomerDashboardPage", "fetchProducts", error);
				console.error("Error fetching products:", error);
			}
		}

		fetchProducts();
	}, []);

	const handleViewDetails = (selectedItem) => {
		setSelectedProduct(selectedItem);
		console.log(selectedItem);
		setModalIsOpen(true);
	};
	const handleAddToCart = (selectedProduct) => {
		const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
		cartItems.push(selectedProduct);
		localStorage.setItem("cartItems", JSON.stringify(cartItems));

		console.log("Product added to cart:", cartItems);
	};
	const closeModal = () => {
		setModalIsOpen(false);
	};
	return (
		<div className="flex">
			<CustomerSidebar />
			<div className="flex-1  p-6">
				<h1 className="text-3xl font-bold mb-8">Welcome to Cart Courier</h1>
				<div className="grid grid-cols-4 gap-2">
					{items &&
						items.map((item, index) => (
							<ItemCard
								key={index}
								item={item}
								onViewDetails={handleViewDetails}
							/>
						))}
				</div>
				{selectedProduct && (
					<ProductDetails
						product={selectedProduct}
						isOpen={modalIsOpen}
						onRequestClose={closeModal}
						onAddToCart={handleAddToCart}
						
					/>
				)}
			</div>
		</div>
	);
};

export default CustomerDashboardPage;
