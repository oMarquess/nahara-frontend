import React from "react";
import { CircleDotIcon, ViewIcon, GoalIcon } from "lucide-react";

const services = [
	{
		id: 1,
		icon: CircleDotIcon,
		name: "Our mission",
		desc: "Transforming Healthcare with AI: Our mission is to leverage artificial intelligence to redefine medical diagnostics, elevate patient care, and pioneer a healthier world.",
	},
	{
		id: 2,
		icon: ViewIcon,
		name: "Our Approach",
		desc: "AI-Driven Excellence: Our approach seamlessly integrates AI and medical expertise, delivering innovative solutions for impactful, patient-centric healthcare.",
	},
	{
		id: 3,
		icon: GoalIcon,
		name: "Our broader vision",
		desc: "Forging Health-Tech Frontiers: Our vision is a future where AI and healthcare seamlessly unite, driving precision diagnostics, empowering patients, and transforming global wellness.",
	},
];

const Company: React.FC = () => {
	return (
		<div className="relative min-h-screen overflow-hidden">
			<div
				className={` absolute inset-0 min-h-screen w-full bg-cover bg-[url("/backgroundImage.png")]  bg-no-repeat`}
			></div>{" "}
			{/* Overlay */}
			<div className="absolute inset-0 bg-[#111827]  opacity-80 w-full min-h-full"></div>
			{/* contents */}
			<div className="relative z-10 py-12  px-12 md:px-20">
				<h1 className=" text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold text-white">
					The Company
				</h1>
				<h3 className="text-center text-white font-semibold py-8">
					AI Empowering Health: Smart Diagnoses for Brighter
					Tomorrows.
				</h3>
				<div className="">
					{services.map((service) => (
						<div
							key={service.id}
							className="w-full md:w-3/5 mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 text-justify mb-8"
						>
							<div className="border-4 rounded-full border-gray-700 w-fit h-fit bg-gradient-to-r from-purple-500 to-pink-500">
								<service.icon
									className=" m-4 text-white"
									size={42}
								/>
							</div>
							{/* <div className="w-1 h-32 bg-white hidden md:block"></div> */}
							<div className="flex flex-col text-center md:text-left">
								<h1 className="font-semibold text-2xl md:text-3xl text-gray-200 mb-4">
									{service.name}
								</h1>
								<h3 className="text-gray-200 leading-6 md:leading-10  text-sm md:text-base">
									{service.desc}
								</h3>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Company;
