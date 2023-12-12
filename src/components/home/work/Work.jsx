import { useState } from "react"
import CardWork from "./card-work/CardWork"
import hisocial from "../../../assets/hisocial.webp"
import beshoes from "../../../assets/shoeslaundry.webp"
import { Fade } from "react-awesome-reveal"



const Work = () => {
    const [state] = useState({
        typografi: "work",
        title: "Featured Project"
    })

    const hiSocial = {
        nomor: "01.",
        title: "HiSocial",
        desc: "Web Application",
        img: hisocial,
        altImage: "HiSocialImage",
        link: "https://www.hisocial.id"
    }
    const beShoes = {
        nomor: "02.",
        title: "Beshoes 'Shoes Laundry'",
        desc: "Web Application",
        img: beshoes,
        altImage: "beshoesImage",
        link: "https://github.com/dimasasna/shoes-laundry-personal"
    }

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
            <div className="flex relative  flex-col gap-5 mt-44 lg:mt-0">
                <Fade direction="left">
                <CardWork nomor={hiSocial.nomor} title={hiSocial.title} desc={hiSocial.desc} img={hiSocial.img} altImage={hiSocial.altImage} link={hiSocial.link} /></Fade>
                <Fade  direction="left">
                <CardWork nomor={beShoes.nomor} title={beShoes.title} desc={beShoes.desc} img={beShoes.img} altImage={beShoes.altImage} link={beShoes.link} /></Fade>
            </div>


        </section>
    )
}

export default Work
