import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-exercicio10',
  styleUrl: './exercicio10.scss',
  templateUrl: './exercicio10.html',
})
export class Exercicio10 {
  usuario: string = '';
  senha: string = '';
  mensagemBoasVindas: string = '';

  entrar(): void {
    if (this.usuario.trim() && this.senha.trim()) {
      // Interpolation e Data Binding atualizando a mensagem
      this.mensagemBoasVindas = `Bem-vindo, ${this.usuario}!`;
    }
  }
}
