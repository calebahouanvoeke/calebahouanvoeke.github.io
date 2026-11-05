// Modèle d'un projet. Pour ajouter un projet : copier un fichier existant de ce dossier,
// changer le slug et l'ordre, remplir les textes fr et en. Le site le prend en compte tout seul.

export type ProjectText = {
  title: string;
  tagline: string;
  role: string;
  context: string;
  status: string;
  problem: string;
  built: string[];
  decisions: string[];
  outcome: string;
  ai?: string;
};

export type Project = {
  slug: string;
  order: number;
  period: string;
  stack: string[];
  confidential?: boolean;
  live?: string;   // lien vers la version en ligne
  video?: string;  // chemin d'une vidéo dans public/ (ex. /video/castly.mp4) ou lien YouTube embed
  repo?: string;
  images?: { src: string; alt: { fr: string; en: string } }[];
  fr: ProjectText;
  en: ProjectText;
};
