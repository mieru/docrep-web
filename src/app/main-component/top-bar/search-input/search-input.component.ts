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
    this.documentService.getFuzzyDocuments(this.searchPhrase).then(documents => console.log(documents));
  }

}
