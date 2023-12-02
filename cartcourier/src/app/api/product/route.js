import mongoose from "mongoose";
import connectionstr from "../../../lib/db";
import Product from "../../../lib/models/product";
import { NextResponse } from "next/server";
import { saveLog } from "../../../lib/log";
export async function POST(req, res) {
	try {
		const payload = await req.json();
		await mongoose.connect(connectionstr);

		const newProduct = new Product(payload);
		await newProduct.save();
		await mongoose.disconnect();

		return NextResponse.json(
			{ message: "Product added successfully", product: newProduct },
			{ status: 201 }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}
export async function GET(req, res) {
	try {
		await mongoose.connect(connectionstr);

		// Fetch all products from the database
		const products = await Product.find({});

		await mongoose.disconnect();

		return NextResponse.json({ products }, { status: 200 });
	} catch (error) {
		await saveLog("Product", "GET", error);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}
export async function DELETE(req, res) {
	try {
		const { productId } = req.query; // Extract the product ID from the request query params

		await mongoose.connect(connectionstr);

		// Find the product by ID and delete it
		const deletedProduct = await Product.findByIdAndDelete(productId);

		await mongoose.disconnect();

		if (!deletedProduct) {
			return NextResponse.json(
				{ message: `Product with ID ${productId} not found` },
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{ message: `Product with ID ${productId} deleted successfully` },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}
