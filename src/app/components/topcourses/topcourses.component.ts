import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-topcourses',
  templateUrl: './topcourses.component.html',
  styleUrls: ['./topcourses.component.scss']
})
export class TopcoursesComponent implements OnInit {

  constructor(public CategoryS:CategoryService) {
    this.topcdata=CategoryS.gettopc();   /*.slice(0,2) to fetch only 2 id from array*/
   }

   

  ngOnInit(): void {
    
  }
  sideBaropen=true;

  sidebartoggler(){
    this.sideBaropen=!this.sideBaropen;
  }

  topcdata: any[] = [];
  clear:string=' ';

  

  serachData(search:string):void{
    console.log(search); //print that search things
    this.topcdata=this.CategoryS.gettopc().filter(x => x.title.toLowerCase().includes(search.toLowerCase()));
  }  

  clearSearch(){
    this.clear = '';
    this.serachData(this.clear);
  }


}
