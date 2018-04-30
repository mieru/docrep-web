import { JavaLocalDate } from "../../common/java-local-date";

export class DocumentSearch{
    number:string;
    title:string;
    barcode:string;
    searchDateFrom:JavaLocalDate;
    searchDateTo:JavaLocalDate;
    description:string;
    ownerId:number;
    holderUserId:number;
 }

