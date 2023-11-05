"use client";
import { useState } from "react";
import Link from "next/link";

export default function ForgotPassword() {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");

	const handleForgotPassword = () => {
		// For front-end demonstration, log email and username
		console.log("Email:", email);
		console.log("Username:", username);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8 bg-white p-6 rounded-lg shadow-lg">
				<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
					Forgot Password??
				</h2>
				<form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
					<div className="flex flex-col">
						<label htmlFor="email" className="text-gray-700 font-semibold">
							Email
						</label>
						<input
							id="email"
							name="email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="mt-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
							placeholder="Email"
							required
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="username" className="text-gray-700 font-semibold">
							Username
						</label>
						<input
							id="username"
							name="username"
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="mt-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
							placeholder="Username"
							required
						/>
					</div>
					<div>
						<button
							type="submit"
							onClick={handleForgotPassword}
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Reset Password
						</button>
					</div>
				</form>
				<div className="mt-4 text-center text-sm">
					<span>Remembered your password? </span>
					<Link
						href="/"
						className="font-medium text-indigo-600 hover:text-indigo-500"
					>
						Log In
					</Link>
				</div>
				<div className="mt-2 text-center text-sm">
					<span>Don't have an account? </span>
					<Link
						href="/signup"
						className="font-medium text-indigo-600 hover:text-indigo-500"
					>
						Sign Up
					</Link>
				</div>
			</div>
		</div>
	);
}
