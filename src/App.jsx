import { FooterContainer } from "./components/FooterContainer";
import { HomeContainer } from "./components/HomeContainer";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { ServiceContainer } from "./components/ServiceContainer";


export const App = () => {
  return (
    <>
      <Navbar />
      <HomeContainer /> 
      <ServiceContainer />
      <Projects />
      <FooterContainer />
    </>
  );
};
