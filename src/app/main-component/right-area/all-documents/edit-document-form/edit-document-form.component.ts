import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';

import { DocumentService } from '../../document/document.service';
import { AddDocumentService } from '../add-document-form/add-document.service';
import { DocumentToAdd } from '../add-document-form/document-to-add';
import { Document } from '../../document/document';

@Component({
  selector: 'app-edit-document-form',
  templateUrl: './edit-document-form.component.html',
  styleUrls: ['./edit-document-form.component.css'],
  providers:[AddDocumentService]
})
export class EditDocumentFormComponent implements OnInit {
  @ViewChild('fileInput') fileInput: FileUpload;

  public document:Document;

  constructor(private documentService:DocumentService, private addDocumentService:AddDocumentService) { }

  ngOnInit() {
    this.document = this.documentService.selectedDocument;
  }

  onSubmit(event){
    
  }





}
