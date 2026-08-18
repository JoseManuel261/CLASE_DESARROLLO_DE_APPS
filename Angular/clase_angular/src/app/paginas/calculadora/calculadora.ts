import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Operacion {
  numero1: number;
  numero2: number;
  tipo: string;
  resultado: number;
}

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})
export class Calculadora {
  numero1: number = 0;
  numero2: number = 0;
  operacionSeleccionada: 'suma' | 'resta' | 'multiplicacion' | 'division' = 'suma';
  resultado: number | null = null;
  errorMensaje: string = '';

  historial: Operacion[] = [];

  calcular(tipo: 'suma' | 'resta' | 'multiplicacion' | 'division'): void {
    this.errorMensaje = '';
    let resultado: number;

    switch (tipo) {
      case 'suma':
        resultado = this.numero1 + this.numero2;
        break;
      case 'resta':
        resultado = this.numero1 - this.numero2;
        break;
      case 'multiplicacion':
        resultado = this.numero1 * this.numero2;
        break;
      case 'division':
        if (this.numero2 === 0) {
          this.errorMensaje = 'No se puede dividir entre cero';
          this.resultado = null;
          return;
        }
        resultado = this.numero1 / this.numero2;
        break;
    }

    this.resultado = resultado;

    this.historial.unshift({
      numero1: this.numero1,
      numero2: this.numero2,
      tipo: this.simboloOperacion(tipo),
      resultado: resultado
    });
  }

  simboloOperacion(tipo: string): string {
    switch (tipo) {
      case 'suma': return '+';
      case 'resta': return '-';
      case 'multiplicacion': return '×';
      case 'division': return '÷';
      default: return '';
    }
  }

  limpiarHistorial(): void {
    this.historial = [];
  }
}