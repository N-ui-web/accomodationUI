import React from "react";
import { InfoDropDown } from "./InfoDropDown";

export default function Faqs() {
	const questions = [
		{
			title: "Cancellation Policy",
			body: `In this tab, you can point out the cancellation policy for bookings. Specify the timeframes/intervals for cancellations, any applicable fees or penalties, and any special conditions related to cancellations or already placed or impromptu alterations.`,
		},
		{
			title: "Terms and Policies",
			body: `This tab can cover various policies and terms relevant to the stay, such as pet policies, smoking policies, age restrictions,noise restrictions, and any other rules or regulations guests should be aware of during their stay.`,
		},
		{
			title: "Payment And Billing",
			body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Alias reiciendis sequi necessitatibus maxime optio maiores
            nemo rerum temporibus asperiores impedit veritatis, in quas
            mollitia sunt, voluptatem iusto eaque, illum assumenda!`,
		},
		{
			title: "Customer Care/Support",
			body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Alias reiciendis sequi necessitatibus maxime optio maiores
            nemo rerum temporibus asperiores impedit veritatis, in quas
            mollitia sunt, voluptatem iusto eaque, illum assumenda!`,
		},
	];

	return (
		<section className="container mx-auto px-3 mt-6 mb-10">
			<h1 className="text-3xl text-green-900 font-bold text-center">
				FAQs
			</h1>
			<div>
				{questions.map((question, index) => (
					<InfoDropDown
						key={index}
						title={question.title}
						body={question.body}
					/>
				))}
			</div>
		</section>
	);
}
