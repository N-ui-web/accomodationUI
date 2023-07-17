import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";

export function CheckOutModal({ toggleModal, modalOpened, unit }) {
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		address: "",
		checkIn: "",
		checkOut: "",
		guestCount: 1,
		units: unit
	});

	const [step, setStep] = useState(1);
	const [formValid, setFormValid] = useState(false);

	function handleChange(event) {
		const { name, value } = event.target;
		setForm((prevData) => ({
			...prevData,
			[name]: value,
		}));
	}

	function validateForm() {
		const isEmpty = Object.values(form).some((value) => value === "");
		setFormValid(!isEmpty);
	}

	/**@param {Event} event */
	function handleSubmit(event) {
		event.preventDefault();
		if (formValid) {
			// ! SEND DATA TO BACKEND HERE
			console.log("Form submitted:", JSON.stringify(form));
			toggleModal();
		}
	}

	return (
		<section className="h-screen fixed z-50 inset-0 w-full flex items-center justify-center px-3">
			<div
				onClick={toggleModal}
				className="absolute inset-0 bg-black/20 cursor-pointer"
			/>
			<form
				onSubmit={handleSubmit}
				className="bg-white relative z-50 w-full max-w-md rounded-lg text-teal-900 divide-y-2 overflow-hidden"
			>
				<div>
					<div className="bg-teal-900 text-teal-200 font-bold text-center rounded-t-lg p-2.5 text-xl flex items-center justify-between">
						<button
							className="bg-teal-200/20 rounded-full p-1 flex justify-center items-center hover:bg-teal-200/30 transition-all duration-300"
							onClick={() => setStep(1)}
						>
							<ChevronLeftIcon className="w-6 h-6" />
						</button>
						<div className="w-full">TreatInn</div>
						<div
							className={`border-2 rounded-full p-1 h-7 w-7 text-sm flex items-center justify-center ${
								step === 1
									? "border-l-teal-200 border-t-teal-200 border-teal-200/40"
									: "border-teal-200"
							} transition-all duration-300`}
						>
							{step}
						</div>
					</div>
					<div className="flex relative">
						{step === 1 && (
							<Step1 handleChange={handleChange} form={form} />
						)}
						{/* FORM 2 */}
						{step === 2 && (
							<Step2 handleChange={handleChange} form={form} />
						)}
					</div>
				</div>
				<div className="p-3 mt-4">
					<button
						onClick={() => {
							setStep(2);
							validateForm();
						}}
						type="submit"
						className={`${
							formValid ? "hidden" : "block"
						} rounded-lg w-full bg-teal-800 font-bold py-1.5 text-teal-200 hover:bg-teal-900 active:scale-90 transition-all duration-300`}
					>
						Make Purchase
					</button>
					<button
						onClick={() => {
							setStep(2);
						}}
						type="submit"
						className={`${
							formValid ? "block" : "hidden"
						} rounded-lg w-full bg-teal-800 font-bold py-1.5 text-teal-200 hover:bg-teal-900 active:scale-90 transition-all duration-300`}
					>
						Many Thanks!
					</button>
				</div>
			</form>
		</section>
	);
}
