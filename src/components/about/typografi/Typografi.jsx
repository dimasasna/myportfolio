import { motion } from "framer-motion"
import { useTransform, useScroll } from "framer-motion"
import "./typografi.css"


export default function Typografi() {
    const { scrollYProgress } = useScroll()
    const satu = useTransform(scrollYProgress, [0, 1], [0, 300])
    const dua = useTransform(scrollYProgress, [0, 1], [0, 400])
    return (
        <section className="relative overflow-hidden text-primary flex flex-col justify-center items-center mt-8 lg:mt-0 z-[1]">
            <div className='text-[4rem] lg:text-[6rem] uppercase font-[1000] italic whitespace-nowrap flex flex-col items-start lg:leading-[5rem] leading-[3rem] pointer-events-none tracking-tighter '>
                <motion.span style={{ x: satu }}>ABOUT<span className='textOutlined'>ME</span>-ABOUT<span className='textOutlined'>ME</span>-ABOUT<span className='textOutlined'>ME</span>-ABOUT<span className='textOutlined'>ME</span>-ABOUT<span className='textOutlined'>ME</span>-</motion.span>

                <motion.span style={{ x: dua }}><span className='textOutlined'>ABOUT</span>ME-<span className='textOutlined'>ABOUT</span>ME-<span className='textOutlined'>ABOUT</span>ME-<span className='textOutlined'>ABOUT</span>ME-<span className='textOutlined'>ABOUT</span>ME-</motion.span>
            </div>
        </section>
    )
}
