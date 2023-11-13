import { useState } from "react"
import picture from "../../assets/work.webp"

const Work = () => {
    const [state] = useState({
        typografi: "work",
        title: "Featured Projects",
        nomor: "01.",
        titleproject: "HiSocial",
        desc: "Web Application",
        link: "Online Preview"
    })
    return (
        <section id='work' className='w-[100%] bg-color-text lg:py-[4rem] lg:px-[6rem] px-4 pt-[5rem]'>
            <div className='flex flex-row  justify-between text-primary   absolute lg:relative pt-[2rem] lg:pt-6'>
                <div className='text-[8rem] font-[1000] flex flex-col uppercase tracking-[-1.5rem]  leading-[4rem] opacity-25  pointer-events-none italic'>
                    <span>{state.typografi}</span>
                    <span>{state.typografi}</span>
                    <span>{state.typografi}</span>
                </div>
                <span className='text-2xl absolute lg:relative italic pt-12 lg:mr-12 lg:pt-0'>{state.title}</span>
            </div>
            <div className='flex lg:flex-row flex-col mt-14 lg:mt-0  justify-center items-center gap-4 lg:translate-y-[-6rem] translate-y-[-5rem] w-[100%] h-[100vh] lg:h-auto'>
                <div className='flex flex-col text-primary gap-5 group overflow-hidden'>
                    <img className='lg:w-[450px] lg:h-[450px] group-hover:scale-105 transition-all duration-500' src={picture} alt="Gambar Work " />
                    <div className='flex flex-row items-center gap-2'>
                        <span className='font-bold text-2xl'>{state.nomor}</span>
                        <div className='flex flex-col'>
                            <span className='text-2xl font-bold'>{state.titleproject}</span>
                            <span className='text-[1rem]'>{state.desc}</span>
                        </div>
                    </div>
                </div>
                <div className='lg:h-[50vh] flex items-center lg:items-end lg:w-[40%] w-[100%] justify-center'>
                    <a className='w-[100%] flex justify-between text-primary border-b-2 border-primary transition-all duration-500 px-[0.3rem] hover:bg-primary hover:text-color-text' href="https://www.hisocial.id" target="_blank" rel="noopener noreferrer">
                        <i className="uil uil-arrow-up-left"></i>
                        <span>{state.link}</span>
                    </a>
                </div>
            </div>

        </section>
    )
}

export default Work
