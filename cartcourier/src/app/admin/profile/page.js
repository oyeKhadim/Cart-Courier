"use client";
import { useState, useEffect } from "react";
import AdminSidebar from "../../../components/admin-sidebar";
import UserProfil from "../../../components/user-profile";
import { useRouter } from "next/navigation";

export default function UserProfile() {
	// const [user, setUser] = useState(null); // State to store user data
	// const router = useRouter();

	// useEffect(() => {
	// 	// Fetch user data from localStorage on component mount
	// 	const storedUser = localStorage.getItem("user");
	// 	if (storedUser) {
	// 		// If user data exists in localStorage, parse and set it in state
	// 		setUser(JSON.parse(storedUser));
	// 	} else {
	// 		router.push("/");
	// 	}
	// }, []);

	return (
		<div className="flex">
			<AdminSidebar />
			<UserProfil />
		</div>
	);
}
