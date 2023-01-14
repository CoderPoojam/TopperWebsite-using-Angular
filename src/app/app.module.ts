import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Angular Material//
import {MatDialogModule} from '@angular/material/dialog';
import{MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatMenuModule} from '@angular/material/menu';
import{MatIconModule} from '@angular/material/icon';
import{MatDividerModule} from '@angular/material/divider';
import{MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import{MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// import { MatCarouselModule } from '@ngmodule/material-carousel';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './components/signin/signin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FirstmainpageComponent } from './components/firstmainpage/firstmainpage.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarafterloginComponent } from './components/navbarafterlogin/navbarafterlogin.component';

import { CoursestabComponent } from './components/coursestab/coursestab.component';
import { MusiccourseComponent } from './components/musiccourse/musiccourse.component';
import { TopcoursesComponent } from './components/topcourses/topcourses.component';
import { CoursedetailsComponent } from './components/coursedetails/coursedetails.component';
import { TeammatesComponent } from './components/teammates/teammates.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { JeecourseComponent } from './components/jeecourse/jeecourse.component';
import { DialogchatComponent } from './components/dialogchat/dialogchat.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { NavbarlogoutComponent } from './components/navbarlogout/navbarlogout.component';
import { AdminsidebarComponent } from './components/adminsidebar/adminsidebar.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AdminaddnewcourseComponent } from './components/adminaddnewcourse/adminaddnewcourse.component';
import { AdminseeallcoursesComponent } from './components/adminseeallcourses/adminseeallcourses.component';

//Firebase
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import{environment} from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { AdminupdatecourseComponent } from './components/adminupdatecourse/adminupdatecourse.component';
import { RatingdialogComponent } from './components/ratingdialog/ratingdialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    NavbarComponent,
    FirstmainpageComponent,
    HomeComponent,
    SidebarComponent,
    NavbarafterloginComponent,
    CoursestabComponent,
         MusiccourseComponent,
         TopcoursesComponent,
         CoursedetailsComponent,
         TeammatesComponent,
         ReviewsComponent,
         JeecourseComponent,
         DialogchatComponent,
         AdminHomeComponent,
         NavbarlogoutComponent,
         AdminsidebarComponent,
         AdmindashboardComponent,
         AdminaddnewcourseComponent,
         AdminseeallcoursesComponent,
         AdminupdatecourseComponent,
         RatingdialogComponent
  ],
  imports: [
    BrowserModule,
    //firebase
    // AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatSlideToggleModule,
    // MatCarouselModule,
    FormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
