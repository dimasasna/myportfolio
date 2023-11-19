import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { toast } from "react-toastify";


export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d6qcstu', 'template_9mwwi4r', form.current, '2Gb7DJSg_R0gnNCrz')
      .then((result) => {
          notifySucces(result)
      }, (error) => {
          notifyError(error)
      });
    e.target.reset()
  };

  const notifySucces = () => {
    toast.success('Success Send Message', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  const notifyError = () => {
    toast.error('Failed Send Message', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  return (
    <section  id="contact" className="text-primary lg:p-28 px-4 mt-12 lg:mt-0">
      <div className="flex lg:flex-row flex-col items-center">

        <div className="lg:text-4xl text-2xl w-[100%] font-bold my-4 lg:w-[50%] ">
            <h1 className="text-center lg:text-start">Lets work together and create something amazing</h1>
        </div>

        <div className="lg:w-[50%] flex flex-col gap-4">
          <form ref={form} onSubmit={sendEmail} >
            <div className="grid grid-cols-2 gap-y-4 gap-x-2">
              <input className="bg-transparent border py-2 px-5 rounded-lg" placeholder="Name" type="text" name="user_name" required/>
              <input className="bg-transparent border py-2 px-5 rounded-lg" placeholder="Email" type="email" name="user_email" required/>
              <input className="col-span-2 bg-transparent border py-2 px-5 rounded-lg" placeholder="Subject" type="text" name="subject" required/>
              <textarea className="col-span-2 bg-transparent border py-2 px-5 rounded-lg h-[100px]" placeholder="Message" name="message" required cols="30" rows="10"></textarea>
            </div>
            <button  type="submit" className="bg-[#383838] mx-auto px-3 py-2 rounded-lg hover:bg-[#595959] mt-4 w-full">Send It!</button>
          </form>
        </div>
      </div>
      
    </section>
  )
}
