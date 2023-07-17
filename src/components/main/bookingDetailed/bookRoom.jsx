import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import {
	CreditCardIcon,
	MinusIcon,
	PlusIcon,
	ShoppingCartIcon,
	StarIcon,
	TvIcon,
	WifiIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import deluxe1 from "../../../assets/images/deluxeroom1.jpg";
import executive2 from "../../../assets/images/executivelounge2.jpg";
import standard1 from "../../../assets/images/standardroom1.jpg";
import { BedIcon } from "../../icons/BedIcon";
import { FoodIcon } from "../../icons/FoodIcons";
import { CheckOutModal } from "./CheckOutModal";
import { Toast } from "./Toast";

export default function BookRoom() {
	const { id } = useParams();
	const cards = [
		{
			id: 1,
			image: deluxe1,
			title: "Deluxe Room",
			ratings: [true, true, true, true, false],
			price: 300,
			utilities: [WifiIcon, TvIcon, FoodIcon, BedIcon],
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

	const productData = cards[id - 1];
	const [modalOpened, setModalOpened] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	function toggleModal() {
		setModalOpened(!modalOpened);
		console.log("MODAL IS OPENED? ", modalOpened);
	}
	const [units, setUnits] = useState({
		unit: 0,
	});

	function handleChange(event) {
		const { name, value } = event.target;

		if (!isNaN(value)) {
			setUnits((prevData) => ({
				...prevData,
				[name]: Number(value),
			}));
		} else {
			console.log(typeof value);
		}
	}

	function add() {
		setUnits((prevData) => ({
			...prevData,
			unit: Number(prevData.unit + 1),
		}));
	}

	function subtract() {
		setUnits((prevData) => ({
			...prevData,
			unit: prevData.unit <= 0 ? 0 : Number(prevData.unit - 1),
		}));
	}

	function addToCart(event) {
		const cartItems = localStorage.getItem("cartItems");
		const items = cartItems ? JSON.parse(cartItems) : [];

		const newItem = {
			itemId: Number(id),
			numberPurchases: Number(units.unit),
		};

		items.push(newItem);
		localStorage.setItem("cartItems", JSON.stringify(items));
		setToastOpened(true);
	}

	const [toastOpened, setToastOpened] = useState(false);

	useEffect(() => {
		let timer;
		if (toastOpened) {
			timer = setTimeout(() => {
				setToastOpened(false);
				console.log("HELLO");
			}, 1000);
		}
		return () => clearTimeout(timer);
	}, [toastOpened]);

	return (
		<main className="mt-6 mb-10 md:h-screens">
			<section className=" container mx-auto px-3">
				<div className="flex max-md:flex-col md:flex-row gap-5">
					<div className="overflow-hidden rounded-2xl w-full">
						<img
							src={productData.image}
							alt=""
							className="w-full hover:scale-125 transition-all duration-300 scale-110"
						/>
					</div>
					<div className="w-full justify-betweens flex flex-col md:py-6 max-md:p-0 divide-y-4 divide-green-900/20">
						<div className="flex justify-between items-center">
							<h1 className="text-3xl font-bold text-green-900 pb-2">
								{productData.title}
							</h1>
							<div className="flex gap-1.5">
								{productData.ratings.map((rating, index) => (
									<div key={index}>
										{rating ? (
											<StarIcon className="md:w-6 md:h-6 max-md:w-4 max-md:h-4 text-green-500" />
										) : (
											<StarOutline className="md:w-6 md:h-6 max-md:w-4 max-md:h-4 text-green-500" />
										)}
									</div>
								))}
							</div>
						</div>
						<div className="text-sm font-medium pt-4 pb-2 text-green-900">
							<p>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Ipsam omnis magni, a quas
								excepturi illum, voluptatum at sit quae deserunt
								molestias? Itaque sapiente adipisci provident
								eum voluptatibus quibusdam eaque vitae. sapiente
								adipisci provident eum voluptatibus quibusdam
								eaque vitae.
							</p>
							<div className="text-green-900 flex items-center justify-between">
								<div className="flex gap-3 mt-6">
									{productData.utilities.map(
										(Utility, index) => (
											<div
												key={index}
												className="w-fit rounded-full p-1 text-green-500 flex items-center justify-center bg-green-900"
											>
												<Utility className="w-5 h-5 text-green-100 fill-green-100" />
											</div>
										)
									)}
								</div>
								<div className="md:hidden translate-y-2.5">
									<h1 className="font-bold text-2xl">
										${productData.price}/Night Time
										<p className="text-sm">
											Total: $
											{productData.price * units.unit}
										</p>
									</h1>
								</div>
							</div>
						</div>
						<div className="mt-2 py-4 flex justify-between text-teal-900 items-center">
							<h1 className="font-bold text-2xl max-md:hidden">
								${productData.price}/Night-Time
								<p className="text-sm">
									Total: ${productData.price * units.unit}
								</p>
							</h1>
							<div className="flex gap-1 max-md:w-full max-w-md max-md:mx-auto">
								<button
									onClick={subtract}
									className="bg-green-900 text-green-200 rounded-lg p-1 transition-all duration-300 active:scale-75"
								>
									<MinusIcon className="w-6 h-6" />
								</button>
								<input
									type="text"
									className="border focus:outline-none rounded-lg text-center max-md:w-full"
									value={units.unit}
									name="unit"
									onChange={handleChange}
									inputMode="numeric"
								/>
								<button
									onClick={add}
									className="bg-green-900 text-green-200 rounded-lg p-1 transition-all duration-300 active:scale-75"
								>
									<PlusIcon className="w-6 h-6" />
								</button>
							</div>
						</div>
						<div className="py-4 flex max-md:flex-col md:flex-row gap-4">
							<div className="w-full">
								<button
									onClick={toggleModal}
									className="mx-auto bg-green-800 font-bold text-green-100 rounded-full py-2 max-w-md w-full border-2 border-green-500 transition-all duration-300 active:scale-90 hover:bg-green-900 flex  justify-center items-center gap-3"
								>
									<CreditCardIcon className="w-6 h-6" />
									Check Out
								</button>
							</div>
							<div className="w-full">
								<button
									onClick={addToCart}
									className="mx-auto font-bold text-green-900 rounded-full py-2 max-w-md w-full border-2 border-green-500 flex items-center justify-center gap-3 hover:bg-green-900 hover:text-green-100 transition-all duration-300 active:scale-90"
								>
									<span>
										<ShoppingCartIcon className="w-6 h-6" />
									</span>
									Add to Cart
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			{modalOpened && (
				<CheckOutModal
					unit={units.unit}
					modalOpened={modalOpened}
					toggleModal={toggleModal}
				/>
			)}
			{toastOpened && <Toast />}
		</main>
	);
}
