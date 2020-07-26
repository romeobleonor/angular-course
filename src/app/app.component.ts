import { HighlightedDirective } from './directives/highlighted.directive';
import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

    courses = COURSES;


    @ViewChildren(CourseCardComponent, {read: ElementRef})
    cards: QueryList<ElementRef>;

    @ViewChildren(HighlightedDirective, {read: HighlightedDirective}) highlighted: HighlightedDirective;

    constructor() {

    }

    ngAfterViewInit() {
      console.log(this.highlighted);
    }

    onCourseSelected(course:Course) {

    }

    onToggle($event) {
      console.log($event);
    }

}
