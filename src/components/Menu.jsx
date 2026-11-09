import { useEffect, useRef } from "react";

const links = [['home', 'Home'], ['about', 'About'], ['skills', 'Skills'], ['work', 'Projects'], ['contact', 'Contact']];

export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!menuOpened) return;
    const toggle = toggleRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.querySelector('button')?.focus();
    const handleKey = (event) => {
      if (event.key === 'Escape') setMenuOpened(false);
      if (event.key !== 'Tab') return;
      const controls = [toggleRef.current, ...panelRef.current.querySelectorAll('button, a[href]')];
      const index = controls.indexOf(document.activeElement);
      const next = event.shiftKey ? (index - 1 + controls.length) % controls.length : (index + 1) % controls.length;
      event.preventDefault();
      controls[next].focus();
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKey);
      toggle?.focus();
    };
  }, [menuOpened, setMenuOpened]);

  return (
    <>
      <button ref={toggleRef} type="button" onClick={() => setMenuOpened(!menuOpened)} aria-label={menuOpened ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpened} aria-controls="navigation-menu" className="fixed right-5 top-5 z-[70] flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-[#0c1926]/90 text-white shadow-lg backdrop-blur-md transition-colors hover:border-cyan-200/60 hover:bg-[#16334e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200 sm:right-10 sm:top-10">
        <span aria-hidden="true" className="relative h-5 w-5">
          <span className={`absolute left-0 top-1 h-px w-5 bg-current transition-transform duration-300 motion-reduce:transition-none ${menuOpened ? 'translate-y-[6px] rotate-45' : ''}`} />
          <span className={`absolute left-0 top-[10px] h-px w-5 bg-current transition-opacity duration-300 motion-reduce:transition-none ${menuOpened ? 'opacity-0' : ''}`} />
          <span className={`absolute left-0 top-4 h-px w-5 bg-current transition-transform duration-300 motion-reduce:transition-none ${menuOpened ? '-translate-y-[6px] -rotate-45' : ''}`} />
        </span>
      </button>
      <div aria-hidden="true" onClick={() => setMenuOpened(false)} className={`fixed inset-0 z-[60] bg-[#020d18]/60 backdrop-blur-sm transition-opacity duration-300 motion-reduce:transition-none ${menuOpened ? 'opacity-100' : 'pointer-events-none opacity-0'}`} />
      <div ref={panelRef} id="navigation-menu" role="dialog" aria-modal={menuOpened ? 'true' : undefined} aria-label="Site navigation" aria-hidden={!menuOpened} inert={menuOpened ? undefined : ''} className={`fixed bottom-0 right-0 top-0 z-[65] flex w-full max-w-[400px] flex-col border-l border-white/10 bg-gradient-to-b from-[#0c1926] to-[#03223d] px-8 pb-8 pt-28 shadow-2xl transition-transform duration-300 motion-reduce:transition-none sm:px-10 ${menuOpened ? 'translate-x-0' : 'translate-x-full'}`}>
        <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/70">Cristian Aguirre</p>
        <p className="mt-2 text-sm text-slate-400">Software developer</p>
        <nav aria-label="Main navigation" className="my-auto py-10">
          {links.map(([id, label], index) => (
            <button key={id} type="button" onClick={() => onSectionChange(id)} className="group flex w-full items-center gap-5 border-b border-white/10 py-5 text-left text-white transition-colors hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200">
              <span className="text-xs tracking-widest text-cyan-200/50">0{index + 1}</span>
              <span className="text-3xl font-medium tracking-tight">{label}</span>
              <span aria-hidden="true" className="ml-auto text-xl text-cyan-200/60 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">↗</span>
            </button>
          ))}
        </nav>
        <div className="border-t border-white/10 pt-6">
          <p className="mb-3 text-xs text-slate-400">Have a project in mind?</p>
          <a href="mailto:caguirre.dt@gmail.com" className="text-sm text-cyan-100 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-cyan-200">caguirre.dt@gmail.com</a>
        </div>
      </div>
    </>
  );
};
