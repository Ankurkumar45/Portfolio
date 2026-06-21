import { useReveal } from "../hooks/useReveal";
import { Code2, Rocket, Database } from "lucide-react";

// const STATS = [
//     { label: "Years Experience", value: "4+" },
//     { label: "Projects Shipped", value: "30+" },
//     { label: "Happy Clients", value: "20+" },
//     { label: "Awards", value: "5" },
// ];

const SKILL_GROUPS = [
    {
        icon: Code2,
        title: "Frontend",
        description: "Building fast, accessible interfaces with modern frameworks.",
        skills: ["React", "HTML5", "CSS3", "Tailwind", "Framer Motion"],
    },
    {
        icon: Database,
        title: "Backend",
        description: "Comfy on the server side for end-to-end products.",
        skills: ["Node.js", "tRPC", "Prisma", "PostgreSQL", "Supabase"],
    },
];

export default function About() {
    const ref = useReveal();
    return (
        <section id="about" className="relative py-28">
            <div className="max-w-7xl mx-auto px-6">
                <div ref={ref} className="reveal grid lg:grid-cols-[1fr_1.3fr] gap-14 items-start">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-10 h-px bg-gradient-to-r from-indigo-500 to-cyan-500" />
                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">About</span>
                        </div>
                        <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
                            Designer at heart, <br />
                            <span className="gradient-text">engineer by trade.</span>
                        </h2>
                        <p className="mt-6 text-white/60 leading-relaxed">
                            I specialise in bridging the gap between design and engineering. My work lives at the
                            intersection of motion, typography and interaction — crafting interfaces that feel
                            as good as they look.
                        </p>
                        <p className="mt-4 text-white/60 leading-relaxed">
                            When I'm not shipping products, you'll find me exploring generative art, building
                            small creative tools, or writing about frontend craft.
                        </p>
                    </div>

                    {/* <div className="grid grid-cols-2 gap-4">
                        {STATS.map((s, i) => (
                            <div
                                key={s.label}
                                className="glass rounded-2xl p-6 hover:border-indigo-500/40 transition-colors"
                                style={{ transitionDelay: `${i * 50}ms` }}
                            >
                                <div className="font-display text-4xl font-bold gradient-text">{s.value}</div>
                                <div className="mt-2 text-sm text-white/60">{s.label}</div>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export function Skills() {
    const ref = useReveal();
    return (
        <section id="skills" className="relative py-28">
            <div className="max-w-7xl mx-auto px-6">
                <div ref={ref} className="reveal text-center max-w-2xl mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="w-10 h-px bg-gradient-to-r from-indigo-500 to-cyan-500" />
                        <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">
                            Skills &amp; Tools
                        </span>
                        <span className="w-10 h-px bg-gradient-to-l from-indigo-500 to-cyan-500" />
                    </div>
                    <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
                        A toolkit refined over <span className="gradient-text">years of shipping</span>.
                    </h2>
                    <p className="mt-5 text-white/60">
                        I pick the right tool for the job — here's what I reach for most days.
                    </p>
                </div>

                <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SKILL_GROUPS.map((g, i) => (
                        <div
                            key={g.title}
                            className="group glass rounded-2xl p-7 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1"
                            style={{ transitionDelay: `${i * 60}ms` }}
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center mb-5">
                                <g.icon className="w-6 h-6 text-cyan-300" />
                            </div>
                            <h3 className="font-display text-xl font-semibold text-white">{g.title}</h3>
                            <p className="mt-2 text-sm text-white/55 leading-relaxed">{g.description}</p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {g.skills.map((s) => (
                                    <span
                                        key={s}
                                        className="skill-chip tag cursor-default"
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
