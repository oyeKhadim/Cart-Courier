"use client";
import React from "react";
import CustomerSidebar from "../../../components/customer-sidebar";
import Account from "../../../components/account-details";
import { useRouter } from "next/navigation";
import AccountDetails from "../../../components/account-details";

const CustomerAccountPage = () => {
	const router = useRouter();

	const accountDetails = {
		accountHolder: "Khadim Hussain", // Replace with the actual account holder's name
		currentBalance: 500, // Replace with the actual current balance
		// Add any other necessary account details
	};

	return (
		<div className="flex">
			<CustomerSidebar />
			<AccountDetails accountDetails={accountDetails} />
		</div>
	);
};

export default CustomerAccountPage;
