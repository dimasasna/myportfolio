import About from "../components/about/About"
import Footer from "../components/footer/Footer"
import Hero from "../components/hero/Hero"
import LoaderHome from "../components/loaderHome/LoaderHome"
import Navbar from "../components/navbar/Navbar"
import Service from "../components/service/Service"
import Work from "../components/work/Work"


const Home = () => {
  return (
    <div>
      <LoaderHome/>
      <Navbar/>
      <Hero/>
      <About/>
      <Work/>
      <Service/>
      <Footer/>
    </div>
  )
}

export default Home
