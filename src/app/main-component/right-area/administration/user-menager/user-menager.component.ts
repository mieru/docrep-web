import { Component, OnInit } from '@angular/core';
import { Account } from '../../user-documents/model/account';
import { AccountService } from './account.service';
import { UserService } from '../../user-documents/user.service';

@Component({
  selector: 'app-user-menager',
  templateUrl: './user-menager.component.html',
  styleUrls: ['./user-menager.component.css'],
  providers:[AccountService, UserService]
})
export class UserMenagerComponent implements OnInit {
  displayDialog: boolean;

  account: Account = new Account();
    selectedAccount: Account;
    newaccount: boolean;
    accounts: Account[];
    cols: any[];

  constructor(private accountService:AccountService, private userService: UserService) { }

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'username', header: 'Nazwa uzytkownika' },
      { field: 'status', header: 'Status' },
      { field: 'lastLoginDate', header: 'Ostatnie logowanie' }
  ];

  
    this.accountService.getAllUsersAccount().then(res => this.accounts = <Account[]>res);
  }

delete(){
  this.accountService.deleteAccount(this.account);
}

onRowSelect(event) {
  this.newaccount = false;
  this.account = this.cloneAccount(event.data);
  this.displayDialog = true;
}

showDialogToAdd() {
  this.newaccount = true;
  this.account = new Account;
  this.displayDialog = true;
}

cloneAccount(c: Account): Account {
  let account = new Account;
  for (let prop in c) {
    account[prop] = c[prop];
  }
  return account;
}

save(){
  if(this.newaccount){
    this.accountService.addUser(this.account);
  }else{
    this.userService.editAccount(this.account);
  }
 
}
}