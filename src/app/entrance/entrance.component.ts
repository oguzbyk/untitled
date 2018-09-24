import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.css']
})
export class EntranceComponent implements OnInit {

  teachers: any;

  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/teachers').subscribe(response => {
      if (response) {
        this.teachers = response;
      }
    });
  }


  btnClickAddTeacher() {
    this.router.navigate(
      ['app-teacher-add'
      ]);
  }
}
