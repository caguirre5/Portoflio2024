import { useEffect, useRef, useState } from 'react';
import { faLinkedin, faGithub, faCodepen, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faArrowRight, faCheckCircle, faCircleNotch, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, useReducedMotion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const socials = [
  { name: 'GitHub', icon: faGithub, url: 'https://github.com/caguirre5' },
  { name: 'LinkedIn', icon: faLinkedin, url: 'https://www.linkedin.com/in/cristiandt5' },
  { name: 'CodePen', icon: faCodepen, url: 'https://codepen.io/caguirre5' },
  { name: 'Instagram', icon: faInstagram, url: 'https://www.instagram.com/cristiandt__' },
];
const inputStyle = 'mt-2 block w-full rounded-xl border border-white/15 bg-[#061b2c]/70 px-4 py-3 text-base text-white placeholder:text-slate-500 transition-colors hover:border-white/30 focus:border-cyan-200/70 focus:outline-none focus:ring-2 focus:ring-cyan-200/15';

const Contact = () => {
  const form = useRef();
  const sending = useRef(false);
  const successHeading = useRef(null);
  const reducedMotion = useReducedMotion();
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sendError, setSendError] = useState('');

  useEffect(() => {
    if (isSent) successHeading.current?.focus();
  }, [isSent]);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (sending.current) return;
    sending.current = true;
    setSendError("");
    setIsLoading(true);

    try {
      await emailjs.sendForm(
      'service_ztg06nd',
      'template_7d1pd5v', 
      form.current,
      'GDy6Dogge819wfKGL'
      );
      setIsSent(true);
    } catch (error) {
      console.error('Error:', error);
      setSendError("Your message could not be sent. Please try again.");
    } finally {
      sending.current = false;
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative section-contact-background px-6 pb-10 pt-24 text-white sm:px-10 lg:pt-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden items-start justify-center overflow-hidden lg:flex">
        <span className="select-none text-[15rem] font-bold leading-none text-white/[0.035]">CONTACT</span>
      </div>
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="lg:py-8">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200/80">Let’s connect</p>
          <h2 id="contact-title" className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Good ideas start<br />with a <span className="text-cyan-200">conversation.</span></h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-300">Have a project in mind, a question, or something you’d like to explore together? I’d love to hear from you.</p>
          <a href="mailto:caguirre.dt@gmail.com" className="group mt-10 flex w-fit max-w-full items-center gap-3 rounded-lg text-base text-white underline-offset-4 hover:text-cyan-200 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200 sm:text-lg">
            <FontAwesomeIcon icon={faEnvelope} className="shrink-0 text-cyan-200/70" />
            <span className="break-all">caguirre.dt@gmail.com</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="shrink-0 text-xs text-cyan-200/60" />
          </a>
          <p className="mt-4 flex items-center gap-3 text-sm text-slate-400"><FontAwesomeIcon icon={faLocationDot} className="text-cyan-200/60" /> Based in Taiwan</p>
          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-slate-400">Find me elsewhere</p>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noreferrer" aria-label={`${social.name} (opens in a new tab)`} title={social.name} className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] text-xl text-slate-300 transition-colors hover:border-cyan-200/50 hover:bg-cyan-200/10 hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200">
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-white/15 bg-[#0c1926]/85 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur-sm sm:p-9">
          {isSent ? (
            <motion.div initial={reducedMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex min-h-[480px] flex-col items-start justify-center">
              <span className="mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-200/25 bg-cyan-200/10 text-3xl text-cyan-200"><FontAwesomeIcon icon={faCheckCircle} /></span>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-cyan-200/80">Message sent</p>
              <h3 ref={successHeading} tabIndex={-1} className="text-3xl font-semibold tracking-tight focus:outline-none">Thanks for reaching out.</h3>
              <p className="mt-4 max-w-sm leading-relaxed text-slate-300">Your message is on its way to my inbox. I’ll get back to you as soon as I can.</p>
              <button type="button" onClick={() => setIsSent(false)} className="mt-8 rounded-lg text-sm font-medium text-cyan-200 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200">Send another message</button>
            </motion.div>
          ) : (
            <form ref={form} onSubmit={sendEmail} aria-busy={isLoading}>
              <h3 className="text-2xl font-semibold tracking-tight">Tell me about your idea</h3>
              <p className="mb-7 mt-2 text-sm leading-relaxed text-slate-400">A few details are all it takes to get started. All fields are required.</p>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="text-sm font-medium text-slate-200">Your name</label>
                  <input id="contact-name" type="text" name="name" autoComplete="name" required readOnly={isLoading} placeholder="Full name" className={inputStyle} />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-sm font-medium text-slate-200">Email address</label>
                  <input id="contact-email" type="email" name="email" autoComplete="email" required readOnly={isLoading} placeholder="you@example.com" className={inputStyle} />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="contact-subject" className="text-sm font-medium text-slate-200">Subject</label>
                <input id="contact-subject" type="text" name="subject" required readOnly={isLoading} placeholder="What would you like to talk about?" className={inputStyle} />
              </div>
              <div className="mt-5">
                <label htmlFor="contact-message" className="text-sm font-medium text-slate-200">Your message</label>
                <textarea id="contact-message" name="message" required readOnly={isLoading} rows={5} placeholder="Share a little about your project, question, or idea…" className={`${inputStyle} min-h-[140px] resize-y`} />
              </div>
              {sendError && <p role="alert" className="mt-5 rounded-xl border border-red-300/20 bg-red-300/10 px-4 py-3 text-sm text-red-200">{sendError} You can also email me directly.</p>}
              <button type="submit" disabled={isLoading} className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl border border-cyan-200/20 bg-[#397ec3] px-6 py-3.5 font-medium text-white transition-colors hover:bg-[#448ed5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200 disabled:cursor-wait disabled:opacity-70">
                {isLoading ? 'Sending your message…' : 'Send message'}
                <FontAwesomeIcon icon={isLoading ? faCircleNotch : faArrowRight} spin={isLoading && !reducedMotion} />
              </button>
              <p role="status" className="mt-3 text-center text-xs leading-relaxed text-slate-400">{isLoading ? 'Please keep this page open while your message is sent.' : 'Prefer email? You can reach me directly using the address alongside.'}</p>
            </form>
          )}
        </div>
      </div>
      <footer className="relative z-10 mx-auto mt-20 flex max-w-6xl flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>Cristian Aguirre <span className="px-2 text-white/20">/</span> Software developer</p>
        <p>Thoughtful interfaces. Meaningful experiences.</p>
      </footer>
    </section>
  );
};

export default Contact;
