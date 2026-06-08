import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { personal, contact, social } from "../data";

/* ─── Iconos de marca (Feather/Lucide-compatible) ─────────────── */
const BrandIcons = {
  Instagram: ({ size = 20 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Twitter: ({ size = 20 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2-4.52 4.5 0 .35.04.7.11 1.03C7.69 5.34 4.07 3.58 1.64.9a4.49 4.49 0 0 0-.61 2.27c0 1.56.8 2.93 2 3.74a4.45 4.45 0 0 1-2.05-.57v.06c0 2.18 1.55 4 3.6 4.41a4.52 4.52 0 0 1-2.04.08 4.53 4.53 0 0 0 4.23 3.13A9.05 9.05 0 0 1 0 19.54a12.77 12.77 0 0 0 6.92 2.03c8.3 0 12.84-6.88 12.84-12.85 0-.2 0-.39-.01-.58A9.17 9.17 0 0 0 23 3z" />
    </svg>
  ),
  LinkedIn: ({ size = 20 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  GitHub: ({ size = 20 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
};

/* ─── Variantes ──────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-24 scroll-mt-20 bg-zinc-950/60 border-t border-white/[0.04]"
    >
        <div className="max-w-lg mx-auto text-center px-6">

          {/* ── Encabezado ────────────────────────────────────── */}
          <motion.div {...fadeUp(0)}>
            <p className="section-label mb-4">Contacto</p>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 tracking-tight leading-[1.08] mb-4">
              {contact.heading}
            </h2>
            <p className="text-zinc-500 font-mono text-sm mb-12">
              {contact.subheading}
            </p>
          </motion.div>

          {/* ── CTA principal ─────────────────────────────────── */}
          <motion.div {...fadeUp(0.1)}>
            <motion.a
              href={`mailto:${personal.email}`}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 20 }}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 mb-12 rounded-full
                         font-semibold text-sm text-white
                         bg-gradient-to-r from-violet-600 to-indigo-600
                         hover:from-violet-500 hover:to-indigo-500
                         shadow-[0_0_32px_rgba(139,92,246,0.35)]
                         hover:shadow-[0_0_52px_rgba(139,92,246,0.55)]
                         transition-shadow duration-300"
            >
              <Send size={16} strokeWidth={2.2} />
              {contact.cta}
            </motion.a>
          </motion.div>

          {/* ── Card de datos de contacto ─────────────────────── */}
          <motion.div
            {...fadeUp(0.2)}
            className="glass rounded-2xl divide-y divide-white/[0.06] mb-8 text-left"
          >
            {/* Email */}
            <div className="flex items-center gap-4 px-6 py-4">
              <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/15 flex items-center justify-center shrink-0">
                <Mail size={15} className="text-violet-400" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest mb-0.5">
                  Email
                </p>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-sm font-mono text-zinc-300 hover:text-violet-400
                             hover:underline underline-offset-4 decoration-violet-500/40
                             transition-colors duration-200 truncate block"
                >
                  {personal.email}
                </a>
              </div>
            </div>

            {/* Ciudad */}
            <div className="flex items-center gap-4 px-6 py-4">
              <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/15 flex items-center justify-center shrink-0">
                <MapPin size={15} className="text-violet-400" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest mb-0.5">
                  Ubicación
                </p>
                <p className="text-sm font-mono text-zinc-300">
                  {personal.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Fila de iconos de redes sociales ─────────────── */}
          <motion.div
            {...fadeUp(0.3)}
            className="flex justify-center items-center gap-3"
          >
            {social.map((s) => {
              const Icon = BrandIcons[s.label] ?? null;
              return (
                <motion.a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} de ${personal.name}`}
                  whileHover={{
                    scale: 1.12,
                    y: -4,
                    boxShadow: "0 12px 32px rgba(139,92,246,0.3)",
                    transition: { type: "spring", stiffness: 380, damping: 16 },
                  }}
                  whileTap={{ scale: 0.93 }}
                  className="group w-12 h-12 glass hover:border-violet-500/40 hover:bg-violet-500/[0.08]
                             rounded-full flex items-center justify-center
                             text-zinc-500 hover:text-violet-400
                             transition-colors duration-200"
                >
                  {Icon ? (
                    <Icon size={19} />
                  ) : (
                    <span className="text-xs font-mono">{s.label.slice(0, 2)}</span>
                  )}
                </motion.a>
              );
            })}
          </motion.div>

        </div>
      </section>
  );
}
