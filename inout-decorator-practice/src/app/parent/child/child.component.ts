import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: 'app-child-component',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})

export class ChildComponent {
    @Input() fromParentData = ""
    @Output() addFruiteEmit: EventEmitter<string> = new EventEmitter<string>();
    newFruit = "";

    onAddFruit(value: string) {
        this.addFruiteEmit.emit(value);
    }
}