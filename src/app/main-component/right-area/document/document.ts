import { JavaLocalDate } from "../../common/java-local-date";

export class Document{
   id:number;
   number:string;
   title:string;
   barcode:string;
   registerDate:JavaLocalDate;
   storageLocation:any;
   lastModifier:any;
   description:string;
   version:number;
   editDate:JavaLocalDate;
}