import { Component, OnInit, ViewChild } from '@angular/core';
import { DocumentService } from '../../document/document.service';
import { AddDocumentService } from '../add-document-form/add-document.service';
import { FileUpload } from 'primeng/fileupload';
import { DocumentToAdd } from '../add-document-form/document-to-add';
import { Document } from '../../document/document';

@Component({
  selector: 'app-document-detail-form',
  templateUrl: './document-detail-form.component.html',
  styleUrls: ['./document-detail-form.component.css'],
  providers:[ AddDocumentService]
})
export class DocumentDetailFormComponent implements OnInit {
  @ViewChild('fileInput') fileInput: FileUpload;

 public document:Document;

  constructor(private documentService:DocumentService, private addDocumentService:AddDocumentService) { }

  ngOnInit() {
    this.document = this.documentService.selectedDocument;
  }






}
