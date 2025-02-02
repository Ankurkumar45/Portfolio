import React from "react";

const Skills = () => {

    const iconUrl = ['c-plain', 'cplusplus-plain', 'java-plain', 'python-plain', 'html5-plain', 'css3-plain', 'tailwindcss-original', 'javascript-plain', 'php-plain', 'react-plain', 'nodejs-plain-wordmark', 'express-original', 'mysql-original', 'mongodb-plain', 'numpy-plain', 'pandas-plain', 'matplotlib-plain', 'vscode-plain', 'jupyter-plain', 'pycharm-plain', 'intellij-plain'];

    const skills = ['C', 'C++', 'Java', 'Python', 'HTML', 'CSS', 'Tailwind', 'JavaScript', 'PHP', 'React.Js', 'Node.Js', 'Express.Js', 'MySql', 'MongoDB', 'NumPy', 'Pandas', 'MatplotLib', 'VS Code', 'Jupyter Notebook', 'PyCharm', 'IntelliJ IDEA'];

    const iconlink = () => {
        return iconUrl.map((icon) => {
            return <>
                <div class="group relative  backdrop-blur-sm rounded-full p-6 transition-all duration-300 transform">
                    <button className="cursor-pointer">
                        <i class={`devicon-${icon} text-5xl`}></i>
                    </button>
                    <span class="absolute -top-7 left-[50%] -translate-x-[50%] 
                        z-20 origin-left scale-0 px-3 rounded-lg border 
                        border-gray-300 bg-white text-black py-2 text-sm font-bold
                        shadow-md transition-all duration-300 ease-in-out 
                        group-hover:scale-100">
                        {
                            skills[iconUrl.indexOf(icon)]
                        }
                        <span>
                        </span>
                    </span>
                </div>
            </>
        });
    };
    return <>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                    My <span className="text-indigo-500">Skills</span>
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {iconlink()}
                </div >
            </div>
        </div>
    </>
}

export default Skills;