import type { Project } from './_types';

const p: Project = {
  slug: 'beninlifestyle',
  order: 6,
  period: '2026',
  stack: ['Godot 4', 'GDScript', 'OpenStreetMap', 'AI agents'],
  fr: {
    title: 'BeninLifeStyle',
    tagline: 'Un jeu en monde ouvert qui fait découvrir le Bénin.',
    role: 'Concepteur et développeur, pilotage d’agents IA',
    context: 'Projet personnel',
    status: 'En développement',
    problem: 'Le Bénin est presque absent du jeu vidéo. Le projet veut le montrer tel qu’il est : ses villes, ses marchés, ses routes et sa vie quotidienne.',
    built: [
      'Un monde ouvert sous Godot 4, pensé d’abord pour PC.',
      'Une organisation en sept agents IA spécialisés (monde, gameplay, contenu, tests, etc.) coordonnés par moi.',
      'Des lieux construits à partir de sources réelles : presse locale, OpenStreetMap, vidéos.',
    ],
    decisions: [
      'Chercher les faits plutôt que les inventer : la crédibilité culturelle passe avant tout.',
      'Un périmètre clair par agent pour éviter les conflits dans le code.',
    ],
    outcome: 'Prototype jouable en cours de construction.',
    ai: 'Le meilleur exemple de ma façon de diriger une équipe d’agents sur un projet long.',
  },
  en: {
    title: 'BeninLifeStyle',
    tagline: 'An open-world game that brings Benin to the screen.',
    role: 'Game designer and developer, AI agent orchestration',
    context: 'Personal project',
    status: 'In development',
    problem: 'Benin is almost absent from video games. This project shows it as it is: its cities, markets, roads and daily life.',
    built: [
      'An open world in Godot 4, PC first.',
      'Seven specialised AI agents (world, gameplay, content, testing and more), coordinated by me.',
      'Places built from real sources: local press, OpenStreetMap, videos.',
    ],
    decisions: [
      'Research facts instead of inventing them: cultural accuracy comes first.',
      'A clear scope per agent to avoid conflicts in the codebase.',
    ],
    outcome: 'Playable prototype under construction.',
    ai: 'My clearest example of leading a team of agents on a long-running project.',
  },
};
export default p;
