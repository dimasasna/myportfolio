import { motion } from 'framer-motion'

export default function LoaderAbout() {
  return (
    <section>
      <motion.section
            initial={{ 
                y: 0,
                opacity: 1 }}
            animate={{ 
                y: -1000,
                transition:{
                    duration: 1,
                    delay: 1
                }
             }}
             exit={{ y: window.innerWidth }}
            className='bg-[#010101] fixed w-[100%] h-[100vh] z-10'>
            <div className='w-[100%] h-[100vh] text-primary font-bold flex flex-col justify-center items-center leading-[0px] text-[2rem]'>
                <motion.span
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 0.5 },
                        }
                    }
                >About Me</motion.span>
            </div>
        </motion.section>
    </section>
  )
}
