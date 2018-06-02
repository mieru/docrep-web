import { Component, OnInit, Input } from '@angular/core';
import { StorageLocation } from '../../all-documents/storage-location';
import { DocumentService } from '../../document/document.service';
import { DocumentSearch } from '../../document/document-search';
import { Document } from '../../document/document';
import { Router } from '@angular/router';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-storage-location-detail',
  templateUrl: './storage-location-detail.component.html',
  styleUrls: ['./storage-location-detail.component.css']
})
export class StorageLocationDetailComponent implements OnInit {

@Input() public storageLocation:TreeNode;
documents:Document[];
  constructor(private documentService:DocumentService, private router:Router) { }

  ngOnInit() {
  }

ngOnChanges(){
  let documentSearch:DocumentSearch = new DocumentSearch();
  documentSearch.storageLocationId = this.storageLocation.data;
  this.documentService.getDocuments(documentSearch).then(res => this.documents = <Document[]>res);
}


onClick($event, document){
  this.documentService.selectedDocument = document;
  this.router.navigateByUrl('/documents/document-detail');
}
}