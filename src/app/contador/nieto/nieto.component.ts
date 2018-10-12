import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { ResetAction } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  // @Input() contador: number;
  // @Output() cambioContador = new EventEmitter<number>();

  contador: number;


  constructor(private _store: Store<AppState>) { }

  ngOnInit() {

    this._store.select('contador').subscribe(
      contador => { 
          this.contador = contador;
          console.log('Contador', contador);
      })
  }

  reset() { 
    const accion =  new ResetAction();
    this._store.dispatch(accion);
  }

}
