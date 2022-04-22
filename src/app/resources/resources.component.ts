import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../services/resources.service';
import { IResource } from '../shared/interfaces';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  resources: IResource[]=[]
  constructor(private resourcesService:ResourcesService) { }

  ngOnInit(): void {
    this.getResources()
  }

  getResources(){
    this.resourcesService.getResources().subscribe(resources => {this.resources = resources; console.log(this.resources)})
  }

}
