import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    title = 'surfer-module-header';
    @Input() headerText: string = "BONUS IN 12";
    @Input() headerNumber: string = "100";
    @Input() headerSubText: string = "Get your bonus in 12 hours";
}