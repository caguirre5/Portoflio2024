import portrait from "../assets/MySelf.png";
import content from "../PageContent.json";

const About = () => (
  <section id="about" aria-labelledby="about-title" className="relative w-full min-h-screen section-about-background flex items-center justify-center py-24 lg:py-32">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:flex items-center justify-center overflow-hidden">
      <span className="-translate-y-[35%] text-[20rem] font-bold text-white/[0.04] select-none">ABOUT</span>
    </div>
    <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
      <div className="order-2 lg:order-1">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200/80">A little about me</p>
        <h2 id="about-title" className="mb-7 text-4xl font-bold tracking-tight text-white sm:text-5xl">{content.about.title}</h2>
        <p className="max-w-xl text-lg leading-relaxed text-slate-200">{content.about.description}</p>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300">{content.about.exploration}</p>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300">{content.about.personal}</p>
        <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6 text-xs tracking-wide text-cyan-100/80">
          {['Frontend development', 'Mobile experiences', 'UX design'].map((label) => (
            <span key={label} className="rounded-full border border-cyan-200/15 bg-white/[0.03] px-4 py-2">{label}</span>
          ))}
        </div>
      </div>
      <div className="order-1 mx-auto lg:order-2">
        <div className="rounded-full border border-cyan-200/20 bg-white/[0.03] p-3 shadow-[0_0_60px_rgba(57,126,195,0.12)]">
          <img src={portrait} alt="Illustrated portrait of Cristian Aguirre" className="h-60 w-60 rounded-full object-cover object-center sm:h-72 sm:w-72 lg:h-80 lg:w-80" />
        </div>
        <p className="mt-5 text-center text-xs tracking-[0.2em] uppercase text-slate-400">From Guatemala · Currently in Taiwan</p>
      </div>
    </div>
  </section>
);

export default About;
