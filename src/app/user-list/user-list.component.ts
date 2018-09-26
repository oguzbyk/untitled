import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Teacher} from '../model/teacher.model';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  private URL = 'http://localhost:3000/users';

  constructor(private router:  Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(this.URL).subscribe((response: User[]) => {
      this.users = response;
      return response;
    });
  }

  btnClickAddTeacher() {
    this.router.navigate(
      ['app-teacher-add']);
  }

  btnClickUser() {
    console.log('oguz');
    this.router.navigate(['app-user-add']);

  }

}
