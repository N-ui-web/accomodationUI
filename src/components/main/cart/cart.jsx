import React, { useEffect, useState } from "react";
import deluxe1 from "../../../assets/images/deluxeroom1.jpg";
import executive2 from "../../../assets/images/executivelounge2.jpg";
import standard1 from "../../../assets/images/standardroom1.jpg";
import {
	CreditCardIcon,
	MinusIcon,
	PlusIcon,
	ShoppingCartIcon,
	TvIcon,
	WifiIcon,
} from "@heroicons/react/24/solid";
import { FoodIcon } from "../../icons/FoodIcons";
import { BedIcon } from "../../icons/BedIcon";
import { CartCards } from "./CartCards";

export default function Cart() {
	const [cartItems, setCartItems] = useState([{}]);
	const [emptyStorage, setEmptyStorage] = useState(true);

	useEffect(() => {
		const localStorageItems = localStorage.getItem("cartItems");
		if (localStorageItems) {
			setCartItems(JSON.parse(localStorageItems));
			setEmptyStorage(false);
		} else {
			setEmptyStorage(true);
		}
		console.log(cartItems);
	}, []);

	const cards = [
		{
			id: 1,
			image: deluxe1,
			title: "Deluxe Room",
			ratings: [true, true, true, true, false],
			price: 300,
			utilities: [WifiIcon, TvIcon, FoodIcon, BedIcon, CreditCardIcon, MinusIcon, PlusIcon, ShoppingCartIcon],
			available: true,
		},
		{
			id: 2,
			image: executive2,
			title: "Executive Lounge",
			ratings: [true, true, true, true, true],
			price: 500,
			utilities: [WifiIcon, TvIcon, FoodIcon],
			available: true,
		},
		{
			id: 3,
			image: standard1,
			title: "Standard Room",
			ratings: [true, true, true, false, false],
			price: 200,
			utilities: [TvIcon, FoodIcon, BedIcon],
			available: true,
		},
		{
			id: 4,
			image: deluxe1,
			title: "Deluxe Room",
			ratings: [true, true, true, true, false],
			price: 300,
			utilities: [WifiIcon, TvIcon, FoodIcon, BedIcon],
			available: true,
		},
		{
			id: 5,
			image: executive2,
			title: "Executive Lounge",
			ratings: [true, true, true, true, true],
			price: 500,
			utilities: [WifiIcon, TvIcon, FoodIcon],
			available: true,
		},
		{
			id: 6,
			image: standard1,
			title: "Standard Room",
			ratings: [true, true, true, false, false],
			price: 200,
			utilities: [TvIcon, FoodIcon, BedIcon],
			available: true,
		},
	];

	return (
		<section className="container mx-auto px-3 mb-10">
			<h1 className="text-center font-bold text-green-900 text-3xl mt-6">
				Your Cart ({emptyStorage ? 0 : cartItems.length})
			</h1>
			<div className="mt-6 h-full">
				{emptyStorage ? (
					<div className="flex items-center justify-center h-full absolute inset-0">
						<h1 className="text-center font-bold text-green-900 text-3xl mt-6 flex gap-3 items-center">
							Your Cart is Empty
							<span className="emptyCart">:(</span>
						</h1>
					</div>
				) : (
					<div className="grid md:grid-cols-3 gap-3 max-sm:grid-cols-1 max-md:grid-cols-2">
						{cartItems.map((cartItem, index) => (
							<div key={index}>
								<CartCards
									data={cards}
									itemId={cartItem.itemId}
									nightsCount={cartItem.numberPurchases}
								/>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
