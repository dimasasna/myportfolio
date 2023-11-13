import "./service.css"
import { motion, useScroll, useTransform } from 'framer-motion'

const Service = () => {
    const { scrollYProgress } = useScroll()
    const frontend = useTransform(scrollYProgress, [0, 1], [0, 600])
    const backend = useTransform(scrollYProgress, [0, 1], [0, 400])
    const fullstack = useTransform(scrollYProgress, [0, 1], [0, 200])
    return (
        <section id='service' className='text-primary bg-color-text relative overflow-hidden w-[100%] h-[100vh] flex flex-col justify-center items-center gap-[5rem]'>
            <div className='text-[4rem] lg:text-[6rem] uppercase font-black italic whitespace-nowrap flex flex-col items-start lg:leading-[5rem] leading-[3rem] pointer-events-none'>
                <motion.span style={{ x: frontend }}>Frontend <span className='textOutlined'>Developer</span> - Frontend
                    <span className='textOutlined'>Developer</span> - Frontend
                    <span className='textOutlined'>Developer</span> - </motion.span>
                <motion.span style={{ x: backend }}>Backend <span className='textOutlined'>Developer</span> - Backend
                    <span className='textOutlined'>Developer</span> - Backend
                    <span className='textOutlined'>Developer</span> - </motion.span>
                <motion.span style={{ x: fullstack }}> <span className='textOutlined'>Fullstack </span>Developer - <span className='textOutlined'>Fullstack </span>
                    Developer - <span className='textOutlined'>Fullstack </span>
                    Developer - </motion.span>
            </div>
            <div className='flex lg:flex-col justify-center items-center gap-[1rem]'>
                <div className='flex flex-col lg:flex-row gap-[1rem] text-2xl text-center'>
                    <span className='px-[1rem] hover:bg-primary hover:text-color-text border-2 border-primary rounded-[25px] transition-all duration-300'>HTML5</span>
                    <span className='px-[1rem] hover:bg-primary hover:text-color-text border-2 border-primary rounded-[25px] transition-all duration-300'>CSS3</span>
                    <span className='px-[1rem] hover:bg-primary hover:text-color-text border-2 border-primary rounded-[25px] transition-all duration-300'>Javascript</span>
                    <span className='px-[1rem] hover:bg-primary hover:text-color-text border-2 border-primary rounded-[25px] transition-all duration-300'>PHP</span>
                    <span className='px-[1rem] hover:bg-primary hover:text-color-text border-2 border-primary rounded-[25px] transition-all duration-300'>React JS</span>
                </div>
                <div className='flex flex-col lg:flex-row gap-[1rem] text-2xl text-center'>
                    <span className='px-[1rem] hover:bg-primary hover:text-color-text border-2 border-primary rounded-[25px] transition-all duration-300'>MySQL</span>
                    <span className='px-[1rem] hover:bg-primary hover:text-color-text border-2 border-primary rounded-[25px] transition-all duration-300'>Express JS</span>
                    <span className='px-[1rem] hover:bg-primary hover:text-color-text border-2 border-primary rounded-[25px] transition-all duration-300'>Laravel</span>
                    <span className='px-[1rem] hover:bg-primary hover:text-color-text border-2 border-primary rounded-[25px] transition-all duration-300'>Tailwind</span>
                </div>
            </div>
        </section>
    )
}

export default Service
