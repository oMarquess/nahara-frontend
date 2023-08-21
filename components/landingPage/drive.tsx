import React from "react";
import { CircleDotIcon, ViewIcon, GoalIcon } from "lucide-react";

const drive: React.FC = () => {
	const drivesData = [
		{
			id: 1,
			icon: CircleDotIcon,
			name: "Innovation",
			desc: "Transforming Healthcare with AI to redefine diagnostics, elevate patient care, and pioneer a healthier world.",
		},
		{
			id: 2,
			icon: ViewIcon,
			name: "Courage",
			desc: "Seamlessly integrating AI and medical expertise for innovative, patient-centric healthcare solutions.",
		},
		{
			id: 3,
			icon: GoalIcon,
			name: "Data Driven",
			desc: "Uniting AI and healthcare to drive precision diagnostics, empower patients, and transform global wellness.",
		},
		{
			id: 4,
			icon: ViewIcon,
			name: "Courage",
			desc: "Seamlessly integrating AI and medical expertise for innovative, patient-centric healthcare solutions.",
		},
		{
			id: 5,
			icon: GoalIcon,
			name: "Data Driven",
			desc: "Uniting AI and healthcare to drive precision diagnostics, empower patients, and transform global wellness.",
		},
	];

	return (
		<div className="p-12 relative h-full">
			<div className="absolute w-80 h-40 rounded-full border-dotted border-4 border-pink-400 opacity-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "></div>
			<div className="absolute w-40 h-40 rounded-full border-dotted border-4 border-pink-400 opacity-20 bottom-10 left-96 transform -translate-x-1/2 -translate-y-1/2 "></div>
			<div className="absolute w-20 h-20 rounded-full border-dotted border-4 border-indigo-400 opacity-30 top-2/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2 "></div>

			<div className="z-50">
				<div className="text-center ">
					<h1 className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold text-white">
						What drives us?
					</h1>
					<h3 className="py-8 md:py-12 text-gray-200">
						"Empowering healthcare with AI for proactive
						diagnostics, precise treatment, data-driven insights,
						and accessible remote care."
					</h3>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12  items-center justify-center w-4/5 mx-auto ">
					{drivesData.map((item) => (
						<div
							key={item.id}
							className="flex flex-col md:flex-row gap-8 md:gap-12 items-center bg-[#111830] p-4 md:p-8 rounded-lg h-auto md:h-[180px] z-20"
						>
							<div className="border-4 rounded-full border-gray-700 w-fit h-fit bg-violet-500">
								<item.icon
									size={42}
									className="m-4 text-white"
								/>
							</div>
							<div className="">
								<h1 className="font-semibold text-2xl md:text-3xl text-gray-300 mb-4 text-center md:text-left">
									{item.name}
								</h1>
								<h2 className="leading-8 text-gray-200 text-sm text-center md:text-left">
									{item.desc}
								</h2>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default drive;
