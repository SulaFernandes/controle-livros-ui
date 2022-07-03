import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFormComponent } from './home/home-form/home-form.component';
import { LivrosCadastroComponent } from './livros/livros-cadastro/livros-cadastro.component';
import { LivrosPesquisaComponent } from './livros/livros-pesquisa/livros-pesquisa.component';
import { LoginFormComponent } from './seguranca/login-form/login-form.component';

const routes: Routes = [
  //{ path: 'login', component: LoginFormComponent },
  { path: '', loadChildren: () => import('../app/seguranca/seguranca.module').then(mod => mod.SegurancaModule) },
  { path: '', loadChildren: () => import('../app/home/home.module').then(mod => mod.HomeModule) },
  { path: 'livros', loadChildren: () => import('../app/livros/livros.module').then(mod => mod.LivrosModule) },
  { path: 'livros/', loadChildren: () => import('../app/livros/livros.module').then(mod => mod.LivrosModule) },
  /*{ path: 'livros', component: LivrosPesquisaComponent },
  { path: 'livros/novo', component: LivrosCadastroComponent },
  { path: 'livros/:codigo', component: LivrosCadastroComponent },*/
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
