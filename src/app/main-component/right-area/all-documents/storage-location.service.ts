import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TreeNode} from 'primeng/api';
import { StorageLocation } from './storage-location';

@Injectable()
export class StorageLocationService {

 

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get('http://localhost:8080/api/storagelocation/all')
    .toPromise()
  }

  editStorageLocation(storageLocation: StorageLocation): any {
    return this.http.put('http://localhost:8080/api/storagelocation/', storageLocation)
    .toPromise()
  }
  deleteStorageLocation(storageLocation: StorageLocation): any {
    return this.http.delete('http://localhost:8080/api/storagelocation/'+storageLocation.id+'/')
    .toPromise()
  }
  addStorageLocation(storageLocation: StorageLocation): any {
    return this.http.post('http://localhost:8080/api/storagelocation/',storageLocation)
    .toPromise()
  }

getStorageLocationsAsTree(){
  return this.http.get('http://localhost:8080/api/storagelocation/tree')
  .toPromise()
  .then(res => <TreeNode[]> res);
}

}
