import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./components/footer/footer";
import BookRoom from "./components/main/bookingDetailed/bookRoom";
import Bookings from "./components/main/bookings/booking";
import Cart from "./components/main/cart/cart";
import Landing from "./components/main/landing/landing";
import Navbar from "./components/navbar/navbar";
import Faqs from "./components/main/cart/faqs";

function App() {
	return (
		<>
			<Navbar />
			<main className="flex-grow">
				<Routes>
					<Route Component={Landing} path="/" />
					<Route Component={Bookings} path="/bookings" />
					<Route Component={BookRoom} path="/bookings/:id" />
					<Route Component={Cart} path="/cart" />
					<Route Component={Faqs} path="/faqs" />
					<Route path="*" Component={Error404Page} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;

function Error404Page() {
	const navigate = useNavigate();
	return (
		<section className="h-screen w-full flex items-center justify-center fixed z-50 inset-0 bg-white text-green-900 flex-col gap-4">
			<h1 className="text-3xl font-bold">Uhh, Cooking?</h1>
			<div className="px-3 container mx-auto flex justify-center items-center">
				<button
					onClick={() => navigate(-1)}
					className="bg-green-200 text-green-900 font-bold text-lg flex  items-center gap-3 rounded-lg border-2 border-grren-300 py-1.5 px-6 hover:bg-green-300 transition-all duration-300 group"
				>
					<span>
						<ArrowLeftIcon className="w-6 h-6 transition-all duration-300 group-hover:mr-3" />
					</span>
					Previous
				</button>
			</div>
		</section>
	);
}
