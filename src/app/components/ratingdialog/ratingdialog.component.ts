import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratingdialog',
  templateUrl: './ratingdialog.component.html',
  styleUrls: ['./ratingdialog.component.scss']
})
export class RatingdialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  savePost(){
    alert('Your feedback is Saved.')
  }

}
