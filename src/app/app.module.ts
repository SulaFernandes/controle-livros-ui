import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Rotas
import { AppRoutingModule } from './app-routing.module';
//Componentes
import { AppComponent } from './app.component';
//import { LivrosPesquisaComponent } from './livros/livros-pesquisa/livros-pesquisa.component'; 
//import { NavbarComponent } from './core/navbar/navbar.component';
//import { LivrosCadastroComponent } from './livros/livros-cadastro/livros-cadastro.component';
//import { LoginFormComponent } from './seguranca/login-form/login-form.component';
import { HomeModule } from './home/home.module';
import { LivrosModule } from './livros/livros.module';
import { CoreModule } from './core/core.module';
import { SegurancaModule } from './seguranca/seguranca.module';


@NgModule({
  declarations: [
    AppComponent,
    //LivrosPesquisaComponent,
    //NavbarComponent,
    //LivrosCadastroComponent,
    //LoginFormComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    //ReactiveFormsModule,

    HomeModule,
    LivrosModule,
    CoreModule,
    SegurancaModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
