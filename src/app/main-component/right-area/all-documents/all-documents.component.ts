import { Component, OnInit } from '@angular/core';
import { DocumentSearch } from '../document/document-search';
import { DocumentService } from '../document/document.service';
import { JavaLocalDate } from '../../common/java-local-date';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Document } from '../document/document';
declare global {
  interface Window { MyNamespace: any; }
}

window.MyNamespace = window.MyNamespace || {};

@Component({
  selector: 'app-all-documents',
  templateUrl: './all-documents.component.html',
  styleUrls: ['./all-documents.component.css']
})

export class AllDocumentsComponent implements OnInit {
  owners:SelectItem[];

  dateFrom:Date;
  dateTo:Date;
  barcode:string;
  number:string;
  ownerId:number;

  constructor(public documentService: DocumentService, private router:Router) {
    this.owners = [
      {label: '', value: null},
      {label: 'Jan Kowalski', value: 15}
  ];
   }

  ngOnInit() {
      let documentSearch = new DocumentSearch();
      this.documentService.getAllDocuments(documentSearch)
  }

  onSubmit(event){
    let documentSearch = new DocumentSearch();
    documentSearch.searchDateFrom = this.dateFrom;
    documentSearch.searchDateTo = this.dateTo;
    documentSearch.barcode = this.barcode;
    documentSearch.number = this.number;
    documentSearch.ownerId = this.ownerId;
    console.log(documentSearch);
    this.documentService.getAllDocuments(documentSearch);
  }

  onClick(event, document){
    this.documentService.selectedDocument = document;
       this.router.navigateByUrl('/documents/document-detail');
  }

  addToCart(document){
    this.documentService.addToCart(document);
  }

}
