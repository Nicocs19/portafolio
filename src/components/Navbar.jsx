import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personal } from "../data";

const NAV_LINKS = [
  { label: "Sobre mí",    href: "#sobre-mi"    },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Intereses",   href: "#intereses"   },
  { label: "Contacto",    href: "#contacto"    },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const [active,   setActive]   = useState("");

  /* ── Fondo al hacer scroll ─────────────────────────────────── */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* ── Sección activa via IntersectionObserver ───────────────── */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive("#" + entry.target.id);
        }
      },
      // Zona activa: franja del 45 % al 55 % del viewport (centro)
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  /* ── Cierra el menú al pasar a desktop ─────────────────────── */
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  const showBg = scrolled || open;

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showBg ? "bg-zinc-950/80 backdrop-blur-xl border-b border-white/[0.06]" : ""
      }`}
    >
      {/* ── Barra principal ──────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="font-mono text-sm tracking-widest text-zinc-400 hover:text-violet-400 transition-colors select-none"
        >
          NC<span className="text-violet-500">.</span>
        </a>

        {/* Links — desktop */}
        <nav aria-label="Navegación principal">
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative inline-block px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-violet-400" : "text-zinc-500 hover:text-zinc-100"
                  }`}
                >
                  {/* Pastilla animada compartida entre links activos */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-violet-500/[0.08] border border-violet-500/[0.18]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
        </nav>

        {/* Hamburguesa animada — mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-[5px] rounded-lg hover:bg-white/[0.05] transition-colors"
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 6.5 : 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="block h-px w-[18px] bg-zinc-400 rounded-full origin-center"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1, scaleX: open ? 0.3 : 1 }}
            transition={{ duration: 0.15 }}
            className="block h-px w-[18px] bg-zinc-400 rounded-full"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -6.5 : 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="block h-px w-[18px] bg-zinc-400 rounded-full origin-center"
          />
        </button>
      </div>

      {/* ── Menú mobile desplegable ──────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0,  height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-white/[0.05]"
          >
            <nav className="px-4 py-3 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => {
                const isActive = active === link.href;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-violet-400 bg-violet-500/[0.08]"
                        : "text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04]"
                    }`}
                  >
                    {isActive && (
                      <span className="w-1 h-1 rounded-full bg-violet-500 shrink-0" />
                    )}
                    {link.label}
                  </motion.a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
