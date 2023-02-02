import { Component, Input, SimpleChanges, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated //Emulated 기본값이다. None, ShadowDom
})
export class ServerElementComponent {
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input() name: string;
  constructor() {
    console.log('1. constructor called.');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges called.');
    console.log(changes);
  }
  ngOnInit() {
    console.log('3. ngOninit called.');
  }
  ngDoCheck() {
    console.log('ngDoCheck!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit!');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy!');
  }
}
