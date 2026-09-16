import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-desafio-final',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './desafio-final.html',
  styleUrl: './desafio-final.scss'
})
export class DesafioFinal {
  nomeAluno: string = '';
  quantidadeDisciplinas: number = 1;
  mensagemConfirmacao: string = '';

  aumentarDisciplinas(): void {
    this.quantidadeDisciplinas++;
  }

  diminuirDisciplinas(): void {
    if (this.quantidadeDisciplinas > 1) {
      this.quantidadeDisciplinas--;
    }
  }

  realizarMatricula(): void {
    if (this.nomeAluno.trim()) {
      this.mensagemConfirmacao = `Matrícula realizada com sucesso para o aluno ${this.nomeAluno} com ${this.quantidadeDisciplinas} disciplina(s)!`;
    }
  }
}