import { Person } from "./person";

export class Account{
    id:number;
    username:string;
    password:string;
    lastLoginDate:Date;
    status:string;
    person:Person;
}