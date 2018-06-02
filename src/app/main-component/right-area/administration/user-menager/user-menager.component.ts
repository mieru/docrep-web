import { Component, OnInit } from '@angular/core';
import { Account } from '../../user-documents/model/account';
import { AccountService } from './account.service';

@Component({
  selector: 'app-user-menager',
  templateUrl: './user-menager.component.html',
  styleUrls: ['./user-menager.component.css'],
  providers:[AccountService]
})
export class UserMenagerComponent implements OnInit {
  displayDialog: boolean;

  account: Account = new Account();
    selectedAccount: Account;
    newaccount: boolean;
    accounts: Account[];
    cols: any[];

  constructor(private accountService:AccountService) { }

  ngOnInit() {
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
  ];

    this.accountService.getAllUsersAccount().then(res => this.accounts = <Account[]>res);
  }

}