import "./about.css"

const About = () => {
  return (
    <section id='about' className='bg-color-text w-[100%] h-[100vh] flex justify-center items-center'>
      <div className='absolute flex flex-col leading-[6rem] uppercase text-[4rem] lg:text-[10rem] font-bold opacity-25 pointer-events-none z-[1] text-secondary lg:-translate-x-64'>
        <span className='textOutlined'>about me</span>
        <span className='textOutlined'>about me</span>
        <span className='textOutlined'>about me</span>
        <span className='textOutlined lg:hidden'>about me</span>
      </div>
      <div className='z-[2] px-4 lg:w-[60%] leading-[2rem] font-bold text-primary'>
        <h1 className='lg:text-4xl text-xl font-thin mb-4 relative'>Hi there! 👋 Im Dimas Asna Nugraha, a passionate individual in the world of web development. Whether its crafting beautiful frontend interfaces or diving into the complexities of backend development, I find joy in bringing ideas to life through code.</h1>
        <a className=' underline text-2xl mt-4 hover:text-secondary' href="/">Read More About Me <i className="uil uil-arrow-up-right"></i></a>
      </div>
    </section>
  )
}

export default About
