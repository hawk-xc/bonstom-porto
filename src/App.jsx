import { useRef } from "react";

import HeroSection from "./Components/HeroSection";
import LandingPage from "./Components/LandingPage";
import AboutMe from "./Components/AboutMe";
import AboutMeContent from "./Components/AboutMeContent";

export default function App() {
  const heroRef = useRef(null);
  const aboutmeRef = useRef(null);

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden align-middle primary-background lexend">
      <HeroSection heroRef={heroRef}>
        <LandingPage />
      </HeroSection>
      <AboutMe aboutmeRef={aboutmeRef}>
        <AboutMeContent />
      </AboutMe>
    </div>
  );
}
