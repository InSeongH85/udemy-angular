import { Component } from "@angular/core";

@Component({
    selector: "warning-alert",
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

export class WarningAlertComponent {
    title = 'This is warning-alert.'
}