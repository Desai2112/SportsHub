import { ChakraProvider } from '@chakra-ui/react';
import { Element, scroller } from 'react-scroll';
import HeroPage from '../../Components/Landingpage/HeroPage';
import Premises from '../../Components/Landingpage/Premises';
import '../../App.css';
import Navbar from '../../Components/Landingpage/Navbar';
import ContactForm from '../../Components/Landingpage/ContactForm';
import SportsComponent from '../../Components/Landingpage/SportsComponent';

const LandingPage = () => {
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -100,  // Adjust this offset to add space at the top
    });
  };

  return (
    <ChakraProvider>
      <Navbar scrollToSection={scrollToSection} />
      <Element name="home">
        <HeroPage />
      </Element>
      <Element name="premises">
        <Premises />
      </Element>
      <Element name="sports">
        <div className="mt-16">
          <SportsComponent />
        </div>
      </Element>
      
      <Element name="about">
        <ContactForm />
      </Element>
    </ChakraProvider>
  );
};

export default LandingPage;
