import {Component, Injectable, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Teacher} from '../model/teacher.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.css']
})

@Injectable()
export class EntranceComponent implements OnInit {

  teachers: Teacher[];
  teachersObs: Observable<Teacher[]>;

  private URL = 'http://localhost:3000/teachers';

  constructor(private router: Router, private http: HttpClient) {
  }

  getObsTeachers(): Observable<Teacher[]>  {
      return this.http.get<Teacher[]>(this.URL);
  }


  ngOnInit() {
    // this.http.get('http://localhost:3000/teachers').subscribe(response => {
    //   if (response) {
    //     this.teachers = <Teacher>response;
    //   }
    // });
    this.teachersObs = this.getObsTeachers();


    this.http.get(this.URL).subscribe((response: Teacher[]) => {
      this.teachers = response;
      return response;
    });
    // this.http.get(this.URL).subscribe(response => {
    //   if (response) {
    //     this.teachers = <Teacher>response;
    //   }
    // });
    console.log(this.teachers);
  }

  btnClickAddTeacher() {
    this.router.navigate(
      ['app-teacher-add']);
  }

  btnClickListTeacher() {
    this.router.navigate(['app-teacher-list']);

  }

  btnClickAddUser() {
    console.log('oguz');
    this.router.navigate(['app-user-add']);

  }

  btnClickListUser() {
    console.log('oguz');
    this.router.navigate(['app-add-list']);

  }

  changeTeacherId(index: number) {
    this.teachers[index].id = 100;
  }
}
