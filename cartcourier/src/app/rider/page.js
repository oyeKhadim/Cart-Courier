"use client";
import RiderSidebar from "../../components/rider-sidebar";

const RiderHomePage = () => {
	

	return (
		<div className="flex">
			<RiderSidebar  />
			<div className="flex-1 p-6">
				<h1 className="text-3xl font-bold mb-8">Welcome, Rider!</h1>
				{/* Add rider-specific content here */}
			</div>
		</div>
	);
};

export default RiderHomePage;
