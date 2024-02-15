import AboutMe from "../AboutMe/AboutMe";
import NavTab from "../NavTab/NavTab";
import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";

function Main() {
  return (
    <main className="content">
      <Promo />
      <NavTab />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  )
}

export default Main;
