import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TeacherListComponent} from './teacher-list/teacher-list.component';
import {TeacherAddComponent} from './teacher-add/teacher-add.component';
import {RouterModule, Routes} from '@angular/router';
import {EntranceComponent} from './entrance/entrance.component';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './user-add/user.component';
import {UserListComponent} from './user-list/user-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', component: EntranceComponent},
  { path: 'app-user-add', component: UserComponent},
  { path: 'app-teacher-add', component: TeacherAddComponent},
  { path: 'app-teacher-list', component: TeacherListComponent},
  { path: 'app-user-list', component: UserListComponent},
  { path: 'app-entrance', component: EntranceComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    TeacherListComponent,
    TeacherAddComponent,
    EntranceComponent,
    UserComponent,
    UserListComponent,
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
