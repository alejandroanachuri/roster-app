import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IResource } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  resourcesUrl:string = "http://localhost:3000/resources"
  constructor(private httpClient:HttpClient) { }

  getResources():Observable<IResource[]>{
    return this.httpClient.get<IResource[]>(this.resourcesUrl).pipe(
      (tap(_ => console.log("resources fetched")))
    )
  }
}
