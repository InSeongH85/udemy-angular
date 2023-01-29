import { Component } from '@angular/core'

@Component({
    selector: 'app-parent-component',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})
export class ParentComponent {
    fruites = ['Apple', 'Orange', 'Banana']

    addFruite(newFruit: string) {
        this.fruites.push(newFruit)
    }
    
}