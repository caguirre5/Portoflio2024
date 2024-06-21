import React from 'react';
import { faLinkedin, faGithub, faCodepen, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCode, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  return (
    <div id="contact" className="relative w-full min-h-screen bg-gradient-to-b from-[#03223d] to-[#023053] flex items-center justify-center text-white lg:px-[10%]">
        {/* Background Text */}
        <div className="hidden absolute inset-0 lg:flex items-start justify-center z-0 lg:mt-[-5%]">
            <h1 className="text-[20rem] font-bold text-white opacity-10 select-none">CONTACT</h1>
        </div>
        <section className="lg:w-1/2 flex-col justify-center items-center z-10 ">
            <h2 className="text-6xl font-bold uppercase text-center pb-8">Get in touch!</h2>
            <div className='flex justify-center items-center text-lg py-1'>
                <FontAwesomeIcon icon={faLocationDot} className='text-white px-4'/>
                <p>Guatemala, Guatemala</p>
            </div>
            <div className='flex justify-center items-center text-lg py-1'>
                <FontAwesomeIcon icon={faEnvelope} className='text-white px-4'/>
                <p>caguirre.dt@gmail.com</p>
            </div>
            <div className="flex justify-center items-center mt-8">
                <a href="" className="mx-2"><FontAwesomeIcon icon={faInstagram} className='text-white w-8 h-8'/></a>
                <a href="" className="mx-2"><FontAwesomeIcon icon={faGithub} className='text-white w-8 h-8'/></a>
                <a href="" className="mx-2"><FontAwesomeIcon icon={faLinkedin} className='text-white w-8 h-8'/></a>
                <a href="" className="mx-2"><FontAwesomeIcon icon={faCodepen} className='text-white w-8 h-8'/></a>
            </div>
        </section>
        <section className="lg:w-1/2 flex items-center justify-center  z-10">
            <div className="w-full max-w-md bg-[#0c1926] p-12 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-6">Write me</h2>
                <form action="#" method="POST">
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="name"
                            id="floating_name"
                            className="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-[#0287cf] peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_name"
                            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0287cf] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Name
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="email"
                            name="email"
                            id="floating_email"
                            className="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-[#0287cf] peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_email"
                            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0287cf] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Email
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="subject"
                            id="floating_subject"
                            className="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-[#0287cf] peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_subject"
                            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0287cf] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Subject
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <textarea
                            name="message"
                            id="floating_message"
                            className="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-[#0287cf] peer"
                            placeholder=" "
                            required
                            rows={4}
                        ></textarea>
                        <label
                            htmlFor="floating_message"
                            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0287cf] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 resize-none"
                        >
                            Message
                        </label>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-[#0287cf] text-white py-2 px-8 rounded-full hover:bg-[#0287cfc4] focus:outline-none focus:bg-[#0287cf]"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </div>
  );
};

export default Contact;
