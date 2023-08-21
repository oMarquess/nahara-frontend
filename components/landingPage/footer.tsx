import React from "react";
import Logo from "../logo";
import { FacebookIcon, GithubIcon } from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
	const footerLinks = [
		{ title: "Product", linkItems: ["Features", "Integration", "Pricing"] },
		{ title: "Company", linkItems: ["Teams", "Values", "Blog"] },
		{ title: "Resources", linkItems: ["Downloads", "Blog", "Docs"] },
	];

	return (
		<div className="px-12">
			<div className="grid grid-cols-1 md:grid-cols-2 w-4/5 mx-auto items-center gap-4 py-6 md:py-12">
				<div className="flex md:items-left flex-row md:flex-col md:items-start items-center  justify-between space-y-4">
					<Logo />
					<div className="text-gray-200 flex space-x-4">
						<Link href="">
							<FacebookIcon size={16} />
						</Link>
						<Link href="">
							<GithubIcon size={16} />
						</Link>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 text-gray-200 gap-y-3">
					{footerLinks.map((items, index) => (
						<div key={index}>
							<div className=" font-bold">{items.title}</div>
							<div>
								{items.linkItems.map((link, index) => (
									<div
										key={index}
										className="text-sm p-1 md:py-2"
									>
										<Link href="">{link}</Link>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<hr className="w-full mx-auto" />
			<div className="flex justify-between text-gray-200 py-4 text-sm flex-col sm:flex-row gap-4">
				<div className="flex justify-between items-center gap-x-8">
					<Link href="">Privacy Policy</Link>
					<Link href=""> Terms and Condition</Link>
				</div>
				<div className="text-center">
					&copy; Nahara. All rights reserved
				</div>
			</div>
		</div>
	);
};

export default Footer;
