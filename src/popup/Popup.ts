import {Component} from "@angular/core";


@Component({
    selector: 'my-popup',
    imports: [ ],
    template: `some text`,
    styles: [],
    styleUrl: './app.<%= style %>'
})
export class Popup {
    // protected readonly title = signal('<%= name %>');
}
