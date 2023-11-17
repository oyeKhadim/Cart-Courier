const CartItem = ({ item }) => {
	const total = (item.quantity * item.price).toFixed(2);

	return (
		<div className="border rounded p-4 mb-4 shadow-md bg-white">
			<div className="flex items-center justify-between mb-4">
				<img
					src={item.image}
					alt={item.name}
					className="w-20 h-20 object-cover rounded-lg mr-4"
				/>
				<div className="flex-1">
					<h3 className="font-semibold text-lg">{item.name}</h3>
					<p className="text-sm text-gray-600">Category: {item.category}</p>
					<p className="text-sm text-gray-600">Price: ${item.price}</p>
					<div className="flex items-center mt-2">
						<span className="text-sm text-gray-600 mr-2">Quantity:</span>
						<input
							type="number"
							className="border rounded w-16 py-1 px-2 text-sm text-gray-800"
							value={item.quantity}
							disabled
						/>
					</div>
				</div>
				<div className="flex flex-col items-end">
					<p className="text-sm text-gray-600">
						Total: <span className="font-semibold">${total}</span>
					</p>
				</div>
			</div>
			<div className="border-t pt-2">
				<p className="text-sm text-gray-600">{item.description}</p>
				{/* Add other item details or action buttons if needed */}
			</div>
		</div>
	);
};

export default CartItem;
