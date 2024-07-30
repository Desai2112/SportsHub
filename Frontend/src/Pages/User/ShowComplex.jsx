import { ChakraProvider } from '@chakra-ui/react';
import { Element } from 'react-scroll';
import '../../App.css';
import UserNavbar from '../../Components/User/UserNavbar';
// import Navbar from '../../Components/Landingpage/Navbar';
import ComplexList from '../../Components/User/ComplexList';

const ShowComplex = () => {
  return (
    <ChakraProvider>
      <UserNavbar />
      <Element>
        <ComplexList />
      </Element>
    </ChakraProvider>
  );
};

export default ShowComplex;
