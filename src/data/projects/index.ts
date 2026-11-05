import type { Project } from './_types';

// Récupère automatiquement tous les fichiers projet du dossier, triés par "order"
const modules = import.meta.glob<{ default: Project }>(['./*.ts', '!./index.ts', '!./_types.ts'], { eager: true });
export const projects: Project[] = Object.values(modules)
  .map((m) => m.default)
  .sort((a, b) => a.order - b.order);
export type { Project };
