import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { FacebookIcon } from "../icons/FacebookIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import { TwitterIcon } from "../icons/TwitterIcon";

export default function Footer() {
	const [toggledFooter, setToggledFooter] = useState(true);
	return (
		<footer className="flex-shrink-0 bg-green-900 relative">
			<button
				onClick={() => setToggledFooter(!toggledFooter)}
				className={` bg-teal-900 w-fit p-3 rounded-full absolute -top-5 left-3 text-green-200 transition-all duration-300 ${
					toggledFooter ? "rotate-180" : "rotate-0"
				}`}
			>
				<ChevronDownIcon className="h-6 w-6" />
			</button>
			<div className="container mx-auto p-3 pb-0">
				<div className="font-bold text-2xl max-md:text-center text-green-100 pb-4 md:px-10">
					TreatInn
				</div>
				<div className="divide-y-4 divide-green-200/30">
					<div className={`flex justify-between items-center md:flex-row max-md:flex-col gap-4 pb-4 transition-all duration-300 ${toggledFooter ? "hidden" : "block"}`}>
						<div className="font-bold md:text-4xl text-green-100 max-md:text-center md:px-10 max-md:text-3xl mt-3">
							Find your perfect <br /> place to stay.
						</div>
						<div className="space-y-1">
							<div className="text-green-200">Follow Our Socials:</div>
							<div className="text-green-200 fill-teal-900 flex justify-evenly">
								<a href="#">
									<FacebookIcon className="w-6 h-6" />
								</a>
								<a href="#">
									<InstagramIcon className="w-6 h-6" />
								</a>
								<a href="#">
									<TwitterIcon className="w-6 h-6" />
								</a>
							</div>
						</div>
					</div>
					<div className="py-4 text-teal-100 font-bold  md:px-10 flex items-center md:justify-between max-md:justify-center gap-3">
						<img
							src={logo}
							className="w-12 h-12 bg-white rounded-full"
						/>
						<p className="footer__copyright">
							&copy; 2023 TreatInn
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
