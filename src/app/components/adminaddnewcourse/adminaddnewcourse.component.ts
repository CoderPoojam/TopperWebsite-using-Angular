import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { FirebaseusedService } from 'src/app/service/firebaseused.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminaddnewcourse',
  templateUrl: './adminaddnewcourse.component.html',
  styleUrls: ['./adminaddnewcourse.component.scss']
})
export class AdminaddnewcourseComponent implements OnInit {
  topcdata: any[] = [];
  
  
  constructor(public CategoryS:CategoryService, private fused:FirebaseusedService,private router: Router) { 
    // this.topcdata=CategoryS.gettopc();
    this.topcdata = fused.gettopc();
  }

  ngOnInit(): void {
    this.onFetchCourses();
  }

  sideBaropen=true;

  sidebartoggler(){
    this.sideBaropen=!this.sideBaropen;
  }

  onAddCourse(id: any,title: any,price: any,ratings: any,studentsno: any,author: any,desc: any,imageUrl: any){
    this.topcdata.push({
      id:id.value,
      title:title.value,
      ratings:ratings.value,
      studentsno:studentsno.value,
      author:author.value,
      desc:desc.value,
      imageUrl:imageUrl.value
    })
    alert("New Course is Added Successfully. Please Save this Course.");
  }

  onSaveCourse(){
this.fused.savecourse(this.topcdata).subscribe();
alert("New Course is Saved Successfully.");

  }

  onFetchCourses(){
    // this.router.navigate(['/adminseeallcourses']);

    this.fused.fetchCourses().subscribe(
      (response) => {
        // console.log(response);
        // this.topcdata = response; error we get data in object so we cant placed into array we have to 
        // convert into string so below method used.
        const data = JSON.stringify(response)
        // console.log(data);
        this.topcdata = JSON.parse(data);
     
      }
    );
    
  }
  onDeleteCourse(id: any){
    if(confirm('Do you want to delete this course?')){
      this.topcdata.splice(id,1);
    }
  }

}
