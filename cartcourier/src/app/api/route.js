import { NextResponse } from "next/server";
//Testing connection with db
export async function GET() {
	return NextResponse.json({ success: "true" });
}
