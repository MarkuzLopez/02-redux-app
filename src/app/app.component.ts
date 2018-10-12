import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './contador/contador.actions';
import { AppState } from './app.reducers';

// interface AppState { 
//   contador:  number
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contador:  number;

  constructor(private store: Store<AppState>)  { 
    // para obtener datos en forma de objeto... 

    // this.store.subscribe(state =>{ 
    //   console.log(state);
    //   this.contador = state.contador;
    // })

    ///// para obtener los datos no como objetos si no de manera directa el valor de la propiedad
    this.store.select('contador').subscribe(
        contador => { 
          this.contador =  contador;
          console.log('Valor directo', contador);
        }
    )

  }
  title = 'app';

  incrementar() { 
  // console.log('aqui') (1)
  // this.contador ++;
    
    // const accion: Action = { (2)
    //   type: 'INCREMENTAR'
    // };

    const accion = new IncrementarAction();
    this.store.dispatch(accion);
  
  }

  decrementar() { 
  
    // console.log('aqui') (1)
    // this.contador --;

    // const accion: Action = { (2)
    //   type: 'DECREMENTAR'
    // }
    const accion = new DecrementarAction();
    this.store.dispatch(accion);

  }
}
