export class StorageLocation{
    id:number;
    name:string;
    description:string;
    longitude:number;
    latitude:number;
    superiorStorageLocation:StorageLocation;
    superiorStorageLocId:number;
    type:string;
    accountId:number;
}