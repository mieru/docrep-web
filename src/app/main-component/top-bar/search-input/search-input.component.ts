import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../right-area/document/document.service';
import { DocumentSearch } from '../../right-area/document/document-search';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
  providers:[DocumentService]
})
export class SearchInputComponent implements OnInit {

  documents: Document[];
  public searchPhrase:string = '';

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
      
  }

  fuzzySearch(){
    let documentSearch = new DocumentSearch();
    documentSearch.title = this.searchPhrase;
    this.documentService.getAllDocuments(documentSearch).then(documents => console.log(documents));
  }

}
