import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosPesquisaComponent } from './livros-pesquisa/livros-pesquisa.component';
import { LivrosCadastroComponent } from './livros-cadastro/livros-cadastro.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { CheckboxModule } from 'primeng/checkbox';
import { LivrosRoutingModule } from './livros-routing.module';


@NgModule({
  declarations: [
    LivrosPesquisaComponent,
    LivrosCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    InputTextareaModule,
    FileUploadModule,
    HttpClientModule,
    CheckboxModule,

    LivrosRoutingModule
    
  ],
  exports: [
    LivrosPesquisaComponent,
    LivrosCadastroComponent
  ]
})
export class LivrosModule { }
