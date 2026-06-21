import { useEffect, useRef, useState } from "react";
import { resume } from "../data/resume";

export default function Skills() {
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

    const designSkills = resume.skills.filter((s) => s.category === "Design");
    const devSkills = resume.skills.filter((s) => s.category === "Development");

    return (
        <section id="skills" className="relative py-28 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                {/* Heading */}
                <div className="mb-16 max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-purple-500" />
                        <span className="text-xs tracking-[0.3em] text-cyan-300 font-mono">SKILLS & EXPERTISE</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                        Crafted at the intersection of
                        <span className="text-gradient"> design </span> and
                        <span className="text-gradient"> engineering</span>.
                    </h2>
                    <p className="mt-4 text-white/60 leading-relaxed">
                        A blend of visual craft, systems thinking, and production-grade code — sharpened over
                        three years of shipping real products.
                    </p>
                </div>

                {/* Two-column grid */}
                <div ref={ref} className="grid lg:grid-cols-2 gap-6">
                    {/* Design */}
                    <SkillColumn title="Design" icon="✦" skills={designSkills} visible={visible} delay={0} />
                    {/* Development */}
                    <SkillColumn title="Development" icon="⟨⟩" skills={devSkills} visible={visible} delay={150} />
                </div>

                {/* Tools */}
                <div className="mt-14 grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-3">
                    {["Figma", "React", "TypeScript", "Tailwind", "Next.js", "Three.js", "Framer", "Notion"].map(
                        (tool, i) => (
                            <div
                                key={tool}
                                className="glass glass-hover rounded-lg px-4 py-3 text-center text-sm text-white/80 font-medium transition-all"
                                style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: `all 0.6s ease ${200 + i * 60}ms` }}
                            >
                                {tool}
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

function SkillColumn({
    title,
    icon,
    skills,
    visible,
    delay,
}) {
    return (
        <div
            className="glass rounded-2xl p-8 transition-all"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: `all 0.7s ease ${delay}ms` }}
        >
            <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500/30 to-cyan-500/30 border border-purple-500/30 flex items-center justify-center text-purple-300 font-bold">
                    {icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <span className="ml-auto text-xs text-white/40 font-mono">
                    {String(skills.length).padStart(2, "0")} SKILLS
                </span>
            </div>

            <div className="space-y-5">
                {skills.map((s, i) => (
                    <div key={s.name}>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-white/90">{s.name}</span>
                            <span className="text-xs text-white/50 font-mono">{s.level}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                            <div
                                className="h-full rounded-full bg-gradient-to-r from-purple-500 via-violet-500 to-cyan-400 relative"
                                style={{
                                    width: visible ? `${s.level}%` : "0%",
                                    transition: `width 1.4s cubic-bezier(0.22, 1, 0.36, 1) ${delay + i * 100}ms`,
                                }}
                            >
                                <div className="absolute inset-y-0 right-0 w-2 bg-white/60 animate-pulse rounded-full" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
