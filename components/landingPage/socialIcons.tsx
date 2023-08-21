import React from "react";
import {
	FacebookIcon,
	GithubIcon,
	TwitterIcon,
	LinkedinIcon,
	InstagramIcon,
} from "lucide-react";
import Link from "next/link";

const SocialIcons: React.FC = () => {
	const icons = [
		{ name: FacebookIcon },
		{ name: TwitterIcon },
		{ name: InstagramIcon },
		{ name: LinkedinIcon },
		{ name: GithubIcon },
	];
	return (
		<div>
			{icons.map((icon, index) => (
				<Link href="/" key={index} className=" text-gray-200  group">
					<div className="bg-[#111827] p-3 group-hover:bg-gradient-to-r from-purple-400 to-pink-500 border-b border-b-gray-700">
						<icon.name className=" text-white  w-full" size={20} />
					</div>
				</Link>
			))}
		</div>
	);
};

export default SocialIcons;
