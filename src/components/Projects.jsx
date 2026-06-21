import VisibilityIcon from '@mui/icons-material/Visibility';
import GitHubIcon from '@mui/icons-material/GitHub';
import { EyeIcon, GithubIcon } from "lucide-react";

import FuelDrop from "../assets/projects/FuelDrop.png";
import GitHubUserTimeline from "../assets/projects/GitHubUserTimeline.png";
import CookingCollab from "../assets/projects/CookingCollab.png";

const PROJECTS = [
    {
        title: "FuelDrop",
        year: "2026",
        desc: "A MERN stack platform to find nearby petrol pumps, order fuel delivery, and send emergency SOS alerts.",
        tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Geolocation APIs", "Leaflet.js"],
        image: { src: FuelDrop, alt: "FuelDrop project logo" },
        liveLink: "https://fuel-drop-zeta.vercel.app/login",
        githubLink: "https://github.com/Ankurkumar45/FuelDrop.git",
    },
    {
        title: "GitHub User Timeline",
        year: "2026",
        desc: "A responsive web application that displays a user's GitHub activity timeline with filtering and search capabilities.",
        tags: ["React.js", "hooks", "localStorage", "Tailwind CSS", "GitHub API"],
        image: { src: GitHubUserTimeline, alt: "GitHub User Timeline project logo" },
        liveLink: "https://generate-user-github-timeline-uris.vercel.app/",
        githubLink: "https://github.com/Ankurkumar45/generate-user-github-timeline.git",
    },
    {
        title: "CookingCollab",
        year: "2025",
        desc: "A collaborative web app for food enthusiasts to share, discover, and cook recipes together in real time.",
        tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
        image: { src: CookingCollab, alt: "CookingCollab project logo" },
        liveLink: "https://cooking-collab-8xyb.vercel.app/",
        githubLink: "https://github.com/Ankurkumar45/CookingCollab.git",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative py-28">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-purple-600/10 blur-3xl" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                {/* Heading */}
                <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-purple-500" />
                            <span className="text-xs tracking-[0.3em] text-cyan-300 font-mono">PROJECT WORK</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                            Recent projects I've <span className="text-gradient">designed & built</span>.
                        </h2>
                    </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    {PROJECTS.map((project, index) => {
                        return (
                            <div key={project.title} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/40 shadow-2xl shadow-black/30 h-[400px] w-[450px]">
                                <div className="absolute inset-0 bg-slate-950/80" />
                                <div className="relative z-10 flex h-full items-center justify-center p-8 object-contain transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" style={{ backgroundImage: `url(${project.image.src})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>

                                <div
                                    className={`absolute inset-y-0 left-0 w-full sm:w-[70%] z-20 bg-slate-950/95 p-8 flex flex-col justify-center gap-4 transition-transform duration-500 ease-out -translate-x-full group-hover:translate-x-0`}
                                >
                                    <span className="text-xs tracking-[0.3em] text-cyan-300 font-mono">{project.year}</span>
                                    <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                                    <p className="text-white/70 leading-relaxed">{project.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/80"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4 mt-4">
                                        {project.liveLink && (
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-300 cursor-pointer"
                                            >
                                                <EyeIcon className="mr-1" />
                                            </a>
                                        )}
                                        {project.githubLink && (
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-300 cursor-pointer"
                                            >
                                                <GithubIcon className="mr-1" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
