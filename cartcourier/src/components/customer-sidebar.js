import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import {
	FaUser,
	FaShoppingCart,
	FaClipboardList,
	FaUserCircle,
	FaSignOutAlt,
} from "react-icons/fa";

const CustomerSidebar = () => {
	const router = useRouter();
	const [user, setUser] = useState(null); // State to store user data

	useEffect(() => {
		// Fetch user data from localStorage on component mount
		const storedUser = localStorage.getItem("user");
		if (storedUser&&storedUser.includes("customer")) {
			// If user data exists in localStorage, parse and set it in state
			setUser(JSON.parse(storedUser));
		} else {
			router.push("/");
		}
	}, []);
	// // Mock user data
	// const user = {
	// 	name: "Khadim Hussain",
	// 	profilePicture: "https://shorturl.at/fhl04", // Replace with actual profile picture URL
	// };
	let selectedTab;
	// const [selectedTab, setSelectedTab] = useState("");
	function setSelectedTab(st) {
		selectedTab = st;
	}
	// Functions to be called on button click
	const handleViewProfile = () => {
		setSelectedTab("profile");
		// Perform action based on the selected tab
		if (selectedTab === "profile") {
			// Logic for handling profile view
			console.log("Viewing profile...");
		}

		router.push("/customer/profile");
	};

	const handleMyCart = () => {
		setSelectedTab("cart");
		if (selectedTab === "cart") {
			// Logic for handling cart
			console.log("Viewing cart...");
		}
		router.push("/customer/cart");
	};

	const handleMyOrders = () => {
		setSelectedTab("orders");
		if (selectedTab === "orders") {
			// Logic for handling orders
			console.log("Viewing orders...");
		}
		router.push("/customer/orders");
	};

	const handleMyAccount = () => {
		setSelectedTab("account");
		if (selectedTab === "account") {
			// Logic for handling account
			console.log("Viewing account...");
		}
		router.push("/customer/account");
	};

	const handleLogout = () => {
		setSelectedTab("logout");
		if (selectedTab === "logout") {
			// Logic for handling logout
			console.log("Logging out...");
		}
		localStorage.clear();
		router.push("/");
	};

	return (
		<div className="w-64 h-screen bg-green-200 p-4 rounded-r-lg">
			{user&&<div className="text-center mb-4">
				<img
					src={user.profilePic}
					alt="Profile"
					className="inline-block h-16 w-16 rounded-full ring-2 ring-indigo-200 mb-2"
				/>
				<p className="text-sm text-gray-700 font-semibold">{user.fullName}</p>
			</div>}
			<div className="space-y-2">
				<button
					onClick={handleViewProfile}
					className="w-full flex items-center rounded-md py-2 bg-white hover:bg-gray-100"
				>
					<FaUser className="mr-2 ml-2" />
					View Profile
				</button>
				<button
					onClick={handleMyCart}
					className="w-full flex items-center rounded-md py-2 bg-white hover:bg-gray-100"
				>
					<FaShoppingCart className="mr-2 ml-2" />
					My Cart
				</button>
				<button
					onClick={handleMyOrders}
					className="w-full flex items-center rounded-md py-2 bg-white hover:bg-gray-100"
				>
					<FaClipboardList className="mr-2 ml-2" />
					My Orders
				</button>
				<button
					onClick={handleMyAccount}
					className="w-full flex items-center rounded-md py-2 bg-white hover:bg-gray-100"
				>
					<FaUserCircle className="mr-2 ml-2" />
					My Account
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

export default CustomerSidebar;
