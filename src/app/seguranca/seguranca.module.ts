import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { SegurancaRoutingModule } from './seguranca-routing.module';

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    CheckboxModule, 
    ButtonModule,
    SegurancaRoutingModule
  ]
})
export class SegurancaModule { }
