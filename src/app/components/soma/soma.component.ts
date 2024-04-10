import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class SomaComponent {
  num1!: number;
  num2!: number;
  resultado: number = 0;

  calcularSoma() {
    let valor1: number = parseFloat(this.num1.toString());
    let valor2: number = parseFloat(this.num2.toString());

    if (!isNaN(valor1) && !isNaN(valor2)) {
      this.resultado = valor1 + valor2;
    } else {
      alert("Por favor, insira números válidos.");
    }
  }
}
