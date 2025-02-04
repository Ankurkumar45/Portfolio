import React from 'react';
import project01 from '../assets/projects/movie-recommender.jpg';
import project02 from '../assets/projects/bank-management.jpg';
import project03 from '../assets/projects/weather-forecast.jpg';
import project05 from '../assets/projects/voice-assistant.jpg';
import project04 from '../assets/projects/food-delivery.jpg';
import project06 from '../assets/projects/BCCI.jpg';

const Projects = ({ lightMode, setLightMode }) => {
    const projects = [
        {
            title: "Movie-Recomender",
            description: "Developed a movie recommendation system using collaborative filtering and content-based filtering techniques.",
            image: `${project01}`,
            tech: ["Jupyter Notebook", "NumPy", "Pandas", "Matplotlib"],
            liveDemo: "https://demo.com",
            github: "https://github.com/Ankurkumar45/Movie-Recomender"
        },
        {
            title: "Bank Management System",
            description: "Designed a user-friendly GUI using Java Swing for enhanced user interaction and experience.",
            image: `${project02}`,
            tech: ["Java", "Java Swing", "OOP", "MySQL"],
            liveDemo: "https://demo.com",
            github: "https://github.com/Ankurkumar45/Bank-Management-System-Java-Project-"
        },
        {
            title: "Weather Forecast",
            description: "Developed a weather forecast.This project provides real-time weather updates using ReactJS.",
            image: `${project03}`,
            tech: ["HTML", "CSS", "React", 'Weather API'],
            liveDemo: "https://ankurkumar45.github.io/Weather-update/",
            github: "https://github.com/Ankurkumar45/Weather-update"
        },
        {
            title: "Food Delivery",
            description: "Developed a weather forecast.This project provides real-time weather updates using ReactJS.",
            image: `${project04}`,
            tech: ["HTML", "CSS", "JavaScript", "MERN"],
            liveDemo: "https://ankurkumar45.github.io/food/pro/index.html",
            github: "https://github.com/Ankurkumar45/food"
        },
        {
            title: "Voice Assistant",
            description: "Developed a voice assistant using Python that processes voice commands for various tasks.",
            image: `${project05}`,
            tech: ["Jupyter Notebook", "NLTK", "Pyttsx3", "SpeechRecognition", "PyWatkit"],
            liveDemo: "https://demo.com",
            github: "https://github.com/Ankurkumar45/Voice-Assistant"
        },
        {
            title: "BCCI Clone",
            description: "Developed a voice assistant using Python that processes voice commands for various tasks.",
            image: `${project06}`,
            tech: ["HTML", "CSS", "JavaScript", "MERN"],
            liveDemo: "https://ankurkumar45.github.io/projects/project-01/Index.html",
            github: "https://github.com/Ankurkumar45/projects"
        }
    ];

    return (
        <div className={`min-h-screen bg-gradient-to-br ${lightMode ? 'bg-white' : 'from-gray-900 to-black'} transform transition-all duration-300 py-20 px-4`}>
            <div className="max-w-6xl mx-auto">
                <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${lightMode ? 'text-gray-500' : ''} transform transition-all duration-300`}>
                    My <span className={`${lightMode ? 'text-gray-700' : 'text-indigo-500'} transform transition-all duration-300`}>Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index}
                            className={`group ${lightMode ? 'bg-gray-700' : 'bg-white/10'} backdrop-blur-sm rounded-xl overflow-hidden hover:${lightMode ? '' : 'bg-white/20'} transition-all duration-300 transform hover:-translate-y-2`}>
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="flex gap-4">
                                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer"
                                            className="demo-btn1 bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors">
                                            Live Demo
                                        </a>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                                            className="github-btn bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors">
                                            GitHub
                                        </a>

                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 text-center">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;