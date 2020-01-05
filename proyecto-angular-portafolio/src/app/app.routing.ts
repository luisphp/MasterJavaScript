
//Se importan las clases que vamos a utilizar
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ErrorComponent } from './components/error/error.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { SliderComponent } from './components/slider/slider.component';


const appRoutes: Routes = [
	
	{path: '', component: AboutComponent},
	{path: 'about', component: AboutComponent},
	{path: 'contact', component: ContactComponent},
	{path: 'projects', component: ProjectsComponent},
	{path: 'create', component: CreateComponent},
	{path: 'detail/:id', component: DetailComponent},
	{path: 'slider', component: SliderComponent},
	{path: 'edit-project/:id', component: EditComponent},
	{path: '**', component: ErrorComponent},
	

	
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); 