import Lottie from "lottie-react"
import { Link } from "react-router-dom"
import arrow from "../../../assets/arrow.json"

export default function Back() {
  return (
    <section className="z-50 relative">
      <div className="w-16 h-16 m-8 flex justify-center items-center text-5xl fixed bg-secondary rounded-full hover:bg-primary"><Link to={"/"}><Lottie animationData={arrow}/></Link></div>
    </section>
  )
}
