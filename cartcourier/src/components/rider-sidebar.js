import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
	FaUser,
	FaUserCircle,
	FaClipboardList,
	FaSignOutAlt,
} from "react-icons/fa";

const RiderSidebar = () => {
	const router = useRouter();
	const [user, setUser] = useState(null); // State to store user data

	useEffect(() => {
		// Fetch user data from localStorage on component mount
		const storedUser = localStorage.getItem("user");
		if (storedUser && storedUser.includes("rider")) {
			// If user data exists in localStorage, parse and set it in state
			setUser(JSON.parse(storedUser));
		} else {
			router.push("/");
		}
	}, []);
	const handleViewProfile = () => {
		console.log("Viewing profile...");
		router.push("/rider/profile");
	};

	const handleMyAccount = () => {
		console.log("Managing accounts...");
		router.push("/rider/account");
	};

	const handleOrders = () => {
		console.log("Handling orders...");
		router.push("/rider/orders");
	};

	const handleLogout = () => {
		console.log("Logging out...");
		localStorage.clear();
		router.push("/");
	};

	return (
		<div className="w-64 h-screen bg-green-200 p-4 rounded-r-lg">
			{user && (
				<div className="text-center mb-4">
					<img
						src={user.fullName}
						alt="Profile"
						className="inline-block h-16 w-16 rounded-full ring-2 ring-indigo-200 mb-2"
					/>
					<p className="text-sm text-gray-700 font-semibold">{user.fullName}</p>
				</div>
			)}
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
