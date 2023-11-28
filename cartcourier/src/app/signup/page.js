"use client";
import { useState } from "react";
import Link from "next/link";
import { showToast } from "react-next-toast";
import { useRouter } from "next/navigation";

export default function SignUp() {
	const [fullName, setFullName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [profilePic, setProfilePic] = useState(null);
	const router = useRouter();

	const handleSignUp = async () => {
		try {
			const response = await fetch("/api/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					fullName,
					phoneNumber,
					email,
					username,
					password,
					profilePic,
				}),
			});

			if (response.ok) {
				// Sign-up successful
				const data = await response.json();
				console.log(data.message);
				showToast.success("Signed Up Successfully!");
				// router.push("/");
			} else {
				// Handle sign-up error
				const errorData = await response.json();
				console.error("Sign-up failed:", errorData.message);
				showToast.error( errorData.message);
				// Display error message to the user or perform other actions
			}
		} catch (error) {
			// showToast.error("Error during sign-up:", error.message);

			console.error("Error during sign-up:", error.message);
			// Handle fetch error
		}
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (event) => {
				setProfilePic(event.target.result);
				console.log(event.target.result);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8 bg-white p-6 rounded-lg shadow-lg">
				<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
					Sign Up
				</h2>
				<form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
					<div className="flex flex-col">
						<label htmlFor="fullName" className="text-gray-700 font-semibold">
							Full Name
						</label>
						<input
							id="fullName"
							name="fullName"
							type="text"
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
							className="mt-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
							placeholder="Full Name"
							required
						/>
					</div>
					<div className="flex flex-col">
						<label
							htmlFor="phoneNumber"
							className="text-gray-700 font-semibold"
						>
							Phone Number
						</label>
						<input
							id="phoneNumber"
							name="phoneNumber"
							type="tel"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
							className="mt-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
							placeholder="Phone Number"
							required
						/>
					</div>
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
					<div className="flex flex-col">
						<label htmlFor="password" className="text-gray-700 font-semibold">
							Password
						</label>
						<input
							id="password"
							name="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="mt-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
							placeholder="Password"
							required
						/>
					</div>

					<div className="flex flex-col">
						<label htmlFor="profilePic" className="text-gray-700 font-semibold">
							Profile Picture
						</label>
						<input
							id="profilePic"
							name="profilePic"
							type="file"
							onChange={handleFileChange}
							accept="image/*"
							className="mt-1"
						/>
						{profilePic && (
							<div className="mt-2 rounded-full overflow-hidden h-20 w-20">
								<img
									src={profilePic}
									alt="Profile"
									className="object-cover w-full h-full"
								/>
							</div>
						)}
					</div>
					<div>
						<button
							type="submit"
							onClick={handleSignUp}
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Sign Up
						</button>
					</div>
					<div>
						<span>Already have an account? </span>
						<Link
							href="/"
							className="font-medium text-indigo-600 hover:text-indigo-500"
						>
							Log In here
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
