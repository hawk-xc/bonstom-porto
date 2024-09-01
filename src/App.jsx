import { useRef } from "react";

import HeroSection from "./Components/HeroSection";
import LandingPage from "./Components/LandingPage";

export default function App() {
  const heroRef = useRef(null);

  return (
    // <HeroSection heroRef={heroRef}>
    //   <LandingPage />
    // </HeroSection>
    <section className="h-screen flex items-center justify-center bg-custom-gradient bg-[length:200%_200%] animate-gradient-move">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">Welcome to My Website</h1>
        <p className="mt-4 text-lg text-white">
          Experience the beauty of custom gradient animation!
        </p>
      </div>
    </section>
  );
}
