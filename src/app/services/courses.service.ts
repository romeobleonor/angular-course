import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';

// using the provided in makes your injectable service treeshakable
// removing allows you to create your own provider
@Injectable(
  {
    providedIn: 'root'
  }
)
export class CoursesService {

  constructor(private http: HttpClient) { }

  loadCourses(): Observable<Course[]> {
    const params = new HttpParams().set('page', '1').set('pageSize', '10');
    const path = '/api/courses';
    return this.http.get<Course[]>(path, { params }); // implicitly subscribe
  }

  saveCourse(course: Course) {
    const headers = new HttpHeaders().set("X-Auth", "userId");
    const path = `/api/courses/${course.id}`;
    return this.http.put<void>(path, course, { headers });
  }
}
