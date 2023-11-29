import mongoose from "mongoose";

const logSchema = new mongoose.Schema(
	{
		Classname: {
			type: String,
			required: true,
		},
		Functionname: {
			type: String,
			required: true,
		},
		Time: {
			type: Date,
			default: Date.now,
		},
		Error: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Log = mongoose.models.Log || mongoose.model("Log", logSchema);

export default Log;
