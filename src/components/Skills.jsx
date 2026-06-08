import { motion } from "framer-motion";
import { skills } from "../data";

/* ─── Estilos por nivel ───────────────────────────────────────── */
const levelBadge = {
  Avanzado:   "bg-violet-500/10 text-violet-300 border border-violet-500/20",
  Intermedio: "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20",
  Básico:     "bg-zinc-700/40    text-zinc-400   border border-zinc-600/30",
};

/* ─── Variantes de entrada de la card ────────────────────────── */
const cardVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Skills() {
  return (
    <section
      id="habilidades"
      className="py-24 scroll-mt-20 bg-zinc-950/60 border-y border-white/[0.04]"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Encabezado ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="section-label mb-3">Habilidades</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
            Lo que sé hacer
          </h2>
        </motion.div>

        {/* ── Grid de skills ──────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -2, transition: { duration: 0.18 } }}
              className="glass-hover rounded-2xl px-5 py-4"
            >
              {/* ── Fila superior: nombre + badge + porcentaje ── */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-semibold text-zinc-200 text-sm truncate">
                  {skill.name}
                </span>

                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full ${
                      levelBadge[skill.level] ?? levelBadge.Básico
                    }`}
                  >
                    {skill.level}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500 w-8 text-right">
                    {skill.progress}%
                  </span>
                </div>
              </div>

              {/* ── Barra de progreso ───────────────────────────── */}
              <div
                role="progressbar"
                aria-label={skill.name}
                aria-valuenow={skill.progress}
                aria-valuemin={0}
                aria-valuemax={100}
                className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden"
              >
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${skill.progress}%` }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 1.2,
                    delay: 0.15 + i * 0.09,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
