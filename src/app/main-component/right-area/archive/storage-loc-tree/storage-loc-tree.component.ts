import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { StorageLocationService } from '../../all-documents/storage-location.service';

@Component({
  selector: 'app-storage-loc-tree',
  templateUrl: './storage-loc-tree.component.html',
  styleUrls: ['./storage-loc-tree.component.css'],
  providers:[StorageLocationService]
})
export class StorageLocTreeComponent implements OnInit {

  @Output() selectedEvent = new EventEmitter<TreeNode>()

  public selected:TreeNode;
  public treeNodes:TreeNode[] = []

  constructor(private storageLocation:StorageLocationService) { }

  ngOnInit() {
    this.storageLocation.getStorageLocationsAsTree().then(res => this.treeNodes = res);
  }

  ngOnChanges(){
    this.selectedEvent.emit(this.selected);
  }

}
