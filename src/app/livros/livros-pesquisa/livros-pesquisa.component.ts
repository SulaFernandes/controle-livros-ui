import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livros-pesquisa',
  templateUrl: './livros-pesquisa.component.html',
  styleUrls: ['./livros-pesquisa.component.scss']
})
export class LivrosPesquisaComponent implements OnInit {

  livros = [

    { titulo: 'O Ladrão de Raios', imagem: '', autor: 'RICK RIORDAN', volume: '1', qtdPaginas: '351', categoria: 'Aventura', stleitura: 'Leitura concluida' },
    { titulo: 'O Mar de Monstros', imagem: '', autor: 'RICK RIORDAN', volume: '2', qtdPaginas: '351', categoria: 'Aventura', stleitura: 'Leitura concluida'},
    { titulo: 'A bolsa amarela', imagem: '', autor: 'RICK RIORDAN', volume: '2', qtdPaginas: '351', categoria: 'Aventura', stleitura: 'Leitura concluida' },
    { titulo: 'A pedra filosofal', imagem: '', autor: 'RICK RIORDAN', volume: '2', qtdPaginas: '351', categoria: 'Aventura', stleitura: 'Leitura concluida' },
    { titulo: 'A ordem da fenix', imagem: '', autor: 'RICK RIORDAN', volume: '2', qtdPaginas: '351', categoria: 'Aventura', stleitura: 'Leitura concluida' },
    { titulo: 'Orgulho e preconceito', imagem: '', autor: 'RICK RIORDAN', volume: '2', qtdPaginas: '351', categoria: 'Aventura', stleitura: 'Leitura concluida' }
      
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
