import About from "../components/home/about/About"
import Footer from "../components/home/footer/Footer"
import Hero from "../components/home/hero/Hero"
import LoaderHome from "../components/home/loaderHome/LoaderHome"
import Navbar from "../components/home/navbar/Navbar"
import Service from "../components/home/service/Service"
import Work from "../components/home/work/Work"


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
