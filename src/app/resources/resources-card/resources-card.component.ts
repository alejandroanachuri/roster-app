import { Component, Input, OnInit } from '@angular/core';
import { IResource } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-resources-card',
  templateUrl: './resources-card.component.html',
  styleUrls: ['./resources-card.component.css']
})
export class ResourcesCardComponent implements OnInit {

  @Input() resourcesList:IResource[]=[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
