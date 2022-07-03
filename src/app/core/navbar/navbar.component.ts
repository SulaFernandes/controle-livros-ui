import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuItems = [
    {
      label: 'Login',
      icon: 'pi pi-fw pi-home',
      routerLink: '/login'
    },
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      routerLink: '/home'
    },
    {
      label: 'Pesquisar',
      icon: 'pi pi-fw pi-search',
      items: [
        {label: 'Livros', icon: 'pi pi-fw pi-list', routerLink: '/livros'}
      ]
  },
  {
    label: 'Cadastrar',
    icon: 'pi pi-fw pi-plus',
    items: [
        {label: 'Livros', icon: 'pi pi-fw pi-pencil', routerLink: '/cadastrar'}
    ]
  }

  ];

  constructor( 
    private router: Router
    ) { }

  ngOnInit(): void {
  }

}
