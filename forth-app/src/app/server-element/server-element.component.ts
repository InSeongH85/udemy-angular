import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated //Emulated 기본값이다. None, ShadowDom
})
export class ServerElementComponent {
  @Input("srvElement") element: { type: string; name: string; content: string };
}
