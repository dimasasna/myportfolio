import "./about.css"
import AOS from 'aos';
import { useState } from "react";
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";


const About = () => {
  AOS.init();
  const [state] = useState ({
    typografi: "about me",
    link: "Read More About Me"
  });
  return (
    <section  id='about' className='bg-color-text w-[100%] h-[100vh] flex justify-center items-center'>
      <div className='absolute flex flex-col leading-[6rem] uppercase text-[4rem] lg:text-[10rem] font-bold opacity-25 pointer-events-none z-[1] text-secondary lg:-translate-x-64'>
        <span className='textOutlined'>{state.typografi}</span>
        <span className='textOutlined'>{state.typografi}</span>
        <span className='textOutlined'>{state.typografi}</span>
        <span className='textOutlined lg:hidden'>{state.typografi}</span>
      </div>
      <div className='z-[2] px-4 lg:w-[60%] leading-[2rem] font-extrabold text-primary'>
        <Fade direction="down">
        <h1 className='lg:text-4xl text-xl font-thin mb-4 relative'>Hi there! Im Dimas Asna Nugraha, a passionate about <span className=" text-yellow-200 hover:text-primary cursor-pointer">Fullstack Developer</span>. Whether its crafting beautiful <span className="text-yellow-200 hover:text-primary cursor-pointer">frontend interfaces</span> or diving into the complexities of <span className="text-yellow-200 hover:text-primary cursor-pointer">backend development</span>.</h1></Fade>
        <Fade direction="up">
        <Link to={"/about"}><a className=' underline text-2xl mt-4 hover:text-secondary'>{state.link}<i className="uil uil-arrow-up-right"></i></a></Link></Fade>
      </div>
    </section>
  )
}

export default About
