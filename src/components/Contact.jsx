import { useState } from "react";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 3000);
        setForm({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <section id="contact" className="relative py-28 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-3xl" />
            <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-purple-500" />
                            <span className="text-xs tracking-[0.3em] text-cyan-300 font-mono">GET IN TOUCH</span>
                        </div>
                        {/* <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                            Let's build something
                            <span className="text-gradient"> remarkable </span>
                            together.
                        </h2>
                        <p className="mt-4 text-white/60 leading-relaxed max-w-md">
                            Whether you have a project in mind, a role to discuss, or just want to talk design
                            systems — my inbox is open.
                        </p> */}

                        <div className="mt-10 space-y-4">
                            {[
                                { label: "Email", value: "ankurdw806@example.com", icon: <EmailIcon /> },
                                { label: "Location", value: "India · Open to remote & relocation", icon: <LocationOnIcon /> },
                                { label: "Availability", value: "Reply within 24 hours", icon: "◉" },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-center gap-4 p-4 rounded-xl glass glass-hover transition-all"
                                >
                                    <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-purple-500/30 to-cyan-500/30 border border-purple-500/30 flex items-center justify-center text-purple-200 text-lg">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-white/40 font-mono tracking-widest">
                                            {item.label.toUpperCase()}
                                        </div>
                                        <div className="text-white font-medium">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="glass rounded-2xl p-8 space-y-4"
                    >
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Field
                                label="Your Name"
                                value={form.name}
                                onChange={(v) => setForm({ ...form, name: v })}
                                placeholder="Ankur Kumar"
                            />
                            <Field
                                label="Email"
                                type="email"
                                value={form.email}
                                onChange={(v) => setForm({ ...form, email: v })}
                                placeholder="ankur@example.com"
                            />
                        </div>
                        <Field
                            label="Subject"
                            value={form.subject}
                            onChange={(v) => setForm({ ...form, subject: v })}
                            placeholder="Let's collaborate on a project"
                        />
                        <div>
                            <label className="block text-[10px] text-white/40 font-mono tracking-widest mb-2">
                                MESSAGE
                            </label>
                            <textarea
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                rows={5}
                                placeholder="Hi Ankur, I would like to discuss..."
                                className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all resize-none font-mono text-sm"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-violet-600 text-white font-medium hover:scale-[1.01] active:scale-95 transition-all shadow-lg shadow-purple-900/40"
                        >
                            {sent ? (
                                <>
                                    <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                                    Message Sent!
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </>
                            )}
                        </button>

                        <p className="text-[11px] text-white/40 text-center">
                            Or reach out directly via{" "}
                            <a href="mailto:ankurdw806@example.com" className="text-purple-300 hover:text-purple-200">ankurdw806@example.com</a>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}

function Field({
    label,
    value,
    onChange,
    placeholder,
    type = "text",
}) {
    return (
        <div>
            <label className="block text-[10px] text-white/40 font-mono tracking-widest mb-2">
                {label.toUpperCase()}
            </label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all font-mono text-sm"
            />
        </div>
    );
}
