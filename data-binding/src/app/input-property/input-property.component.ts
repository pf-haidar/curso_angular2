import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [],
  templateUrl: './input-property.component.html',
  styleUrl: './input-property.component.css',
  // inputs: ['nomeCurso:nome']
})
export class InputPropertyComponent {
  @Input('nome') nomeCurso: string = '';
}
