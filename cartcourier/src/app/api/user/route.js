import mongoose from "mongoose";
import connectionstr from "../../../lib/db";
import { NextResponse } from "next/server";

export async function GET(request, content) {
	try {
		await mongoose.connect(connectionstr);

		// If you want to perform some checks or operations after the successful connection,
		// you can do it here before returning the response.

		await mongoose.disconnect(); // Closing the connection after successful operation

		return NextResponse.json({ msg: true }, { status: 200 });
	} catch (error) {
		// Handle connection errors
		console.error("Connection error:", error);
		return NextResponse.json(
			{ msg: false, error: error.message },
			{ status: 500 }
		);
	}
}
