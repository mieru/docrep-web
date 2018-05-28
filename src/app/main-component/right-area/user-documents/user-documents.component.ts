import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document/document.service';
import { DocumentSearch } from '../document/document-search';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-documents',
  templateUrl: './user-documents.component.html',
  styleUrls: ['./user-documents.component.css'],
  providers:[DocumentService]

})
export class UserDocumentsComponent implements OnInit {

  documents: Document[];

    constructor(private documentService: DocumentService) { }

    ngOnInit() {
   
    }

}
