import { Component } from '@angular/core';
import { MeuFormComponent } from '../meu-form/meu-form.component';


@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [
    MeuFormComponent,
  ],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImage: string = 'https://picsum.photos/400/200/';
  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botao clicado!')
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

}
