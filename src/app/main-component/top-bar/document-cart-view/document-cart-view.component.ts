import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../right-area/document/document.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-cart-view',
  templateUrl: './document-cart-view.component.html',
  styleUrls: ['./document-cart-view.component.css']
})
export class DocumentCartViewComponent implements OnInit {

  constructor(private documentService:DocumentService, private router:Router) { }

  docsInCart:Document[];

  ngOnInit() {
 
    this.documentService.getDocumentFromUserCart().then(docs => this.docsInCart = <Document[]>docs);
  }

  onClick($event, document){
    this.documentService.selectedDocument = document;
    this.router.navigateByUrl('/documents/document-detail');
  }

}
