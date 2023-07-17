import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

export function CartAndLogin({ isAtBottom }) {
	return (
		<div className="max-md:relative z-10 flex items-center gap-6 text-green-900">
			<NavLink
				to="/cart"
				className={`md:bg-green-300/10 rounded-full md:p-2 transition-all duration-300 md:hover:bg-green-300/30 max-md:fixed bottom-4 right-4 max-md:bg-green-300/90 max-md:hover:bg-green-300/100 max-md:p-4 ${isAtBottom ? "bg-white" : ""} `}
			>
				<ShoppingCartIcon className="md:h-4 md:w-4 max-md:h-6 max-md:w-6" />
			</NavLink>
			<button className="bg-green-300 transition-all duration-300 hover:bg-green-400 font-bold text-sm rounded-full px-6 py-1 active:scale-95">
				Login
			</button>
		</div>
	);
}
