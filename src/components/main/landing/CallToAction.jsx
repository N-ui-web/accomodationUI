import preferenceImg1 from "../../../assets/images/house5.jpg";
import { MagnifyingGlassIcon, WifiIcon } from "@heroicons/react/24/solid";
import { BedIcon } from "../../icons/BedIcon";
import { PoolIcon } from "../../icons/PoolIcon";

export function CallToAction({}) {
	return (
		<section className="container mx-auto px-3 mt-10">
			<div>
				<h1 className="font-medium text-3xl max-md:text-center text-slate-800">
					Get a Hotel/Accommodation Just for You
				</h1>
			</div>
			<div className="mt-6">
				<div className="w-fit bg-tealBG/20 border rounded-t-3xl rounded-b-lg flex overflow-hidden max-md:flex-col md:flex-row max-md:gap-6">
					<div className="text-slate-700 space-y-10">
						<div className="md:space-y-16 p-12 pb-0 max-md:space-y-6">
							<h1 className="font-medium md:text-4xl max-md:text-center max-md:text-3xl">
								Pick your preffered choice
							</h1>
							<p className="max-md:text-center md:text-left">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Quos saepe, cum suscipit,
								alias odit velit perferendis praesentium numquam
							</p>
						</div>
						<div className="px-2">
							<div className="bg-white divide-x-2 rounded-full flex justify-between overflow-hidden text-teal-900 fill-teal-900 border-2 border-teal-300 divide-teal-300 max-md:p-3">
								<div className="flex items-center justify-center w-full gap-2">
									<WifiIcon className="w-6 h-6" />
									<span className="font-bold">Wifi Connection</span>
								</div>
								<div className="flex items-center justify-center w-full gap-2">
									<BedIcon className="w-6 h-6" />
									<span className="font-bold">Beds</span>
								</div>
								<div className="flex items-center justify-center w-full gap-2">
									<PoolIcon className="w-6 h-6" />
									<span className="font-bold">Swimming Pool</span>
								</div>
								<button className="bg-teal-200 text-teal-900 p-3 px-10 max-md:hidden md:block">
									<MagnifyingGlassIcon className="h-6 w-6" />
								</button>
							</div>
						</div>
					</div>
					<div className="overflow-hidden">
						<img
							src={preferenceImg1}
							alt=""
							className="md:max-w-2xl hover:scale-110 transition-all duration-300 max-md:w-fulls"
							draggable={false}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
