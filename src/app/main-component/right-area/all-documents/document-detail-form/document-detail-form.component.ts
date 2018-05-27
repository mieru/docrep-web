import { Component, OnInit, ViewChild } from '@angular/core';
import { DocumentService } from '../../document/document.service';
import { AddDocumentService } from '../add-document-form/add-document.service';
import { FileUpload } from 'primeng/fileupload';
import { DocumentToAdd } from '../add-document-form/document-to-add';
import { Document } from '../../document/document';
import { DocumentAttachments } from './document-attachments';
import { StorageLocation } from '../storage-location';
import { Router } from '@angular/router';

declare global {
  interface Window { MyNamespace: any; }
}

window.MyNamespace = window.MyNamespace || {};

@Component({
  selector: 'app-document-detail-form',
  templateUrl: './document-detail-form.component.html',
  styleUrls: ['./document-detail-form.component.css'],
  providers:[ AddDocumentService]
})
export class DocumentDetailFormComponent implements OnInit {
  @ViewChild('fileInput') fileInput: FileUpload;
  public document:Document;
  public documentAttachments: DocumentAttachments[];
  private tabCounter:number =0;

  public storageLocationTree:string;

  constructor(private documentService:DocumentService, private addDocumentService:AddDocumentService, private router:Router) { }

  ngOnInit() {
    this.document = this.documentService.selectedDocument;
    this.documentService.getAttachmentsByDocumentId(this.document.id).then(documentAttachments => this.documentAttachments = <DocumentAttachments[]> documentAttachments);
    this.storageLocationTree = this.prepareStorageLocationTree(this.document.storageLocation);
  }
 
public downloadFile(filename:string){
  window.location.href="http://localhost:8080/file/"+this.document.id+"/"+ filename + "/";
}

public editFileOnline(filename:string){
  window.MyNamespace.fileUrl="http://localhost:8080/file/"+this.document.id+"/"+ filename + "/";
  this.router.navigateByUrl('documents/edit-document-online');
}

  public prepareStorageLocationTree(storageLocation:StorageLocation):string{
    let superior:string = '';
    if(storageLocation.superiorStorageLocation){
      superior =  this.prepareStorageLocationTree(storageLocation.superiorStorageLocation);
    }
    for(let i = 0; i < this.tabCounter ; i++){
      superior += "&nbsp;&nbsp;&nbsp;&nbsp;";
  }
    this.tabCounter++;
    return '<div>'+ superior + '|_'+storageLocation.name +'</div>';
  }







}
