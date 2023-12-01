const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	fullName: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	profilePic: {
		type: String,
		default: null,
	},
	balance: {
		type: Number,
		default: 0,
	},
	role: {
		type: String,
		enum: ["customer", "admin", "rider"],
		default: "customer",
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
});

const User = mongoose.models.User|| mongoose.model("User", userSchema);

module.exports = User;
