import mongoose from "mongoose";
import connectionStr from "../../../lib/db";
import User from "../../../lib/models/user";
import { saveLog } from "../../../lib/log";
import { NextResponse } from "next/server";

export async function POST(req, res) {
	try {
		// Extract username and password from the request body
		const { username, password } = await req.json();

		// Connect to the MongoDB database
		await mongoose.connect(connectionStr);

		// Find the user by the provided username
		const existingUser = await User.findOne({ username });

		// If user doesn't exist or password is incorrect, return an error
		if (!existingUser || existingUser.password !== password) {
			// Disconnect from the database
			await mongoose.disconnect();

			return NextResponse.json(
				{ message: "Invalid username or password" },
				{ status: 401 }
			);
		}

		// Disconnect from the database
		await mongoose.disconnect();

		// Return a success message along with the existing user data
		return NextResponse.json(
			{ message: "Login successful", existingUser },
			{ status: 200 }
		);
	} catch (error) {
		// Return an internal server error message
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}
