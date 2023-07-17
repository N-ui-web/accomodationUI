import React from "react";
import { NavLink } from "react-router-dom";

export function NavBrand({ logo }) {
	return (
		<div className="max-md:w-full max-md:absolute max-md:inset-x-0 max-md:flex justify-center items-center">
			<NavLink to="/">
				<div className="flex  items-center text-green-700 font-bold gap-2 text-2xl">
					<img src={logo} alt="" className="w-10 h-10" />
					<p className="max-sm:hidden">TreatInn</p>
				</div>
			</NavLink>
		</div>
	);
}
