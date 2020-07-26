import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'course-image',
  templateUrl: './course-image.component.html',
  styleUrls: ['./course-image.component.scss']
})
export class CourseImageComponent implements OnInit {

  @Input() imgUrl = 'xxx';

  constructor() { }

  ngOnInit(): void {
  }

}
