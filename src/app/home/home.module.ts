import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFormComponent } from '../home/home-form/home-form.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    HomeFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
