import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Teacher} from '../model/teacher.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  teachers: Teacher[];
  private URL = 'http://localhost:3000/teachers';

  constructor(private router: Router, private http: HttpClient) {
    this.getTeacherList();

  }

  ngOnInit() {
    this.getTeacherList();
  }

  btnClickAddTeacher() {
    this.router.navigate(
      ['app-teacher-add']);
  }

  btnClickRegister() {
    console.log('oguz');
    this.router.navigate(['app-user-add']);

  }

  getTeacherList() {
    this.http.get(this.URL).subscribe((response: Teacher[]) => {
      this.teachers = response;
      return response;
    });
  }

  removeSelected(id: number) {
    if (window.confirm('Bu öğretmen kaydını silmek istiyor musunuz ?')) {
      console.log(id);
      this.http.delete(this.URL + '/' + id).subscribe(result => {
        console.log(result);
        this.teachers = this.teachers.filter((elem) => {
          return elem.id !== id;
        });
      }, error => console.log('Bir hata olustu: ', error));
      this.getTeacherList();
    }
  }

}
