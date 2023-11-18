import Back from "../components/about/back/Back";
import Contact from "../components/about/contact/Contact";
import FooterAbout from "../components/about/footer/FooterAbout";
import HeroAbout from "../components/about/heroAbout/HeroAbout";
import LoaderAbout from "../components/about/loaderAbout/LoaderAbout";
import Typografi from "../components/about/typografi/Typografi";



export default function About() {
  return (
    <div className="bg-color-text ">
      <Back />
      <LoaderAbout />
      <HeroAbout />
      <Typografi />
      <Contact />
      <FooterAbout />
    </div>
  )
}
