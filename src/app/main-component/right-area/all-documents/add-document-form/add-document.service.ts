import { Injectable } from '@angular/core';
import { DocumentToAdd } from './document-to-add';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AddDocumentService {

  constructor(private http:HttpClient) { }

 
addDocument(up:any){
  console.log(up);
  this.http.post('http://localhost:8080/api/document/',up).toPromise();
}

}
