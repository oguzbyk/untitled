import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSchedulerDetailsAddComponent } from './teacher-scheduler-details-add.component';

describe('TeacherSchedulerDetailsAddComponent', () => {
  let component: TeacherSchedulerDetailsAddComponent;
  let fixture: ComponentFixture<TeacherSchedulerDetailsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSchedulerDetailsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSchedulerDetailsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
