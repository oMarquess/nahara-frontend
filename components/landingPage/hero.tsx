"use client";
import React from "react";
import TypewriterComponent from "typewriter-effect";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";
import SocialIcons from "./socialIcons";

const Hero = () => {
	const { isSignedIn } = useAuth();
	return (
		<div className="relative h-screen">
			<div className="absolute text-white top-0 left-0 z-60 inset-0">
				hi
			</div>
			<div
				className={` absolute inset-0 h-screen w-full bg-cover bg-[url("/hero-image.jpg")] bg-no-repeat`}
			></div>
			{/* Overlay */}
			<div className="absolute inset-0 bg-[#111827] opacity-80 w-full h-full"></div>
			{/* Content */}
			<div className="relative z-10 min-h-screen flex flex-col justify-center text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-8 font-extrabold text-white px-8">
				<div className="absolute top-1/2 transform -translate-y-1/2 right-0 hidden md:flex">
					<SocialIcons />
				</div>
				<span className="text-sm border border-white py-2 px-4 mx-auto rounded-full">
					Our new AI integration just landed
				</span>
				<h1> Medicine can be fun and precise </h1>
				<div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
					<TypewriterComponent
						options={{
							strings: ["Accurate", "Reliable", "Fast"],
							autoStart: true,
							loop: true,
						}}
					/>
				</div>
				<div>
					<Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
						<Button
							variant="premium"
							className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
						>
							Get your free trial today -&gt;
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
