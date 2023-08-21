"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import BackgroundVideo from "@/components/backgroundVideo";
import CountdownClock from "@/components/countDownClock";
import { Input } from "@/components/ui/input";
import { FormItem } from "@/components/ui/form";

const Page: React.FC = () => {
	return (
		<section className="relative w-full h-screen overflow-hidden">
			{/* Overlay */}
			<div className="absolute top-0 left-0 w-full h-full bg-[#111827]  opacity-50"></div>
			{/* Background Video */}
			<BackgroundVideo />
			<div className="absolute inset-0 flex items-center justify-center text-white z-10">
				<div className="text-center flex flex-col space-y-12">
					<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
						Coming Soon
					</h1>
					<p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
						Stay tuned for something amazing
					</p>

					{/* Countdown Clock */}
					<CountdownClock />

					<FormItem className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 justify-between  md:w-full mx-auto">
						<div className="flex flex-1">
							<Input
								type="email"
								placeholder="example@email.com"
								className="text-gray-700"
							/>
						</div>
						<Button
							variant={"premium"}
							className="p-5 min-w-16"
							type="submit"
						>
							Notify Me
						</Button>
					</FormItem>
				</div>
			</div>
		</section>
	);
};

export default Page;
