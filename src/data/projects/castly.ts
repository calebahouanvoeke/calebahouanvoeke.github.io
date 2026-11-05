import type { Project } from './_types';

const p: Project = {
  slug: 'castly',
  order: 1,
  domains: ['web', 'ai'],
  period: '2026',
  stack: ['Laravel', 'PHP', 'MySQL', 'Mistral API', 'Figma', 'alwaysdata'],
  live: 'https://castly.alwaysdata.net',
  video: { fr: '/video/castly-fr.mp4', en: '/video/castly-en.mp4' },
  images: [{ src: '/img/castly-home.png', alt: { fr: 'Écran de connexion de Castly en production', en: 'Castly sign-in screen in production' } }],
  fr: {
    title: 'Castly',
    tagline: 'Une idée, neuf formats de contenu, une seule plateforme.',
    role: 'Conception, design et développement full stack (projet individuel)',
    context: 'Master 1, Université Marie et Louis Pasteur',
    status: 'En ligne, en développement actif',
    problem: 'Les créateurs solo et les petites structures francophones publient sur beaucoup de canaux. Réécrire la même idée pour un blog, LinkedIn, X, Instagram ou une newsletter prend des heures, et les outils du marché visent surtout des équipes marketing anglophones.',
    built: [
      'Génération de publications sous neuf formats à partir d’une seule idée, via l’API Mistral.',
      'Calendrier éditorial, historique filtrable et circuit de validation avant publication.',
      'Profil de ton personnel pensé pour s’appuyer sur les contenus déjà validés.',
      'Maquettes Figma complètes et prototype cliquable avant la première ligne de code.',
      'Déploiement sur alwaysdata par SSH avec clé de déploiement dédiée.',
    ],
    decisions: [
      'Laravel et MySQL pour un modèle relationnel clair (huit tables) et un back-office rapide à faire évoluer.',
      'Se démarquer de Jasper ou Copy.ai par le ton personnel et le public francophone plutôt que par la quantité de modèles.',
      'Valider le parcours sur un prototype interactif avant de coder pour éviter de refaire les écrans.',
    ],
    outcome: 'Sujet validé par le professeur, plateforme en ligne depuis octobre 2026.',
    ai: 'L’IA m’a servi de sparring-partner pendant l’idéation et la conception. Le code de Castly est écrit par moi.',
  },
  en: {
    title: 'Castly',
    tagline: 'One idea, nine content formats, one platform.',
    role: 'Product design, UI and full-stack development (solo project)',
    context: 'Master’s project, Université Marie et Louis Pasteur',
    status: 'Live, in active development',
    problem: 'Solo creators and small French-speaking organisations publish on many channels. Rewriting the same idea for a blog, LinkedIn, X, Instagram or a newsletter takes hours, and existing tools mostly target English-speaking marketing teams.',
    built: [
      'Generates posts in nine formats from a single idea, using the Mistral API.',
      'Editorial calendar, filterable history and an approval flow before publishing.',
      'Personal tone profile designed to build on content the user has already approved.',
      'Complete Figma mockups and a clickable prototype before the first line of code.',
      'Deployed on alwaysdata over SSH with a dedicated deploy key.',
    ],
    decisions: [
      'Laravel and MySQL for a clear relational model (eight tables) and a back office that is quick to extend.',
      'Stand apart from Jasper or Copy.ai through personal tone and a French-speaking audience rather than a larger template library.',
      'Validate the user journey on an interactive prototype before coding, so screens are not rebuilt twice.',
    ],
    outcome: 'Topic approved by my professor, platform live since October 2026.',
    ai: 'AI was my sparring partner during ideation and design. The Castly codebase is written by me.',
  },
};
export default p;
