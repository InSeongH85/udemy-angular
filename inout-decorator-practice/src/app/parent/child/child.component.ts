import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-child-component',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {
  @Input() fromParentData = "";
  @Input() fruitIndex = 0;
  @Output() removeFruitEvent: EventEmitter<number> = new EventEmitter();

  removeFruit(index: number) {
    this.removeFruitEvent.emit(index);
  }

}
