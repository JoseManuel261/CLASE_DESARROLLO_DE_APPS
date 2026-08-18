import { Routes } from '@angular/router';
import { Acerca } from './paginas/acerca/acerca';
import { Form } from './paginas/form/form';
import { Calculadora } from './paginas/calculadora/calculadora';

export const routes: Routes = [
    { path: 'acerca', component: Acerca },
    { path: 'form', component: Form },
    { path: 'calculadora', component: Calculadora }
];
