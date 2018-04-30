import { Component, OnInit } from '@angular/core';
import { DocumentSearch } from '../document/document-search';
import { DocumentService } from '../document/document.service';
import { JavaLocalDate } from '../../common/java-local-date';

@Component({
  selector: 'app-all-documents',
  templateUrl: './all-documents.component.html',
  styleUrls: ['./all-documents.component.css'],
  providers:[DocumentService]
})
export class AllDocumentsComponent implements OnInit {

  documents: Document[];

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
      let documentSearch = new DocumentSearch();
      this.documentService.getAllDocuments(documentSearch).then(documents => this.documents = <Document[]> documents);
  }


}
