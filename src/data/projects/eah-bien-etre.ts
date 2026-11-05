import type { Project } from './_types';

const p: Project = {
  slug: 'eah-bien-etre',
  order: 4,
  period: '2026',
  stack: ['WordPress', 'X', 'Facebook', 'Editorial', 'Video'],
  live: 'https://eah-bienetre.org/',
  fr: {
    title: 'EAH Bien-être',
    tagline: 'Site web et présence digitale d’une ONG.',
    role: 'Gestion digitale et gestion du site web',
    context: 'ONG EAH Bien-être, mission en cours',
    status: 'En cours',
    problem: 'Une ONG a besoin d’une présence en ligne régulière et crédible, sans équipe communication dédiée.',
    built: [
      'Publication et mise en forme d’articles et de vidéos sur le site WordPress (catégories, médias, illustrations).',
      'Campagne de visuels publiée par lots sur X et Facebook, avec engagement sur chaque publication.',
      'Contrôle des doublons avant chaque publication et relais de chaque article sur les réseaux.',
    ],
    decisions: [
      'Publier par petits lots plutôt qu’en masse, pour garder une cadence régulière.',
      'Validation explicite avant toute mise en ligne d’article : rien ne part sans accord.',
    ],
    outcome: 'Vingt visuels et quatre articles publiés entre septembre et octobre 2026.',
    ai: 'Rédaction et mise en page accélérées avec l’IA, publication toujours soumise à validation humaine.',
  },
  en: {
    title: 'EAH Bien-être',
    tagline: 'Website and digital presence for an NGO.',
    role: 'Digital and website manager',
    context: 'EAH Bien-être NGO, ongoing',
    status: 'Ongoing',
    problem: 'An NGO needs a regular, credible online presence without a dedicated communications team.',
    built: [
      'Publishing and formatting articles and videos on the WordPress site (categories, media, illustrations).',
      'A visual campaign published in batches on X and Facebook, with engagement on every post.',
      'Duplicate checks before each post, and every article shared on social media.',
    ],
    decisions: [
      'Publish in small batches rather than all at once, to keep a steady rhythm.',
      'Explicit approval before any article goes live: nothing ships without sign-off.',
    ],
    outcome: 'Twenty visuals and four articles published between September and October 2026.',
    ai: 'Writing and layout sped up with AI, publishing always subject to human approval.',
  },
};
export default p;
