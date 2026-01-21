import React from 'react';

function MainNavBar() {

    const navList = ['Home', 'Skills', 'Projects', 'Contact', 'Blog'];

    return (
        <>
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
        </>
    );
}

export default MainNavBar;
