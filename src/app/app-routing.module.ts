import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminaddnewcourseComponent } from './components/adminaddnewcourse/adminaddnewcourse.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AdminseeallcoursesComponent } from './components/adminseeallcourses/adminseeallcourses.component';
import { AdminsidebarComponent } from './components/adminsidebar/adminsidebar.component';
import { AdminupdatecourseComponent } from './components/adminupdatecourse/adminupdatecourse.component';
import { CoursedetailsComponent } from './components/coursedetails/coursedetails.component';
import { CoursestabComponent } from './components/coursestab/coursestab.component';
import { FirstmainpageComponent } from './components/firstmainpage/firstmainpage.component';
import { HomeComponent } from './components/home/home.component';
import { JeecourseComponent } from './components/jeecourse/jeecourse.component';
import { MusiccourseComponent } from './components/musiccourse/musiccourse.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarafterloginComponent } from './components/navbarafterlogin/navbarafterlogin.component';
import { NavbarlogoutComponent } from './components/navbarlogout/navbarlogout.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SigninComponent } from './components/signin/signin.component';
import { TeammatesComponent } from './components/teammates/teammates.component';
import { TopcoursesComponent } from './components/topcourses/topcourses.component';

const routes: Routes = [
  {path:'', redirectTo:'firstmainpage', pathMatch:'full'},
  {path:'signin',component:SigninComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'home',component:HomeComponent},
  {path:'firstmainpage',component:FirstmainpageComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'navbarafterlogin',component:NavbarafterloginComponent},
  {path:'coursestab',component:CoursestabComponent},
  {path:'musiccourse',component:MusiccourseComponent},
  {path:'topcourses',component:TopcoursesComponent},
  {path:'coursedetails/:id',component:CoursedetailsComponent},
  {path:'teammates',component:TeammatesComponent},
  {path:'reviews',component:ReviewsComponent},
  {path:'home/jeecourse',component:JeecourseComponent},
  {path:'admin-home',component:AdminHomeComponent},
  {path:'navbarlogout',component:NavbarlogoutComponent},
  {path:'adminsidebar',component:AdminsidebarComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  {path:'adminaddnewcourse',component:AdminaddnewcourseComponent},
  {path:'adminseeallcourses',component:AdminseeallcoursesComponent},
  {path:'adminupdatecourse',component:AdminupdatecourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
