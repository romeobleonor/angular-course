import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
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
  ]
})
export class AppComponent implements OnInit {


  courses: Course[] = [];
  courses$: Observable<Course[]>;

  constructor(private http: HttpClient,
    private coursesService: CoursesService,
    @Inject(APP_CONFIG1) private appConfig: AppConfig) {
      console.log(this.appConfig);
  }

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
  }

  onCourseChanged(course: Course) {
    this.coursesService.saveCourse(course).subscribe(() => console.log('subscribe test'));
  }



}
