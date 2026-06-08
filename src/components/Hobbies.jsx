import { motion } from "framer-motion";
import { Guitar, Trophy, Code2, Gamepad2 } from "lucide-react";
import { hobbies } from "../data";

/* ─── Mapa de iconos ─────────────────────────────────────────── */
const ICONS = { Guitar, Trophy, Code2, Gamepad2 };

/* ─── Variantes ──────────────────────────────────────────────── */
const gridVariants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hobbies() {
  return (
    <section id="intereses" className="py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Encabezado ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="section-label mb-3">Intereses</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
            Fuera del trabajo
          </h2>
        </motion.div>

        {/* ── Grid de cards ────────────────────────────────────── */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {hobbies.map((hobby) => {
            const Icon = ICONS[hobby.icon];
            return (
              <motion.div
                key={hobby.title}
                variants={cardVariants}
                /* ── Hover: elevación + glow violeta ── */
                whileHover={{
                  y: -10,
                  boxShadow: "0 24px 60px rgba(139,92,246,0.22), 0 0 0 1px rgba(139,92,246,0.2)",
                  transition: { type: "spring", stiffness: 280, damping: 18 },
                }}
                whileTap={{ scale: 0.98 }}
                /* glass base + hover color via CSS group */
                className="group glass hover:border-violet-500/25 hover:bg-violet-500/[0.04]
                           transition-colors duration-300 rounded-2xl p-7
                           flex flex-col items-start gap-5"
              >
                {/* Icono con fondo */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0
                             bg-violet-500/10 border border-violet-500/15
                             group-hover:bg-violet-500/20 group-hover:border-violet-500/35
                             transition-colors duration-300"
                >
                  {Icon && (
                    <Icon
                      size={24}
                      strokeWidth={1.75}
                      className="text-violet-400 group-hover:text-violet-300 transition-colors duration-300"
                    />
                  )}
                </div>

                {/* Texto */}
                <div>
                  <h3 className="font-semibold text-zinc-100 mb-2 group-hover:text-white transition-colors duration-200">
                    {hobby.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-[1.75] group-hover:text-zinc-400 transition-colors duration-200">
                    {hobby.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
