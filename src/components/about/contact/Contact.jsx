import { Slide } from "react-awesome-reveal";
import { toast } from "react-toastify";


export default function Contact() {
  const notify = () =>
    toast.error('Coming Soon!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  return (
    <section id="contact" className="text-primary lg:p-28 px-4 mt-12 lg:mt-0">
      <div className="flex lg:flex-row flex-col items-center">
        
        <div className="lg:text-4xl text-2xl w-[100%] font-bold my-4 lg:w-[50%] ">
        <Slide>
          <h1 className="text-center lg:text-start">Lets work together and create something amazing</h1>
          </Slide>
        </div>
        
        <div className="lg:w-[50%] flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-y-4 gap-x-2">
            <input className="bg-transparent border py-2 px-5 rounded-lg" placeholder="Name" type="text" />
            <input className="bg-transparent border py-2 px-5 rounded-lg" placeholder="Email" type="email" />
            <input className="bg-transparent border py-2 px-5 rounded-lg" placeholder="Subject" type="text" />
            <input className="bg-transparent border py-2 px-5 rounded-lg" placeholder="Company" type="text" />
            <textarea className="col-span-2 bg-transparent border py-2 px-5 rounded-lg h-[100px]" placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
          </div>
          <button onClick={notify} className="bg-[#383838] w-[250px] mx-auto px-3 py-2 rounded-lg hover:bg-[#595959]">Send It!</button>
        </div>
      </div>
    </section>
  )
}
