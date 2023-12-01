import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const UserProfile = () => {
	const [user, setUser] = useState(null); // State to store user data
	const router = useRouter();

	useEffect(() => {
		// Fetch user data from localStorage on component mount
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			// If user data exists in localStorage, parse and set it in state
			setUser(JSON.parse(storedUser));
		} else {
			router.push("/");
		}
	});

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
				<h2 className=" text-3xl font-extrabold text-gray-900 mb-8">
					User Profile
				</h2>
				<div className="flex justify-center">
					{user ? (
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
							<div className="flex flex-col ">
								<img
									src={user.profilePic}
									alt="Profile"
									className="h-48 w-48 rounded-full ring-4 ring-indigo-200"
								/>
								<div className="mt-4">
									<p className="text-gray-700 font-semibold">Name:</p>
									<p>{user.fullName}</p>
								</div>
								<div className="mt-4">
									<p className="text-gray-700 font-semibold">Email:</p>
									<p>{user.email}</p>
								</div>
							</div>
							<div className="flex flex-col">
								{/* Display order history and payment details here */}
								{/* Example:
                                    <div>
                                        <p className="text-gray-700 font-semibold">
                                            Order History:
                                        </p>
                                        <ul className="list-disc list-inside">
                                            {user.orderHistory.map((order) => (
                                                <li key={order.id}>
                                                    Order ID: {order.id}, Date: {order.date}, Total
                                                    Amount: ${order.totalAmount}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-gray-700 font-semibold">
                                            Payment Details:
                                        </p>
                                        <p>Card Number: {user.paymentDetails.cardNumber}</p>
                                        <p>Expiration Date: {user.paymentDetails.expirationDate}</p>
                                    </div>
                                */}
							</div>
						</div>
					) : (
						<p className="text-center">Loading user data...</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
