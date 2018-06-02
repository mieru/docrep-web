import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document/document.service';
import { DocumentSearch } from '../document/document-search';
import { ViewEncapsulation } from '@angular/core';
import { UserService } from './user.service';
import { Document } from '../document/document';
import { Account } from './model/account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-documents',
  templateUrl: './user-documents.component.html',
  styleUrls: ['./user-documents.component.css'],
  providers:[UserService]

})
export class UserDocumentsComponent implements OnInit {

  account: Account;
  documents:Document[];
  docsInCart:Document[];
  editMode:boolean = false;
  editPassword:boolean = false;

  oldPassword:string;
  newPassword:string;
  repeatedPassword:string;

    constructor(private documentService: DocumentService, private userService:UserService, private router:Router) { }

    ngOnInit() {
      this.userService.getUserInfo().then(
      user => {
        this.account = <Account>user;
        console.log(this.account);
      });
      this.documentService.getDocumentForUser().then(docs => this.documents = <Document[]>docs);
      this.documentService.getDocumentFromUserCart().then(docs => this.docsInCart = <Document[]>docs);
      
    }

    onClick($event, document){
      this.documentService.selectedDocument = document;
      this.router.navigateByUrl('/documents/document-detail');
    }

    editModeSwitch(){
      this.editMode = !this.editMode;
    }

    deleteDocFormCart(document){
      this.documentService.deleteDocumentFromCart(document);
    }

    editPasswordSwitch(){
      this.editPassword = !this.editPassword;
    }

   changePassword(){
     this.userService.changePassword(this.oldPassword, this.newPassword, this.repeatedPassword);
    }

    editUser(){
      this.userService.editAccount(this.account);
    }

}
