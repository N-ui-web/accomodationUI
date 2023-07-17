import React from "react";
import { NavLink } from "react-router-dom";

export function MobileNavDrawer({ isOpened, navLinks, setIsOpened }) {
	return (
		<div
			className={`z-20 absolute w-full md:hidden bg-white ${
				isOpened ? "translate-y-0" : "-translate-y-full"
			} transition-all duration-300`}
		>
			<div className="gap-1 text-sm text-gray-700 px-2 pb-2 flex flex-col">
				{navLinks.map((link) => (
					<NavLink to={link.href} className="" key={link.text}>
						{({ isActive, isPending }) => (
							<div
								className="group flex items-center gap-1"
								onClick={() => setIsOpened(!isOpened)}
							>
								<div
									className={`${
										isActive ? "h-9" : "group-hover:h-9"
									} bg-green-400 w-1 rounded-full h-1 transition-all duration-300`}
								/>
								<div
									className={`${
										isActive
											? "bg-green-300/20"
											: "hover:bg-green-300/20"
									} p-3 rounded-lg text-green-900 font-bold transition-all duration-300 w-full`}
								>
									{link.text}
								</div>
							</div>
						)}
					</NavLink>
				))}
			</div>
		</div>
	);
}
