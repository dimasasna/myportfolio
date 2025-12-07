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
        <section id='work' className='w-[100%] bg-color-text lg:py-[4rem] lg:px-[6rem] px-4 pt-[5rem] pb-5'>
            <div className='flex flex-row  justify-between text-primary absolute lg:relative pt-[2rem] lg:pt-6'>
                <div className='text-[8rem] font-[1000] flex flex-col uppercase tracking-[-1.5rem]  leading-[4rem] opacity-25  pointer-events-none italic'>
                    <span>{state.typografi}</span>
                    <span>{state.typografi}</span>
                    <span>{state.typografi}</span>
                </div>
                <span className='text-2xl absolute lg:relative italic pt-12 lg:mr-12 lg:pt-0'>{state.title}</span>
            </div>
            <div className="w-full flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-7xl">
                    <Fade direction="up" cascade>
                        <CardWork
                            title="Tokopedia"
                            status="Completed"
                            statusColor="text-green-400"
                            desc="A clone project focusing on e-commerce checkout and product flow."
                            tech={["Laravel", "Python", "Pytest"]}
                            category="Automated Testing"
                            categoryColor="text-blue-400 bg-blue-400/10 inset-ring inset-ring-blue-400/20"
                            githubLink="https://github.com/dimasasna"
                            docLink="https://docs.google.com/spreadsheets/xxx"
                        />
                    </Fade>
                    <Fade direction="up" cascade>
                        <CardWork
                            title="Tokopedia"
                            status="Completed"
                            statusColor="text-green-400"
                            desc="A clone project focusing on e-commerce checkout and product flow."
                            tech={["Laravel", "Python", "Pytest"]}
                            category="Automated Testing"
                            categoryColor="text-blue-400 bg-blue-400/10 inset-ring inset-ring-blue-400/20"
                            githubLink="https://github.com/dimasasna"
                            docLink="https://docs.google.com/spreadsheets/xxx"
                        />
                    </Fade>
                    <Fade direction="up" cascade>
                        <CardWork
                            title="Tokopedia"
                            status="Completed"
                            statusColor="text-green-400"
                            desc="A clone project focusing on e-commerce checkout and product flow."
                            tech={["Laravel", "Python", "Pytest"]}
                            category="Automated Testing"
                            categoryColor="text-blue-400 bg-blue-400/10 inset-ring inset-ring-blue-400/20"
                            githubLink="https://github.com/dimasasna"
                            docLink="https://docs.google.com/spreadsheets/xxx"
                        />
                    </Fade>
                    <Fade direction="up" cascade>
                        <CardWork
                            title="Tokopedia"
                            status="Completed"
                            statusColor="text-green-400"
                            desc="A clone project focusing on e-commerce checkout and product flow."
                            tech={["Laravel", "Python", "Pytest"]}
                            category="Automated Testing"
                            categoryColor="text-blue-400 bg-blue-400/10 inset-ring inset-ring-blue-400/20"
                            githubLink="https://github.com/dimasasna"
                            docLink="https://docs.google.com/spreadsheets/xxx"
                        />
                    </Fade>
                    <Fade direction="up" cascade>
                        <CardWork
                            title="Tokopedia"
                            status="Completed"
                            statusColor="text-green-400"
                            desc="A clone project focusing on e-commerce checkout and product flow."
                            tech={["Laravel", "Python", "Pytest"]}
                            category="Automated Testing"
                            categoryColor="text-blue-400 bg-blue-400/10 inset-ring inset-ring-blue-400/20"
                            githubLink="https://github.com/dimasasna"
                            docLink="https://docs.google.com/spreadsheets/xxx"
                        />
                    </Fade>
                </div>
            </div>



        </section>
    )
}

export default Work
