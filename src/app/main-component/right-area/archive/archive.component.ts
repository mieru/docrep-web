import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  selected:TreeNode;
  constructor() { }

  ngOnInit() {
  }

}
