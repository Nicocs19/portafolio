import { motion } from "framer-motion";
import { ArrowDown, Mail, AtSign } from "lucide-react";
import { personal, social } from "../data";

/* ─── Variantes ──────────────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.82 },
  show:   { opacity: 1, scale: 1,  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function splitName(fullName) {
  const [first, ...rest] = fullName.trim().split(" ");
  return { first, last: rest.join(" ") };
}

export default function Hero() {
  const { first, last } = splitName(personal.name);
  const primarySocial = social[0] ?? null;

  return (
    <section
      aria-label="Presentación"
      className="relative min-h-[560px] h-dvh flex flex-col items-center text-center overflow-hidden"
    >
      {/* ── Atmósfera de fondo ────────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-10%] -translate-x-1/2 w-[900px] h-[700px] rounded-full bg-violet-600/[0.08] blur-[140px]" />
        <div className="absolute right-[10%] bottom-[20%] w-[500px] h-[500px] rounded-full bg-indigo-600/[0.06] blur-[120px]" />
      </div>

      {/* ── Contenido ─────────────────────────────────────────── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-2xl flex flex-col items-center flex-1 justify-center px-6 sm:px-8 pt-20 pb-8"
      >
        {/* 1 · Badge de disponibilidad */}
        <motion.div variants={fadeUp} className="mb-8">
          <span
            role="status"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                       bg-emerald-500/[0.08] border border-emerald-500/[0.2]
                       text-emerald-400 text-[11px] font-mono tracking-widest uppercase select-none"
          >
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Disponible para colaborar
          </span>
        </motion.div>

        {/* 2 · Avatar */}
        {personal.avatar && (
          <motion.div variants={fadeScale} className="mb-8 relative">
            <motion.div
              aria-hidden="true"
              animate={{ opacity: [0.22, 0.38, 0.22], scale: [1.3, 1.45, 1.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 blur-2xl pointer-events-none"
            />
            <div className="relative p-[2.5px] rounded-full bg-gradient-to-br from-violet-500 via-indigo-400 to-violet-700 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
              <img
                src={personal.avatar}
                alt={`Foto de ${personal.name}`}
                width={120}
                height={120}
                loading="eager"
                decoding="async"
                className="w-[120px] h-[120px] rounded-full object-cover bg-zinc-900 block"
              />
            </div>
          </motion.div>
        )}

        {/* 3 · Prefijo */}
        <motion.p variants={fadeUp} className="section-label mb-3" aria-hidden="true">
          Hola, soy
        </motion.p>

        {/* 4 · Nombre — tamaño ajustado para 375 px */}
        <motion.h1
          variants={fadeUp}
          className="font-bold tracking-tight leading-[1.02] mb-4
                     text-4xl sm:text-5xl md:text-[5.25rem]"
        >
          <span className="text-zinc-100">{first} </span>
          <span className="gradient-text">{last}</span>
        </motion.h1>

        {/* 5 · Rol */}
        <motion.p
          variants={fadeUp}
          className="text-xs font-mono text-zinc-500 tracking-[0.18em] uppercase mb-6"
        >
          {personal.role}
        </motion.p>

        {/* 6 · Tagline */}
        <motion.p
          variants={fadeUp}
          className="text-base md:text-[1.075rem] text-zinc-400 leading-[1.75] max-w-[520px] mb-10"
        >
          {personal.tagline}
        </motion.p>

        {/* 7 · Botones CTA */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <motion.a
            href={`mailto:${personal.email}`}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full
                       text-sm font-semibold text-white
                       bg-gradient-to-r from-violet-600 to-indigo-600
                       hover:from-violet-500 hover:to-indigo-500
                       shadow-[0_0_28px_rgba(139,92,246,0.35)]
                       hover:shadow-[0_0_44px_rgba(139,92,246,0.55)]
                       transition-shadow duration-300
                       focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            <Mail size={15} strokeWidth={2.2} aria-hidden="true" />
            Contáctame
          </motion.a>

          {primarySocial && (
            <motion.a
              href={primarySocial.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver perfil de ${primarySocial.label}`}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full
                         text-sm font-semibold text-zinc-300
                         glass hover:text-violet-300 hover:border-violet-500/40 hover:bg-violet-500/[0.06]
                         transition-colors duration-200"
            >
              <AtSign size={15} strokeWidth={2.2} aria-hidden="true" />
              Ver redes
            </motion.a>
          )}
        </motion.div>

        {/* 8 · Ubicación */}
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-2 text-[11px] font-mono text-zinc-600 select-none"
          aria-label={`Ubicación: ${personal.location}`}
        >
          <span aria-hidden="true" className="w-1 h-1 rounded-full bg-violet-500/50" />
          {personal.location}
          <span aria-hidden="true" className="w-1 h-1 rounded-full bg-violet-500/50" />
        </motion.div>
      </motion.div>

      {/* ── Flecha scroll (decorativa) ────────────────────────── */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="relative z-10 pb-8 flex flex-col items-center gap-1 pointer-events-none"
      >
        <span className="text-[10px] font-mono text-zinc-700 tracking-widest uppercase">scroll</span>
        <ArrowDown size={14} className="text-zinc-700 animate-bounce" />
      </motion.div>
    </section>
  );
}
