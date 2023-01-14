import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstmainpage',
  templateUrl: './firstmainpage.component.html',
  styleUrls: ['./firstmainpage.component.scss']
})
export class FirstmainpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //User setting/preference
  isDarkTheme= false;

  toggleTheme(){
    this.isDarkTheme = !this.isDarkTheme;
  }
}
