"use client";
import { useState } from "react";
import Link from "next/link";
import { showToast } from "react-next-toast";
import { useRouter } from "next/navigation";
import { saveLog } from "../lib/log";

export default function Home() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const router = useRouter();
	const handleLogin = async () => {
		try {
			const response = await fetch("/api/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, password }),
			});

			if (response.ok) {
				const data = await response.json();
				await saveLog("User Login", "handleLogin", "Success");
				console.log(data);
				const user = data.existingUser;
				localStorage.setItem("user", JSON.stringify(user));
				console.log(data.message);
				showToast.success("Login successful!");

				// Redirect based on user role after successful login
				if (user.role == "customer") {
					router.push("/customer");
				} else if (user.role == "admin") {
					router.push("/admin");
				} else if (user.role == "rider") {
					router.push("/rider");
				}
			} else {
				const errorData = await response.json();
				await saveLog("User Login", "handleLogin", errorData.message);
				console.error("Login failed:", errorData.message);
				showToast.error(errorData.message);
			}
		} catch (error) {
				await saveLog("User Login", "handleLogin", error);
			console.error("Error during login:", error);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8 bg-white p-6 rounded-lg shadow-lg">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Log in to your account
					</h2>
				</div>
				<form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<label htmlFor="username" className="sr-only">
								Username
							</label>
							<input
								id="username"
								name="username"
								type="text"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								autoComplete="username"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Username"
							/>
						</div>
						<div className="mt-4">
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<div className="relative">
								<input
									id="password"
									name="password"
									type={showPassword ? "text" : "password"}
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									autoComplete="current-password"
									required
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Password"
								/>
								<div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
									<input
										id="show-password"
										name="show-password"
										type="checkbox"
										className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
										onChange={() => setShowPassword(!showPassword)}
									/>
									<label htmlFor="show-password" className="ml-2 text-gray-500">
										Show Password
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="flex flex-col sm:flex-row justify-between items-center">
						<div className="text-sm">
							<Link
								href="/forgot-password"
								className="font-medium text-indigo-600 hover:text-indigo-500"
							>
								Forgot your password?
							</Link>
						</div>
						<div className="text-sm mt-2 sm:mt-0">
							<Link
								href="/signup"
								className="font-medium text-indigo-600 hover:text-indigo-500"
							>
								Sign Up
							</Link>
						</div>
					</div>

					<div>
						<button
							type="submit"
							onClick={handleLogin}
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Log In
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
