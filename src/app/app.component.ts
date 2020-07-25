import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';
import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { COURSES } from './../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  courses = COURSES;

  // @ViewChild('cardRef1', {read: ElementRef}) card1: ElementRef;
  // @ViewChild('cardRef2') card2: CourseCardComponent;
  // @ViewChild('container') containerDiv: ElementRef;

  @ViewChild('dateTemplate') dateTemplate: ElementRef;
  @ViewChild('courseImg') courseImg: ElementRef;
  @ViewChild(CourseCardComponent) card: CourseCardComponent;

  @ViewChildren(CourseCardComponent) cards: QueryList<CourseCardComponent>;
  @ViewChildren('cardList', {read: ElementRef}) cardList: QueryList<ElementRef>;


  startDate = new Date();

  onCourseSelected($event: Course) {
    // console.log(this.card1);
    // console.log(this.card2);
    // console.log(this.containerDiv);
    //this.card.test();
    console.log(this.dateTemplate);
    console.log(this.courseImg);
    console.log(this.card);
    console.log(this.cards);

    const filtered = this.cards.filter(x => {
      return x.course.id === 4;
    });

    console.log(filtered);

    this.cards.changes.subscribe(x => console.log(x));
    console.log(this.cardList);
  }

  ngOnInit() {
    //console.log(this.card1);
  }

  ngAfterViewInit() {
    //console.log(this.card2);
    this.cards.changes.subscribe(changes => console.log(changes))
  }

  constructor() {
    //console.log(this.card2);
  }

  AddCard() {
    this.courses.unshift(
      {
        id: 111,
        description: "XXXX",
        longDescription: "YYYY",
        category: 'INTERMEDIATE',
        lessonsCount: 10
      }
    );
  }
}
