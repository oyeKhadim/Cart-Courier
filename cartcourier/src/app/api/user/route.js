import mongoose from "mongoose";
import connectionstr from "../../../lib/db";
import { NextResponse } from "next/server";

export async function GET(request, content) {
	await mongoose.connect(connectionstr);
	return NextResponse.json({ msg: "data" }, { status: 200 });
}
