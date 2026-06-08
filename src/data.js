// ============================================================
// DATOS PERSONALES — único lugar para editar el contenido
// ============================================================

const data = {
  personal: {
    name: "Nicolas Carrasco Simons",
    role: "Negocios · Ciencia de Datos · Marketing Digital",
    tagline: "Aprendo rápido, analizo profundo y ejecuto estrategias que hacen crecer negocios reales.",
    description:
      "Soy estudiante de negocios y ciencia de datos con un perfil autodidacta en marketing para negocios digitales. " +
      "Combino análisis cuantitativo, embudos de venta y campañas pagadas para construir sistemas de adquisición escalables. " +
      "Me apasiona la intersección entre los números, la estrategia y la tecnología.",
    tags: ["Estudiante", "Autodidacta", "Emprendedor digital", "Datos & Estrategia"],
    avatar: "/perfil.webp",
    email: "simonsfuture@gmail.com",
    location: "La Paz, Bolivia",
    cv: "/cv.pdf",
  },

  social: [
    { label: "Instagram", url: "https://www.instagram.com/nicoc_s/" },
  ],

  skills: [
    { name: "Embudos de Ventas",  level: "Avanzado",   progress: 85 },
    { name: "Facebook Ads",       level: "Avanzado",   progress: 80 },
    { name: "Email Marketing",    level: "Avanzado",   progress: 82 },
    { name: "Automatizaciones",   level: "Intermedio", progress: 65 },
    { name: "Estrategia Digital", level: "Avanzado",   progress: 88 },
    { name: "Python",             level: "Intermedio", progress: 60 },
    { name: "Matemáticas",        level: "Intermedio", progress: 68 },
  ],

  hobbies: [
    {
      title: "Guitarra",
      icon: "Guitar",
      description: "Tocar guitarra es mi forma de desconectarme y ser creativo fuera de la pantalla.",
    },
    {
      title: "Fútbol",
      icon: "Trophy",
      description: "El fútbol me enseñó trabajo en equipo y a pensar rápido bajo presión.",
    },
    {
      title: "Programar",
      icon: "Code2",
      description: "Automatizar procesos y construir herramientas es lo que más disfruto aprender.",
    },
    {
      title: "Videojuegos",
      icon: "Gamepad2",
      description: "Los juegos me desarrollaron pensamiento estratégico y resolución de problemas.",
    },
  ],

  about: {
    stats: [
      { value: "5+",   label: "Años estudiando marketing"    },
      { value: "10+",   label: "Proyectos digitales lanzados" },
      { value: "100%", label: "Autodidacta y curioso"        },
      { value: "∞",    label: "Ganas de aprender"            },
    ],
  },

  contact: {
    heading: "¿Tienes un proyecto o idea?",
    subheading: "Hablemos y veamos cómo puedo ayudarte.",
    cta: "Escribirme",
  },
};

export const { personal, social, skills, hobbies, about, contact } = data;
export default data;
