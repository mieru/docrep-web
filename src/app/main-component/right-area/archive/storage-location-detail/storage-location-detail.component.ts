import { Component, OnInit, Input } from '@angular/core';
import { StorageLocation } from '../../all-documents/storage-location';
import { DocumentService } from '../../document/document.service';
import { DocumentSearch } from '../../document/document-search';
import { Document } from '../../document/document';
import { Router } from '@angular/router';
import { TreeNode } from 'primeng/api';
import { StorageLocationService } from '../../all-documents/storage-location.service';

@Component({
  selector: 'app-storage-location-detail',
  templateUrl: './storage-location-detail.component.html',
  styleUrls: ['./storage-location-detail.component.css'],
  providers:[StorageLocationService]
})
export class StorageLocationDetailComponent implements OnInit {

 
@Input() public storageLocationNode:TreeNode;
public storageLocation:StorageLocation;
storageType:string
documents:Document[];
  constructor(private documentService:DocumentService,private storageLocationService:StorageLocationService, private router:Router) { }

  ngOnInit() {
  }

ngOnChanges(){
  let documentSearch:DocumentSearch = new DocumentSearch();
  documentSearch.storageLocationId = this.storageLocationNode.data;
  this.documentService.getDocuments(documentSearch).then(res => this.documents = <Document[]>res);
  this.storageLocationService.getAll().then(res => {
    this.storageLocation = (<StorageLocation[]>res).find(sl => sl.id == this.storageLocationNode.data)
    this.storageType = this.mapStorageLocationTypeToText();
  })
  
}

mapStorageLocationTypeToText(): any {
  if(this.storageLocation.type === 'EMPLOYEE'){
    return "PRACOWNIK";
  }
  if(this.storageLocation.type === 'WAREHOUSE'){
    return "MAGAZYN";
  }
  if(this.storageLocation.type === 'PACKAGE'){
    return "PACZKA";
  }
}

onClick($event, document){
  this.documentService.selectedDocument = document;
  this.router.navigateByUrl('/documents/document-detail');
}
}