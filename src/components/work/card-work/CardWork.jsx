import { useState } from "react"

const CardWork = (props) => {
    const [state] = useState({
        link: "Online Preview"
    })
    return (
        <div>
            <div className='flex lg:flex-row flex-col mt-14 lg:mt-0  justify-center items-center gap-4 lg:translate-y-[-6rem] translate-y-[-5rem] w-[100%] h-auto'>
                <div className='flex flex-col text-primary gap-5 group overflow-hidden'>
                    <img className='lg:w-[450px] lg:h-[450px] group-hover:scale-105 transition-all duration-500 ' src={props.img} alt={props.altImg} />
                    <div className='flex flex-row items-center gap-2'>
                        <span className='font-bold text-2xl'>{props.nomor}</span>
                        <div className='flex flex-col'>
                            <span className='text-2xl font-bold'>{props.title}</span>
                            <span className='text-[1rem]'>{props.desc}</span>
                        </div>
                    </div>
                </div>
                <div className='lg:h-[50vh] flex items-center lg:items-end lg:w-[40%] w-[100%] justify-center'>
                    <a className='w-[100%] flex justify-between text-primary border-b-2 border-primary transition-all duration-500 px-[0.3rem] hover:bg-primary hover:text-color-text' href={props.link} target="_blank" rel="noopener noreferrer">
                        <i className="uil uil-arrow-up-left"></i>
                        <span>{state.link}</span>
                    </a>
                </div>
            </div>
        </div>
    )
}



export default CardWork
