import React, { useState, useEffect } from 'react';

const Scroll = ({ lightMode, setLightMode }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const toggleVisibility = () => {
            // Calculate scroll progress percentage
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.pageYOffset / totalHeight) * 100;

            setScrollProgress(progress);
            setIsVisible(window.pageYOffset > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <div className="fixed bottom-8 right-8 z-50">
                    <div className="relative">
                        <svg
                            className="w-12 h-12 transform -rotate-90"
                            viewBox="0 0 100 100"
                        >
                            <circle
                                className="text-gray-300/20"
                                strokeWidth="8"
                                stroke="currentColor"
                                fill="transparent"
                                r="42"
                                cx="50"
                                cy="50"
                            />
                            <circle
                                className={`${lightMode ? 'text-gray-500' : 'text-indigo-500'} transition-all duration-300`}
                                strokeWidth="8"
                                strokeDasharray={264}
                                strokeDashoffset={264 - (scrollProgress * 264) / 100}
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="transparent"
                                r="42"
                                cx="50"
                                cy="50"
                            />
                        </svg>
                        <button
                            onClick={scrollToTop}
                            className={`cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 ${lightMode ? 'bg-gray-500' : 'bg-indigo-500'} text-white rounded-full hover:bg-${lightMode ? 'gray-800' : 'indigo-600'} transition-all duration-300 hover:scale-110 focus:outline-none`}
                            aria-label="Scroll to top"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Scroll;