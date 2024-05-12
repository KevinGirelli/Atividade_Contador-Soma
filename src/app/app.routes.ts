import { Routes } from '@angular/router';
import { SomaComponent } from './components/soma/soma.component';
import { ContaLetraComponent } from './components/conta-letra/conta-letra.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "letra",
    component: ContaLetraComponent
  },

  {
    path: "soma",
    component: SomaComponent
  }
];
