import { Component, ContentChild, ElementRef, Input, SimpleChanges, ViewChild, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated //Emulated 기본값이다. None, ShadowDom
})
export class ServerElementComponent {
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild("heading") header: ElementRef;
  @ContentChild("contentParagraph") phragraph: ElementRef;

  constructor() {
    console.log('1. constructor called.');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges called.');
    console.log(changes);
  }

  ngOnInit() {
    console.log('3. ngOninit called.');
    // 여기서는 오류가 발생됨. 아직 View 가 init 되지 않았기 떄문에..
    // console.log("Text Content of paragraph value : " + this.header.nativeElement.textContent)
    // console.log("Text Content of paragraph value : " + this.phragraph.nativeElement.textContent)
  }
  ngDoCheck() {
    console.log('ngDoCheck!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit!');
    console.log("Text Content of paragraph value : " + this.phragraph.nativeElement.textContent)
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit!');
    console.log("This is header value : " + this.header.nativeElement.textContent)
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy!');
  }
}
