import { CONFIG_TOKEN, APP_CONFIG1, AppConfig } from './config';
import { CoursesService } from './services/courses.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, InjectionToken, Inject } from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';

// this provided will then be passed to the dependency injection SYSTEM
// function coursesServiceProvider(http: HttpClient): CoursesService {
//   return new CoursesService(http);
// }

// export const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');

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
  // providers: [
  //   // {
  //   //   provide: CoursesService,
  //   //   useClass: CoursesService
  //   // }
  //   CoursesService
  // ]
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
    //const params = new HttpParams().set('page', '1').set('pageSize', '10');
    //const path = '/api/courses';
    //this.http.get<Course[]>(path, {params}).subscribe((courses) => this.courses = courses);
    //this.courses$ = this.http.get<Course[]>(path, {params}); // implicitly subscribe

    this.courses$ = this.coursesService.loadCourses();
  }

  onCourseChanged(course: Course) {
    this.coursesService.saveCourse(course).subscribe(() => console.log("subscribe test"));
  }



}
