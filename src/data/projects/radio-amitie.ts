import type { Project } from './_types';

const p: Project = {
  slug: 'radio-amitie',
  order: 3,
  domains: ['mobile'],
  period: '2026',
  stack: ['React Native', 'Expo', 'TypeScript', 'expo-av', 'Icecast', 'Expo Router', 'Reanimated', 'EAS Build', 'Figma'],
  fr: {
    title: 'Radio Amitié',
    tagline: 'La radio associative du quartier, en direct dans la poche.',
    role: 'Développeur full stack et mobile',
    context: 'Stage, association Radio Amitié, Grand-Charmont',
    status: 'APK Android livré',
    problem: 'L’association diffusait en ligne mais n’avait pas d’application. Les auditeurs, souvent peu à l’aise avec la technologie, devaient passer par un lecteur web.',
    built: [
      'Application mobile cross-platform avec écoute en direct (expo-av, flux Icecast) et pochettes récupérées via l’API iTunes.',
      'Navigation Expo Router et animations Reanimated, avec une attention particulière à l’accessibilité.',
      'Génération de l’APK Android avec EAS Build.',
      'Plugin Figma en JavaScript qui génère automatiquement les frames des maquettes.',
    ],
    decisions: [
      'React Native avec Expo pour viser Android et iOS avec une seule base de code.',
      'De gros contrôles lisibles et un parcours en un geste pour lancer le direct.',
    ],
    outcome: 'Application installable sur Android remise à l’association.',
  },
  en: {
    title: 'Radio Amitié',
    tagline: 'A community radio station, live in your pocket.',
    role: 'Full-stack and mobile developer',
    context: 'Internship, Radio Amitié association, France',
    status: 'Android APK delivered',
    problem: 'The association streamed online but had no app. Listeners, often not comfortable with technology, had to go through a web player.',
    built: [
      'Cross-platform mobile app with live listening (expo-av, Icecast stream) and cover art from the iTunes API.',
      'Expo Router navigation and Reanimated animations, with a strong focus on accessibility.',
      'Android APK built with EAS Build.',
      'A JavaScript Figma plugin that generates mockup frames automatically.',
    ],
    decisions: [
      'React Native with Expo to target Android and iOS from one codebase.',
      'Large, readable controls and a one-tap path to the live stream.',
    ],
    outcome: 'Installable Android app handed over to the association.',
  },
};
export default p;
