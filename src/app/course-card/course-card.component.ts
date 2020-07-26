import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  DoCheck
} from '@angular/core';
import { Course } from '../model/course';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit, DoCheck {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  // tslint:disable-next-line: no-output-rename
  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();

  constructor(private cdr: ChangeDetectorRef) {
    console.log("constructor")
  }

  ngOnInit() {
    console.log("oninit")
  }

  ngDoCheck(): void {
    //throw new Error("Method not implemented.");
    this.cdr.markForCheck();
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }

  onTitleChanged(val: string) {
    this.course.description = val;
    this.cdr.detectChanges();
    this.cdr.markForCheck();
  }
}
