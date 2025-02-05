import { useState } from "react"
import profil from "./../../../assets/profil.webp"

export default function HeroAbout() {
  const [state] = useState({
    about: "Hi there! Im Dimas Asna Nugraha, a passionate about Fullstack Developer. Whether its crafting beautiful frontend interfaces or diving into the complexities of backend development."
  })
  return (
    <section className="w-[100%] text-primary">
      <div className="lg:p-28 p-4 w-[100%] flex flex-col lg:flex-row">
        <div className="lg:w-[70%] w-full flex flex-col gap-6">

          <div className="flex lg:flex-row flex-col gap-4 items-center mt-12 lg:mt-0">
            <img className="lg:w-[250px]" src={profil} alt="profilAbout" />
            <p className="leading-relaxed tracking-wider  lg:w-[50%]">{state.about}</p>
          </div>
          <div>
            <a href="#contact" className=' underline text-xl mt-4 cursor-pointer hover:text-secondary'>Feel Free Contact Me<i className="uil uil-arrow-up-right"></i></a>
          </div>
          <div className="flex flex-col ">
            <h1 className="-mb-4">Also available on</h1>
            <a className='-my-4 underline w-28 text-md mt-4 cursor-pointer hover:text-secondary'>Instagram<i className="uil uil-arrow-up-right"></i></a>
            <a className='-my-4 underline w-28 text-md mt-4 cursor-pointer hover:text-secondary'>Whatsapp<i className="uil uil-arrow-up-right"></i></a>
            <a className='-my-4 underline w-28 text-md mt-4 cursor-pointer hover:text-secondary'>LinkedIn<i className="uil uil-arrow-up-right"></i></a>
          </div>

        </div>
        <div className="lg:w-[30%] w-full mt-8 lg:mt-0 font-bold flex flex-col gap-8 relative overflow-hidden">

          <div className="border-b pb-4">
            <h1 className="text-2xl mb-4">Certificate</h1>
            <div><a href="https://www.codepolitan.com/c/DZXQUUC/" target="blank" className=' underline w-28 text-md mt-4 cursor-pointer hover:text-secondary'>Sertifikat Kelas Javascript Codepolitan<i className="uil uil-arrow-up-right"></i></a></div>
            <div><a className=' underline w-28 text-md mt-4 cursor-pointer hover:text-secondary'>Sertifikat Kelas Javascript DOM Manipulation Codepolitan<i className="uil uil-arrow-up-right"></i></a></div>
          </div>
          <div className="border-b pb-4">
            <h1 className="text-2xl mb-4">Experience</h1>
            <div><a href="https://eduwork.id/" target="blank" className=' underline w-28 text-md mt-4 cursor-pointer hover:text-secondary'>Intern - Programmer - PT Talenta Sinergi Group - Eduwork.id<i className="uil uil-arrow-up-right"></i></a></div>
          </div>

        </div>
      </div>
    </section>
  )
}
