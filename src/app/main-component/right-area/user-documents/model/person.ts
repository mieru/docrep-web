import { Contact } from "./contact";
import { Address } from "./address";

export class Person{

    id:number;
    firstname:string;
    lastname:string;
    pesel:string;
    idNumber:string;
    jobPosition:string;
    address:Address;
    contacts:Array<Contact>

   
}