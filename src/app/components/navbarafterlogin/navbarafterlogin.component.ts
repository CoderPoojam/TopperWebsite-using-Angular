import { Component, OnInit, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-navbarafterlogin',
  templateUrl: './navbarafterlogin.component.html',
  styleUrls: ['./navbarafterlogin.component.scss']
})
export class NavbarafterloginComponent implements OnInit {
  @Output() toggleSidebarbutton:EventEmitter<any>=new EventEmitter();
  constructor(public auth:AuthenticationService) { }

  ngOnInit(): void {
  }
  logout(){
    this.auth.logout();
  }

  togglebutton(){
     this.toggleSidebarbutton.emit();
  }


}
