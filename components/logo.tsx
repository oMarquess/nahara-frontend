import React from "react";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Montserrat({
	weight: "700",
	subsets: ["latin"],
});

const Logo: React.FC = () => {
	return (
		<div>
			<Link href="/" passHref className="flex items-center">
				<div className="relative h-8 w-8 mr-4">
					<Image fill alt="Logo" src="/logo.png" />
				</div>
				<h1
					className={cn(
						"text-2xl font-bold text-white",
						font.className
					)}
				>
					Nahara
				</h1>
			</Link>
		</div>
	);
};

export default Logo;
