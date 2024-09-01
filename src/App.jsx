import { useRef, useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import HeroSection from "./Components/HeroSection";
import LandingPage from "./Components/LandingPage";
import AboutMe from "./Components/AboutMe";
import ParticlesComponent from "./Particle/ParticlesComponent";
import AboutMeContent from "./Components/AboutMeContent";
import Navbar from "./Components/Navbar";
import Drawer from "./Components/Drawer";
import Skills from "./Components/Skills";
import SkillsContent from "./Components/SkillsContent";
import ScrollButton from "./Components/ScrollButton";

export default function App() {
  const homeRef = useRef(null);
  const aboutmeRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const contactmeRef = useRef(null);

  const [currentRefIndex, setCurrentRefIndex] = useState(0);

  const refLists = {
    homeRef,
    aboutmeRef,
    projectRef,
    skillsRef,
    contactmeRef,
  };

  const reference = (ref) => {
    if (ref?.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
        left: 0,
      });
    } else {
      console.warn("scroll bug");
    }
  };

  const handleSideBarAction = () => {
    setSideBar(!sidebar);
  };

  // Fungsi untuk menangani klik tombol scroll ke referensi berikutnya
  const scrollToNextRef = () => {
    const refKeys = Object.keys(refLists);
    const nextRefIndex = (currentRefIndex + 1) % refKeys.length; // Menemukan indeks referensi berikutnya (looping kembali ke awal setelah yang terakhir)
    setCurrentRefIndex(nextRefIndex); // Update state dengan indeks referensi saat ini
    reference(refLists[refKeys[nextRefIndex]]); // Panggil fungsi untuk scroll ke ref berikutnya
  };

  useEffect(() => {
    AOS.init();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const refKey = Object.keys(refLists).find(
              (key) => refLists[key].current === entry.target
            );
            const index = Object.keys(refLists).indexOf(refKey);
            setCurrentRefIndex(index); // Update state dengan indeks referensi yang terlihat saat ini
          }
        });
      },
      { threshold: 0.5 } // Mengatur threshold 50% untuk dianggap terlihat
    );

    // Observasi semua elemen yang menggunakan refs
    Object.values(refLists).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center overflow-hidden align-middle primary-background lexend"
      data-theme="light"
    >
      <Drawer />
      <Navbar />
      <ParticlesComponent />
      <HeroSection homeRef={homeRef}>
        <LandingPage />
      </HeroSection>
      <AboutMe aboutmeRef={aboutmeRef}>
        <AboutMeContent />
      </AboutMe>
      <Skills skillsRef={skillsRef}>
        <SkillsContent />
      </Skills>
      <ScrollButton
        scrollToNextRef={scrollToNextRef}
        currentRefIndex={currentRefIndex}
      />
    </div>
  );
}
