import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'structure', loadComponent: () => import('./pages/structure/structure.component').then(m => m.StructureComponent) },
  { path: 'laboratories', loadComponent: () => import('./pages/laboratories/laboratories.component').then(m => m.LaboratoriesComponent) },
  { path: 'lab-flora', loadComponent: () => import('./pages/lab-flora/lab-flora.component').then(m => m.LabFloraComponent) },
  { path: 'lab-geobotany', loadComponent: () => import('./pages/lab-geobotany/lab-geobotany.component').then(m => m.LabGeobotanyComponent) },
  { path: 'lab-molecular', loadComponent: () => import('./pages/lab-molecular/lab-molecular.component').then(m => m.LabMolecularComponent) },
  { path: 'lab-phytochemistry', loadComponent: () => import('./pages/lab-phytochemistry/lab-phytochemistry.component').then(m => m.LabPhytochemistryComponent) },
  { path: 'lab-ecology', loadComponent: () => import('./pages/lab-ecology/lab-ecology.component').then(m => m.LabEcologyComponent) },
  { path: 'lab-resources', loadComponent: () => import('./pages/lab-resources/lab-resources.component').then(m => m.LabResourcesComponent) },
  { path: 'research', loadComponent: () => import('./pages/research/research.component').then(m => m.ResearchComponent) },
  { path: 'projects', loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent) },
  { path: 'contacts', loadComponent: () => import('./pages/contacts/contacts.component').then(m => m.ContactsComponent) },
  { path: 'news', loadComponent: () => import('./pages/news/news.component').then(m => m.NewsComponent) },
  { path: '**', redirectTo: '' }
];
