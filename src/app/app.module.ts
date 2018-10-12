import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/// ngrx
import { StoreModule } from '@ngrx/store';
import { contadorReducer } from './contador/contador.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ contador: contadorReducer }),
    StoreDevtoolsModule.instrument({ 
      maxAge: 25, /// el numerode estado o accionoes que mantenga 25 accciones
      logOnly: environment.production ///  es una bandea que impidira al usuario que no pueda hacer modificaciones 
    }),  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
