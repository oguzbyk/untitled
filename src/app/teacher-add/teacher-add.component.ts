import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Branch, ClassOptions, Teacher} from '../model/teacher.model';
import {Router} from '@angular/router';
import {SelectItem} from '../model/selectitem';

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
  mainClasses$: SelectItem[] = [];
  selectedMainClass: string;
  selectedBranch: string;
  branches$: SelectItem[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.branches$.push({label: ' ', value: undefined});
    for (let branchKey in Branch) {
      this.branches$.push({label: Branch[branchKey].valueOf(), value: undefined});
    }
    for (let classKey in ClassOptions) {
      this.mainClasses$.push({label: ClassOptions[classKey].valueOf(), value: undefined});
    }

    this.addTeacherForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      sname: ['', Validators.required],
      branch: ['', Validators.required],
      mainClass: [''],
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

  btnClickMenu() {
    this.router.navigate(
      ['app-entrance']);
  }
}
