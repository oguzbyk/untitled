import { Component, OnInit } from '@angular/core';
import {Teacher} from '../model/teacher.model';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {SelectItem} from '../model/selectitem';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-teacher-scheduler-details-add',
  templateUrl: './teacher-scheduler-details-add.component.html',
  styleUrls: ['./teacher-scheduler-details-add.component.css']
})
export class TeacherSchedulerDetailsAddComponent implements OnInit {
  addTeacherSchedulerDetailsForm: FormGroup;
  teachers: Teacher[];
  teacherSelectionList$: SelectItem[] = [];
  selectedTeacher: string;
  private URL = 'http://localhost:3000/teachers';
  submitted = false;

  constructor(private router: Router, private http: HttpClient) {

  }

  ngOnInit() {
    this.getTeacherList();
  }

  getTeacherList() {
    this.http.get(this.URL).subscribe((response: Teacher[]) => {
      this.teachers = response;
      // console.log(response);
      for (let teacher of this.teachers) {
        console.log(teacher);
        this.teacherSelectionList$.push({label: teacher.id + '/'+ teacher.name + '/' + teacher.sname , value: undefined});
      }
      return response;
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.addTeacherSchedulerDetailsForm.invalid) {
      return;
    }
  }

}
