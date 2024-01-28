"use client";
import CartItem from "../../../components/cart-item"; // Path may vary based on your file structure
import CustomerSidebar from "../../../components/customer-sidebar";
import { showToast } from "react-next-toast";
import { FaShoppingCart, FaMoneyBillAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

const CartPage = () => {
	const router = useRouter();
	const storedCartItems = localStorage.getItem("cartItems");
	//Loading cart data
	const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
	const handlePlaceOrder = () => {
		if (totalAmount <= 0) {
			showToast.warning("Your Cart is Empty");
			return;
		}
		localStorage.removeItem("cartItems");
		showToast.success("Order Placed Successfully");
		router.push("/customer");
	};
	//Calculating total amount of cart products
	const totalAmount = cartItems
		.reduce((total, item) => total + item.price * item.quantity, 0)
		.toFixed(2);

	return (
		<div className="flex">
			<CustomerSidebar />
			<div className="flex-1 p-6">
				<div className="flex items-center mb-8">
					<FaShoppingCart className="text-4xl mr-2" />
					<h1 className="text-3xl font-bold">Your Cart</h1>
				</div>
				<div>
					{cartItems.map((item) => (
						<CartItem key={item.id} item={item} />
					))}
				</div>
				<div className="flex justify-between items-center mt-8">
					<div className="flex items-center">
						<FaMoneyBillAlt className="text-xl mr-2" />
						<p className="text-lg">Total: ${totalAmount}</p>
					</div>
					<button
						className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md border border-blue-600 focus:outline-none flex items-center"
						onClick={handlePlaceOrder}
					>
						Place Order
					</button>
				</div>
				{/* Add total, checkout button, or other cart-related functionalities */}
			</div>
		</div>
	);
};

export default CartPage;
