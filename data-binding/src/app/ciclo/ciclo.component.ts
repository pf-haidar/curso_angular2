import { CommonModule } from '@angular/common';
import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    Input,
    OnChanges,
    OnDestroy,
    OnInit
} from '@angular/core';

@Component({
    selector: 'app-ciclo',
    standalone: true,
    imports: [],
    templateUrl: './ciclo.component.html',
    styleUrl: './ciclo.component.css'
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
    AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    @Input() valorInicial: number = 10;

    constructor() {
        this.log('construtor')
    }

    ngOnInit() {
        this.log('ngOnInit')
    }

    ngOnChanges() {
        this.log('ngOnChanges');
    }

    ngDoCheck() {
        this.log('ngOnChanges');
    }

    ngAfterContentInit() {
        this.log('AfterContentInit')
    }

    ngAfterContentChecked() {
        this.log('AfterContentChecked')
    }

    ngAfterViewInit() {
        this.log('AfterViewInit')
    }

    ngAfterViewChecked() {
        this.log('AfterViewChecked')
    }

    ngOnDestroy() {
        this.log('OnDestroy')
    }


    private log(hook: string) {
        console.log(hook)
    }

}
