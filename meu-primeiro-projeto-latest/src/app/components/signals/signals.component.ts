import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firstName = signal('Pedro ');
  public lastName = signal('Filho');

  constructor() {
    effect(() => {
      console.log(this.firstName())
      console.log(this.array())
      if(this.firstName() === 'João '){
        alert()
      }
    })
  }

  public fullName = computed(() => {
    return this.firstName() + this.lastName();
  });

  public array = signal([1]);

  public updateName() {
    return this.firstName.set('João ')
  }

  public updateArray() {
    this.firstName.update(() =>{
      return "João "
    })

    this.array.update((oldValue: Array<number>) => {
      console.log(oldValue);
      return [...oldValue, oldValue.length + 1];
    })
  }
}
