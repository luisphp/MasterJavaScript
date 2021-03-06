import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { Global } from './global';

@Injectable()
export class ProjectService{

	public url:string;

	constructor (private _http:HttpClient){
				
				this.url = Global.url;

			}

			testService(){
				return 'Probando el servicio de Angular';
			}


			//Servicio para guardar proyectos
			saveProject(project: Project): Observable<any>{

				let params = JSON.stringify(project);
				let headers = new HttpHeaders().set('Content-Type', 'application/json');

				return this._http.post(this.url+'save-project', params, {headers: headers});

			}

			//Servicio para listar todos los proyectos
			getProjects(): Observable<any>{

				let headers = new HttpHeaders().set('Content-Type', 'application/json');


			//Realizamos la peticio Ajax
				return this._http.get(this.url+'projects', {headers: headers});

			}

			//Servicio para mostrar el detalle de cada proyecto
			getProject(id):Observable<any> {

				let headers = new HttpHeaders().set('Content-Type', 'application/json');


				return this._http.get(this.url+'project/'+id, {headers: headers});
			}

			//Borrar un proyecto
			deleteProject(id):Observable<any> {

				let headers = new HttpHeaders().set('Content-Type', 'application/json');

				return this._http.delete(this.url+'project/'+id, {headers: headers});

			}
			//Actualizar un proyecto
			updateProject(project: Project):Observable<any>{

				let params = JSON.stringify(project);

				let headers = new HttpHeaders().set('Content-Type', 'application/json');

				return this._http.put(this.url+'project/'+project._id, params, {headers: headers});

			}


}


