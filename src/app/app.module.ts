import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';
import { RouterModule, Routes } from '@angular/router';
import { EntranceComponent } from './entrance/entrance.component';
import {HttpClientModule} from '@angular/common/http';
import {RegisterComponent} from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: EntranceComponent},
  { path: 'app-register', component: RegisterComponent},
  { path: 'app-teacher-add', component: TeacherAddComponent},
  { path: 'app-teacher-list', component: TeacherListComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    TeacherListComponent,
    TeacherAddComponent,
    EntranceComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
