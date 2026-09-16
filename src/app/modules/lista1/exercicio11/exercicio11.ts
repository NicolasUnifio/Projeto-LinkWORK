import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-exercicio11',
  styleUrl: './exercicio11.scss',
  templateUrl: './exercicio11.html',
})
export class Exercicio11 {
  nomeProduto: string = 'Mouse Gamer';
  precoUnitario: number = 120.00;
  quantidade: number = 1;
  mensagemCarrinho: string = '';

  aumentar(): void {
    this.quantidade++;
  }

  diminuir(): void {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarAoCarrinho(): void {
    this.mensagemCarrinho = `${this.quantidade}x ${this.nomeProduto} adicionado(s) ao carrinho com sucesso!`;
  }
}
