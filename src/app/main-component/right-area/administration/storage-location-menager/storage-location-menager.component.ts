import { Component, OnInit } from '@angular/core';
import { StorageLocation } from '../../all-documents/storage-location';
import { StorageLocationService } from '../../all-documents/storage-location.service';

@Component({
  selector: 'app-storage-location-menager',
  templateUrl: './storage-location-menager.component.html',
  styleUrls: ['./storage-location-menager.component.css'],
  providers:[StorageLocationService]
})
export class StorageLocationMenagerComponent implements OnInit {
  displayDialog: boolean;

  storageLocation: StorageLocation = new StorageLocation();
    selectedStorageLocation: StorageLocation;
    newStorageLocation: boolean;
    storageLocations: StorageLocation[];
    cols: any[];

  constructor(private storageLocationService:StorageLocationService) { }

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Nazwa' },
      { field: 'type', header: 'Typ' },
      { field: 'superiorStorageLocation?.name', header: 'Nadrzędne' }
  ];

    this.storageLocationService.getAll().then(res => this.storageLocations = <StorageLocation[]>res);
  }

delete(){
  this.storageLocationService.deleteStorageLocation(this.storageLocation);
}

onRowSelect(event) {
  this.newStorageLocation = false;
  this.storageLocation = this.cloneAccount(event.data);
  this.displayDialog = true;
}

showDialogToAdd() {
  this.newStorageLocation = true;
  this.storageLocation = new StorageLocation();
  this.displayDialog = true;
}

cloneAccount(c: StorageLocation): StorageLocation {
  let storageLocation = new StorageLocation();
  for (let prop in c) {
    storageLocation[prop] = c[prop];
  }
  return storageLocation;
}

save(){
  if(this.newStorageLocation){
    this.storageLocationService.addStorageLocation(this.storageLocation);
  }else{
    this.storageLocationService.editStorageLocation(this.storageLocation);
  }
 
}

}
