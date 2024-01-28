"use client";
import React from "react";
import AdminSidebar from "../../../components/admin-sidebar";
import FeatureNotImplemented from "../../../components/feature-not-implemented";

const ManageAdmins = () => {
	return (
		<div className="flex">
			<AdminSidebar />
			<FeatureNotImplemented />
		</div>
	);
};

export default ManageAdmins;
