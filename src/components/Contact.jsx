import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

import { styles } from "../styles";
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from "../utils/motion";
import Swal from "sweetalert2";

/* cGXrkOMLgz0SU7NMB */
/* template_p43ma59 */
/* service_wxamatd */

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({...form, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs.send(
      'service_mkkycgm',
      'template_p43ma59',
     {
      from_name: form.name,
      to_name: "Afram H",
      from_email: "afram.h@hotmail.com",
      to_email: form.email,
      message: form.message,
     },
    'cGXrkOMLgz0SU7NMB')

    .then((result) => {
      setLoading(false);

      Swal.fire(
        'Thank you for contacting me!',
        'I will get back to you as soon as possible.',
        'success'
      )
      /* alert("Thank you for contacting me. I will get back to you as soon as possible."); */
      setForm({
        name: '',
        email: '',
        message: '',
      });
      }, (error) => {
        setLoading(false);
        console.log(error);

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Please try again later.',
          /* footer: '<a href="">Why do I have this issue?</a>' */
        })
        /* alert("There was an error sending your message. Please try again later."); */
      });
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8">

          <label className="flex flex-col">
            <span className="text-white font-medium">Your Name</span>
            <input 
              type="text" 
              name="name" 
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-non font-medium"
              />
          </label>
          
          <label className="flex flex-col">
            <span className="text-white font-medium">Your Email</span>
            <input 
              type="email" 
              name="email" 
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-non font-medium"
              />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium">Your message</span>
            <textarea
              rows="7" 
              name="message" 
              value={form.message}
              onChange={handleChange}
              placeholder="What's do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-non font-medium"
              />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-primary rounded-xl"
          >
            {loading? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")