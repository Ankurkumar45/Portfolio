import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Skills = ({ lightMode }) => {

    const scrollRef = useRef(null);

    const iconUrl = ['c-plain', 'cplusplus-plain', 'java-plain', 'python-plain', 'html5-plain', 'css3-plain', 'tailwindcss-original', 'javascript-plain', 'php-plain', 'react-plain', 'nodejs-plain-wordmark', 'express-original', 'mysql-original', 'mongodb-plain', 'numpy-plain', 'pandas-plain', 'matplotlib-plain', 'vscode-plain', 'jupyter-plain', 'pycharm-plain', 'intellij-plain'];

    const skills = ['C', 'C++', 'Java', 'Python', 'HTML', 'CSS', 'Tailwind', 'JavaScript', 'PHP', 'React.Js', 'Node.Js', 'Express.Js', 'MySql', 'MongoDB', 'NumPy', 'Pandas', 'MatplotLib', 'VS Code', 'Jupyter Notebook', 'PyCharm', 'IntelliJ IDEA'];

    const scroll = (dir) => {
        if (scrollRef.current) {
            const scrollAmount = dir === "left" ? -200 : 200;
            scrollRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const iconlink = () => {
        return iconUrl.map((icon) => {
            return <div
                key={icon}
                class={`group relative flex-shrink-0 p-6 transition-all duration-300 transform`}>
                <button className="cursor-pointer">
                    <i class={`devicon-${icon} text-5xl ${lightMode ? 'text-gray-600' : ''}`}></i>
                </button>
                <span class={`absolute -top-1 left-[25%] -translate-x-[50%] 
                    z-20 origin-left scale-0 px-1 rounded-lg border 
                    ${lightMode ? 'border-gray-300 bg-white text-gray-600' : ''} py-1 text-sm 
                    shadow-md transition-all duration-300 ease-in-out 
                    group-hover:scale-100`}>
                    {
                        skills[iconUrl.indexOf(icon)]
                    }
                </span>
            </div>
        });
    };
    return <>
        <div className={`bg-gradient-to-br ${lightMode ? 'bg-white' : 'from-gray-900 to-black'} transform transition-all duration-300 p-10`}>
            <div className="max-w-6xl mx-auto">
                <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${lightMode ? 'text-gray-500' : ''} transform transition-all duration-300`}>
                    My <span className={`${lightMode ? 'text-gray-700' : 'text-indigo-500'} transform transition-all duration-300`}>Skills</span>
                </h2>
                {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {iconlink()}
                </div > */}

                <div className="flex items-center justify-center gap-6 py-12 px-6 rounded-lg bg-opacity-50 backdrop-blur-sm">
                    <button
                        onClick={() => scroll("left")}
                        className={`p-4 ${lightMode ? 'text-gray-700' : 'text-white'} hover:text-indigo-500 transition cursor-pointer flex-shrink-0 hover:scale-110`}
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex-1 overflow-x-hidden scrollbar-hide scroll-smooth h-32"
                    >
                        <div className="flex items-center justify-center gap-8 px-6 h-full">
                            {iconlink()}
                        </div>
                    </div>

                    <button
                        onClick={() => scroll("right")}
                        className={`p-4 ${lightMode ? 'text-gray-700' : 'text-white'} hover:text-indigo-500 transition cursor-pointer flex-shrink-0 hover:scale-110`}
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default Skills;