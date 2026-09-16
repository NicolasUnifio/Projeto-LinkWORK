import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-exercicio9',
  styleUrl: './exercicio9.scss',
  templateUrl: './exercicio9.html',
})
export class Exercicio9 {
  nomeProduto: string = 'Teclado Mecânico';
  estoque: number = 5;

  aumentarEstoque(): void {
    this.estoque++;
  }

  diminuirEstoque(): void {
    if (this.estoque > 0) {
      this.estoque--;
    }
  }
}
