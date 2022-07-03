import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LivrosPesquisaComponent } from './livros-pesquisa/livros-pesquisa.component';
import { LivrosCadastroComponent } from './livros-cadastro/livros-cadastro.component';



const routes: Routes = [
  {
    path: '',
    component: LivrosPesquisaComponent,
  },
  {
    path: 'novo',
    component: LivrosCadastroComponent,
  },
  {
    path: ':codigo',
    component: LivrosCadastroComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }
