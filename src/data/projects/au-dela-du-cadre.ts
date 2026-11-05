import type { Project } from './_types';

const p: Project = {
  slug: 'au-dela-du-cadre',
  order: 5,
  period: '2026',
  stack: ['Unity', 'C#', 'VR', '3ds Max', 'Text-to-speech'],
  fr: {
    title: 'Au-delà du cadre',
    tagline: 'Entrer dans un tableau au casque de réalité virtuelle.',
    role: 'Chef de projet d’une équipe de trois étudiants',
    context: 'SAE de Master 1',
    status: 'En développement',
    problem: 'Au musée, on regarde une œuvre quelques secondes. Le projet propose de passer de l’autre côté du cadre et d’explorer l’univers de chaque œuvre en 3D.',
    built: [
      'Un monde 3D réaliste adapté de chaque œuvre, à commencer par une peinture conservée à Taipei.',
      'Des stations de visite guidées, avec une voix de narration générée.',
      'Modélisation sous 3ds Max, intégration et interactions sous Unity.',
    ],
    decisions: [
      'Un niveau de finition selon la distance au visiteur : détail complet à moins de 5 m, silhouette au-delà de 20 m.',
      'Finir entièrement un musée avant d’attaquer le suivant.',
      'Une planche d’images fixes validée avant chaque rendu vidéo long.',
    ],
    outcome: 'Premier musée en cours de finalisation.',
    ai: 'Projet conçu avec l’appui de l’IA pour le scénario, la recherche documentaire et le pilotage des rendus.',
  },
  en: {
    title: 'Beyond the Frame',
    tagline: 'Step inside a painting with a VR headset.',
    role: 'Project lead for a team of three students',
    context: 'Master’s group project',
    status: 'In development',
    problem: 'In a museum, people look at a painting for a few seconds. This project lets visitors step through the frame and explore each artwork as a 3D world.',
    built: [
      'A realistic 3D world adapted from each artwork, starting with a painting held in Taipei.',
      'Guided visit stations with a generated narration voice.',
      'Modelling in 3ds Max, integration and interactions in Unity.',
    ],
    decisions: [
      'Level of finish based on distance to the visitor: full detail under 5 m, silhouette beyond 20 m.',
      'Finish one museum completely before starting the next.',
      'A sheet of stills is approved before every long video render.',
    ],
    outcome: 'First museum being finalised.',
    ai: 'Designed with AI support for the script, documentary research and render management.',
  },
};
export default p;
