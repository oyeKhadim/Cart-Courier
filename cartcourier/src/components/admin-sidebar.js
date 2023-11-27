import { useState } from "react";
import { useRouter } from "next/navigation";
import {
	FaUser,
	FaClipboardList,
	FaUtensils,
	FaBox,
	FaUserShield,
	FaUsersCog,
	FaSignOutAlt,
} from "react-icons/fa";

const AdminSidebar = () => {
	const router = useRouter();
	// Mock admin data
	const admin = {
		name: "Admin Name",
		profilePicture: "https://via.placeholder.com/150", // Replace with actual profile picture URL
	};

	// const [selectedTab, setSelectedTab] = useState(true);
	let selectedTab;
	function setSelectedTab(st) {
		selectedTab = st;
	}
	const handleViewProfile = () => {
		setSelectedTab("profile");
		//btnClicked(selectedTab);
		console.log("Viewing profile...");
		router.push("/admin/profile");
	};

	const handleRestaurants = () => {
		setSelectedTab("restaurants");
		//btnClicked(selectedTab);
		console.log("Viewing restaurants...");
		router.push("/admin/resturants");
	};

	const handleProducts = () => {
		setSelectedTab("products");
		//btnClicked(selectedTab);
		console.log("Viewing products...");
		router.push("/admin/products");
	};

	const handleAdmins = () => {
		setSelectedTab("admins");
		//btnClicked(selectedTab);
		console.log("Viewing admins...");
		router.push("/admin/admins");
	};

	const handleRiders = () => {
		setSelectedTab("riders");
		//btnClicked(selectedTab);
		console.log("Viewing riders...");
		router.push("/admin/riders");
	};

	const handleManageAccounts = () => {
		setSelectedTab("manageAccounts");
		//btnClicked(selectedTab);
		console.log("Managing accounts...");
		router.push("/admin/accounts");
	};
	const handleLogout = () => {
		setSelectedTab("logout");
		if (selectedTab === "logout") {
			// Logic for handling logout
			console.log("Logging out...");
		}
		router.push("/");

		//btnClicked(selectedTab);
	};
	return (
		<div className="w-64 h-screen bg-green-200 p-4 rounded-r-lg">
			<div className="text-center mb-4">
				<img
					src={admin.profilePicture}
					alt="Profile"
					className="inline-block h-16 w-16 rounded-full ring-2 ring-indigo-200 mb-2"
				/>
				<p className="text-sm text-gray-700 font-semibold">{admin.name}</p>
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
					onClick={handleRestaurants}
					className="w-full flex items-center rounded-md py-2 bg-white hover:bg-gray-100"
				>
					<FaUtensils className="mr-2 ml-2" />
					Restaurants
				</button>
				<button
					onClick={handleProducts}
					className="w-full flex items-center rounded-md py-2 bg-white hover:bg-gray-100"
				>
					<FaBox className="mr-2 ml-2" />
					Products
				</button>
				<button
					onClick={handleAdmins}
					className="w-full flex items-center rounded-md py-2 bg-white hover:bg-gray-100"
				>
					<FaUserShield className="mr-2 ml-2" />
					Admins
				</button>
				<button
					onClick={handleRiders}
					className="w-full flex items-center rounded-md py-2 bg-white hover:bg-gray-100"
				>
					<FaUsersCog className="mr-2 ml-2" />
					Riders
				</button>
				<button
					onClick={handleManageAccounts}
					className="w-full flex items-center rounded-md py-2 bg-white hover:bg-gray-100"
				>
					<FaClipboardList className="mr-2 ml-2" />
					Manage Accounts
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

export default AdminSidebar;
