import { useEffect, useState } from "react";
import { personal } from "../data/resume";

const ROLES = ["MERN Stack Developer", "Frontend Developer", "Backend Developer", "Tech Enthusiast", "Chess Player"];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        const current = ROLES[roleIndex];
        let speed = deleting ? 40 : 80;

        const timer = setTimeout(() => {
            if (!deleting) {
                const next = current.slice(0, text.length + 1);
                setText(next);
                if (next === current) {
                    setTimeout(() => setDeleting(true), 1600);
                }
            } else {
                const next = current.slice(0, text.length - 1);
                setText(next);
                if (next === "") {
                    setDeleting(false);
                    setRoleIndex((i) => (i + 1) % ROLES.length);
                }
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [text, deleting, roleIndex]);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Background layers */}
            <div className="absolute inset-0 grid-bg opacity-60" />
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-3xl animate-blob" />
            <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/15 blur-3xl animate-blob" style={{ animationDelay: "-8s" }} />
            <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-3xl animate-blob" style={{ animationDelay: "-16s" }} />

            {/* Radial fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070711]" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-28 grid lg:grid-cols-2 gap-16 items-center w-full">
                {/* Left */}
                <div className={loaded ? "animate-fade-up" : "opacity-0"}>
                    {/* Availability badge */}
                    {/* <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass mb-8">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-pulse-ring" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        </span>
                        <span className="text-xs tracking-[0.25em] text-cyan-300 font-mono">
                            {personal.availability.toUpperCase()}
                        </span>
                    </div> */}

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                        <span className="block text-4xl text-white">Hi, I'm</span>
                        <span className="block text-gradient mt-1">{personal.name}</span>
                    </h1>

                    <div className="mt-6 flex items-center gap-3 text-xl sm:text-2xl text-white/80">
                        <span>a</span>
                        <span className="text-gradient font-medium min-h-[1.2em]">{text}</span>
                        <span className="animate-blink text-purple-400 font-mono">|</span>
                    </div>

                    <p className="mt-8 max-w-xl text-white/60 leading-relaxed text-lg">
                        {personal.tagline}
                        <br />
                        <span className="text-white/40">{personal.location}</span>
                    </p>

                    {/* CTA */}
                    <div className="mt-10 flex flex-wrap items-center gap-4">
                        <a
                            href="#resume"
                            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-violet-600 text-white font-medium shadow-lg shadow-purple-900/40 hover:shadow-purple-600/40 hover:scale-[1.02] active:scale-95 transition-all"
                        >
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Resume
                            <span className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg border border-white/15 bg-white/[0.03] hover:bg-white/[0.07] hover:border-purple-400/40 text-white font-medium transition-all"
                        >
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            Hire Me
                        </a>
                    </div>

                    {/* Socials */}
                    <div className="mt-10 flex items-center gap-3">
                        {[
                            {
                                name: "GitHub", icon: (
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                )
                            },
                            {
                                name: "LinkedIn", icon: (
                                    <>
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect x="2" y="9" width="4" height="12" />
                                        <circle cx="4" cy="4" r="2" />
                                    </>
                                )
                            },
                            {
                                name: "Instagram", icon: (
                                    <>
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                    </>
                                )
                            },
                        ].map((s) => (
                            <a
                                key={s.name}
                                href={`${s.name === "GitHub" ? "https://github.com/Ankurkumar45" : s.name === "LinkedIn" ? "https://www.linkedin.com/in/ankur-dwivedi-264209231" : s.name === "Instagram" ? "https://www.instagram.com/ur_ankur/" : ""}`}
                                aria-label={s.name}
                                className="h-11 w-11 rounded-lg glass glass-hover flex items-center justify-center text-white/70 hover:text-white transition-all group"
                            >
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    {s.icon}
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right — Profile */}
                <div className={loaded ? "animate-fade-in-left" : "opacity-0"} style={{ animationDelay: "0.2s" }}>
                    <div className="relative mx-auto aspect-square max-w-md">
                        {/* Outer rings */}
                        <div className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-[spin_40s_linear_infinite]" />
                        <div className="absolute -inset-4 rounded-full border border-white/5" />
                        <div className="absolute -inset-10 rounded-full border border-dotted border-purple-500/20 animate-[spin_60s_linear_infinite_reverse]" />

                        {/* Profile disc */}
                        <div className="absolute inset-6 rounded-full bg-gradient-to-br from-purple-600/30 via-indigo-600/20 to-cyan-500/30 blur-2xl" />
                        <div className="relative h-full w-full rounded-full overflow-hidden border border-white/10 shadow-2xl glow-purple">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-violet-600 to-cyan-500" />
                            <div className="absolute inset-0 grid-bg opacity-40 mix-blend-overlay" />
                            {/* Initials */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="font-bold text-white/95 text-7xl sm:text-8xl tracking-tight">AD</div>
                                    <div className="mt-2 text-[10px] tracking-[0.4em] text-white/60 font-mono">DESIGNER · DEV</div>
                                </div>
                            </div>
                            {/* Sparkle dots */}
                            <span className="absolute top-10 right-14 h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
                            <span className="absolute bottom-16 left-10 h-1.5 w-1.5 rounded-full bg-purple-300 animate-pulse" style={{ animationDelay: "0.6s" }} />
                            <span className="absolute top-1/2 right-6 h-1 w-1 rounded-full bg-white animate-pulse" style={{ animationDelay: "1.2s" }} />
                        </div>

                        {/* Floating badge */}
                        {/* <div className="absolute -bottom-2 -left-4 glass rounded-2xl px-4 py-3 flex items-center gap-3 animate-float-slow">
                            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm">
                                ✦
                            </div>
                            <div>
                                <div className="text-[10px] text-white/50 tracking-widest">EXPERIENCE</div>
                                <div className="text-sm font-semibold text-white">3+ Years</div>
                            </div>
                        </div> */}

                        {/* <div className="absolute top-6 -right-6 glass rounded-2xl px-4 py-3 flex items-center gap-3 animate-float-slow" style={{ animationDelay: "-4s" }}>
                            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                                ★
                            </div>
                            <div>
                                <div className="text-[10px] text-white/50 tracking-widest">PROJECTS</div>
                                <div className="text-sm font-semibold text-white">40+ Shipped</div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
                <span className="text-[10px] tracking-[0.3em] font-mono">SCROLL</span>
                <div className="h-10 w-[1px] relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-full bg-white/10" />
                    <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-purple-400 to-transparent animate-[scroll-indicator_2s_ease-in-out_infinite]" />
                </div>
            </div>

            <style>{`
        @keyframes scroll-indicator {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
        </section>
    );
}
