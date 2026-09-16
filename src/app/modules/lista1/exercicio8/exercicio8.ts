import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 Resolve o erro do 'number' pipe (NG8004)
import { FormsModule } from '@angular/forms';     

@Component({
  selector: 'app-exercicio8',
  standalone: true,                              
  imports: [CommonModule, FormsModule],         
  templateUrl: './exercicio8.html',
  styleUrl: './exercicio8.scss'
})
export class Exercicio8 {
  produto: string = 'Mouse Gamer';
  preco: number = 150;
  quantidade: number = 2;
}