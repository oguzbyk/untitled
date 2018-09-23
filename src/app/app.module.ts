import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'app-teacher-add', component: TeacherAddComponent},
  { path: 'app-teacher-list', component: TeacherListComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    TeacherListComponent,
    TeacherAddComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
