// Préfixe les chemins avec la base du site (utile si le dépôt GitHub change de nom)
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (path: string) => `${base}${path}`;

export const caseUrl = (lang: 'fr' | 'en', slug: string) =>
  lang === 'fr' ? u(`/projets/${slug}/`) : u(`/en/projects/${slug}/`);
