import { Component } from "@angular/core";

@Component({
    selector: "warningAlert",
    template: `
        <div class="warning">{{title}}</div>
    `,
    styles:  [`
        .warning {
            background-color: pink;
            border: 1px solid black;
        }
    `]
})

export class warningAlert {
    title = 'This is warningAlery.'
}