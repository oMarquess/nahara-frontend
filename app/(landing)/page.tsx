import Hero from "../../components/landingPage/Hero";
import MedCon from "../../components/landingPage/MedCon";
import GetStarted from "../../components/landingPage/GetStarted";
import GetStarted2 from "../../components/landingPage/GetStarted2";
import Footer from "../../components/landingPage/Footer";
import Team from "../../components/landingPage/Team";
import AboutUs from "../../components/landingPage/AboutUs";
import ContactUs from "../../components/landingPage/ContactUs";
import OurProducts from "../../components/landingPage/OurProducts";

const LandingPage = () => {
    return ( 
       <>
	   <Hero />
	   <OurProducts />
	   <MedCon />
	   <AboutUs />
	   <Team />
	   <GetStarted />
	   <ContactUs />
	   <GetStarted2 />
	   <Footer />
	   </>
     );
}
 
export default LandingPage ;