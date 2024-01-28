"use client";
import React from "react";
import CustomerSidebar from "../../../components/customer-sidebar";
import Account from "../../../components/account-details";
import { useRouter } from "next/navigation";
import AccountDetails from "../../../components/account-details";

const CustomerAccountPage = () => {
	const router = useRouter();


	return (
		<div className="flex">
			<CustomerSidebar />
			<AccountDetails  />
		</div>
	);
};

export default CustomerAccountPage;
