import { Injectable } from '@angular/core';
import { DocumentSearch } from './document-search';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DocumentToAdd } from '../all-documents/add-document-form/document-to-add';
import { Document } from './document';

@Injectable()
export class DocumentService {
  public selectedDocument:Document;


  addDocument(documentToAdd: DocumentToAdd, files:any): any {
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('documentToadd', JSON.stringify(documentToAdd));
    return this.http.post('http://localhost:8080/api/document/', formData)
      .toPromise();
  }
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

  getBarcode():Observable<string>{
    return this.http.get('http://localhost:8080/api/document/gen-barcode',{responseType: 'text'});

  }

  
}
