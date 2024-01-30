import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meu-form',
  standalone: true,
  imports: [
    MeuFormComponent,
    FormsModule,
  ],
  templateUrl: './meu-form.component.html',
  styleUrl: './meu-form.component.css'
})
export class MeuFormComponent {
  nome: string = 'abc';
  pessoa: any = {
    nome: 'Pedro',
    idade: 22
  };

  salvarNome(evento: Event) {
    this.nome = (<HTMLInputElement>evento.target).value;
  }
}
