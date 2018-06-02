import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';

import { DocumentService } from '../../document/document.service';
import { AddDocumentService } from '../add-document-form/add-document.service';
import { DocumentToAdd } from '../add-document-form/document-to-add';
import { Document } from '../../document/document';
import { SelectItem } from 'primeng/components/common/selectitem';
import { StorageLocationService } from '../storage-location.service';
import { StorageLocation } from '../storage-location';
import { DocumentToEdit } from './document-to-edit';

@Component({
  selector: 'app-edit-document-form',
  templateUrl: './edit-document-form.component.html',
  styleUrls: ['./edit-document-form.component.css'],
  providers:[AddDocumentService, StorageLocationService]
})
export class EditDocumentFormComponent implements OnInit {
  @ViewChild('fileInput') fileInput: FileUpload;

  public document:Document;
  public storageLocationId:number;
  public items:SelectItem[] = [];
  public opinions:any[] =[]

  public newOpinion:string;

   constructor(private documentService:DocumentService,private storageLocationService:StorageLocationService, private addDocumentService:AddDocumentService) { }

  ngOnInit() {
    this.document = this.documentService.selectedDocument;
    
   
    this.storageLocationService.getAll().then(storageLocations => {
      (<StorageLocation[]>storageLocations).forEach(sl =>{
        this.items.push({value:sl.id, label:sl.name})
      })
      if(this.document.storageLocation)
      this.storageLocationId = this.document.storageLocation.id;
    })
   
    
    this.documentService.getOpinions(this.document.id).then(opinions =>{
      this.opinions = <any[]>opinions;
     
    });
   
  }

deleteOpinion(opinion){
  this.documentService.deleteOpinion(opinion);
}

  onSubmit(event){
    let documentToEdit = new DocumentToEdit()
    documentToEdit.description = this.document.description;
    documentToEdit.number = this.document.number
    documentToEdit.storageLocationId = this.storageLocationId;
    documentToEdit.title = this.document.title;
    documentToEdit.opinion = this.newOpinion;
    documentToEdit.id = this.document.id;
    this.documentService.editDocument(documentToEdit, this.fileInput.files[0]);
  }





}
