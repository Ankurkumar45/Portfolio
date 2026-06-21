import { useEffect, useState } from "react";
import { cn } from "../utils/cn";

const NAV = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
    { id: "resume", label: "RESUME" },
    { id: "contact", label: "CONTACT" },
];

export default function Navbar() {
    const [active, setActive] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
            let current = "home";
            for (const s of sections) {
                const rect = s.getBoundingClientRect();
                if (rect.top <= 120) current = s.id;
            }
            setActive(current);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "backdrop-blur-xl bg-[#070711]/70 border-b border-white/5"
                    : "bg-transparent border-b border-transparent"
            )}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
                {/* Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {NAV.map((n) => (
                        <a
                            key={n.id}
                            href={`#${n.id}`}
                            className={cn(
                                "relative px-3 py-2 text-[11px] tracking-[0.2em] font-medium transition-colors",
                                active === n.id ? "text-white" : "text-white/50 hover:text-white/80"
                            )}
                        >
                            {active === n.id && (
                                <span className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-500/20 to-cyan-500/10 border border-purple-500/30" />
                            )}
                            <span className="relative">{n.label}</span>
                        </a>
                    ))}
                </nav>

                {/* Center logo */}
                <a href="#home" className="flex items-center gap-2 group md:absolute md:left-1/2 md:-translate-x-1/2">
                    <span className="text-xs text-purple-400 font-mono">&lt;</span>
                    <span className="font-semibold tracking-tight text-white group-hover:text-gradient transition-all text-lg">
                        Ankur
                    </span>
                    <span className="text-xs text-purple-400 font-mono">/&gt;</span>
                </a>

                {/* Right controls */}
                <div className="flex items-center gap-3">
                    {/* Theme toggle */}
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="relative h-7 w-12 rounded-full bg-white/10 border border-white/15 flex items-center p-1 transition-colors hover:bg-white/15"
                    >
                        <span
                            className={cn(
                                "h-5 w-5 rounded-full transition-all duration-500 shadow-md flex items-center justify-center text-[10px]",
                                theme === "dark"
                                    ? "translate-x-5 bg-gradient-to-br from-purple-500 to-cyan-400 text-white"
                                    : "translate-x-0 bg-white text-amber-400"
                            )}
                        >
                            {theme === "dark" ? "●" : "☀"}
                        </span>
                    </button>

                    {/* Mobile menu */}
                    <button
                        onClick={() => setMobileOpen((o) => !o)}
                        className="md:hidden h-9 w-9 flex items-center justify-center rounded-md bg-white/5 border border-white/10"
                        aria-label="Menu"
                    >
                        <div className="space-y-1">
                            <span className={cn("block h-0.5 w-5 bg-white transition-all", mobileOpen && "translate-y-1.5 rotate-45")} />
                            <span className={cn("block h-0.5 w-5 bg-white transition-all", mobileOpen && "opacity-0")} />
                            <span className={cn("block h-0.5 w-5 bg-white transition-all", mobileOpen && "-translate-y-1.5 -rotate-45")} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            {mobileOpen && (
                <div className="md:hidden border-t border-white/5 bg-[#070711]/95 backdrop-blur-xl">
                    <div className="px-6 py-4 flex flex-col gap-1">
                        {NAV.map((n) => (
                            <a
                                key={n.id}
                                href={`#${n.id}`}
                                onClick={() => setMobileOpen(false)}
                                className={cn(
                                    "px-3 py-2 text-xs tracking-widest rounded-md",
                                    active === n.id ? "bg-purple-500/15 text-white" : "text-white/60"
                                )}
                            >
                                {n.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
