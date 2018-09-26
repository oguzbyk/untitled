import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user.model';

@Component({
  selector: 'app-user-add',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  private URL = 'http://localhost:3000/users';
  users: User[];
  savedRegister: User;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.http.post(this.URL, this.registerForm.value)
    // .pipe(map((response: User) => this.savedRegister = response));
    // console.log(this.savedRegister.firstName);
      .subscribe((response: User) => {
        console.log('successful');
        console.log(response.firstName);
      });
    this.loading = false;
    this.router.navigate(['app-user-list']);

    // this.userService.user-add(this.registerForm.value)
    //     .pipe(first())
    //     .subscribe(
    //         data => {
    //             this.alertService.success('Registration successful', true);
    //             this.router.navigate(['/login']);
    //         },
    //         error => {
    //             this.alertService.error(error);
    //             this.loading = false;
    //         });
  }
}
