import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { personal, about } from "../data";

/* ─── Variantes ───────────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const statContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const statItem = {
  hidden:  { opacity: 0, scale: 0.88, y: 12 },
  visible: { opacity: 1, scale: 1,    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Helper: separa primera oración del resto ────────────────── */
function splitDescription(text) {
  const cut = text.indexOf(". ");
  if (cut === -1) return { lede: text, body: "" };
  return { lede: text.slice(0, cut + 1), body: text.slice(cut + 2) };
}

export default function About() {
  const { lede, body } = splitDescription(personal.description);

  return (
    <section id="sobre-mi" className="py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Encabezado ──────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-10"
        >
          <p className="section-label mb-3">Sobre mí</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
            Un poco sobre mi historia
          </h2>
        </motion.div>

        {/* ── Card principal ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-2xl p-8 md:p-10 relative overflow-hidden mb-6"
        >
          {/* Comilla decorativa */}
          <span
            aria-hidden="true"
            className="absolute top-4 right-8 font-serif text-[9rem] leading-none text-violet-500/[0.07] select-none pointer-events-none"
          >
            "
          </span>

          {/* Lede — primera oración más grande */}
          <p className="relative text-[1.125rem] md:text-xl font-medium text-zinc-100 leading-[1.7] mb-5">
            {lede}
          </p>

          {/* Separador con gradiente */}
          <div className="h-px bg-gradient-to-r from-violet-500/30 via-indigo-500/20 to-transparent mb-5" />

          {/* Cuerpo del texto */}
          {body && (
            <p className="text-base text-zinc-400 leading-[1.9] mb-8">
              {body}
            </p>
          )}

          {/* Tags de personalidad */}
          {personal.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {personal.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[11px] font-mono text-zinc-400 bg-white/[0.04] border border-white/[0.08] hover:border-violet-500/30 hover:text-violet-300 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Ubicación */}
          {personal.location && (
            <div className="inline-flex items-center gap-2 text-zinc-500 text-xs font-mono">
              <MapPin size={12} className="text-violet-500 shrink-0" />
              {personal.location}
            </div>
          )}
        </motion.div>

        {/* ── Fila de stats ────────────────────────────────────── */}
        <motion.div
          variants={statContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {about.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={statItem}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="glass-hover rounded-xl p-5 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1 leading-none">
                {stat.value}
              </div>
              <div className="text-[10px] text-zinc-500 font-mono leading-snug mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
