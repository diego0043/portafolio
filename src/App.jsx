import { HomeContainer } from "./components/HomeContainer";
import { Navbar } from "./components/Navbar";
import { ServiceContainer } from "./components/ServiceContainer";

export const App = () => {
  return (
    <>
      <Navbar />
      <HomeContainer /> 
      <ServiceContainer />
    </>
  );
};
