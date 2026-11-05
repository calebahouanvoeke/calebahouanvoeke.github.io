// Données générales du portfolio : profil, textes d'interface, parcours, compétences.
// Pour mettre à jour le site, modifier ce fichier ou ajouter un fichier dans data/projects.

export type Lang = 'fr' | 'en';
export type T = { fr: string; en: string };

export const profile = {
  name: 'Caleb Ahouanvoeke',
  email: 'ahouanvoekeunieklo@gmail.com',
  phone: '+33 7 44 41 78 28',
  linkedin: 'https://www.linkedin.com/in/caleb-ahouanvoeke-09196713b',
  github: 'https://github.com/calebahouanvoeke',
  cv: { fr: '/cv/CV_Caleb_AHOUANVOEKE_FR.pdf', en: '/cv/CV_Caleb_AHOUANVOEKE_EN.pdf' },
};

export const ui = {
  fr: {
    htmlTitle: 'Caleb Ahouanvoeke, développeur full stack',
    description: "Portfolio de Caleb Ahouanvoeke : développeur full stack, Master 1 Technologies de l'Information. Projets, études de cas et méthode de travail avec l'IA.",
    nav: { work: 'Projets', ai: 'Méthode IA', path: 'Parcours', contact: 'Contact' },
    switchLabel: 'EN', switchTitle: 'Read in English',
    kicker: 'Développeur full stack · Master 1 Technologies de l’Information',
    hero: "Je construis des produits de bout en bout, de la base de données à l'interface, et je dirige des agents IA comme une équipe bien briefée.",
    statusLabel: 'Disponibilité',
    status: 'Alternance recherchée, rythme 1 mois école / 1 mois entreprise',
    based: 'Basé à', basedValue: 'Montbéliard, France',
    langs: 'Langues', langsValue: 'Français natif · Anglais B1',
    cvBtn: 'Télécharger le CV', workBtn: 'Voir les projets',
    routeTitle: 'Le chemin jusqu’ici',
    workTitle: 'Projets choisis',
    workIntro: "Chaque projet ouvre une étude de cas : le problème, ce que j'ai construit, les décisions techniques et une visite du produit.",
    open: 'Ouvrir l’étude de cas',
    alsoTitle: 'Aussi réalisés en Licence 3',
    aiTitle: 'Comment je travaille avec l’IA',
    aiIntro: "L'IA accélère mon travail, elle ne remplace pas mon jugement. Voici le protocole que j'applique sur chaque projet, avec des exemples réels.",
    proof: 'Sur le terrain',
    pathTitle: 'Parcours',
    skillsTitle: 'Compétences',
    contactTitle: 'Travaillons ensemble',
    contactIntro: "Je cherche une alternance en développement full stack ou IA. Réponse sous 24 h.",
    footer: 'Site conçu et développé par Caleb Ahouanvoeke avec Astro.',
    case: {
      back: 'Tous les projets', role: 'Rôle', period: 'Période', context: 'Contexte', stack: 'Stack', status: 'Statut',
      tour: 'Visite du projet', live: 'Ouvrir le site en ligne', video: 'Visite vidéo', repo: 'Code source',
      problem: 'Le problème', built: 'Ce que j’ai construit', decisions: 'Décisions clés', outcome: 'Résultat', ai: 'Avec l’IA',
      confidential: 'Projet confidentiel',
      confidentialText: "Projet de recherche dont l'accès public n'est pas autorisé. Les captures sont floutées et le code n'est pas publié.",
      next: 'Projet suivant',
    },
  },
  en: {
    htmlTitle: 'Caleb Ahouanvoeke, full-stack developer',
    description: "Portfolio of Caleb Ahouanvoeke: full-stack developer and Master's student in Information Technology. Projects, case studies and an AI-assisted way of working.",
    nav: { work: 'Work', ai: 'AI method', path: 'Background', contact: 'Contact' },
    switchLabel: 'FR', switchTitle: 'Lire en français',
    kicker: 'Full-stack developer · MSc student in Information Technology',
    hero: 'I build products end to end, from the database to the interface, and I run AI agents like a well-briefed team.',
    statusLabel: 'Availability',
    status: 'Open to a work-study contract (alternating months, France) and remote missions',
    based: 'Based in', basedValue: 'Montbéliard, France (CET)',
    langs: 'Languages', langsValue: 'French native · English B1',
    cvBtn: 'Download résumé', workBtn: 'See the work',
    routeTitle: 'The road so far',
    workTitle: 'Selected work',
    workIntro: 'Each project opens a case study: the problem, what I built, the technical decisions and a tour of the product.',
    open: 'Open case study',
    alsoTitle: 'Also built during my Bachelor',
    aiTitle: 'How I work with AI',
    aiIntro: 'AI speeds up my work, it does not replace my judgement. This is the protocol I follow on every project, with real examples.',
    proof: 'In practice',
    pathTitle: 'Background',
    skillsTitle: 'Skills',
    contactTitle: "Let's work together",
    contactIntro: 'I am looking for a full-stack or AI development role. I reply within 24 hours.',
    footer: 'Designed and built by Caleb Ahouanvoeke with Astro.',
    case: {
      back: 'All projects', role: 'Role', period: 'Period', context: 'Context', stack: 'Stack', status: 'Status',
      tour: 'Project tour', live: 'Open the live site', video: 'Video tour', repo: 'Source code',
      problem: 'The problem', built: 'What I built', decisions: 'Key decisions', outcome: 'Outcome', ai: 'With AI',
      confidential: 'Confidential project',
      confidentialText: 'Research project with no public access allowed. Screenshots are blurred and the code is not published.',
      next: 'Next project',
    },
  },
};

