import { COURSES } from './../db-data';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, DoCheck } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig, APP_CONFIG1 } from './config';
import { Course } from './model/course';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: APP_CONFIG1,
      useValue: APP_CONFIG1
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, DoCheck {
  courses: Course[];// = COURSES;
  courses$: Observable<Course[]>;

  constructor(private http: HttpClient,
    private coursesService: CoursesService,
    private cdr: ChangeDetectorRef,
    @Inject(APP_CONFIG1) private appConfig: AppConfig) {
      console.log(this.appConfig);
  }
  ngDoCheck(): void {
    //throw new Error("Method not implemented.");
    this.cdr.markForCheck();
  }

  ngOnInit() {
    //this.courses$ = this.coursesService.loadCourses();
    this.coursesService.loadCourses().subscribe(x =>  {
      this.courses = x;
      //this.cdr.markForCheck(); // ttell angular that this component should be checked
    });
  }

  onCourseChanged(course: Course) {
    this.coursesService.saveCourse(course).subscribe(() => console.log('subscribe test'));
  }

  onEditCourse() {
    //this.cdr.markForCheck();
    //this.cdr.detectChanges();
    this.courses[0].description = 'new Value';
  }

}
