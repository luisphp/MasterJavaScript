import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService],


})
export class CreateComponent implements OnInit {

	public title: string;
	public project: Project;
	public status: string;
	public filesToUpload: Array<File>;



  constructor(
  	private _projectService: ProjectService, private _uploadService: UploadService

  	) {

  	this.title = "Create Project";
  	this.project =  new Project('','','', 0 ,'','','');
  	this.status = '';

  	 }


  	 /*
		public _id:string,
		public name:string,
		public description:string,
		public year:number,
		public category:string,
		public langs:string,
		public image:string
  	 */

  ngOnInit() {
  }

  onSubmit(form){

  	//Guardar los Datos
  	console.log(this.project);

  	this._projectService.saveProject(this.project).subscribe(

  		response => {

  			if(response.project){
  				console.log(response);
  				
  				


  				//Subir imagen
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

  fileChangeEvent(fileInput: any){
  		console.log(fileInput);



  		//Files to upload
  		this.filesToUpload = <Array<File>>fileInput.target.files; 
  	}

}
