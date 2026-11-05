import type { Project } from './_types';

const p: Project = {
  slug: 'jarvis',
  order: 7,
  period: '2026',
  stack: ['Flutter', 'Dart', 'Android', 'Speech recognition'],
  fr: {
    title: 'Jarvis',
    tagline: 'Un assistant vocal Android, pensé comme un majordome.',
    role: 'Conception et développement',
    context: 'Projet personnel',
    status: 'Prototype en cours',
    problem: 'Les assistants vocaux grand public sont fermés et peu personnalisables. Jarvis explore un assistant que l’on contrôle entièrement.',
    built: [
      'Architecture Flutter pour Android : écoute, compréhension de la commande, réponse vocale.',
      'Structure prévue pour brancher de nouvelles actions sans toucher au cœur de l’application.',
    ],
    decisions: ['Flutter pour garder une porte ouverte vers iOS plus tard.'],
    outcome: 'Base du projet posée, première version compilée à venir.',
  },
  en: {
    title: 'Jarvis',
    tagline: 'An Android voice assistant, designed like a butler.',
    role: 'Design and development',
    context: 'Personal project',
    status: 'Prototype in progress',
    problem: 'Mainstream voice assistants are closed and hard to customise. Jarvis explores an assistant you fully control.',
    built: [
      'Flutter architecture for Android: listening, command understanding, spoken reply.',
      'Structure designed to plug in new actions without touching the app core.',
    ],
    decisions: ['Flutter to keep iOS open for later.'],
    outcome: 'Project foundations in place, first compiled build coming next.',
  },
};
export default p;
