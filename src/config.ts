export const siteConfig = {
  name: "Viviendo Migransueño",
  title: "Viviendo Migransueño",
  description: "Consultoría y asesoría migratoria",
  url: "https://viviendomigransueno.com",

  contact: {
    email: "viviendo.mgsueno@gmail.com",
    phone: "+524611169054",
    phoneFormatted: "+52 (461) 116 9054",
    phoneDisplay: "461 116 9054",
    whatsapp: "524611169054",
    whatsappUrl: "https://wa.me/524611169054",
  },

  address: {
    street: "Calle Capiro #116",
    neighborhood: "Fracc. Xochipilli",
    colony: "Colonia Laureles 1ra sección",
    city: "Celaya",
    state: "México",
    postalCode: "38020",
    country: "México",
    fullAddress:
      "Calle Capiro #116, Fracc. Xochipilli, Colonia Laureles 1ra sección 38020 Celaya, México",
    coordinates: {
      latitude: 20.5351,
      longitude: -100.83131,
    },
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=20.5351%2C-100.83131",
  },

  businessHours: {
    days: "Lunes a Domingo",
    hours: "9:00 - 18:00 hrs",
    timezone: "America/Mexico_City",
  },

  social: {
    facebook: {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100052241268987",
      username: "@viviendomigransueno",
    },
    instagram: {
      name: "Instagram",
      url: "https://www.instagram.com/viviendo_migransueno/",
      username: "@viviendo_migransueno",
    },
    youtube: {
      name: "YouTube",
      url: "https://www.youtube.com/@viviendomigransueno1307",
      username: "@viviendomigransueno1307",
    },
    whatsapp: {
      name: "WhatsApp",
      url: "https://wa.me/524611169054",
      number: "524611169054",
    },
  },

  hashtags: {
    main: "#ViviendoMigransueño",
  },

  developer: {
    name: "Andrés Castillo",
    role: "Desarrollo",
  },

  api: {
    web3forms: "b633ab9f-5801-4fd8-bf1b-0daa5aff2433",
  },

  seo: {
    keywords: [
      "migración",
      "asesoría migratoria",
      "consultoría",
      "Celaya",
      "México",
    ],
    ogImage: "/images/logo.png",
    twitterHandle: "@viviendo_migransueno",
  },
} as const;

export type SiteConfig = typeof siteConfig;