// Étapes du trajet affiché dans l'en-tête
export const route = [
  { year: '2019', place: 'Parakou', note: { fr: 'Licence pro SIG', en: 'BSc Management IS' } },
  { year: '2022', place: 'Cotonou', note: { fr: 'Ministère de l’Économie', en: 'Ministry of Economy' } },
  { year: '2025', place: 'Montbéliard', note: { fr: 'Licence 3 Informatique', en: 'BSc Computer Science' } },
  { year: '2026', place: 'FEMTO-ST', note: { fr: 'Master 1 · CNRS', en: 'MSc · CNRS lab' } },
];

// Protocole IA : uniquement des pratiques réellement appliquées
export const aiMethod: { title: T; text: T; proof: T }[] = [
  {
    title: { fr: 'Cadrer avant de générer', en: 'Frame before generating' },
    text: { fr: "J'écris le brief, les contraintes et le résultat attendu. L'IA explique sa logique avant d'exécuter, je valide ou je corrige.", en: 'I write the brief, the constraints and the expected result. The AI explains its plan before acting, and I approve or correct it.' },
    proof: { fr: 'Castly : des dizaines de sujets explorés et écartés avant la validation du professeur.', en: 'Castly: dozens of ideas explored and discarded before my professor approved the topic.' },
  },
  {
    title: { fr: 'Une équipe d’agents spécialisés', en: 'A team of specialised agents' },
    text: { fr: "Je découpe le travail en rôles (architecture, contenu, tests, revue) et je confie chaque rôle à un agent dédié, avec un périmètre clair.", en: 'I split the work into roles (architecture, content, testing, review) and give each role to a dedicated agent with a clear scope.' },
    proof: { fr: 'BeninLifeStyle : sept agents coordonnés pour un jeu en monde ouvert sous Godot 4.', en: 'BeninLifeStyle: seven coordinated agents for an open-world game in Godot 4.' },
  },
  {
    title: { fr: 'Vérifier chaque dépendance', en: 'Verify every dependency' },
    text: { fr: "Aucune bibliothèque n'entre dans un projet sans vérification dans la documentation officielle. Pas de paquet inutile.", en: 'No library enters a project until it is checked against the official documentation. No dead-weight packages.' },
    proof: { fr: 'Ce portfolio : une seule dépendance, Astro.', en: 'This portfolio: a single dependency, Astro.' },
  },
  {
    title: { fr: 'Une passe sécurité par module', en: 'A security pass per module' },
    text: { fr: "Après chaque module : relecture des entrées, des secrets et de l'authentification. Les failles sont signalées, jamais cachées.", en: 'After each module I review inputs, secrets and authentication. Issues are reported, never hidden.' },
    proof: { fr: 'Mu-CAR : stockage de mots de passe en clair repéré dans un service back-end et signalé à l’équipe.', en: 'Mu-CAR: plaintext password storage spotted in a backend service and reported to the team.' },
  },
  {
    title: { fr: 'Contrôler avant de livrer', en: 'Check before shipping' },
    text: { fr: "Je valide sur des preuves (captures, tests, planches de contrôle) avant toute étape coûteuse, et je garde la décision finale.", en: 'I validate on evidence (screenshots, tests, control sheets) before any costly step, and the final call stays mine.' },
    proof: { fr: 'Au-delà du cadre : planche d’images fixes validée avant chaque rendu vidéo long.', en: 'Beyond the Frame: a sheet of stills is approved before every long video render.' },
  },
];

