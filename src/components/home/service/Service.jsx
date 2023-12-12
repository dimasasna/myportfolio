import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from "react"
import "./service.css"

const Service = () => {
    const [state] = useState({
        developer: "Developer",
        frontend: "Frontend",
        backend: "Backend",
        fullstack: "Fullstack",
        html: "HTML5",
        css: "CSS3",
        javascript: "Javascript",
        php: "PHP",
        react: "React JS",
        sql: "MySQL",
        bootstrap: "Bootstrap",
        laravel: "Laravel",
        tailwind: "Tailwind"
    })
    const { scrollYProgress } = useScroll()
    const frontend = useTransform(scrollYProgress, [0, 1], [0, 600])
    const backend = useTransform(scrollYProgress, [0, 1], [0, 400])
    const fullstack = useTransform(scrollYProgress, [0, 1], [0, 200])
    return (
        <section id='service' className='text-primary bg-color-text relative overflow-hidden w-[100%] h-[100vh] flex flex-col justify-center items-center gap-[5rem]'>
            <div className='text-[4rem] lg:text-[6rem] uppercase font-black italic whitespace-nowrap flex flex-col items-start lg:leading-[5rem] leading-[3rem] pointer-events-none'>
                <motion.span style={{ x: frontend }}>{state.frontend} <span className='textOutlined'>{state.developer}</span> - {state.frontend}
                    <span className='textOutlined'>{state.developer}</span> - {state.frontend}
                    <span className='textOutlined'>{state.developer}</span> - </motion.span>
                <motion.span style={{ x: backend }}>{state.backend} <span className='textOutlined'>{state.developer}</span> - {state.backend}
                    <span className='textOutlined'>{state.developer}</span> - {state.backend}
                    <span className='textOutlined'>{state.developer}</span> - </motion.span>
                <motion.span style={{ x: fullstack }}> <span className='textOutlined'>{state.fullstack} </span>{state.developer} - <span className='textOutlined'>{state.fullstack} </span>
                    {state.developer} - <span className='textOutlined'>{state.fullstack} </span>
                    {state.developer} - </motion.span>
            </div>
            <div className='flex lg:flex-col justify-center items-center gap-[1rem]'>
                
                    <div className='flex flex-col lg:flex-row gap-[1rem] text-2xl text-center'>
                        <span className='px-[1rem] hover:bg-primary hover:text-color-text border-2 border-primary rounded-[25px] transition-all duration-300'>{state.html}</span>
                        <span className='px-[1rem] hover:bg-primary hover:text-color-text border-2 border-primary rounded-[25px] transition-all duration-300'>{state.css}</span>
                        <span className='px-[1rem] hover:bg-primary hover:text-color-text border-2 border-primary rounded-[25px] transition-all duration-300'>{state.javascript}</span>
                        <span className='px-[1rem] hover:bg-primary hover:text-color-text border-2 border-primary rounded-[25px] transition-all duration-300'>{state.php}</span>
                        <span className='px-[1rem] hover:bg-primary hover:text-color-text border-2 border-primary rounded-[25px] transition-all duration-300'>{state.react}</span>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-[1rem] text-2xl text-center'>
                        <span className='px-[1rem] hover:bg-primary hover:text-color-text border-2 border-primary rounded-[25px] transition-all duration-300'>{state.sql}</span>
                        <span className='px-[1rem] hover:bg-primary hover:text-color-text border-2 border-primary rounded-[25px] transition-all duration-300'>{state.bootstrap}</span>
                        <span className='px-[1rem] hover:bg-primary hover:text-color-text border-2 border-primary rounded-[25px] transition-all duration-300'>{state.laravel}</span>
                        <span className='px-[1rem] hover:bg-primary hover:text-color-text border-2 border-primary rounded-[25px] transition-all duration-300'>{state.tailwind}</span>
                    </div>
                    
            </div>
        </section>
    )
}

export default Service
