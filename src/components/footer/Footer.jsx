import { useState } from "react"
import mail from "../../assets/mail.json"
import Lottie from "lottie-react"

const Footer = () => {

  const [state] = useState({
    title: "Come Join Us",
    email: "Email Me",
    wa: "Whatsapp Me",
    contact: "More Contact",
    youtube: "Youtube",
    linkedin: "LinkedIn",
    facebook: "Facebook",
    instagram: "Instagram"
  })

  return (
    <section id='footer' className='w-[100%] lg:h-[35vh] h-[60vh] bg-[#181818] flex flex-col justify-center items-center gap-6 px-4 lg:px-0 '>
      <div className='flex justify-center items-center gap-1 text-2xl lg:text-4xl tracking-tighter font-bold uppercase text-primary -mt-24 lg:-mt-0'>
        <Lottie className="h-[100px]" animationData={mail}/>
        {/* <img className='w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] rounded-[50%]' src={Picture} alt="FooterImage" /> */}
        <span>{state.title}</span>
      </div>
      <div className='flex flex-col lg:flex-row lg:w-auto w-[70%] gap-4 lg:text-2xl  text-primary '>
        <a className='bg-primary text-color-text py-[0.3rem] px-[1rem] lg:px-[1.5rem] rounded-[30px] hover:bg-color-text hover:border hover:border-primary hover:text-primary transition-all duration-500' href="mailto:dimas.asna@gmail.com" target="_blank" rel="noopener noreferrer">{state.email}</a>
        <a className='bg-primary text-color-text py-[0.3rem] px-[1rem] lg:px-[1.5rem] rounded-[30px] hover:bg-color-text hover:border hover:border-primary hover:text-primary transition-all duration-500' href="https://api.whatsapp.com/send/?phone=087736854680&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">{state.wa}</a>
        <a className='bg-primary text-color-text py-[0.3rem] px-[1rem] lg:px-[1.5rem] rounded-[30px] hover:bg-color-text hover:border hover:border-primary hover:text-primary transition-all duration-500' href="https://www.google.com" target="_blank" rel="noopener noreferrer">{state.contact}</a>
      </div>
      <div className='text-primary text-xl flex flex-wrap justify-center gap-[1rem]'>
        <a className=' hover:text-secondary' href="https://www.youtube.com/channel/UC9GMON4q-RXz1baGIuVzY7Q" target="_blank" rel="noopener noreferrer">{state.youtube}</a>
        <a className=' hover:text-secondary' href="https://www.linkedin.com/in/dimasasna/" target="_blank" rel="noopener noreferrer">{state.linkedin}</a>
        <a className=' hover:text-secondary' href="https://www.facebook.com/mas.dimkas.1/" target="_blank" rel="noopener noreferrer">{state.facebook}</a>
        <a className=' hover:text-secondary' href="https://www.instagram.com/dimasasna/" target="_blank" rel="noopener noreferrer">{state.instagram}</a>
      </div>
    </section>
  )
}

export default Footer
