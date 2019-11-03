import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegosComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Routing,
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
