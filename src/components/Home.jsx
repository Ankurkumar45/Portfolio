import React from "react";
import image from './Images/my_pic.jpg';
import TypewriterEffect from 'react-typewriter-effect';
import Scroll from "./Scroll";

function Home() {

    const professions = [
        'Software Engineer',
        'Web Developer',
        'UI/UX Designer',
        'Full Stack Developer',
        'Tech Enthusiast',
    ];

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20 px-4">
                <div className="my-pic1 hidden relative top-24">
                    <div className="">
                        <div className="cursor-pointer">
                            <figure><img src={image} className="rounded-3xl h-75 w-75" /></figure>
                        </div>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-around min-h-screen">
                        <div className="flex flex-col justify-center min-h-screen">
                            <div className="text-sm text-gray-300 font-bold mb-1">
                                <h2 className="italic">Hey, I'm </h2>
                                <span className="mb-1.5 text-5xl text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-violet-400">Ankur Dwivedi</span><br />
                                <div className="flex gap-1.5 text-3xl">
                                    a <span className="text-red-400">{' '}</span>
                                    <TypewriterEffect
                                        textStyle={{
                                            fontFamily: 'Arial',
                                            color: 'rgb(123 237 219)',
                                            fontSize: '2rem',
                                            fontWeight: 'bold',
                                        }}
                                        startDelay={100}
                                        cursorColor="#3F3D56"
                                        multiText={professions}
                                        multiTextDelay={1000}
                                        typeSpeed={100}
                                        multiTextLoop={true}
                                    />
                                </div>
                                <p className="font-bold italic text-emerald-600"><br />
                                    Passionate about creating innovative solutions and turning complex problems into elegant interfaces.
                                </p>
                            </div><br />
                            <div className="gap-5 flex">
                                <a href="https://drive.google.com/file/d/1990dFuoMMoBmHeEVes3_dQNAhUCDLTf1/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <button
                                        className="cursor-pointer relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                                    >
                                        <span
                                            className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                                        >
                                            <span
                                                className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                            ></span>
                                        </span>
                                        <span
                                            className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                                        >
                                            <span
                                                className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                            ></span>
                                        </span>
                                        <span
                                            className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                                        ></span>
                                        <span
                                            className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                                        >RESUME</span
                                        >
                                    </button>
                                </a>
                                <a href="mailto:ankurkumardwivedi779@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <button
                                        className="cursor-pointer bg-gradient-to-b from-indigo-500 to-indigo-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group"
                                    >
                                        <div className="relative overflow-hidden">
                                            <p
                                                className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                                            >
                                                Hire me
                                            </p>
                                            <p
                                                className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                                            >
                                                Hire me
                                            </p>
                                        </div>
                                    </button>
                                </a>
                            </div><br />
                        </div>
                        <div className="my-pic2 flex items-center justify-center min-h-screen">
                            <div className="hover15 column rounded-2xl">
                                <div className="cursor-pointer">
                                    <figure><img src={image} className="rounded-full h-55 w-55" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Scroll />
        </>
    );
}

export default Home;