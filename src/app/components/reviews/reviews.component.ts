import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RatingdialogComponent } from '../ratingdialog/ratingdialog.component';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  
  sideBaropen=true;

  sidebartoggler(){
    this.sideBaropen=!this.sideBaropen;
  }
  openDialog() {
    this.dialog.open(RatingdialogComponent);
  }

}
