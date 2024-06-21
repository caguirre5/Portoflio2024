import * as React from "react";

const MenuButton = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className='text-2xl font-bold cursor-pointer hover:text-[#397ec3] transition-colors'
  >
    {label}
  </button>
);

export const Navigation = ({ onSectionChange }) => (
  <div className='flex-1 flex items-start justify-center flex-col gap-6 p-8'>
    <MenuButton label="Home" onClick={() => onSectionChange("home")} />
    <MenuButton label="About" onClick={() => onSectionChange("about")} />
    <MenuButton label="Skills" onClick={() => onSectionChange("skills")} />
    <MenuButton label="Work" onClick={() => {
      const element = document.getElementById('work');
      element?.scrollIntoView({ behavior: "smooth" });
    }} />
    <MenuButton label="Contact" onClick={() => onSectionChange("contact")} />
  </div>
);
