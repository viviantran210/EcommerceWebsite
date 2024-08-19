import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FiguresComponent } from './components/categories/figures/figures.component';
import { PlushiesComponent } from './components/categories/plushies/plushies.component';
import { ClothesComponent } from './components/categories/clothes/clothes.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component'
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'figures',
    loadComponent: () => import('./components/categories/figures/figures.component').then(m => m.FiguresComponent)
  },
  {
    path: 'plushies',
    loadComponent: () => import('./components/categories/plushies/plushies.component').then(m => m.PlushiesComponent)
  },
  {
    path: 'clothes',
    loadComponent: () => import('./components/categories/clothes/clothes.component').then(m => m.ClothesComponent)
  },
  {
    path: ':category/:id',
    loadComponent: () => import('./components/product-details/product-details.component').then(m => m.ProductDetailsComponent)
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '**',
    loadComponent: () => import('./components/error/error.component').then(m => m.ErrorComponent)
  }
];
