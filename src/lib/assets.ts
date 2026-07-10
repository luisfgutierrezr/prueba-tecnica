export const assets = {
  video: {
    hero: "/assets/ifb/video/miami%20city.mov",
  },
  images: {
    hero: {
      primera: "/assets/ifb/images/hero/primera.jpg",
      segunda: "/assets/ifb/images/hero/segunda.jpg",
      tercera: "/assets/ifb/images/hero/tercera.jpg",
    },
    hover: {
      primero: "/assets/ifb/images/hover/primero.jpg",
      segundo: "/assets/ifb/images/hover/segundo.jpg",
      tercero: "/assets/ifb/images/hover/tercero.jpg",
    },
    contact: "/assets/ifb/images/contact/contacto.jpg",
  },
  logos: {
    ifb: "/assets/ifb/logos/logoprueba-nob.png",
    fdic: "/assets/ifb/logos/fdic-logo.png",
    fdicDark: "/assets/ifb/logos/fdic-logo-negro.png",
    wavePattern: "/assets/ifb/logos/wave-pattern.png",
  },
  icons: {
    accessibility: "/assets/ifb/icons/accesib.png",
    linkedin: "/assets/ifb/icons/linkedin.png",
    instagram: "/assets/ifb/icons/ig.png",
    facebook: "/assets/ifb/icons/facebook.png",
  },
} as const;

export const heroCards = [
  {
    title: "Personal Banking",
    description:
      "Personalized solutions with real support — we're here to guide you, online or in person.",
    image: assets.images.hero.primera,
  },
  {
    title: "Business Banking",
    description:
      "Human connections inspire flexible solutions that grow with your business.",
    image: assets.images.hero.segunda,
  },
  {
    title: "International Banking",
    description:
      "International experts supporting your U.S. banking and lending needs always.",
    image: assets.images.hero.tercera,
  },
] as const;
