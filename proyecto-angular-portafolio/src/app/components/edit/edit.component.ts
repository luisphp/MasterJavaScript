import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'edit-project',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService],
})
export class EditComponent implements OnInit {

	public title: string;
	public project: Project;
	public status: string;
	public filesToUpload: Array<File>;
	public url:string

  constructor(

  	private _projectService: ProjectService, 
  	private _uploadService: UploadService,
  	private _route: ActivatedRoute,
  	private _router: Router 

  	) { 

  	this.title = "Edit Project";
  	this.status = '';
  	this.url = Global.url;

  }

  ngOnInit() {

	  	this._route.params.subscribe(params => {
	      let id = params.id;

	      this.getProject(id);
	    })
	  }
 
	getProject(id){
		this._projectService.getProject(id).subscribe(
		      response => {
		        this.project = response.project
		      },
		      error => {
		        console.log(<any>error);
		      }
		    )
		  }

	onSubmit(form){

  	//Guardar los Datos
  	console.log(this.project);

  	this._projectService.updateProject(this.project).subscribe(

  		response => {

  			if(response.project){
  				console.log(response);
  				
  				


  				//Subir imagen
  				if(this.filesToUpload){

  				this._uploadService.makeFileRequest(Global.url+'upload-image/'+response.project._id,[],this.filesToUpload, 'image')

  				 .then((result: any)=>{
  				 	//Se muestra un mensaje en la vista
  				 	this.status = 'success';
  				 		console.log(result);
  				 		form.reset();
  				 	});



  				//Vaciar formuario
  				form.reset();
  				}
  				 
  			}
  			else{
  				//Se muetra un mensaje en la vista
  				this.status = 'failed';
  				
  				//Vaciar formuario
  				form.reset();
  			}
  			
  			},
  		err => {
  			console.log(<any>err);
  		});
  }	  


  }


