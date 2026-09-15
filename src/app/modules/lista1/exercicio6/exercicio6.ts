import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-exercicio6',
  styleUrl: './exercicio6.scss',
  templateUrl: './exercicio6.html',
})
export class Exercicio6 {
  quantidade = 0;

  incrementar() {
    this.quantidade++;
  }

  decrementar() {
    if (this.quantidade > 0) {
      this.quantidade--;
    }
  }
}
