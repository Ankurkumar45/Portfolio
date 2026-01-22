import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Skills = ({ lightMode }) => {
    const scrollRef = useRef(null);
    const animationRef = useRef(null);

    const iconUrl = [
        "c-plain", "cplusplus-plain", "java-plain", "python-plain",
        "html5-plain", "css3-plain", "tailwindcss-original",
        "javascript-plain", "php-plain", "react-plain",
        "nodejs-plain-wordmark", "express-original",
        "mysql-original", "mongodb-plain", "wordpress-plain",
        "numpy-plain", "pandas-plain", "matplotlib-plain",
        "vscode-plain", "jupyter-plain", "pycharm-plain", "intellij-plain"
    ];

    const skills = [
        "C", "C++", "Java", "Python", "HTML5", "CSS3", "TailwindCSS",
        "JavaScript", "PHP", "React.Js", "Node.Js", "Express.Js",
        "MySql", "MongoDB", "WordPress", "NumPy", "Pandas", "MatplotLib",
        "VS Code", "Jupyter Notebook", "PyCharm", "IntelliJ IDEA"
    ];

    const scroll = (dir) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: dir === "left" ? -200 : 200,
                behavior: "smooth",
            });
        }
    };

    const iconlink = () => {
        return iconUrl.map((icon, index) => (
            <div
                key={icon}
                className="group relative flex-shrink-0 p-6 transition-all duration-300"
            >
                <button className="cursor-pointer">
                    <i
                        className={`devicon-${icon} text-5xl ${lightMode ? "text-gray-600" : "text-white"
                            }`}
                    ></i>
                </button>
                <span
                    className={`absolute -top-1 left-1/2 -translate-x-1/2
          scale-0 group-hover:scale-100 transition-all duration-300
          px-2 py-1 rounded-md text-sm font-medium shadow-md
          ${lightMode
                            ? "bg-white text-gray-600 border border-gray-300"
                            : "bg-gray-800 text-white"}`}
                >
                    {skills[index]}
                </span>
            </div>
        ));
    };

    return (
        <div
            className={`bg-gradient-to-br ${lightMode ? "bg-white" : "from-gray-900 to-black"
                } transition-all duration-300 p-10`}
        >
            <div className="max-w-6xl mx-auto">
                <h2
                    className={`text-4xl md:text-5xl font-bold text-center mb-16 ${lightMode ? "text-gray-500" : "text-white"
                        }`}
                >
                    My{" "}
                    <span className={lightMode ? "text-gray-700" : "text-indigo-500"}>
                        Skills
                    </span>
                </h2>

                <div className="flex items-center justify-center gap-6 py-12 px-6">
                    <button
                        onClick={() => scroll("left")}
                        className={`p-4 hover:scale-110 transition cursor-pointer ${lightMode ? "text-gray-700" : "text-white"
                            }`}
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex-1 overflow-x-hidden scroll-smooth h-32"
                    >
                        <div className="flex items-center gap-8 px-6 h-full">
                            {iconlink()}
                        </div>
                    </div>

                    <button
                        onClick={() => scroll("right")}
                        className={`p-4 hover:scale-110 transition cursor-pointer ${lightMode ? "text-gray-700" : "text-white"
                            }`}
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Skills;
