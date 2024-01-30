import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, DataBindingComponent, CicloComponent, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    valor: number = 5;

    deletarCiclo: boolean = false;

    mudarValor() {
        this.valor++;
    }

    destruirCiclo() {
        this.deletarCiclo = true;
    }
}
