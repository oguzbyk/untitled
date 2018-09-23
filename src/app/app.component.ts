import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router: Router) {}

  title = 'untitled';
  btnClickAddTeacher(){
      this.router.navigate(
        ['app-teacher-add'
        ]);
  }
  btnClickListTeacher() {
    this.router.navigate(['/app-teacher-list']);

  }

  ngOnInit(): void {
  }
}


