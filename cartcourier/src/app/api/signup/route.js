import mongoose from "mongoose";
import connectionstr from "../../../lib/db";
import User from "../../../lib/models/user";
import { saveLog } from "../../../lib/log";
import { NextResponse } from "next/server";

//Checking Credential of user
export async function POST(req, res) {
	try {
		const payload = await req.json();
		await mongoose.connect(connectionstr);

		const existingUser = await User.findOne({ username: payload.username });

		if (existingUser) {
			await mongoose.disconnect();
			return NextResponse.json(
				{ message: "Enter Unique Username !" },
				{ status: 400 }
			);
		}

		const newUser = new User(payload);
		await newUser.save();
		await mongoose.disconnect();

		return NextResponse.json(
			{ message: "User created successfully" },
			{ status: 201 }
		);
	} catch (error) {
		await saveLog("User Signup", "POST", error);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}
//TEst Function
export async function GET(request, content) {
	try {
		await mongoose.connect(connectionstr);

		// If you want to perform some checks or operations after the successful connection,
		// you can do it here before returning the response.

		await mongoose.disconnect(); // Closing the connection after successful operation

		return NextResponse.json({ msg: true }, { status: 200 });
	} catch (error) {
		await saveLog("User Signup", "GET", error);
		return NextResponse.json(
			{ msg: false, error: error.message },
			{ status: 500 }
		);
	}
}
