import React from 'react';

const Footer = ({ lightMode, setLightMode }) => {
    const year = new Date().getFullYear();

    return (
        <footer className={`${lightMode ? 'bg-white' : 'from-gray-900 to-black'} transition-colors duration-300`}>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <h3 className={`text-2xl font-bold ${lightMode ? 'text-gray-800' : 'text-white'}`}>
                            Ankur Kumar
                        </h3>
                        <p className={`${lightMode ? 'text-gray-600' : 'text-gray-300'}`}>
                            Full Stack Developer crafting digital experiences
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className={`text-lg font-semibold ${lightMode ? 'text-gray-800' : 'text-white'}`}>
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {['Home', 'Skills', 'Projects', 'Contact'].map(item => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className={`${lightMode ? 'text-gray-600 hover:text-gray-900' : 'text-gray-300 hover:text-white'} transition-colors duration-300`}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className={`text-lg font-semibold ${lightMode ? 'text-gray-800' : 'text-white'}`}>
                            Contact
                        </h4>
                        <div className="space-y-2">
                            <p className={`${lightMode ? 'text-gray-600' : 'text-gray-300'}`}>
                                <a href="mailto:ankurdw806@gmail.com">ankurdw806@gmail.com</a>
                            </p>
                            <p className={`${lightMode ? 'text-gray-600' : 'text-gray-300'}`}>
                                Gopalganj, Bihar, India
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`border-t ${lightMode ? 'border-gray-200' : 'border-gray-800'} mt-8 pt-8 text-center`}>
                    <p className={`${lightMode ? 'text-gray-600' : 'text-gray-300'}`}>
                        © {year} Ankur Kumar. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;