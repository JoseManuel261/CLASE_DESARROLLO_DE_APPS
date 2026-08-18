import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
nombre: string = 'Jose';
  cambiarNombre() {
    if (this.nombre === 'Jose') {
      this.nombre = 'Maria';
    } else {
      this.nombre = 'Jose';
    }
  }
}
