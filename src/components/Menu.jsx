import React from 'react'

export const Menu = (props) => {
    const {onSectionChange, menuOpened, setMenuOpened} = props
    return (
        <>
            <button 
                onClick={() => setMenuOpened(!menuOpened)}
                className='z-20 fixed top-12 right-12 p-3 bg-[#397ec3] w-11 h-11 rounded-md'
            >
                <div
                    className={`bg-white h-0.5 rounded-md w-full transition-all ${
                        menuOpened ? "rotate-45 traslate-y-1" : ""
                    }`}
                />
                <div
                    className={`bg-white h-0.5 rounded-md w-full my-1 ${
                        menuOpened ? "hidden" : ""
                    }`}
                />
                <div
                    className={`bg-white h-0.5 rounded-md w-full transition-all ${
                        menuOpened ? "-rotate-45" : ""
                    }`}
                />
            </button>
            <div className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
                ${menuOpened ? "w-80" : "w-0"}`}>
                <div className='flex-1 flex items-start justify-center flex-col gap-6 p-8'>
                    <MenuButton label="Home" onClick={() => onSectionChange("home")}/>
                    <MenuButton label="About" onClick={() => onSectionChange("about")}/>
                    <MenuButton label="Skills" onClick={() => onSectionChange("skills")}/>
                    <MenuButton label="Work" onClick={() => onSectionChange("skills")}/>
                    <MenuButton label="Contact" onClick={() => onSectionChange("contact")}/>
                </div>
            </div>
        </>
    )
}

const MenuButton = (props) => {
    const {label, onClick} = props
    return (
        <button
            onClick={onClick}
            className='text-2xl font-bold cursor-pointer hover:text-[#397ec3] transition-colors'    
        >
            {label}
        </button>
    )
}