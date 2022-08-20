import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './frontend/admin/body/body.component';
import { SidebarComponent } from './frontend/admin/sidebar/sidebar.component';
import { NavbarComponent } from './frontend/admin/navbar/navbar.component';
import { HomeComponent } from './frontend/home/home.component';
import { AddClasseComponent } from './frontend/classes/add-classe/add-classe.component';
import { ListClasseComponent } from './frontend/classes/list-classe/list-classe.component';
 import { AddStudentComponent } from './frontend/students/add-student/add-student.component';
import { ListStudentComponent } from './frontend/students/list-student/list-student.component';
import { ClassRoutingModule } from './frontend/classes/class-routing.module';
import { StudentRoutingModule } from './frontend/students/student-routing.module';
import { FormsModule } from '@angular/forms';
import { UpdateClasseComponent } from './frontend/classes/update-classe/update-classe.component';
import { UpdateStudentComponent } from './frontend/students/update-student/update-student.component';





@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    AddClasseComponent,
    ListClasseComponent,
    UpdateClasseComponent,
    AddStudentComponent,
    ListStudentComponent,
    UpdateStudentComponent






  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ClassRoutingModule,
    StudentRoutingModule,
    AppRoutingModule,

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
