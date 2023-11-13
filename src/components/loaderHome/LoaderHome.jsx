import { motion } from 'framer-motion'
import { useState } from 'react'

const LoaderHome = () => {
    const [state] = useState({
        indonesia: "Halo",
        english: "Hello",
        arab: "مرحبًا",
        prancis: "Bonjour",
        rusia: "привет"
    })
    return (
        <motion.section
            initial={{ 
                y: 0,
                opacity: 1 }}
            animate={{ 
                y: -1000,
                transition:{
                    duration: 1,
                    delay: 2
                }
             }}
             exit={{ y: window.innerWidth }}
            className='bg-color-text fixed w-[100%] h-[100vh] z-10'>
            <div className='w-[100%] h-[100vh] text-primary font-bold flex flex-col justify-center items-center leading-[0px] text-[2rem]'>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 0.5 },
                        transitionEnd: {
                            display: "none"
                        }
                        }
                    }
                >{state.indonesia}</motion.span>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 0.8 },
                        transitionEnd: {
                            display: "none"
                        }
                        }
                    }
                >{state.english}</motion.span>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 1.1 },
                        transitionEnd: {
                            display: "none"
                        }
                        }
                    }
                >{state.arab}</motion.span>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 1.4 },
                        transitionEnd: {
                            display: "none"
                        }
                        }
                    }
                >{state.prancis}</motion.span>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 1.7 },
                        }
                    }
                >{state.rusia}</motion.span>
            </div>
        </motion.section>
    )
}

export default LoaderHome
