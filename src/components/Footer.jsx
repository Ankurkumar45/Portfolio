import { personal } from "../data/resume";

export default function Footer() {
    return (
        <footer className="relative border-t border-white/5 py-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

            <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <span className="text-xs text-white/40 font-mono">&lt;</span>
                    <span className="font-semibold text-white">Ankur</span>
                    <span className="text-xs text-white/40 font-mono">/&gt;</span>
                    <span className="text-xs text-white/30 ml-2">·</span>
                    <span className="text-xs text-white/40">
                        © {new Date().getFullYear()} {personal.name}
                    </span>
                </div>

                <div className="flex items-center gap-6 text-xs text-white/40">
                    <a href="#home" className="hover:text-white transition-colors">Home</a>
                    <a href="#skills" className="hover:text-white transition-colors">Skills</a>
                    <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                    <a href="#resume" className="hover:text-white transition-colors">Resume</a>
                    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                </div>

                <div className="text-xs text-white/30 font-mono flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Designed & built with care
                </div>
            </div>
        </footer>
    );
}
