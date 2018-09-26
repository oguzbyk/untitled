import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Teacher} from '../model/teacher.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {
  addTeacherForm: FormGroup;
  loading = false;
  submitted = false;
  private URL = 'http://localhost:3000/teachers';

  constructor(private formBuilder: FormBuilder, private router: Router,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.addTeacherForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      sname: ['', Validators.required],
      branch: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.addTeacherForm.invalid) {
      return;
    }
    this.loading = true;
    this.http.post(this.URL, this.addTeacherForm.value)
      .subscribe((response: Teacher) => {
        console.log('successful');
        console.log(response.name);
      });
    this.loading = false;
    this.router.navigate(['app-teacher-list']);

  }

}
