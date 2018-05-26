export class StorageLocation{
    id:number;
    name:string;
    description:string;
    longitude:number;
    latitude:number;
    superiorStorageLocation:StorageLocation;
    type:string;
    accountId:number;
}