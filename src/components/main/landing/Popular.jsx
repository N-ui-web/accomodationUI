import {
	ChevronLeftIcon,
	ChevronRightIcon,
	TvIcon,
	WifiIcon,
} from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BedIcon } from "../../icons/BedIcon";
import { Card } from "../../../utilities/Card";
import { FoodIcon } from "../../icons/FoodIcons";
import { NavLink } from "react-router-dom";

export function Popular({ deluxe1, executive2, standard1 }) {
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
	useEffect(() => {
		const prevButtonRef = document.querySelector(".goPrev");
		const nextButtonRef = document.querySelector(".goNext");
		const prevButton = document.querySelector(".swiper-button-prev");
		const nextButton = document.querySelector(".swiper-button-next");
		function prevControl() {
			prevButton.click();
		}
		function nextControl() {
			nextButton.click();
		}
		prevButtonRef.addEventListener("click", prevControl);
		nextButtonRef.addEventListener("click", nextControl);

		return () => {
			nextButtonRef.removeEventListener("click", nextControl);
			prevButtonRef.removeEventListener("click", prevControl);
		};
	}, []);

	return (
		<section className="container mx-auto mt-10">
			<div className="flex w-full items-center justify-between max-md:flex-col md:flex-row gap-4">
				<h1 className="text-3xl font-medium text-slate-700">
					Our Most Popular Hotels
				</h1>
				<div className="max-md:hidden">
					<NavLink
						to="/bookings"
						className="bg-green-200/20 text-green-900 font-bold border-2 border-green-200 hover:bg-green-200/40 transition-all duration-300 rounded-full px-6 py-1 max-md:w-[80%] active:scale-90"
					>
						View all
					</NavLink>
				</div>
			</div>
			<div className="mt-6">
				<Swiper
					slidesPerView={"auto"}
					spaceBetween={1}
					pagination={{
						clickable: true,
						type: "fraction",
					}}
					modules={[Pagination, Navigation]}
					navigation={true}
					className="cursor-grabbing"
				>
					<div className="absolute top-0 z-30 h-full flex items-center justify-center">
						<button className="goPrev rounded-full">
							<div className="active:scale-75 transition-all duration-300 bg-white z-50 rounded-full p-2 border shadow-lg">
								<ChevronLeftIcon className="w-6 h-6" />
							</div>
						</button>
					</div>
					{cards.map((card) => (
						<SwiperSlide className="max-w-md h-full" key={card.id}>
							<Card data={card} />
						</SwiperSlide>
					))}
					<div className="absolute top-0 z-30 h-full flex items-center justify-center right-0">
						<button className="goNext rounded-full">
							<div className="active:scale-75 transition-all duration-300 bg-white z-50 rounded-full p-2 border shadow-lg">
								<ChevronRightIcon className="w-6 h-6" />
							</div>
						</button>
					</div>
				</Swiper>
				<div className="w-full max-md:flex justify-center px-3 pt-6 md:hidden">
					<NavLink
						to="/bookings"
						className="bg-green-200/20 text-green-900 font-bold border-2 border-green-200 hover:bg-green-200/40 transition-all duration-300 rounded-full px-6 py-1 max-md:w-[80%]s active:scale-90 w-full text-center"
					>
						View all
					</NavLink>
				</div>
			</div>
		</section>
	);
}
