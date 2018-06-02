import { Injectable } from '@angular/core';
import { DocumentSearch } from './document-search';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DocumentToAdd } from '../all-documents/add-document-form/document-to-add';
import { Document } from './document';
import { DocumentAttachments } from '../all-documents/document-detail-form/document-attachments';
import { DocumentToEdit } from '../all-documents/edit-document-form/document-to-edit';

@Injectable()
export class DocumentService {
 
 


  
  public selectedDocument:Document;
  public documents: Document[];

  
  constructor(private http: HttpClient) { }

  addDocument(documentToAdd: DocumentToAdd, files:any): any {
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('documentToadd', JSON.stringify(documentToAdd));
    return this.http.post('http://localhost:8080/api/document/', formData)
      .toPromise();
  }

  getDocumentFromUserCart() {
    return this.http.get('http://localhost:8080/api/document/clipboard')
    .toPromise();
}

  deleteDocumentFromCart(document: Document) {
     this.http.delete('http://localhost:8080/api/document/clipboard/'+document.id).toPromise();
}

  deleteOpinion(opinion: any) {
    this.http.delete('http://localhost:8080/api/document/opinion/'+opinion.id).toPromise();
  }

  addToCart(document: Document): any {
    return this.http.post('http://localhost:8080/api/document/clipboard', document).toPromise();
  }

  editDocument(documentToEdit: DocumentToEdit, file:any): any {
    const formData = new FormData();
    formData.append('file',file);
    formData.append('documentToEdit', JSON.stringify(documentToEdit));
    return this.http.put('http://localhost:8080/api/document/', formData)
      .toPromise();
  }
  getDocumentForUser() {                        
    return this.http.get('http://localhost:8080/api/document/forLoggedAccount')
    .toPromise();
  }
  deleteDocument(documentId: number) {
    return this.http.delete('http://localhost:8080/api/document/'+documentId).toPromise();
  }
  getOpinions(documentId: number) {
    return this.http.get('http://localhost:8080/api/document/'+documentId+"/opinions")
    .toPromise();
  }

  getAllDocuments(documentSearch: DocumentSearch) {
    return this.http.post('http://localhost:8080/api/document/search/all', documentSearch)
      .toPromise().then(documents => this.documents = <Document[]> documents);
  }

  getAttachmentsByDocumentId(documentId: number) {
    return this.http.get('http://localhost:8080/api/document/attachments/' + documentId)
      .toPromise();
  }

  getDocuments(documentSearch: DocumentSearch) {
    return this.http.post('http://localhost:8080/api/document/search', documentSearch)
      .toPromise().then(documents => this.documents = <Document[]> documents);

  }

  getFuzzyDocuments(searchPhrase: string) {
    return this.http.get('http://localhost:8080/api/document/search/fuzzy/' + searchPhrase)
      .toPromise().then(documents => this.documents = <Document[]> documents);
  }

  getBarcode():Observable<string>{
    return this.http.get('http://localhost:8080/api/document/gen-barcode',{responseType: 'text'});

  }

  
}
