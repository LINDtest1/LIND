import { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    id: "vejigantes",
    title: "VEJIGANTES",
    subtitle: "THE ROAD TO LOÍZA",
    tagline: 'Road to "Las fiestas tradicionales de Loiza"',
    description: "Vejigantes: The Road to Loíza’s Festival follows Samuel Lind and Lemuel Lind as they prepare new silkscreen and digital art inspired by Las Fiestas de Loíza, sharing the creative process behind the work and the cultural energy that brings it to life.",
    image: "https://picsum.photos/seed/arch-vejigantes/1920/1080",
    seed: "vejigantes-art",
    overview: "This project aims to document and celebrate the iconic Vejigante mask-making and performance traditions of Loíza. We are developing a series of high-end silkscreen prints that blend traditional techniques with modern digital enhancement.",
    challenges: [
      "Preserving the authenticity of traditional mask designs while introducing modern artistic interpretations.",
      "Navigating the logistical complexities of documenting preparations during the busy festival season.",
      "Achieving the perfect balance between high-fidelity digital art and the organic feel of manual silkscreening."
    ],
    outcomes: [
      "A limited edition series of 12 original silkscreen prints.",
      "A documentary mini-series following the road to the festival.",
      "An interactive digital gallery showcasing the cultural significance of each mask design."
    ],
    gallery: [
      "https://picsum.photos/seed/v1/800/600",
      "https://picsum.photos/seed/v2/800/600",
      "https://picsum.photos/seed/v3/800/600",
      "https://picsum.photos/seed/v4/800/600"
    ],
    timeline: [
      { date: "March 2026", event: "Concept & Research Phase", completed: true },
      { date: "April 2026", event: "Initial Sketches & Digital Prototypes", completed: true },
      { date: "May 2026", event: "Silkscreen Preparation & Testing", completed: false },
      { date: "June 2026", event: "Festival Documentation Begins", completed: false },
      { date: "July 2026", event: "Exhibition Launch & Print Drop", completed: false }
    ],
    stats: [
      { value: "ep.001", label: "vBlog" },
      { value: "35%", label: "Project Completion" },
      { value: "JULY 1", label: "Launch" }
    ]
  },
  {
    id: "ngro",
    title: "NGRO",
    subtitle: "ART+COFFEE+MVMNT",
    tagline: "Coffee + Art",
    description: "NGRO is a coffee, art, and culture project in Loíza created to bring people together through creativity, community, and Puerto Rican identity. It is designed as a modern cultural space where visitors can enjoy coffee, experience art, and connect with the legacy of Samuel Lind and LIND Studios.",
    image: "https://picsum.photos/seed/arch-hero/1920/1080",
    seed: "ngro-coffee",
    overview: "NGRO aims to create a physical hub for artistic expression and community building. By combining a specialty coffee bar with a rotating gallery space, we provide a unique environment for cultural exchange.",
    challenges: [
      "Designing a space that functions efficiently both as a high-volume coffee shop and a quiet gallery.",
      "Sourcing specialty beans that match our commitment to local Puerto Rican sustainable agriculture.",
      "Building a community-focused brand that resonates with both locals and international visitors."
    ],
    outcomes: [
      "Fully operational flagship location in the heart of Loíza.",
      "Curated rotating art exhibition featuring local upcoming artists.",
      "Sustainable supply chain for locally roasted specialty coffee."
    ],
    gallery: [
      "https://picsum.photos/seed/n1/800/600",
      "https://picsum.photos/seed/n2/800/600",
      "https://picsum.photos/seed/n3/800/600",
      "https://picsum.photos/seed/n4/800/600"
    ],
    timeline: [
      { date: "January 2026", event: "Site Acquisition & Permits", completed: true },
      { date: "February 2026", event: "Interior Design & Branding", completed: true },
      { date: "March 2026", event: "Construction & Renovation", completed: true },
      { date: "June 2026", event: "Staff Training & Barista Camp", completed: false },
      { date: "July 20, 2026", event: "Soft Opening", completed: false }
    ],
    stats: [
      { value: "10+", label: "Backers" },
      { value: "65%", label: "Project Completion" },
      { value: "20/JULY/26", label: "Soft Opening" }
    ]
  },
  {
    id: "ancestros",
    title: "ANCESTROS",
    subtitle: "CULTURAL TAROT DECK",
    tagline: "Tarot Cards",
    description: "Ancestros: Cultural Tarot Deck is a project by Samuel Lind and Lemuel Lind that reimagines tarot through Puerto Rican and Afro-Caribbean culture, blending ancestral symbolism, original artwork, and storytelling into a unique collector’s deck.",
    image: "https://picsum.photos/seed/arch-ancestros/1920/1080",
    seed: "ancestros-tarot",
    overview: "We are reimagining the traditional tarot narrative through the lens of Caribbean spirituality and Loíza's rich aesthetic history. Every card is an original artwork reflecting a specific cultural archetype.",
    challenges: [
      "Translating complex spiritual symbols into visual language that remains respectful to tradition.",
      "Finding high-quality production partners who can handle metallic foiling and premium paper stocks.",
      "Writing a comprehensive guidebook that bridges historical context with symbolic interpretation."
    ],
    outcomes: [
      "A complete 78-card professional tarot deck with premium finish.",
      "A 200-page historical and symbolic guidebook in both Spanish and English.",
      "A collector's edition box set including a silk ritual cloth."
    ],
    gallery: [
      "https://picsum.photos/seed/a1/800/600",
      "https://picsum.photos/seed/a2/800/600",
      "https://picsum.photos/seed/a3/800/600",
      "https://picsum.photos/seed/a4/800/600"
    ],
    timeline: [
      { date: "October 2025", event: "Symbolic Mapping & Research", completed: true },
      { date: "January 2026", event: "Major Arcana Artwork Begins", completed: true },
      { date: "May 2026", event: "Minor Arcana Drafts", completed: false },
      { date: "September 2026", event: "Crowdfunding Campaign", completed: false },
      { date: "Early 2027", event: "Fulfillment & Distribution", completed: false }
    ],
    stats: [
      { value: "20+", label: "Backers" },
      { value: "25%", label: "Project Completion" },
      { value: "2027", label: "Launch" }
    ]
  },
  {
    id: "artisthub",
    title: "ARTIST HUB",
    subtitle: "DIGITAL COMMUNITY",
    tagline: "by LIND",
    description: "The Artist Hub by LIND is a digital ecosystem designed to connect creators, collectors, and cultural enthusiasts. It focuses on elevating Puerto Rican artistry through innovative technology and community-driven initiatives.",
    image: "https://picsum.photos/seed/arch-hub/1920/1080",
    seed: "artisthub-lind",
    overview: "The Artist Hub acts as a digital bridge between traditional art and modern collector communities. It includes an interactive marketplace, a membership portal, and a digital archive of cultural assets.",
    challenges: [
      "Designing an intuitive user experience for traditional art collectors who may be new to digital platforms.",
      "Implementing secure ownership verification for high-value physical and digital art pieces.",
      "Fostering a sense of global community while remaining deeply rooted in the local Loíza scene."
    ],
    outcomes: [
      "A global platform with users from over 15 countries.",
      "Verified certification system for all artwork sold via LIND Studios.",
      "Weekly interactive live streams and masterclasses from the studio."
    ],
    gallery: [
      "https://picsum.photos/seed/h1/800/600",
      "https://picsum.photos/seed/h2/800/600",
      "https://picsum.photos/seed/h3/800/600",
      "https://picsum.photos/seed/h4/800/600"
    ],
    timeline: [
      { date: "December 2025", event: "Architecture & User Stories", completed: true },
      { date: "February 2026", event: "MVP Development & Beta Testing", completed: true },
      { date: "April 2026", event: "Community Portal Beta", completed: true },
      { date: "June 2026", event: "Official Global Rollout", completed: false },
      { date: "August 2026", event: "Interactive Mobile App Launch", completed: false }
    ],
    stats: [
      { value: "50+", label: "Creators" },
      { value: "80%", label: "Platfrom Beta" },
      { value: "LIVE", label: "Beta Access" }
    ]
  }
];
