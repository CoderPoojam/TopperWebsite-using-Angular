import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogchatComponent } from '../dialogchat/dialogchat.component';

@Component({
  selector: 'app-jeecourse',
  templateUrl: './jeecourse.component.html',
  styleUrls: ['./jeecourse.component.scss']
})
export class JeecourseComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  sideBaropen=false;

  sidebartoggler(){
    this.sideBaropen=!this.sideBaropen;
  }

  openDialog() {
    this.dialog.open(DialogchatComponent);
  }

}
