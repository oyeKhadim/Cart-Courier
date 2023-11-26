"use client";
import AdminSidebar from "../../components/admin-sidebar";

const AdminDashboardPage = () => {
	return (
		<div className="flex">
			<AdminSidebar />
			<div className="flex-1  p-6">
				<h1 className="text-3xl font-bold mb-8">Welcome Admin!!</h1>
				{/* Add specific admin dashboard content here */}
				{/* This page doesn't display items, as it's meant for admin-specific functionalities */}
			</div>
		</div>
	);
};

export default AdminDashboardPage;
