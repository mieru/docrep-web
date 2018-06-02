import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TreeNode} from 'primeng/api';

@Injectable()
export class StorageLocationService {

 
  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get('http://localhost:8080/api/storagelocation/all')
    .toPromise()
  }

getStorageLocationsAsTree(){
  return this.http.get('http://localhost:8080/api/storagelocation/tree')
  .toPromise()
  .then(res => <TreeNode[]> res);
}

}
