import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeFormComponent } from './home-form/home-form.component';

const routes: Routes = [
  { path: 'home', component: HomeFormComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
