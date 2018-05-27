import { Component, OnInit, ViewChild } from '@angular/core';
import { DocumentService } from '../../document/document.service';
import { AddDocumentService } from '../add-document-form/add-document.service';
import { FileUpload } from 'primeng/fileupload';
import { DocumentToAdd } from '../add-document-form/document-to-add';
import { Document } from '../../document/document';
import { DocumentAttachments } from './document-attachments';
import { StorageLocation } from '../storage-location';

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

  constructor(private documentService:DocumentService, private addDocumentService:AddDocumentService) { }

  ngOnInit() {
    this.document = this.documentService.selectedDocument;
    this.documentAttachments = [];
    let documentAttachment:DocumentAttachments = new DocumentAttachments();
    documentAttachment.extension ='txt';
    documentAttachment.name = 'Test';
    documentAttachment.size = 16283;
    this.documentAttachments.push(documentAttachment);
    this.storageLocationTree = this.prepareStorageLocationTree(this.document.storageLocation);
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
