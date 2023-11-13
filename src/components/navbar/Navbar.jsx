

const Navbar = () => {

  

  return (
    <nav className='fixed z-[4]  text-[1.0rem] flex justify-center lg:justify-start text-xl w-[100%]'>
      <div className='hidden lg:flex flex-col justify-start leading-[1.5rem] left-0 top-0 p-4 text-primary font-bold z-[4]'>
        <span>Hi, my name is</span>
        <span>Dimas Asna Nugraha</span>
      </div>
      <div className='flex flex-row fixed z-[4] justify-center items-center bottom-[3rem] p-[1rem] gap-4 rounded-[20px] bg-[#ffffff9f] lg:bg-transparent'>
        <div className='lg:fixed static lg:right-0 lg:top-0 flex lg:flex-col lg:p-4 text-primary font-semibold lg:items-end z-[4] flex-row gap-4'>
          <a href="#home">
            <i className="uil uil-estate lg:hidden text-4xl"></i>
            <span className='hidden lg:block'>Home</span>
          </a>
          <a href="#about">
            <i className="uil uil-user lg:hidden text-4xl"></i>
            <span className='hidden lg:block'>About</span>
          </a>
          <a href="#work">
            <i className="uil uil-notebooks lg:hidden text-4xl"></i>
            <span className='hidden lg:block'>Work</span>
          </a>
        </div>
        <div className='lg:fixed static lg:bottom-0 lg:left-0 lg:p-4 flex flex-row lg:flex-col text-primary font-semibold z-[4] gap-4'>
          <a href="#service">
            <i className="uil uil-sliders-v-alt lg:hidden text-4xl"></i>
            <span className='hidden lg:block'>Service</span>
          </a>
          <a href="#footer">
            <i className="uil uil-telegram-alt lg:hidden text-4xl"></i>
            <span className='hidden lg:block'>Contact</span>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
