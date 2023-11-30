import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		restaurantName: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
		updatedAt: {
			type: Date,
			default: Date.now,
		},
		active: {
			type: Boolean,
			default: true,
		},
	},
	{ timestamps: true }
);

const Product =
	mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
