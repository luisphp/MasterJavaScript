import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService],

})
export class ProjectsComponent implements OnInit {

	private title: string = "Todos los proyectos";
	private url:string = 'http://localhost:3700/api';
	public projects: Project[];
	

  constructor(

  	private _projectService: ProjectService, 

  	) { 

  	
  }

  ngOnInit() {
  	this.getProject();
  }

  getProject(){
  	this._projectService.getProjects().subscribe(
  		response => {
  			console.log(response);
  				this.projects = response.projects;
  				console.log(this.projects); 
  			},
  		error => {
  			console.log(<any>error);
  		}	
  		);
  }

}
