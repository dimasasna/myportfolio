import Lottie from "lottie-react";
import love from "../../../assets/love.json"


export default function FooterAbout() {
  return (
    <footer  className="lg:px-28 px-4 mt-12 lg:mt-0 py-4 text-primary">
      <div className="flex  justify-between">
        <h1 className="flex lg:justify-center lg:items-center gap-2 text-lg">Create With<Lottie animationData={love} className="w-8"/></h1>
        <a className="hover:text-secondary" href="https://www.instagram.com/dimasasna/" target="_blank" rel="noopener noreferrer"><h1>@dimasasna</h1></a>
      </div>
    </footer>
  )
}
