"use client";
import React, { useState, useEffect } from "react";
import { ArrowDownToLine, ArrowUpToLine } from "lucide-react";

const ScrollButtons: React.FC = () => {
	const [showScrollToTop, setShowScrollToTop] = useState(false);
	const screenHeightThreshold = 600; // Adjust this value as needed

	const handleScroll = () => {
		const isScreenHeightExceeded = window.scrollY > screenHeightThreshold;
		setShowScrollToTop(isScreenHeightExceeded);
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const scrollToBottom = () => {
		window.scrollTo({
			top: document.body.scrollHeight,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="fixed bottom-8 right-8 flex flex-col space-y-2 z-50">
			{showScrollToTop ? (
				<button
					onClick={scrollToTop}
					className="p-2 bg-gray-200 text-[#111827] rounded-full cursor-pointer"
				>
					<ArrowUpToLine size={20} />
				</button>
			) : (
				<div
					onClick={scrollToBottom}
					className="flex space-x-2 items-center justify-center cursor-pointer group "
				>
					<h1 className="text-gray-200 text-sm group-hover:underline underline-offset-8 transition-all ease-in ">
						Scroll Down
					</h1>
					<button className="p-2 bg-gray-200 text-[#111827]  rounded-full">
						<ArrowDownToLine size={20} />
					</button>
				</div>
			)}
		</div>
	);
};

export default ScrollButtons;
