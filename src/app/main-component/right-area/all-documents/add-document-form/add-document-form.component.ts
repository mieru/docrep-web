import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { Message } from 'primeng/components/common/message';
import { DocumentService } from '../../document/document.service';
import { FileUpload } from 'primeng/fileupload';
import { AddDocumentService } from './add-document.service';
import { DocumentToAdd } from './document-to-add';
import { StorageLocationService } from '../storage-location.service';
import { StorageLocation } from '../storage-location';
import { SelectItem } from 'primeng/components/common/selectitem';
declare const Word: any;
@Component({
  selector: 'app-add-document-form',
  templateUrl: './add-document-form.component.html',
  styleUrls: ['./add-document-form.component.css'],
  providers:[DocumentService, AddDocumentService, StorageLocationService]
})


export class AddDocumentFormComponent implements OnInit {
  @ViewChild('fileInput') fileInput: FileUpload;

  public title:string;
  public number:string;
  public barcode:string;
  public description:string;
  public opinion:string;
  public items:SelectItem[] = [];
  public storageLocationId:number;
  public today: number = Date.now();
  constructor(private documentService:DocumentService, private addDocumentService:AddDocumentService ,private storageLocationService:StorageLocationService) { }


  ngOnInit() {
    this.storageLocationService.getAll().then(storageLocations => {
      (<StorageLocation[]>storageLocations).forEach(sl =>{
        this.items.push({value:sl.id, label:sl.name})
      })
    })
  }

  onSubmit(event){
    let documentToAdd = new DocumentToAdd();
    documentToAdd.barcode = this.barcode;
    documentToAdd.title = this.title;
    documentToAdd.description =this.description;
    documentToAdd.number = this.number;
    if(this.storageLocationId)
    documentToAdd.storageLocationId = this.storageLocationId;
    console.log(documentToAdd)
    this.documentService.addDocument(documentToAdd, this.fileInput.files);

  }

  

 genBarcode(){
  this.documentService.getBarcode().subscribe(data =>{
    this.barcode = data;
  });
 }



}
