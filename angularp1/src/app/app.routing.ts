//Importar modulos del router de Angular

import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from 'angular/router';

//Importar componentes
import {ZapatillasComponent} from '../zapatillas/zapatillas.component';
import {VideojuegosComponent} from '../videojuegos/videjuegos.component';
import {CursosComponent} from '../cursos/cursos.component';

//Array de configuracion de las rutas
const appRoutes: Routes = [
	{path: '',
	component: 'ZapatillasComponent'}
];