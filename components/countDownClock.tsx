"use client";
import React, { useState, useEffect } from "react";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";

const CountdownClock: React.FC = () => {
	const [digitBlockWidth, setDigitBlockWidth] = useState("40px");

	useEffect(() => {
		const updateWidth = () => {
			const screenWidth = window.innerWidth;
			setDigitBlockWidth(
				screenWidth >= 1024
					? "40px"
					: screenWidth >= 768
					? "30px"
					: "25px"
			);
		};

		updateWidth();
		window.addEventListener("resize", updateWidth);

		return () => window.removeEventListener("resize", updateWidth);
	}, []);

	return (
		<div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mx-auto">
			<FlipClockCountdown
				to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
				digitBlockStyle={{
					width: digitBlockWidth,
					height: 60,
					fontSize: "text-base md:text-xl lg:text-2xl",
				}}
			/>
		</div>
	);
};

export default CountdownClock;
