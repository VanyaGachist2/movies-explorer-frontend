import { useRef } from "react";
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";

function Main() {
  const scrollToAboutProject = useRef(null);

  const handleScrollToAboutProject = () => {
    scrollToAboutProject.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <main className="content">
      <Promo scrollButton={handleScrollToAboutProject} />
      <AboutProject refer={scrollToAboutProject} />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  )
}

export default Main;
