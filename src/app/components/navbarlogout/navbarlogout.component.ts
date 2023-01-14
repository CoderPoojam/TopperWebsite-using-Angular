import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-navbarlogout',
  templateUrl: './navbarlogout.component.html',
  styleUrls: ['./navbarlogout.component.scss']
})
export class NavbarlogoutComponent implements OnInit {
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