export const experience: { role: T; org: string; place: T; period: T; points: T[] }[] = [
  {
    role: { fr: 'Stagiaire développeur full stack', en: 'Full-stack developer intern' },
    org: 'FEMTO-ST (CNRS), projet Mu-CAR',
    place: { fr: 'Montbéliard, France', en: 'Montbéliard, France' },
    period: { fr: 'Mai à juin 2026', en: 'May to June 2026' },
    points: [
      { fr: 'Version web d’une plateforme de covoiturage et de mobilité multimodale (Vue 3, TypeScript, Node.js, Docker).', en: 'Web version of a carpooling and multimodal mobility platform (Vue 3, TypeScript, Node.js, Docker).' },
      { fr: 'Stand Mu-CAR au festival INOUIH devant un public d’adultes et d’enfants.', en: 'Ran the Mu-CAR stand at the INOUIH festival for adults and children.' },
    ],
  },
  {
    role: { fr: 'Stagiaire développeur full stack et mobile', en: 'Full-stack and mobile developer intern' },
    org: 'Association Radio Amitié',
    place: { fr: 'Grand-Charmont, France', en: 'Grand-Charmont, France' },
    period: { fr: 'Mars à mai 2026', en: 'March to May 2026' },
    points: [
      { fr: 'Application mobile React Native avec streaming audio en direct, APK Android via EAS Build.', en: 'React Native app with live audio streaming, Android build through EAS Build.' },
    ],
  },
  {
    role: { fr: 'Stagiaire développeur full stack', en: 'Full-stack developer intern' },
    org: 'Ministère de l’Économie et des Finances',
    place: { fr: 'Cotonou, Bénin', en: 'Cotonou, Benin' },
    period: { fr: 'Sept. 2022 à juin 2023', en: 'Sept. 2022 to June 2023' },
    points: [
      { fr: 'API REST Spring Boot et interfaces Angular, Docker et PostgreSQL, équipe Agile avec revues de code.', en: 'Spring Boot REST APIs and Angular interfaces, Docker and PostgreSQL, Agile team with code reviews.' },
    ],
  },
];

export const education: { title: T; school: string; period: string }[] = [
  { title: { fr: 'Master 1 Technologies de l’Information, Produits et Services Multimédia', en: 'MSc (year 1) Information Technology, Multimedia Products and Services' }, school: 'Université Marie et Louis Pasteur', period: '2026 - 2027' },
  { title: { fr: 'Licence 3 Informatique, Produits et Services Multimédia', en: 'BSc (L3) Computer Science, Multimedia Products and Services' }, school: 'Université Marie et Louis Pasteur', period: '2025 - 2026' },
  { title: { fr: 'Licence professionnelle Systèmes d’Information de Gestion', en: 'Professional BSc Management Information Systems' }, school: 'Université de Parakou, Bénin', period: '2019 - 2022' },
];

export const skills: { group: T; items: string }[] = [
  { group: { fr: 'Back-end', en: 'Backend' }, items: 'PHP / Laravel, Node.js / Express, Java / Spring Boot, Python, API REST, Socket.IO' },
  { group: { fr: 'Front-end et mobile', en: 'Frontend and mobile' }, items: 'Vue.js, Angular, TypeScript, JavaScript, HTML / CSS, Tailwind CSS, React Native, Flutter' },
  { group: { fr: 'Données et déploiement', en: 'Data and deployment' }, items: 'MySQL, PostgreSQL, MongoDB, Docker, Docker Compose, nginx, GitHub Actions' },
  { group: { fr: 'IA', en: 'AI' }, items: 'Claude Code et agents, API LLM (Mistral), conception de prompts, revue de code assistée' },
  { group: { fr: 'Design, 3D et jeu', en: 'Design, 3D and games' }, items: 'Figma, Unity, 3ds Max, Godot 4, Ren’Py' },
  { group: { fr: 'Méthodes', en: 'Methods' }, items: 'Git, GitHub, Postman, Agile / Scrum, UML' },
];

export const alsoBuilt: { name: string; stack: string; text: T }[] = [
  { name: 'AideSync', stack: 'Node.js · PostgreSQL', text: { fr: 'Services à la personne : factures PDF, portail client sécurisé (bcrypt, Helmet, HTTPS).', en: 'Home-care services: PDF invoices, secure client portal (bcrypt, Helmet, HTTPS).' } },
  { name: 'Leave Manager', stack: 'Angular · Spring Boot', text: { fr: 'Gestion des congés : authentification, rôles, tableau de bord administrateur.', en: 'HR leave management: authentication, roles, admin dashboard.' } },
  { name: 'ShareMusic', stack: 'Node.js · WebSocket', text: { fr: 'Streaming musical collaboratif pair à pair, playlists partagées.', en: 'Collaborative peer-to-peer music streaming with shared playlists.' } },
];
