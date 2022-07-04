import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-livros-cadastro',
  templateUrl: './livros-cadastro.component.html',
  styleUrls: ['./livros-cadastro.component.scss']
})
export class LivrosCadastroComponent implements OnInit {

  categorias = [
    {label: 'Aventura', value: 1},
    {label: 'Ficção Científica', value: 2},
    {label: 'Romance', value: 3}

  ]
  stleitura = [
    
    {label: 'Iniciada', value: 1},
    {label: 'Em progresso', value: 2},
    {label: 'Concluída', value: 3}
    
  ];

  livrosCadastro!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.livrosCadastro = new FormGroup({
      id: new FormControl(''),
      titulo: new FormControl('', [Validators.required, Validators.minLength(5)]),
      autor: new FormControl('', [Validators.required, Validators.minLength(5)]),
      editora: new FormControl('', [Validators.minLength(5)]),
      volume: new FormControl('', [Validators.minLength(5)]),
      edicao: new FormControl('', [Validators.minLength(5)]),
      qtdPaginas: new FormControl('', [Validators.required]),
      qtdLivros: new FormControl('', [Validators.required]),
      sinopse: new FormControl('', [Validators.maxLength(350)]),
      ljcompra: new FormControl('', [Validators.minLength(5)]),
      descricao: new FormControl('', [Validators.minLength(5)]),
    });
  }

  get titulo() {
    return this.livrosCadastro.get('titulo')!;
  }

  get autor() {
    return this.livrosCadastro.get('autor')!;
  }

  get editora() {
    return this.livrosCadastro.get('editora')!;
  }

  get volume() {
    return this.livrosCadastro.get('volume')!;
  }

  get edicao() {
    return this.livrosCadastro.get('edicao')!;
  }

  get qtdPaginas() {
    return this.livrosCadastro.get('qtdPaginas')!;
  }

  get qtdLivros() {
    return this.livrosCadastro.get('qtdLivros')!;
  }

  get sinopse() {
    return this.livrosCadastro.get('sinopse')!;
  }

  get ljcompra() {
    return this.livrosCadastro.get('ljcompra')!;
  }

  get descricao() {
    return this.livrosCadastro.get('descricao')!;
  }
  salvar() {
      if(this.livrosCadastro.invalid) {
        return;
      }
  }

}
