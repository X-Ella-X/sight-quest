export interface Sight {
  coordinates: string;
  id?: string;
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
