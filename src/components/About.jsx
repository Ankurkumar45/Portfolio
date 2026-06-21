import { useEffect, useRef, useState } from "react";

// const HIGHLIGHTS = [
//     { value: "40+", label: "Projects Shipped" },
//     { value: "15+", label: "Happy Clients" },
//     { value: "3", label: "Years of Craft" },
//     { value: "∞", label: "Pixels Pushed" },
// ];

export default function About() {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const io = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold: 0.2 }
        );
        if (ref.current) io.observe(ref.current);
        return () => io.disconnect();
    }, []);

    return (
        <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30" />

            <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
                    {/* Text */}
                    <div
                        className="transition-all duration-700"
                        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-purple-500" />
                            <span className="text-xs tracking-[0.3em] text-cyan-300 font-mono">ABOUT ME</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                            I design and build <span className="text-gradient">digital products</span> that
                            people actually enjoy using.
                        </h2>
                        <div className="mt-6 space-y-4 text-white/60 leading-relaxed">
                            <p>
                                I'm Ankur — a UI/UX designer and developer based in India. My work lives at the
                                intersection of visual craft and engineering discipline. I obsess over typography,
                                motion, and the small details that turn a good product into a great one.
                            </p>
                            <p>
                                When I'm not pushing pixels or writing React, you'll find me sketching interface
                                ideas, reading about cognitive psychology, or exploring generative art with Three.js.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {["Design Systems", "Interaction Design", "Motion", "React", "TypeScript", "Accessibility"].map(
                                (tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-white/80 hover:border-purple-400/40 hover:text-white transition-all"
                                    >
                                        {tag}
                                    </span>
                                )
                            )}
                        </div>
                    </div>

                    {/* Stats + visual */}
                    <div
                        className="transition-all duration-700 delay-200"
                        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
                    >
                        <div className="glass rounded-2xl p-6">
                            <div className="grid grid-cols-2 gap-4">
                                {HIGHLIGHTS.map((h, i) => (
                                    <div
                                        key={h.label}
                                        className="relative p-5 rounded-xl bg-white/[0.02] border border-white/10 overflow-hidden group hover:border-purple-500/30 transition-all"
                                        style={{ transitionDelay: `${i * 80}ms` }}
                                    >
                                        <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/10 blur-2xl group-hover:opacity-100 opacity-50 transition-opacity" />
                                        <div className="relative">
                                            <div className="text-3xl font-bold text-gradient">{h.value}</div>
                                            <div className="mt-1 text-xs text-white/50 font-mono tracking-wider">
                                                {h.label.toUpperCase()}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* <div className="mt-5 pt-5 border-t border-white/5">
                                <div className="text-[10px] text-white/40 font-mono tracking-[0.25em] mb-3">CURRENTLY</div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-3">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="text-white/70">Open to full-time roles</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: "0.3s" }} />
                                        <span className="text-white/70">Freelance projects — Q2 2026</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: "0.6s" }} />
                                        <span className="text-white/70">Writing about design systems</span>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
