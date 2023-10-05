import Hero from "/src/components/LandingPg/Hero";
import Banner from "/src/components/LandingPg/Banner";
import Guide from "/src/components/LandingPg/Guide";
import Details from "/src/components/LandingPg/Details";
import GetStarted from "/src/components/LandingPg/GetStarted";
import Footer from "/src/components/Global/Footer";

const LandingPg = () => {
  return (
    <>
      <Hero />
      <Banner /> 
      <Guide />
      <Details />
      <GetStarted />
    </>
  )
}

export default LandingPg;