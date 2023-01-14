import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { FirebaseusedService } from 'src/app/service/firebaseused.service';

@Component({
  selector: 'app-adminseeallcourses',
  templateUrl: './adminseeallcourses.component.html',
  styleUrls: ['./adminseeallcourses.component.scss']
})
export class AdminseeallcoursesComponent implements OnInit {
  topcdata: any[] = [];
  fetching = false;
  constructor(public CategoryS:CategoryService, private fused:FirebaseusedService,private router: Router) { 
    this.topcdata=CategoryS.gettopc();
  }

  ngOnInit(): void {
    this.onFetchCourses();
  }

  onFetchCourses(){
    // this.router.navigate(['/adminseeallcourses']);
    this.fetching = true;
    this.fused.fetchCourses().subscribe(
      (response) => {
        // console.log(response);
        // this.topcdata = response; error we get data in object so we cant placed into array we have to 
        // convert into string so below method used.
        const data = JSON.stringify(response)
        // console.log(data);
        this.topcdata = JSON.parse(data);
        this.fetching = false;
      }
    );
    
  }

  onSaveCourse(){
    this.fused.savecourse(this.topcdata).subscribe();
      }

  sideBaropen=true;

  sidebartoggler(){
    this.sideBaropen=!this.sideBaropen;
  }
  onDeleteCourse(id: any){
    if(confirm('Do you want to delete this course?')){
      this.topcdata.splice(id,1);
      // this.fused.deleteCourse().subscribe(); // if we delete now all data deleted
     this.onSaveCourse();
    }
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
