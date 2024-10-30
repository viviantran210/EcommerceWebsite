import { Routes } from '@angular/router';

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
    path: 'cart',
    loadComponent: () => import('./components/cart/cart.component').then(m => m.CartComponent)
  },
  {
    path: 'checkout',
    loadComponent: () => import('./components/checkout/checkout.component').then(m => m.CheckoutComponent)
  },
  {
    path: 'all',
    loadComponent: () => import('./components/categories/all/all.component').then(m => m.AllComponent)
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
    path: 'search',
    loadComponent: () => import('./components/search/search.component').then(m => m.SearchComponent)
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '**',
    loadComponent: () => import('./components/error/error.component').then(m => m.ErrorComponent)
  }
];
