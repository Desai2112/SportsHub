import HeroPage from "../../Components/Landingpage/HeroPage";
import "../../App.css";
import Navbar from "../../Components/Landingpage/Navbar";
import ContactForm from "../../Components/Landingpage/ContactForm";
import SportsComponent from "../../Components/Landingpage/SportsComponent";
import WhyUs from "../../Components/Landingpage/WhyUs";

const LandingPage = () => {


  return (
    <>
      <Navbar />
      <HeroPage />
      <WhyUs />
      <SportsComponent />
      <ContactForm />
    </>
  );
};

export default LandingPage;
