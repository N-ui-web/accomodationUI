import { PlayIcon } from "@heroicons/react/24/solid";

export function Hero({ heroImage }) {
	return (
		<div className="mx-auto bg-white w-fit rounded-t-3xl rounded-b-md">
			<section className="container mx-auto overflow-x-hidden border bg-tealBG/30 rounded-t-3xl rounded-b-md">
			<div className="flex justify-between max-md:flex-col-reverse md:flex-row">
				<div className="w-full px-3 pb-6 md:hidden">
					<div className="max-md:flex flex-row w-full max-w-md mx-auto overflow-hidden transition-all duration-300 bg-white border-2 rounded-full border-green-400/20 focus-within:border-green-400/50">
						<input
							type="text"
							className="w-full px-3 py-3 font-bold text-green-900 focus:outline-none placeholder:font-bold"
							placeholder="Search... e.g Luxurious" />
						<button className="px-10 font-bold text-green-900 bg-green-500 rounded-full">
							Search
						</button>
					</div>
				</div>
				<div className="w-full max-w-lg mx-auto md:p-16 max-md:px-3 max-md:pb-5">
					<h1 className="flex flex-wrap gap-2 mt-10 font-medium md:text-5xl text-slate-700 md:flex-col max-md:flex-row max-md:text-3xl max-md:text-center max-md:justify-center">
						<div className="">Find your perfect</div>
						<div>place to stay</div>
					</h1>
					<p className="text-slate-700 md:mt-10 md:text-left max-md:text-center max-md:mt-5">
						Lorem ipsum dolor sit amet consectetur adipiscing elit.
						Sunt nisi voluptate, provident adipiscing similique
						quis.
					</p>
					<div className="md:mt-6 max-md:mt-3">
						<button className="flex items-center gap-2 bg-white border w-fit rounded-full pr-3 pl-1 py-0.5 transition-all duration-300 group max-md:mx-auto hover:scale-110">
							<div className="flex items-center justify-center p-1 text-green-500 rounded-full w-fit">
								<PlayIcon className="w-6 h-6" />
							</div>
							<div className="font-bold text-slate-700">
								Watch Videos
							</div>
						</button>
					</div>
				</div>
				<div className="relative z-10 overflow-hidden">
					<img
						src={heroImage}
						alt=""
						className="w-full max-w-xl transition-all duration-300 bg-greenBG rounded-tr-3xl hover:scale-110" />
				</div>
			</div>
			<div className="absolute left-0 right-0 md:flex justify-center w-full bottom-40 max-md:hidden md:z-20 max-md:-z-10">
				<div className="flex flex-row w-full max-w-md mx-auto overflow-hidden transition-all duration-300 bg-white border-2 rounded-full border-green-400/20 focus-within:border-green-400/50">
					<input
						type="text"
						className="w-full px-3 py-3 font-bold text-green-900 focus:outline-none placeholder:font-bold"
						placeholder="Search... e.g Luxurious" />
					<button className="px-10 font-bold text-green-900 bg-green-500 rounded-full">
						Search
					</button>
				</div>
			</div>
			</section>
		</div>
	);
}
