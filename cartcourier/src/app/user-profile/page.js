"use client";
import { useState, useEffect } from "react";



export default function UserProfile() {
	const [user, setUser] = useState(null); // State to store user data

	useEffect(() => {
		// Fetch user data from localStorage on component mount
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			// If user data exists in localStorage, parse and set it in state
			setUser(JSON.parse(storedUser));
		} else {
			router.push("/");
		}
	}, []);

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8 bg-white p-6 rounded-lg shadow-lg">
				<h2 className="text-center text-3xl font-extrabold text-gray-900">
					User Profile
				</h2>
				{user ? (
					<div className="space-y-4">
						<div className="text-center">
							<img
								src={user.profilePic}
								alt="Profile"
								className="inline-block h-24 w-24 rounded-full ring-2 ring-indigo-200"
							/>
						</div>
						<div>
							<p className="text-gray-700 font-semibold">Name:</p>
							<p>{user.fullName}</p>
						</div>
						<div>
							<p className="text-gray-700 font-semibold">Email:</p>
							<p>{user.email}</p>
						</div>
						<div>
							<p className="text-gray-700 font-semibold">Order History:</p>
							<ul className="list-disc list-inside">
								{user.orderHistory.map((order) => (
									<li key={order.id}>
										Order ID: {order.id}, Date: {order.date}, Total Amount: $
										{order.totalAmount}
									</li>
								))}
							</ul>
						</div>
						<div>
							<p className="text-gray-700 font-semibold">Payment Details:</p>
							<p>Card Number: {user.paymentDetails.cardNumber}</p>
							<p>Expiration Date: {user.paymentDetails.expirationDate}</p>
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
