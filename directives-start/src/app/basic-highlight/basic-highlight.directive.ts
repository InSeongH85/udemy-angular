import { Directive, ElementRef } from "@angular/core";

@Directive({
  // 속성!! directive 임을 알려주는 []
  // 실제 사용할시에는 <p appBasicHighlight> </p> 와 같이 사용한다.
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective {
  constructor(private element: ElementRef) { }
  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'green'
  }
}
