import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
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
  showPassword: boolean = false;

  constructor(private router: Router, private http: HttpClient) {
    this.getUserList();
  }

  ngOnInit() {
    this.getUserList();
  }

  btnClickAddTeacher() {
    this.router.navigate(
      ['app-teacher-add']);
  }

  toggleShowPassword = function () {
    this.showPassword = !this.showPassword;
  };

  btnClickUser() {
    console.log('oguz');
    this.router.navigate(['app-user-add']);

  }

  getUserList() {
    this.http.get(this.URL).subscribe((response: User[]) => {
      this.users = response;
      return response;
    });
  }

}
