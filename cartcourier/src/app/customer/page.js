"use client";
import CustomerSidebar from "../../components/customer-sidebar";
import ItemCard from "../../components/item-card"; // Import the ItemCard component

const CustomerDashboardPage = () => {
	const items = [
		{
			name: "Example Item 1",
			description: "This is an example  for Item 1.",
			category: "Category A",
			price: 19.99,
			image: "https://via.placeholder.com/300x200", // Replace with actual image URL
		},
		{
			name: "Example Item 2",
			description: "This is an example description for Item 2.",
			category: "Category B",
			price: 29.99,
			image: "https://via.placeholder.com/300x200", // Replace with actual image URL
		},
		{
			name: "Example Item 1",
			description: "This is an example  for Item 1.",
			category: "Category A",
			price: 19.99,
			image: "https://via.placeholder.com/300x200", // Replace with actual image URL
		},
		{
			name: "Example Item 2",
			description: "This is an example description for Item 2.",
			category: "Category B",
			price: 29.99,
			image: "https://via.placeholder.com/300x200", // Replace with actual image URL
		},
		{
			name: "Example Item 1",
			description: "This is an example  for Item 1.",
			category: "Category A",
			price: 19.99,
			image: "https://via.placeholder.com/300x200", // Replace with actual image URL
		},
		{
			name: "Example Item 2",
			description: "This is an example description for Item 2.",
			category: "Category B",
			price: 29.99,
			image: "https://via.placeholder.com/300x200", // Replace with actual image URL
		},
		{
			name: "Example Item 1",
			description: "This is an example  for Item 1.",
			category: "Category A",
			price: 19.99,
			image: "https://via.placeholder.com/300x200", // Replace with actual image URL
		},
		{
			name: "Example Item 2",
			description: "This is an example description for Item 2.",
			category: "Category B",
			price: 29.99,
			image: "https://via.placeholder.com/300x200", // Replace with actual image URL
		},
		{
			name: "Example Item 1",
			description: "This is an example  for Item 1.",
			category: "Category A",
			price: 19.99,
			image: "https://via.placeholder.com/300x200", // Replace with actual image URL
		},
		{
			name: "Example Item 2",
			description: "This is an example description for Item 2.",
			category: "Category B",
			price: 29.99,
			image: "https://via.placeholder.com/300x200", // Replace with actual image URL
		},
		// Add more items as needed
	];
	const handleViewDetails = (selectedItem) => {
		// Handle the action when 'View Details' is clicked for a specific item
		console.log("Selected Item:", selectedItem);
		// Add your logic here, such as opening a modal or navigating to a detailed view
	};
	const btnClicked = (selectedTab) => {
		console.log(selectedTab);
	};
	return (
		<div className="flex">
			<CustomerSidebar btnClicked={btnClicked} />
			<div className="flex-1  p-6">
				<h1 className="text-3xl font-bold mb-8">Welcome to Cart Courier</h1>
				<div className="grid grid-cols-4 gap-2">
					{/* Display ItemCard components */}
					{items.map((item, index) => (
						<ItemCard
							key={index}
							item={item}
							onViewDetails={handleViewDetails}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default CustomerDashboardPage;
