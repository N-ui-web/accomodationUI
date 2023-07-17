import React from "react";

export function Step2({ handleChange, form }) {
	return (
		<div className="px-4 mt-4 space-y-4 w-full formSlide">
			<div className="relative">
				<input
					type="text"
					name="address"
					id="address"
					className="w-full rounded-md p-2 px-2 focus:outline-none border-green-300 border-2 focus:border-green-400 transition-colors duration-300 peer"
					placeholder="e.g. John Doe"
					value={form.address}
					onChange={handleChange}
					required />
				<label
					className={`${form.address !== ""
							? "-translate-y-5 w-fit px-1"
							: "peer-focus:-translate-y-5 peer-focus:w-fit peer-focus:px-1 w-[90%]"} transition-all duration-300 font-medium text-green-800 absolute top-2 left-0 ml-2 bg-white cursor-text`}
					htmlFor="address"
				>
					Address:
				</label>
			</div>
			<div className="flex justify-between gap-2">
				<div className="w-full relative">
					<input
						type="date"
						name="checkIn"
						id="email"
						className="w-full rounded-md p-2 px-2 focus:outline-none border-green-300 border-2 focus:border-green-400 transition-colors duration-300 peer"
						value={form.checkIn}
						onChange={handleChange}
						placeholder="e.g. johndoe@mail.com"
						required />
					<label
						className={`${form.checkIn !== ""
								? "-translate-y-5 w-fit px-1"
								: "peer-focus:-translate-y-5 peer-focus:w-fit peer-focus:px-1 w-[90%]"} transition-all duration-300 font-medium text-green-800 absolute top-2 left-0 ml-2 bg-white cursor-text`}
						htmlFor="checkIn"
					>
						Check In:
					</label>
				</div>
				{/*  */}
				<div className="w-full relative">
					<input
						type="date"
						name="checkOut"
						id="checkOut"
						className="w-full rounded-md p-2 px-2 focus:outline-none border-green-300 border-2 focus:border-teal-400 transition-colors duration-300 peer"
						value={form.checkOut}
						onChange={handleChange}
						placeholder="e.g. johndoe@mail.com"
						required />
					<label
						className={`${form.checkOut !== ""
								? "-translate-y-5 w-fit px-1"
								: "peer-focus:-translate-y-5 peer-focus:w-fit peer-focus:px-1 w-[90%]"} transition-all duration-300 font-medium text-green-800 absolute top-2 left-0 ml-2 bg-white cursor-text`}
						htmlFor="checkOut"
					>
						Check Out:
					</label>
				</div>
			</div>
			<div className="relative">
				<input
					type="text"
					name="guestCount"
					id="guestCount"
					className="w-full rounded-md p-2 px-2 focus:outline-none border-spring-green-300 border-2 focus:border-green-400 transition-colors duration-300 peer"
					value={form.guestCount}
					onChange={handleChange}
					placeholder="e.g. 2"
					required
					inputMode="numeric" />
				<label
					className={`${form.guestCount !== ""
							? "-translate-y-5 w-fit px-1"
							: "peer-focus:-translate-y-5 peer-focus:w-fit peer-focus:px-1 w-[90%]"} transition-all duration-300 font-medium text-green-800 absolute top-2 left-0 ml-2 bg-white cursor-text`}
					htmlFor="guestCount"
				>
					Number of Guests:
				</label>
			</div>
		</div>
	);
}
