import React from "react";
import { useState, useEffect } from "react";

const AccountDetails = () => {
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
		<div className="flex-1 p-6">
			<h1 className="text-3xl font-bold mb-8">Customer Account Details</h1>
			<div className="bg-white shadow-md rounded-lg p-6">
				<h2 className="text-2xl font-semibold mb-4">Account Informations</h2>
				{user && (
					<div className="grid grid-cols-2 gap-4">
						<div className="flex flex-col">
							<span className="text-gray-600">Account Holder</span>
							<span className="font-semibold">{user.fullName}</span>
						</div>
						<div className="flex flex-col">
							<span className="text-gray-600">Current Balance</span>
							<span className="font-semibold">${user.balance}</span>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default AccountDetails;
