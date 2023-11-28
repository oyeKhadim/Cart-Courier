import mongoose from "mongoose";
import connectionstr from "../../../lib/db";
import User from "../../../lib/models/user";
import { NextResponse } from "next/server";

export async function POST(req, res) {
	try {
		const { username, password } = await req.json();
		await mongoose.connect(connectionstr);

		const existingUser = await User.findOne({ username });

		if (!existingUser || existingUser.password !== password) {
			await mongoose.disconnect();
			return NextResponse.json(
				{ message: "Invalid username or password" },
				{ status: 401 }
			);
		}

		await mongoose.disconnect();

		return NextResponse.json(
			{ message: "Login successful", existingUser },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}
