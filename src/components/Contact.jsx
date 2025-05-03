import React, { useRef, useState } from 'react';
import { faLinkedin, faGithub, faCodepen, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle, faCircleNotch, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm(
      'service_ztg06nd',
      'template_7d1pd5v', 
      form.current,
      'GDy6Dogge819wfKGL'
    )
    .then(() => {
        setTimeout(() => {
            setIsLoading(false);
            setIsSent(true); 
        }, 1000);
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Hubo un problema al enviar el mensaje.');
    });
  };


  return (
    <div id="contact" className="relative w-full min-h-screen bg-gradient-to-b from-[#03223d] to-[#023053] flex flex-col lg:flex-row items-center justify-center text-white lg:px-[10%]">
        {/* Background Text */}
        <div className="hidden absolute inset-0 lg:flex items-start justify-center z-0 lg:mt-[-5%]">
            <h1 className="text-[20rem] font-bold text-white opacity-10 select-none">CONTACT</h1>
        </div>
        <section className="flex-col justify-end items-center z-10 lg:mr-20">
            <h2 className="text-3xl lg:text-6xl font-bold uppercase text-center pb-4 lg:pb-8">Let’s work <br/> together</h2>
            <div className='flex justify-center items-center lg:text-lg py-1'>
                <FontAwesomeIcon icon={faLocationDot} className='text-white px-4'/>
                <p>Guatemala, Guatemala</p>
            </div>
            <div className='flex justify-center items-center text-lg py-1 '>
                <FontAwesomeIcon icon={faEnvelope} className='text-white px-4'/>
                <p>caguirre.dt@gmail.com</p>
            </div>
            <div className="flex justify-center items-center my-4 lg:mt-8 ">
                <a target="_blank" href="https://www.instagram.com/cristiandt__?igsh=N2ZtZWU2dnNyMng3&utm_source=qr" className="mx-2"><FontAwesomeIcon icon={faInstagram} className='text-white lg:w-8 w-6 h-6 lg:h-8 transform transition-transform duration-300 hover:scale-125'/></a>
                <a target="_blank" href="https://github.com/caguirre5" className="mx-2"><FontAwesomeIcon icon={faGithub} className='text-white lg:w-8 w-6 h-6 lg:h-8 transform transition-transform duration-300 hover:scale-125'/></a>
                <a target="_blank" href="www.linkedin.com/in/cristiandt5" className="mx-2"><FontAwesomeIcon icon={faLinkedin} className='text-white lg:w-8 w-6 h-6 lg:h-8 transform transition-transform duration-300 hover:scale-125'/></a>
                <a target="_blank" href="https://codepen.io/caguirre5" className="mx-2"><FontAwesomeIcon icon={faCodepen} className='text-white lg:w-8 w-6 h-6 lg:h-8 transform transition-transform duration-300 hover:scale-125'/></a>
            </div>
        </section>
        {/* Formulario con integración EmailJS */}
        <section className="flex items-center w-full lg:w-auto justify-start z-10 lg:ml-20">
        <div className="w-full mx-6 lg:mx-0 lg:w-[25vw] bg-[#0c1926] py-8 px-[3rem] lg:py-0 lg:px-[5rem] rounded-xl shadow-md lg:h-[550px] flex flex-col justify-center items-center">
        {isLoading ? (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="text-[#0287cf] text-6xl"
            >
                <FontAwesomeIcon icon={faCircleNotch} spin />
            </motion.div>
            ) :isSent ? (
                <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center  justify-center text-center"
              >
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-400 text-6xl mb-8" />
                <h3 className="text-xl font-semibold mb-2">Thank you for reaching out!</h3>
                <p className="text-gray-300">I’ll get back to you as soon as I can. <br/>Looking forward to connecting!</p>
              </motion.div>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="w-full">
              <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
              <div className="mb-5">
                <input type="text" name="name" required placeholder="Full name" className="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-[#0287cf] peer" />
              </div>
              <div className="mb-5">
                <input type="email" name="email" required placeholder="Your email address" className="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-[#0287cf] peer" />
              </div>
              <div className="mb-5">
                <input type="text" name="subject" required placeholder="Subject" className="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-[#0287cf] peer" />
              </div>
              <div className="mb-5">
                <textarea name="message" required rows="4" placeholder="Type your message here..." className="resize-none block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-[#0287cf] peer"></textarea>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-[#0287cf] text-white py-2 px-8 rounded-full hover:bg-[#0287cfc4]">
                  Send
                </button>
              </div>
            </form>
            
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
