import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  // @Input() contador: number;
  // @Output() cambioContador = new EventEmitter<number>();

  contador:  number;

  constructor( private store: Store<AppState> ) {  }

  ngOnInit() {
  
    this.store.select('contador')
      .subscribe(contador => { 
        this.contador =  contador;
        console.log('Contador =>', contador);
      })  

  }

  multiplicar() { 
    const acccion = new MultiplicarAction(5);
    this.store.dispatch(acccion);
    // this.contador *= 2;
    // this.cambioContador.emit(this.contador); 
  }

  dividir() { 
    const accion =  new DividirAction(5);
    this.store.dispatch(accion);
    // this.cambioContador.emit(this.contador);
  }

  resetNieto(nuevoContador) { 
    this.contador =  nuevoContador;    
  }

} 
