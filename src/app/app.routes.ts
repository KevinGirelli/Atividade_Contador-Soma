import { Routes } from '@angular/router';
import { SomaComponent } from './components/soma/soma.component';
import { ContaLetraComponent } from './components/conta-letra/conta-letra.component';

export const routes: Routes = [
  {
    path: "letra",
    component: ContaLetraComponent
  },

  {
    path: "soma",
    component: SomaComponent
  }
];
