import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livros-pesquisa',
  templateUrl: './livros-pesquisa.component.html',
  styleUrls: ['./livros-pesquisa.component.scss']
})
export class LivrosPesquisaComponent implements OnInit {

  livros = [

    { titulo: 'As Crônicas de Nárnia', imagem: '', autor: 'C.S.Lewis', volume: 'vol. único', qtdPaginas: '750', stleitura: 'Leitura concluida' },
    { titulo: 'A Revolução dos Bichos', imagem: '', autor: 'George Orwell', volume: 'vol. único', qtdPaginas: '96', stleitura: 'Não lido'},
    { titulo: 'O Hobbit', imagem: '', autor: 'J.R.R.Tolkien', volume: 'vol.único', qtdPaginas: '336', stleitura: 'Não lido' },
    { titulo: 'As aventuras de Pi', imagem: '', autor: 'Yann Martel', volume: 'vol. único', qtdPaginas: '261', stleitura: 'Leitura concluida' },
    { titulo: 'Viagem ao centro da terra', imagem: '', autor: 'Júlio Verne', volume: 'vol. único', qtdPaginas: '189', stleitura: 'Leitura concluida' },
    { titulo: 'O Último Olimpiano', imagem: '', autor: 'Rick Riordan', volume: 'vol. 5', qtdPaginas: '227', stleitura: 'Não lido' }
      
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
