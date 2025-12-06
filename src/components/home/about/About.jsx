import "./about.css"
import AOS from 'aos';
import { useState } from "react";
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";


const About = () => {
  AOS.init();
  const [state] = useState({
    typografi: "about me",
    link: "Read More About Me"
  });
  return (
    <section id='about' className='bg-color-text w-[100%] h-[100vh] flex justify-center items-center'>
      <div className='absolute flex flex-col leading-[6rem] uppercase text-[4rem] lg:text-[10rem] font-bold opacity-25 pointer-events-none z-[1] text-secondary lg:-translate-x-64'>
        <span className='textOutlined'>{state.typografi}</span>
        <span className='textOutlined'>{state.typografi}</span>
        <span className='textOutlined'>{state.typografi}</span>
        <span className='textOutlined lg:hidden'>{state.typografi}</span>
      </div>
      <div className='z-[2] mt-12 px-4 lg:w-[60%] leading-[2rem] font-extrabold text-primary'>
        <Fade direction="down">
          <h1 className='lg:text-4xl text-xl font-thin mb-4 relative'>Hi there! Im Dimas Asna Nugraha, I combine analytical thinking and technical skills to design efficient <span className="text-yellow-200 hover:text-primary cursor-pointer">test processes</span> that improve <span className="text-yellow-200 hover:text-primary cursor-pointer">product quality</span> and <span className="text-yellow-200 hover:text-primary cursor-pointer">development speed</span></h1></Fade>
        <Fade direction="up">
          <Link className="underline text-2xl mt-4 hover:text-secondary" to={"/about"}>{state.link}<i className="uil uil-arrow-up-right "></i></Link></Fade>
        <div className="mt-[30px]">
          <iframe className="rounded-2xl" src="https://open.spotify.com/embed/track/77vx7sGjdqwdnQL968t8oY?utm_source=generator&theme=0" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>
    </section>
  )
}

export default About
