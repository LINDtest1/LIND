import { Artist } from "../types/artist";

export const ARTISTS: Artist[] = [
  {
    id: "samuel-lind",
    name: "Samuel Lind",
    role: "Main Artist",
    fullRole: "Master Painter & Sculptor",
    bio: "For over five decades, Samuel Lind has been a central figure in Puerto Rico's art scene, specifically focusing on the deeply rooted African heritage of Loíza. His work captures the rhythmic soul, ancestral heritage, and vibrant culture of his hometown. Living and working in the same house where he was born, Lind's art is an organic extension of his environment, blending the mystical with the mundane through masterful paintings, intricate block prints, and imposing sculptures.",
    heroImage: "https://picsum.photos/seed/artist-samuel-hero/1920/1080",
    profileImage: "https://picsum.photos/seed/artist-samuel/800/1000",
    collections: [
      {
        title: "Ella Natura",
        description: "Exploring the deep connection between femininity, the organic environment, and the lush tropical flora of Puerto Rico.",
        image: "https://picsum.photos/seed/col-samuel-ellanatura/800/600"
      },
      {
        title: "Baile De Bomba",
        description: "Capturing the dynamic energy, rhythmic soul, and ancestral expressions of traditional Loíza bomba dances.",
        image: "https://picsum.photos/seed/col-samuel-bomba/800/600"
      },
      {
        title: "Culturales",
        description: "A profound look into the everyday lives, traditions, and syncretic heritage of the Afro-Caribbean community.",
        image: "https://picsum.photos/seed/col-samuel-culturales/800/600"
      },
      {
        title: "Marinas",
        description: "Coastal landscapes reflecting the serene, powerful, and ever-changing sea borders of the island.",
        image: "https://picsum.photos/seed/col-samuel-marinas/800/600"
      },
      {
        title: "Atmosferas del Palmar",
        description: "Atmospheric studies of the iconic palm groves in Medianía Alta, capturing the unique interplay of shadows and light.",
        image: "https://picsum.photos/seed/col-samuel-palmar/800/600"
      }
    ],
    projects: [
      {
        id: "vejigantes",
        title: "VEJIGANTES",
        description: "Road to Las fiestas tradicionales de Loiza.",
        image: "https://picsum.photos/seed/vejigantes-art/800/1200"
      },
      {
        id: "ancestros",
        title: "ANCESTROS",
        description: "Cultural Tarot Deck project.",
        image: "https://picsum.photos/seed/ancestros-tarot/800/1200"
      }
    ],
    studioLocation: "Paseo del Artista, Medianía Alta, Loíza, PR",
    studioDescription: "The studio is more than a workspace; it is a living museum. Surrounded by lush gardens and tropical greenery, visitors can experience the artist's process firsthand, from the initial sketches on local wood to the final strokes on canvas.",
    studioImage: "https://picsum.photos/seed/samuel-studio/1200/800"
  },
  {
    id: "lemuel-lind",
    name: "Lemuel Lind",
    role: "Director",
    fullRole: "Graphic Arts & Interactive Media Director",
    bio: "Lemuel Lind represents the next generation of the LIND artistic legacy. With a background in graphic design and interactive media, he bridges traditional culture with digital innovation. His focus is on shaping the studio's digital presence, branding, and interactive experiences, ensuring that the rich heritage of Loíza reaches a global, tech-forward audience without losing its soulful core.",
    heroImage: "https://picsum.photos/seed/artist-lemuel-hero/1920/1080",
    profileImage: "https://picsum.photos/seed/artist-lemuel/800/1000",
    collections: [
      {
        title: "V3J1GANT3",
        description: "A cyberpunk and neo-traditional fusion reimagining Loíza's ancestral vejigante masks through a digital, futuristic aesthetic.",
        image: "https://picsum.photos/seed/col-lemuel-vejigante/800/600"
      },
      {
        title: "CAMINANT3",
        description: "Visual explorations of the modern cultural nomad—moving through both physical and digital spaces while remaining deeply rooted in heritage.",
        image: "https://picsum.photos/seed/col-lemuel-caminante/800/600"
      },
      {
        title: "NGRO",
        description: "A brutalist and minimalist visual identity collection revolving around the ART + COFFEE + MVMNT philosophy.",
        image: "https://picsum.photos/seed/col-lemuel-ngro/800/600"
      }
    ],
    projects: [
      {
        id: "ngro",
        title: "NGRO",
        description: "Coffee + Art community hub.",
        image: "https://picsum.photos/seed/ngro-coffee/800/1200"
      },
      {
        id: "artisthub",
        title: "ARTIST HUB",
        description: "Digital ecosystem by LIND.",
        image: "https://picsum.photos/seed/artisthub-lind/800/1200"
      }
    ],
    studioLocation: "LIND Studios Digital Lab, Loíza, PR",
    studioDescription: "Lemuel's workspace is where antiquity meets the future. Using high-end digital tools, he archives and reimagines centuries of culture, creating a bridge for the new generation of creators.",
    studioImage: "https://picsum.photos/seed/lemuel-studio/1200/800"
  },
  {
    id: "samitto-lind",
    name: "Samuel 'Samitto' Lind",
    role: "Artist",
    fullRole: "Sculptor & Cultural Educator",
    bio: "Samiel, known as 'Samitto', continues the tradition of three-dimensional storytelling. His sculptures breathe life into the wood and clay of Loíza, preserving the ancestral forms for future generations.",
    heroImage: "https://picsum.photos/seed/artist-samitto-hero/1920/1080",
    profileImage: "https://picsum.photos/seed/artist-samitto/800/1000",
    collections: [
      {
        title: "Linea Abierta",
        description: "A profound collection pushing traditional contours into open-ended sculptural and visual interpretations.",
        image: "https://picsum.photos/seed/col-samitto-linea/800/600"
      },
      {
        title: "ODD",
        description: "An evocative project confronting conventional aesthetics with raw, unconventional, and deeply narrative pieces.",
        image: "https://picsum.photos/seed/col-samitto-odd/800/600"
      }
    ],
    projects: [],
    studioLocation: "LIND Studios, Loíza, PR",
    studioDescription: "In his studio, the raw materials of the earth are transformed into cultural icons.",
    studioImage: "https://picsum.photos/seed/samitto-studio/1200/800"
  }
];
