import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conta-letra',
  templateUrl: './conta-letra.component.html',
  styleUrls: ['./conta-letra.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class ContaLetraComponent {
  frase: string = '';
  quantidade: number = 0;

  contarLetras() {
    this.quantidade = this.frase.replace(/\s/g, '').length;
  }
}
