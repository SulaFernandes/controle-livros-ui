import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Rotas
import { AppRoutingModule } from './app-routing.module';
//Componentes
import { AppComponent } from './app.component';
import { LivrosPesquisaComponent } from './livros-pesquisa/livros-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';

//PRIMENG
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    LivrosPesquisaComponent,
    NavbarComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    MenubarModule,
    CardModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
