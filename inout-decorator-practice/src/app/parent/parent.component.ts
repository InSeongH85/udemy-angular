import { Component } from '@angular/core'

@Component({
    selector: 'app-parent-component',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})
export class ParentComponent {
    fruites = ['Apple', 'Orange', 'Banana']
    onAddFruit(fruiteName: string) {
        this.fruites.push(fruiteName);
    }
    
    onRemoveFruit(fruitIndex: number) {
        this.fruites.splice(fruitIndex, 1);
    }
}