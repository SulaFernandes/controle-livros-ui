import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuItems = [
    
    {
      label: 'Pesquisar',
      icon: 'pi pi-fw pi-search',
      items: [
        {label: 'Livros', icon: 'pi pi-fw pi-list'},
        {label: 'Categorias', icon: 'pi pi-fw pi-list'}
      ]
  },
  {
      label: 'Cadastrar',
      icon: 'pi pi-fw pi-plus',
      items: [
          {label: 'Livros', icon: 'pi pi-fw pi-pencil'},
          {label: 'Categorias', icon: 'pi pi-fw pi-pencil'}
      ]
  }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
