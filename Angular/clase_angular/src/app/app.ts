import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Acerca } from './paginas/acerca/acerca';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Acerca],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('clase_angular');
}
