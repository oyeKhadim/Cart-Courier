const ItemCard = ({ item, onViewDetails }) => {
	const truncatedDescription = item.description.slice(0, 50);

	const handleViewDetails = () => {
		onViewDetails(item);
	};

	return (
		<div className="max-w-xs rounded overflow-hidden shadow-lg bg-white flex flex-col justify-between">
			<div>
				<img
					src={item.image}
					alt={item.name}
					className="w-full h-56 object-cover"
				/>
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2">{item.name}</div>
					<div className="flex justify-between mb-2">
						<span className="text-gray-700 text-sm">{item.category}</span>
						<span className="text-gray-700 text-sm">${item.price}</span>
					</div>
					<p className="text-gray-700 text-base mb-4">
						{truncatedDescription}
						{item.description.length > 50 && "..."}{" "}
					</p>
				</div>
			</div>
			<div className="px-6 pb-4">
				<button
					onClick={handleViewDetails}
					className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none"
				>
					View Details
				</button>
			</div>
		</div>
	);
};

export default ItemCard;
