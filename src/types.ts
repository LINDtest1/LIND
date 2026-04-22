export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  image: string;
  seed: string;
  overview: string;
  challenges: string[];
  outcomes: string[];
  gallery: string[];
  timeline: {
    date: string;
    event: string;
    completed: boolean;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
}
