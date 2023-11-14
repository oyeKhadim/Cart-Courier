"use client";
import { useState, useEffect } from "react";

// Function to fetch user data (this is a mock function, replace it with your actual API call)
const fetchUserData = async () => {
	// Implement logic to fetch user data from your API or database
	return {
		name: "John Doe",
		email: "johndoe@example.com",
		profilePicture: "https://via.placeholder.com/150", // Replace with actual profile picture URL
		orderHistory: [
			{ id: 1, date: "2023-11-16", totalAmount: 25.0 },
			{ id: 2, date: "2023-11-15", totalAmount: 30.0 },
			// Add more order history items as needed
		],
		paymentDetails: {
			cardNumber: "**** **** **** 1234",
			expirationDate: "12/25",
			// Add other payment details
		},
		// Add other user details as needed
	};
};

export default function UserProfile() {
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		// Fetch user data when the component mounts
		const getUserData = async () => {
			try {
				const data = await fetchUserData();
				setUserData(data);
			} catch (error) {
				console.error("Error fetching user data:", error);
				// Handle error or display a message to the user
			}
		};

		getUserData();
	}, []);

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8 bg-white p-6 rounded-lg shadow-lg">
				<h2 className="text-center text-3xl font-extrabold text-gray-900">
					User Profile
				</h2>
				{userData ? (
					<div className="space-y-4">
						<div className="text-center">
							<img
								src={userData.profilePicture}
								alt="Profile"
								className="inline-block h-24 w-24 rounded-full ring-2 ring-indigo-200"
							/>
						</div>
						<div>
							<p className="text-gray-700 font-semibold">Name:</p>
							<p>{userData.name}</p>
						</div>
						<div>
							<p className="text-gray-700 font-semibold">Email:</p>
							<p>{userData.email}</p>
						</div>
						<div>
							<p className="text-gray-700 font-semibold">Order History:</p>
							<ul className="list-disc list-inside">
								{userData.orderHistory.map((order) => (
									<li key={order.id}>
										Order ID: {order.id}, Date: {order.date}, Total Amount: $
										{order.totalAmount}
									</li>
								))}
							</ul>
						</div>
						<div>
							<p className="text-gray-700 font-semibold">Payment Details:</p>
							<p>Card Number: {userData.paymentDetails.cardNumber}</p>
							<p>Expiration Date: {userData.paymentDetails.expirationDate}</p>
							{/* Add other payment details */}
						</div>
						{/* Render other user details as needed */}
					</div>
				) : (
					<p className="text-center">Loading user data...</p>
				)}
			</div>
		</div>
	);
}
