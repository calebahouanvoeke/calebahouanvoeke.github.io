import type { Project } from './_types';

const p: Project = {
  slug: 'mu-car',
  order: 2,
  domains: ['web', 'ai'],
  period: '2026',
  confidential: true,
  stack: ['Vue 3', 'TypeScript', 'Leaflet', 'OSRM', 'Node.js', 'Express', 'Socket.IO', 'FastAPI', 'MongoDB', 'Docker Compose', 'nginx', 'Mistral API'],
  fr: {
    title: 'Mu-CAR',
    tagline: 'Covoiturage et mobilité multimodale pour un territoire peu desservi.',
    role: 'Développeur full stack, version web',
    context: 'Stage au laboratoire FEMTO-ST (CNRS), Montbéliard',
    status: 'Projet de recherche, accès restreint',
    problem: 'Dans les zones périurbaines, bus, train, covoiturage, parking-relais et vélo existent mais ne se parlent pas. L’usager doit jongler entre plusieurs applications pour un seul trajet.',
    built: [
      'Carte multimodale interactive (Leaflet, OpenStreetMap, OSRM) réunissant bus, train, covoiturage, parking-relais et vélo.',
      'Nova, un assistant de planification en langage naturel (API Mistral) qui mène un vrai dialogue : destination, départ, horaire, rôle, puis récapitulatif.',
      'Suivi de trajet en temps réel par WebSocket à travers un BFF Node.js / Express.',
      'Intégration des API FastAPI de matching covoiturage et des données de transport GTFS.',
      'Tableaux de bord conducteur et passager, validation des demandes, notation, bilan CO2.',
      'Conteneurisation complète avec Docker Compose et nginx en reverse proxy.',
    ],
    decisions: [
      'Un BFF Node.js pour unifier plusieurs services Python et le temps réel derrière une seule API côté front.',
      'Un module de calcul d’horaires partagé entre le front et le BFF, couvert par un test de cohérence, pour que la carte, l’itinéraire et le tableau de bord affichent les mêmes temps.',
      'Un dialogue tour par tour pour Nova au lieu d’une analyse en une passe, avec une question de choix quand un lieu est ambigu.',
      'Correction d’une course au démarrage des conteneurs qui laissait un index GTFS partiel en cache toute la journée.',
    ],
    outcome: 'Démonstration publique sur le stand Mu-CAR du festival INOUIH (mai 2026) devant des adultes et des enfants.',
    ai: 'Ma passe sécurité systématique a repéré un service back-end qui stockait les mots de passe en clair. Je l’ai signalé à l’équipe.',
  },
  en: {
    title: 'Mu-CAR',
    tagline: 'Carpooling and multimodal mobility for an underserved area.',
    role: 'Full-stack developer, web version',
    context: 'Internship at the FEMTO-ST research lab (CNRS), France',
    status: 'Research project, restricted access',
    problem: 'In suburban and rural areas, buses, trains, carpooling, park-and-ride and bikes all exist but do not talk to each other. People juggle several apps for a single trip.',
    built: [
      'Interactive multimodal map (Leaflet, OpenStreetMap, OSRM) bringing together bus, train, carpooling, park-and-ride and bike.',
      'Nova, a natural-language trip planner (Mistral API) that holds a real conversation: destination, origin, time, role, then a summary.',
      'Real-time trip tracking over WebSocket through a Node.js / Express BFF.',
      'Integration of FastAPI carpool-matching services and GTFS transport data.',
      'Driver and passenger dashboards, request approval, driver rating, CO2 report.',
      'Fully containerised with Docker Compose and nginx as a reverse proxy.',
    ],
    decisions: [
      'A Node.js BFF to put several Python services and the real-time layer behind a single API for the front end.',
      'A shared schedule module between front end and BFF, covered by a consistency test, so the map, the itinerary and the dashboard always show the same times.',
      'A turn-by-turn dialogue for Nova instead of one-shot parsing, with a choice question when a place name is ambiguous.',
      'Fixed a container start-up race that left a partial GTFS index cached for the whole day.',
    ],
    outcome: 'Public demo on the Mu-CAR stand at the INOUIH festival (May 2026) for adults and children.',
    ai: 'My routine security pass found a backend service storing passwords in plain text. I reported it to the team.',
  },
};
export default p;
