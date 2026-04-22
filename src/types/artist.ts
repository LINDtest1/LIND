export interface Artist {
  id: string;
  name: string;
  role: string;
  fullRole: string;
  bio: string;
  heroImage: string;
  profileImage: string;
  collections: {
    title: string;
    description: string;
    image: string;
  }[];
  projects: {
    id: string;
    title: string;
    description: string;
    image: string;
  }[];
  studioLocation: string;
  studioDescription: string;
  studioImage: string;
}
