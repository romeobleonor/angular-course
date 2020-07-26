import { Directive, HostBinding, HostListener, ElementRef, Renderer2, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('highlighted') isHighlighted = false;

  @Output()
  toggleHighlight = new EventEmitter<boolean>();

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log('directive has been added');
  }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }

  @HostBinding('attr.disabled')
  get disabled() {
    return true;
  }

  @HostListener('mouseover', ['$event']) onMouseOver($event) {
    console.log($event);
    let searchedEl = this.el.nativeElement.querySelector('course-image');
    console.log(searchedEl);
    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  // directive provided an api toggle
  toggle() {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);

  }
}
