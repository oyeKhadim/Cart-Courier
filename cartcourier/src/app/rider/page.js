"use client";
import RiderSidebar from "../../components/rider-sidebar";

const RiderHomePage = () => {
	const handleBtnClicked = (selectedTab) => {
		console.log(`Clicked on ${selectedTab}`);
		// Add logic based on the selected tab
		// For example:
		// if (selectedTab === "profile") {
		//   // Logic for handling profile
		// }
		// if (selectedTab === "account") {
		//   // Logic for handling account
		// }
		// ...
	};

	return (
		<div className="flex">
			<RiderSidebar btnClicked={handleBtnClicked} />
			<div className="flex-1 p-6">
				<h1 className="text-3xl font-bold mb-8">Welcome, Rider!</h1>
				{/* Add rider-specific content here */}
			</div>
		</div>
	);
};

export default RiderHomePage;
