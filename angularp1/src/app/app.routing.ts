//Importar modulos del router de Angular

import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

//Importar componentes
import { HomeComponent } from './home/home.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';

//Array de configuracion de las rutas
const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'zapatillas', component: ZapatillasComponent},
	{path: 'videjuegos', component: VideojuegosComponent},
	{path: 'cursos', component: CursosComponent},
	{path: 'cursos/:nombre', component: CursosComponent},
	{path: '**' , component: HomeComponent},
];

//Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); 
