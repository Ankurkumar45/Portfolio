import React, { useState } from 'react';
import Toggle from './Toggle';
import SocialMedia2 from './SocialMedia2';
import CurrentTime from './CurrentTime';

function Navbar({ lightMode, setLightMode }) {
    const [isOpen, setIsOpen] = useState(false);
    const barList = ['Home', 'Skills', 'Projects', 'Contact'];

    const handleNavClick = (e, itemId) => {
        e.preventDefault();
        const element = document.getElementById(itemId);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <nav className="fixed w-full top-0 z-50">
            <div className="bg-black/20 backdrop-blur-md">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <a href="/" className="flex items-center">
                            <span className={`text-2xl font-semibold ${lightMode?'text-amber-900':'text-white'}`}>
                                <span className={`${lightMode ? 'text-amber-500' : 'text-blue-500'} italic text-5xl transform transition-all duration-300`}>A</span>nkur
                            </span>
                        </a>
                        <div className="flex items-center gap-4">
                            <Toggle lightMode={lightMode} setLightMode={setLightMode} />
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="cursor-pointer p-2 rounded-lg transition-colors z-50"
                                aria-label="Toggle Menu"
                            >
                                <div className="w-6 h-5 relative transform transition-all duration-300">
                                    <span className={`absolute h-0.5 w-6 ${lightMode ? 'bg-black' : 'bg-white'} transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : '-translate-y-2'}`} />
                                    <span className={`absolute h-0.5 w-6 ${lightMode ? 'bg-black' : 'bg-white'} transform transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                                    <span className={`absolute h-0.5 w-6 ${lightMode ? 'bg-black' : 'bg-white'} transform transition-all duration-300 ${isOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-2'}`} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-r ${lightMode ? 'from-white/95 to-white/90' : 'from-black/95 to-black/90'} transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="pt-20">
                    <ul className="space-y-1">
                        {barList.map((item, index) => (
                            <li key={item}
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                }}
                                className={`transform transition-all duration-300 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
                            >
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    onClick={(e) => handleNavClick(e, item.toLowerCase())}
                                    className={`block px-6 py-3 ${lightMode ? 'text-black' : 'text-white'} text-lg font-medium hover:bg-white/10 hover:pl-8 transition-all duration-300 relative group`}>
                                    <span className="relative z-10">{item}</span>
                                    <span className={`absolute left-0 top-0 w-0 h-full ${lightMode ? 'bg-amber-500/20' : 'bg-blue-500/20'} transition-all duration-300 group-hover:w-full`}></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <SocialMedia2 lightMode={lightMode} setLightMode={setLightMode} /><br />
                    <CurrentTime />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
