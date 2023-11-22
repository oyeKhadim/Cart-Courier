import { useState } from "react";
import {
	FaUser,
	FaUserCircle,
	FaClipboardList,
	FaSignOutAlt,
} from "react-icons/fa";

const RiderSidebar = ({ btnClicked }) => {
	const rider = {
		name: "Rider Name",
		profilePicture: "https://via.placeholder.com/150", // Replace with actual profile picture URL
	};

	const handleViewProfile = () => {
		btnClicked("profile");
		console.log("Viewing profile...");
	};

	const handleMyAccount = () => {
		btnClicked("account");
		console.log("Managing accounts...");
	};

	const handleOrders = () => {
		btnClicked("orders");
		console.log("Handling orders...");
	};

	const handleLogout = () => {
		btnClicked("logout");
		console.log("Logging out...");
	};

	return (
		<div className="w-64 h-screen bg-green-200 p-4 rounded-r-lg">
			<div className="text-center mb-4">
				<img
					src={rider.profilePicture}
					alt="Profile"
					className="inline-block h-16 w-16 rounded-full ring-2 ring-indigo-200 mb-2"
				/>
				<p className="text-sm text-gray-700 font-semibold">{rider.name}</p>
			</div>
			<div className="space-y-2">
				<button
					onClick={handleViewProfile}
					className="w-full flex items-center rounded-md py-2 bg-white hover:bg-gray-100"
				>
					<FaUser className="mr-2 ml-2" />
					View Profile
				</button>
				<button
					onClick={handleMyAccount}
					className="w-full flex items-center rounded-md py-2 bg-white hover:bg-gray-100"
				>
					<FaUserCircle className="mr-2 ml-2" />
					My Account
				</button>
				<button
					onClick={handleOrders}
					className="w-full flex items-center rounded-md py-2 bg-white hover:bg-gray-100"
				>
					<FaClipboardList className="mr-2 ml-2" />
					Orders
				</button>
				<button
					onClick={handleLogout}
					className="w-full flex items-center rounded-md py-2 bg-white hover:bg-gray-100"
				>
					<FaSignOutAlt className="mr-2 ml-2" />
					Logout
				</button>
			</div>
		</div>
	);
};

export default RiderSidebar;
