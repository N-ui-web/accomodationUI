import React from "react";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export function CartCards({ data, itemId, nightsCount }) {
	return (
		<Link to={`/bookings/${itemId}`}>
			<div className="border-2 rounded-lg pr-2 flex  gap-6 max-w-md h-full border-green-200/50">
				<div className="rounded-tl-lg overflow-hidden rounded-bl-lg border-r-2 border-green-500 w-full">
					<img
						src={data[itemId - 1].image}
						alt=""
						className="scale-110 object-cover h-full transition-all duration-300 hover:scale-125"
					/>
				</div>
				<div className="w-full space-y-3 py-2">
					<h1 className="font-bold md:text-2xl text-green-900 w-full max-md:text-lg">
						{data[itemId - 1].title}
					</h1>
					<div className="flex">
						{data[itemId - 1].ratings.map((rating, index) => (
							<div key={index}>
								{rating ? (
									<StarIcon className="w-4 h-4 text-green-500" />
								) : (
									<StarOutline className="w-4 h-4 text-green-500" />
								)}
							</div>
						))}
					</div>
					<div className="text-green-900 font-medium text-sm flex flex-col gap-2">
						price: ${data[itemId - 1].price}
						<div>{nightsCount} nights</div>
						<div>
							Total: ${data[itemId - 1].price * nightsCount}
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
