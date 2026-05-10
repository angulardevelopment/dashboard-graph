import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDivider, MatList, MatNavList } from '@angular/material/list';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
imports: [MatList, MatIcon, MatDivider, MatNavList]

})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
