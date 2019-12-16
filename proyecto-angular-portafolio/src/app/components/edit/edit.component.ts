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

  constructor(

  	private _projectService: ProjectService, 
  	private _uploadService: UploadService,
  	private _route: ActivatedRoute,
  	private _router: Router 

  	) { 

  	this.title = "Edit Project";
  	this.status = '';

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


  }


