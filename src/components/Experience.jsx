import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience, education } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function TimelineItem({ icon: Icon, title, subtitle, period, description, index }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      transition={{ delay: index * 0.1 }}
      className="flex gap-4"
    >
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center shrink-0">
          <Icon size={16} className="text-purple-600 dark:text-purple-400" />
        </div>
        <div className="w-px flex-1 bg-gray-200 dark:bg-gray-700 mt-2" />
      </div>

      <div className="pb-8">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
          <span className="text-sm text-purple-500 font-medium">{subtitle}</span>
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500 font-mono mb-2">{period}</p>
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-purple-500 font-mono text-sm tracking-widest uppercase mb-2">
            Trayectoria
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Experiencia y formación
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
              Experiencia laboral
            </h3>
            {experience.map((exp, i) => (
              <TimelineItem
                key={exp.company + exp.role}
                icon={Briefcase}
                title={exp.role}
                subtitle={exp.company}
                period={exp.period}
                description={exp.description}
                index={i}
              />
            ))}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
              Educación
            </h3>
            {education.map((edu, i) => (
              <TimelineItem
                key={edu.institution}
                icon={GraduationCap}
                title={edu.degree}
                subtitle={edu.institution}
                period={edu.period}
                description={edu.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
