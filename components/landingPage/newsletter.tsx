"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormItem } from "../ui/form";

const Newsletter: React.FC = () => {
	return (
		<div className="p-12">
			<div className="grid grid-cols-1 md:grid-cols-2 p-12 w-full md:w-4/5 mx-auto items-center gap-8 border-2 border-white rounded-xl">
				<div className="text-gray-200 text-center md:text-left">
					<h1 className="text-2xl mb-4">Join Our Newsletter</h1>
					<h2 className="text-base">
						Never miss out on important updates
					</h2>
				</div>

				<FormItem className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 justify-between  md:w-full mx-auto">
					<div className="flex flex-1">
						<Input
							type="email"
							placeholder="Enter your email"
							className="text-gray-700"
						/>
					</div>
					<Button
						variant={"premium"}
						className="p-5 min-w-16"
						type="submit"
					>
						Subscribe
					</Button>
				</FormItem>
			</div>
		</div>
	);
};

export default Newsletter;
