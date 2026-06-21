import { resume, personal } from "../data/resume";
import my_pic from "../assets/my_pic.png";

export default function Resume() {
    return (
        <section id="resume" className="relative py-28 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent" />
            <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-purple-600/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                <div className="mb-10 max-w-3xl">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-purple-500" />
                        <span className="text-xs tracking-[0.3em] text-cyan-300 font-mono">RESUME</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                        My resume
                        {/* <span className="text-gradient"> simplified and ready.</span> */}
                    </h2>
                    <p className="mt-4 text-white/60 leading-relaxed">
                        A clean overview of my experience, education, skills, certifications, and contact details.
                    </p>
                </div>

                <div className="glass rounded-2xl p-5">
                    <ResumePreview />
                </div>
            </div>
        </section>
    );
}

function ResumePreview() {
    return (
        <div className="relative bg-white/[0.02] rounded-lg border border-white/10 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-purple-500 via-violet-500 to-cyan-400" />

            <div className="p-5">
                <div className="flex items-start gap-3 pb-4 border-b border-dashed border-white/10">
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                        <img src={my_pic} alt="My Picture" className="h-full w-full object-cover rounded-lg" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="font-bold text-white text-sm">{personal.name}</div>
                        <div className="text-[11px] text-purple-300 truncate">{personal.role}</div>
                    </div>
                </div>

                <div className="pt-4 space-y-6">
                    <section className="space-y-3">
                        <PreviewLabel>PROFILE</PreviewLabel>
                        <p className="text-[11px] text-white/70 leading-relaxed">{resume.summary}</p>
                        <PreviewLabel>CONTACT</PreviewLabel>
                        <div className="space-y-1 text-[11px] text-white/60 font-mono">
                            <div>Location: {personal.location}</div>
                            <div>Email: <a href={`mailto:${personal.email}`}>{personal.email}</a></div>
                            <div>GitHub: <a href={personal.github} target="_blank" rel="noopener noreferrer">{personal.github}</a></div>
                            <div>LinkedIn: <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">{personal.linkedin}</a></div>
                        </div>
                    </section>

                    <section className="space-y-3">
                        <PreviewLabel>INTERNSHIPS</PreviewLabel>
                        {resume.internship.map((e) => (
                            <div key={e.company} className="pl-2 border-l border-purple-500/30">
                                <div className="flex items-center justify-between">
                                    <div className="text-[11px] font-semibold text-white">{e.role}</div>
                                    <div className="text-[10px] text-white/40 font-mono">{e.period}</div>
                                </div>
                                <div className="text-[10px] text-purple-300">{e.company}</div>
                                <div className="mt-1 text-[10px] text-white/60 leading-relaxed">
                                    {e.highlights[0]}
                                </div>
                            </div>
                        ))}
                    </section>

                    <section className="space-y-3">
                        <PreviewLabel>EDUCATION</PreviewLabel>
                        {resume.education.map((e) => (
                            <div key={e.school} className="p-2 rounded bg-white/[0.02] border border-white/10">
                                <div className="flex items-center justify-between">
                                    <div className="text-[11px] font-semibold text-white">{e.degree}</div>
                                    <div className="text-[10px] text-white/40 font-mono">{e.period}</div>
                                </div>
                                <div className="text-[10px] text-purple-300">{e.school}</div>
                                {e.note && <div className="text-[10px] text-white/50 italic mt-1">{e.note}</div>}
                            </div>
                        ))}
                    </section>

                    <section className="space-y-3">
                        <PreviewLabel>SKILLS</PreviewLabel>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {resume.skills.map((s) => (
                                <div key={s.name} className="p-3 rounded-lg bg-white/[0.02] border border-white/10">
                                    <div className="flex items-center justify-between text-[10px]">
                                        <span className="text-white/80">{s.name}</span>
                                        <span className="text-purple-300 font-mono">{s.level}%</span>
                                    </div>
                                    <div className="h-1 rounded-full bg-white/5 overflow-hidden mt-2">
                                        <div className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" style={{ width: `${s.level}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-3">
                        <PreviewLabel>CERTIFICATIONS</PreviewLabel>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {resume.certifications.map((c) => (
                                <div key={c.name} className="p-3 rounded-lg bg-white/[0.02] border border-white/10">
                                    <div className="text-[11px] font-semibold text-white">{c.name}</div>
                                    <div className="text-[10px] text-white/40 font-mono mt-1">{c.year}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-3">
                        <PreviewLabel>LANGUAGES</PreviewLabel>
                        <div className="flex flex-wrap gap-2">
                            {resume.languages.map((l) => (
                                <span key={l.name} className="text-[10px] px-3 py-1 rounded bg-white/5 border border-white/10 text-white/80">
                                    {l.name} · <span className="text-purple-300">{l.level}</span>
                                </span>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="mt-4 pt-3 border-t border-dashed border-white/10 flex items-center justify-between text-[9px] font-mono text-white/30">
                    <span><a href={`mailto:${personal.email}`}>{personal.email}</a></span>
                    <span>page 01</span>
                </div>
            </div>
        </div>
    );
}

function PreviewLabel({ children }) {
    return (
        <div className="text-[9px] font-mono tracking-[0.25em] text-cyan-300/80 flex items-center gap-2">
            <span className="h-[1px] w-4 bg-cyan-400/40" />
            {children}
        </div>
    );
}
