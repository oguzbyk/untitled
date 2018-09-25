import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {
  addTeacherForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.addTeacherForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      branch: ['', Validators.required],
    });
  }

}
