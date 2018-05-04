import { Injectable } from '@angular/core';
import { DocumentSearch } from './document-search';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DocumentService {

  constructor(private http: HttpClient) { }

  getAllDocuments(documentSearch: DocumentSearch) {
    return this.http.post('http://localhost:8080/api/document/search/all', documentSearch)
      .toPromise();

  }

  getDocuments(documentSearch: DocumentSearch) {
    return this.http.post('http://localhost:8080/api/document/search', documentSearch)
      .toPromise();

  }

  getFuzzyDocuments(searchPhrase: string) {
    return this.http.get('http://localhost:8080/api/document/search/fuzzy/' + searchPhrase)
      .toPromise();

  }


}
