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
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'figures',
    component: FiguresComponent,
  },
  {
    path: 'plushies',
    component: PlushiesComponent
  },
  {
    path: 'clothes',
    component: ClothesComponent
  },
  {
    path: ':category/:id',
    component: ProductDetailsComponent,
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  { path: '**', pathMatch: 'full',
    component: ErrorComponent
  }
];
