import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";
import Company from "@/components/landingPage/company";
import Drive from "@/components/landingPage/drive";
import Footer from "@/components/landingPage/footer";
import Hero from "@/components/landingPage/hero";
import Navbar from "@/components/landingPage/navbar";
import Newsletter from "@/components/landingPage/newsletter";
import Products from "@/components/landingPage/products";
import ScrollButtons from "@/components/landingPage/scrollButtons";
import Teams from "@/components/landingPage/teams";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
	return (
		<div className="overflow-hidden">
			<Navbar />
			<Hero />
			<Products />
			<Company />
			<Teams />
			<Drive />
			<Newsletter />
			<Footer />
			<ScrollButtons />
			{/* <LandingNavbar /> */}
			{/* <LandingHero /> */}
			{/* <LandingContent /> */}
		</div>
	);
};

export default LandingPage;
