import { AfterViewInit, Component, OnInit, ContentChild, AfterContentInit, ViewChildren, ElementRef, ViewChild } from '@angular/core';
import { COURSES } from './../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit {

  courses = COURSES;

  onCourseSelected($event: Course) {
    console.log('test');
  }

  @ViewChild('courseDesc') courseDesc: ElementRef;

  ngOnInit() {
    //console.log(this.card1);
  }

  ngAfterViewInit() {
    //console.log(this.card2);
    //console.log('ngAFterViewInit');
    console.log(this.courseDesc);
  }

  ngAfterContentInit() {
    //console.log('ngContentInit');
  }

  constructor() {
    //console.log(this.card2);
  }
}
