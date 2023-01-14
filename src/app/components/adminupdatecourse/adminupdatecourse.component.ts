import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { FirebaseusedService } from 'src/app/service/firebaseused.service';

@Component({
  selector: 'app-adminupdatecourse',
  templateUrl: './adminupdatecourse.component.html',
  styleUrls: ['./adminupdatecourse.component.scss']
})
export class AdminupdatecourseComponent implements OnInit {
  topcdata: any[] = [];
 
  constructor(public CategoryS:CategoryService, private fused:FirebaseusedService,private router: Router) { 
    this.topcdata=CategoryS.gettopc();
  }

  ngOnInit(): void {
    
  }

  sideBaropen=false;

  sidebartoggler(){
    this.sideBaropen=!this.sideBaropen;
  }

  @ViewChild('id') id!: ElementRef;
  @ViewChild('title') title!: ElementRef;
  @ViewChild('price') price!: ElementRef;
  @ViewChild('ratings') ratings!: ElementRef;
  @ViewChild('studentsno') studentsno!: ElementRef;
  @ViewChild('author') author!: ElementRef;
  @ViewChild('desc') desc!: ElementRef;
  @ViewChild('imageUrl') imageUrl!: ElementRef;

  onUpdateCourse(index : number){
    console.log(this.topcdata[index]);
    // this.id?.nativeElement.value = this.topcdata[index].id;
    this.id.nativeElement.value = this.topcdata[index].id;
    this.title.nativeElement = this.topcdata[index].title;
    this.price.nativeElement = this.topcdata[index].price;
    this.ratings.nativeElement = this.topcdata[index].ratings;
    this.studentsno.nativeElement = this.topcdata[index].studentsno;
    this.author.nativeElement = this.topcdata[index].author;
    this.desc.nativeElement = this.topcdata[index].desc;
    this.imageUrl.nativeElement = this.topcdata[index].imageUrl;
  }

}
