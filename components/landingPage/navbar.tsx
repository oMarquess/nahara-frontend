"use client";
import React, { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import Logo from "../logo";
import { MenuIcon, XIcon } from "lucide-react";

const Navbar: React.FC = () => {
	const { isSignedIn } = useAuth();
	const [toggle, setToggle] = useState(false);

	const navLinks = [
		{ id: 1, title: "Product" },
		{ id: 2, title: "Pricing" },
		{ id: 3, title: "Company" },
		{ id: 4, title: "Blog" },
	];

	return (
		<nav className="mx-auto max-w-screen-xl h-gull w-full py-4 z-10 overflow-hidden px-8 md:px-0">
			<div className="flex justify-between items-center">
				<Logo />
				<section className="hidden md:flex space-x-8 text-white">
					{navLinks.map((item) => (
						<Link
							href={""}
							key={item.id}
							className="hover:text-pink-500"
						>
							{item.title}
						</Link>
					))}
				</section>
				<section className="hidden md:flex">
					<Link
						href={isSignedIn ? "/dashboard" : "/sign-up"}
						passHref
						className="bg-white p-1 rounded-full flex items-center space-x-2 text-sm font-semibold text-[#111827]"
					>
						<span className="bg-[#111827] py-2 px-4 rounded-full text-white">
							-&gt;
						</span>
						<span>Get Started</span>
						<div className="flex space-x-1">
							<span className="text-gray-500">&gt;</span>
							<span className="text-[#111827]">&gt;</span>
							<span className="text-[#111827] pr-1">&gt;</span>
						</div>
					</Link>
				</section>
				<section
					onClick={() => setToggle((prev) => !prev)}
					className="sm:hidden text-white cursor-pointer"
				>
					{toggle ? <XIcon /> : <MenuIcon />}
				</section>
			</div>
			{/* Mobile Menu */}
			{toggle && (
				<section className="sm:hidden my-8 px-8 text-white flex flex-col h-screen gap-y-8">
					{navLinks.map((item) => (
						<Link href={""} key={item.id}>
							{item.title}
						</Link>
					))}
				</section>
			)}
		</nav>
	);
};

export default Navbar;
