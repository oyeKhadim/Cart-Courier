import React from "react";

const AccountDetails = ({ accountDetails }) => {
	return (
		<div className="flex-1 p-6">
			<h1 className="text-3xl font-bold mb-8">Customer Account Details</h1>
			<div className="bg-white shadow-md rounded-lg p-6">
				<h2 className="text-2xl font-semibold mb-4">Account Informations</h2>
				<div className="grid grid-cols-2 gap-4">
					<div className="flex flex-col">
						<span className="text-gray-600">Account Holder</span>
						<span className="font-semibold">
							{accountDetails.accountHolder}
						</span>
					</div>
					<div className="flex flex-col">
						<span className="text-gray-600">Current Balance</span>
						<span className="font-semibold">
							${accountDetails.currentBalance}
						</span>
					</div>
					{/* Add more account details here */}
				</div>
			</div>
		</div>
	);
};

export default AccountDetails;
