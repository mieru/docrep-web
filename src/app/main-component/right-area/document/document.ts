import { JavaLocalDate } from "../../common/java-local-date";
import { StorageLocation } from "../all-documents/storage-location";


export class Document{
   id:number;
   number:string;
   title:string;
   barcode:string;
   registerDate:Date;
   storageLocation:StorageLocation;
   lastModifier:any;
   creator:any
   description:string;
   version:number;
   editDate:Date;
}