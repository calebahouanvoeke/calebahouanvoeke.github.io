# Portfolio de Caleb Ahouanvoeke

Site bilingue FR/EN construit avec Astro, publié sur GitHub Pages.

## Mettre à jour le contenu

- **Ajouter un projet** : copier un fichier de `src/data/projects/` (par exemple `jarvis.ts`), changer `slug`, `order` et `domains`, remplir les textes `fr` et `en`. La liste, la version mobile et l’étude de cas se créent toutes seules. Pour le placer sur le plan du réseau (bureau), ajouter ses coordonnées dans `stations` en haut de `src/components/TransitMap.astro`.
- **Ajouter une vidéo de visite** : déposer le fichier dans `public/video/` puis mettre `video: '/video/nom.mp4'` dans le projet. Un lien YouTube au format embed marche aussi.
- **Ajouter des captures** : déposer l'image dans `public/img/` puis l'ajouter dans `images` du projet. Pour un projet `confidential: true`, les captures sont floutées automatiquement.
- **Profil, parcours, compétences, méthode IA** : `src/data/site.ts`.
- **CV** : remplacer les PDF dans `public/cv/` en gardant les mêmes noms.

## Commandes

```bash
npm install
npm run dev      # aperçu local sur http://localhost:4321
npm run build    # génère le site dans dist/
```

## Publication

Chaque `git push` sur `main` publie le site via `.github/workflows/deploy.yml`.
Dans le dépôt GitHub : Settings > Pages > Source : **GitHub Actions**.
