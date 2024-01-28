"use client";
import { useState, useEffect } from "react";
import CustomerSidebar from "../../../components/customer-sidebar";
import UserProfil from "../../../components/user-profile";

export default function UserProfile() {
	const [user, setUser] = useState(null); // State to store user data

	useEffect(() => {
		// Fetch user data from localStorage on component mount
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			// If user data exists in localStorage, parse and set it in state
			setUser(JSON.parse(storedUser));
		} else {
			router.push("/");
		}
	}, []);

	return (
		<div className="flex">
			<CustomerSidebar />
			<UserProfil/>
		</div>
	);
}
