import { useState } from 'react'
import profil from '../../assets/profil.webp'
import "./hero.css"
import { motion, useScroll, useTransform } from 'framer-motion'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  const [state] = useState({
    name: "Dimas Asna Nugraha",
    title1: "Software Engineer",
    title2: "Website Developer"
  })
  const { scrollYProgress } = useScroll()
  const right = useTransform(scrollYProgress, [0, 1], [0, 400])
  const left = useTransform(scrollYProgress, [0, 1], [0, -400])
  return (
    <section id='home' className='bg-color-text w-[100%] h-[100vh]  relative overflow-hidden '>
      <div className=''>
        <div className='flex justify-center items-center'>
          <div className='text-primary flex flex-col justify-center items-center text-2xl absolute  top-[4rem] italic lg:hidden'>
            <motion.h1
              initial={{ y: -400, opacity: 1 }}
              animate={{
                y: 0,
                transition: {
                  duration: 1,
                  delay: 2.1
                }
              }}><Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    "Hello, my name is",
                    "Halo, nama saya",
                    "مرحبا اسمي",
                    "Bonjour, je m'appelle",
                    "Привет меня зовут"
                  ],
                  pauseFor: 2500
                }}
              />
            </motion.h1>
            <motion.h1
              initial={{ y: -400, opacity: 1 }}
              animate={{
                y: 0,
                transition: {
                  duration: 1,
                  delay: 2.1
                }
              }}>{state.name}</motion.h1>
          </div>
        </div>
        <div className='absolute top-[18rem] flex justify-start lg:-ml-20 -ml-10'>
          <motion.h1
            initial={{ x: -1800 }}
            animate={{
              x: 0,
              transition: {
                duration: 0.8,
                delay: 2
              },
            }}
            style={{ x: right }}
            className='absolute uppercase  pointer-events-none italic text-primary   z-[1] whitespace-nowrap text-[5rem] xl:text-[10rem] 2xl:text-[12rem]  font-extrabold  textFilled'>{state.title1}</motion.h1>
          <motion.h1
            initial={{ x: -1800 }}
            animate={{
              x: 0,
              transition: {
                duration: 0.8,
                delay: 2
              }
            }}
            style={{ x: right }}
            className='absolute uppercase  pointer-events-none italic text-primary  whitespace-nowrap text-[5rem] lg:text-[10rem] 2xl:text-[12rem] font-extrabold textOutlined z-[3]'>{state.title1}</motion.h1>
        </div>
        <div className='absolute top-[24rem] lg:top-[27rem]'>
          <motion.h1
            initial={{ x: -1800 }}
            animate={{
              x: 0,
              transition: {
                duration: 0.8,
                delay: 2
              }
            }}
            style={{ x: left }}
            className='absolute uppercase  pointer-events-none italic text-primary z-[1] whitespace-nowrap text-[5rem] lg:text-[10rem] 2xl:text-[12rem] font-extrabold  textFilled'>{state.title2}</motion.h1>
          <motion.h1
            initial={{ x: 1800 }}
            animate={{
              x: 0,
              transition: {
                duration: 0.8,
                delay: 2
              }
            }}
            style={{ x: left }}
            className='absolute uppercase  pointer-events-none italic text-primary  whitespace-nowrap text-[5rem] lg:text-[10rem] 2xl:text-[12rem] font-extrabold textOutlined z-[3]'>{state.title2}</motion.h1>
        </div>
        <div className='h-[100vh] flex justify-center items-center'>
          <motion.img
            initial={{ y: 400, opacity: 1 }}
            animate={{
              y: 0,
              transition: {
                duration: 1,
                delay: 2.1
              }
            }}
            className='w-[300px] lg:w-[600px] lg:h-[600px] z-[2]  border-4  border-primary' src={profil} alt="profil" />
        </div>
      </div>
    </section>
  )
}

export default Hero
