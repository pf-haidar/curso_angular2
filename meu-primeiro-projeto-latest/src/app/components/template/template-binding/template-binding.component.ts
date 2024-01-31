import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name: string = 'Pedro Haidar Filho';
  public age: number = 32;
  public condition = this.age > 1 ? 'Teste' : 'Teste2';
  public isDisabled = false;
  public srcValue = 'https://picsum.photos/200/300';
  // public isTextDecoration = this.age >= 32 ? 'underline' : 'none'; NAO FUNCIONA
  public isTextDecoration = this.age >= 32 ? 'underline' : 'none';

  constructor() {
    setTimeout(() => {
      this.name = 'João e Maria';
    }, 1000)
  }

  public sum(val1: number, val2:number) {
    return val1 + val2;
  }

  public sum2() {
    this.age++;
  }

  public sub() {
    this.age--;
  }

  public onKeyDown(event: Event){
    return console.log(event);
  }

  public onMouseEvent(event: MouseEvent) {
    return console.log(event);
  }
}
