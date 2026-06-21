import { useEffect, useRef } from "react";

export function useReveal(options) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("visible");
                        io.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.12, ...options }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return ref;
}

export function useScrollProgress() {
    useEffect(() => {
        const bar = document.getElementById("scroll-progress");
        if (!bar) return;
        const onScroll = () => {
            const h = document.documentElement;
            const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
            bar.style.transform = `scaleX(${Math.min(1, Math.max(0, scrolled))})`;
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
}
