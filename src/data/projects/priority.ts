import type { Project } from './_types';

const p: Project = {
  slug: 'priority',
  order: 8,
  domains: ['game'],
  period: '2026',
  stack: ['Python', 'Ren’Py', 'Narrative design'],
  video: { fr: '/video/priority-fr.mp4', en: '/video/priority-en.mp4' },
  images: [
    { src: '/img/priority-title.png', alt: { fr: 'Écran titre de Priority', en: 'Priority title screen' } },
    { src: '/img/priority-values.png', alt: { fr: 'Classement des sept valeurs', en: 'Ranking the seven values' } },
    { src: '/img/priority-dilemma.jpg', alt: { fr: 'Premier dilemme et ses six réponses', en: 'First dilemma and its six answers' } },
  ],
  fr: {
    title: 'Priority',
    tagline: 'Un jeu narratif où vos actes contredisent parfois vos valeurs.',
    role: 'Scénario et développement',
    context: 'Cours de scénarisation, Master 1',
    status: 'Terminé',
    problem: 'On croit savoir ce qui compte pour nous. Priority met le joueur face à des dilemmes et compare ses choix à ce qu’il dit valoriser.',
    built: [
      'Dilemmes à choix multiples et jauges cachées qui évoluent selon les décisions.',
      'Un bilan final qui compare les valeurs déclarées aux actes réels.',
      'Versions Windows et navigateur.',
    ],
    decisions: ['Garder les jauges invisibles pour que le joueur choisisse sans calculer.'],
    outcome: 'Jeu livré en versions Windows et web.',
  },
  en: {
    title: 'Priority',
    tagline: 'A narrative game where your actions sometimes betray your values.',
    role: 'Writing and development',
    context: 'Narrative design course, Master’s',
    status: 'Completed',
    problem: 'We think we know what matters to us. Priority puts the player through dilemmas and compares their choices with what they say they value.',
    built: [
      'Multiple-choice dilemmas and hidden gauges that shift with each decision.',
      'A final report comparing stated values with actual choices.',
      'Windows and browser builds.',
    ],
    decisions: ['Keep the gauges hidden so players choose without calculating.'],
    outcome: 'Game shipped for Windows and the web.',
  },
};
export default p;
