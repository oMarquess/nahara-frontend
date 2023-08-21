"use client";
import React from "react";
import {
	ArrowRight,
	MessageSquare,
	StethoscopeIcon,
	ViewIcon,
	WavesIcon,
} from "lucide-react";

const services = [
	{
		id: 1,
		icon: <StethoscopeIcon className="mx-auto" />,
		name: "Nahara MedCon",
		desc: "Healthcare Reimagined: AI-Powered Consultations for Precise Diagnoses and Personalized Care at Your Fingertips",
	},
	{
		id: 2,
		icon: <ViewIcon className="mx-auto" />,
		name: "Nahara Vision",
		desc: "Healthcare Reimagined: AI-Powered Consultations for Precise Diagnoses and Personalized Care at Your Fingertips",
	},
	{
		id: 3,
		icon: <WavesIcon className="mx-auto" />,
		name: "Nahara Sounds",
		desc: "Healthcare Reimagined: AI-Powered Consultations for Precise Diagnoses and Personalized Care at Your Fingertips",
	},
	{
		id: 4,
		icon: <MessageSquare className="mx-auto" />,
		name: "Nahara Vision",
		desc: "Healthcare Reimagined: AI-Powered Consultations for Precise Diagnoses and Personalized Care at Your Fingertips",
	},
	{
		id: 5,
		icon: <ArrowRight className="mx-auto" />,
		name: "Nahara Sounds",
		desc: "Healthcare Reimagined: AI-Powered Consultations for Precise Diagnoses and Personalized Care at Your Fingertips",
	},
];

const Products: React.FC = () => {
	return (
		<div className="relative min-h-full">
			<div
				className={`min-h-full absolute inset-0 h-screen w-full bg-cover bg-[url("/sphere.png")] bg-no-repeat`}
			></div>{" "}
			{/* Overlay */}
			<div className="absolute inset-0 bg-[#111827] opacity-80 w-full min-h-full"></div>
			<div className="absolute w-[60%] h-[60%] -right-[50%] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-[0]"></div>
			<div className="absolute w-[60%] h-[10%] bottom-0 -left-[50%] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-[0]"></div>
			<div className="relative z-10 py-12  px-12 md:px-20">
				<h1 className=" text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold text-white">
					Our Products
				</h1>
				<h3 className="text-center text-white font-semibold py-8">
					Empowering Healthcare through Precision AI.
				</h3>

				<div className="grid grid-rows md:grid-cols-3 gap-12 justify-center items-center mx-auto">
					{/* <div className="flex overflow-hidden gap-12 w-full"> */}
					{services.map((service) => (
						<div
							key={service.id}
							className="min-w-[400px] text-center border-2 border-white rounded-xl p-6 inline-grid space-y-4 cursor-pointer hover:shadow-md transition hover:bg-[#111827] drop-shadow-2xl hover:scale-90"
						>
							<div className="p-2 w-fit rounded-md bg-violet-500/10 text-violet-500 mx-auto">
								{service.icon}
							</div>
							<div className="font-semibold text-white">
								{service.name}
							</div>
							<div className="text-sm text-gray-400">
								{service.desc}
							</div>
						</div>
					))}{" "}
				</div>
				{/* </Glider> */}
				{/* </div> */}
			</div>
		</div>
	);
};

export default Products;
