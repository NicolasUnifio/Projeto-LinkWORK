import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-exercicio5',
  styleUrl: './exercicio5.scss',
  templateUrl: './exercicio5.html',
})
export class Exercicio5 {
  curtidas = 0;

  incrementarCurtidas() {
    this.curtidas++;
  }
}
