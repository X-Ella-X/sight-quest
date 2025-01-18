export interface Sight {
  coordinates: string;
  title: string;
  img: string;
  description: string;
  openingHours?: string;
  funFact?: string;
  themes?: string[];
  audio?: string;
  fav?: boolean;
  filters: string[];
  aestheticLocation?: boolean;
}
