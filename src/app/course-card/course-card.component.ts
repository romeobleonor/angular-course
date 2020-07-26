import { Course } from './../model/course';
import { Component, OnInit, Input, Output, EventEmitter, ContentChild, ElementRef, AfterContentChecked, AfterContentInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit, AfterContentInit {

  @Output() courseSelected = new EventEmitter<Course>();
  @Input() course: Course;
  @Input() cardIndex: Number;
  @Input() noImgTemplate: TemplateRef<any>;

  @ContentChild('courseImg') courseImg: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onCourseViewed() {
    //console.log("yes")
    //this.courseSelected.emit(this.course);
  }

  ngAfterContentInit() {
    console.log(this.courseImg);
  }

  isImageAvailable() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    switch (this.course.category) {
      case 'BEGINNER':
        return { 'beginner': true };
        break;
      case 'ADVANCED':
        return { 'advanced': true };
        break;
      default:
        break;
    }
  }

  cardStyle() {
    return {
      'text-decoration': 'underline',
      'color': '#333'
    };
  }

  test() {
    alert('accessed through viewChild referenced');
  }

}
