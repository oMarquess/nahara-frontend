import React from "react";
import Image from "next/image";

const teams = [
	{
		id: 1,
		name: "James Bond",
		profileImage: "/teams-img-1.png",
		role: "UI/UX Designer",
		company: "Freelance",
	},
	{
		id: 2,
		name: "James Bond",
		profileImage: "/teams-img-1.png",
		role: "UI/UX Designer",
		company: "Freelance",
	},
	{
		id: 3,
		name: "James Bond",
		profileImage: "/teams-img-1.png",
		role: "UI/UX Designer",
		company: "Freelance",
	},
	{
		id: 4,
		name: "James Bond",
		profileImage: "/teams-img-1.png",
		role: "UI/UX Designer",
		company: "Freelance",
	},
	{
		id: 5,
		name: "James Bond",
		profileImage: "/teams-img-1.png",
		role: "UI/UX Designer",
		company: "Freelance",
	},
];

const Teams: React.FC = () => {
	return (
		<div className="p-12 h-full relative">
			<div>
				<h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold text-white">
					Teams
				</h1>
				<h3 className="text-center text-gray-200 py-8">
					Our team is committed to revolutionizing medical consulting
					and diagnostics for healthier lives. Join us to diminish
					disease burden and maximize human potential.
				</h3>
			</div>
			<div className="container mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{teams.map((team) => (
					<div
						key={team.id}
						className=" bg-[#111830] p-4 shadow-md rounded-md group hover:scale-110 transition-all ease-in-out"
					>
						<div className="w-32 h-32 rounded-full border border-gray-700 mx-auto flex justify-center items-center mb-4">
							<Image
								src={team.profileImage}
								width={50}
								height={50}
								alt="profile image"
								className="w-28 h-28 rounded-full flex items-center justify-center m-2 group-hover:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-400 "
							/>
						</div>
						<div className="text-center ">
							<h1 className="text-base font-semibold mb-2 text-white">
								{team.name}
							</h1>
							<h3 className="text-gray-200 text-xs">
								{team.role}
							</h3>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Teams;
