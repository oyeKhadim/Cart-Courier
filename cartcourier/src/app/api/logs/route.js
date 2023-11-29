import mongoose from "mongoose";
import connectionstr from "../../../lib/db";
import Log from "../../../lib/models/logs";
import { NextResponse } from "next/server";

export async function POST(req, res) {
	try {
		const payload = await req.json();
		await mongoose.connect(connectionstr);

		const newLog = new Log(payload);
		await newLog.save();
		await mongoose.disconnect();

		return NextResponse.json(
			{ message: "Log added successfully", log: newLog },
			{ status: 201 }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}
